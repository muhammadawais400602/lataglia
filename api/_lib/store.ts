import { MongoClient, type Db } from 'mongodb';

// Storage: MongoDB (MONGODB_URI) if set, else Upstash Redis REST, else memory for local dev.
const mongoUri = process.env.MONGODB_URI;
const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const useMongo = Boolean(mongoUri);
const useRedis = !useMongo && Boolean(url && token);

export const persistent = useMongo || useRedis;
// On Vercel without a database every cold start would lose data, so writes are refused there.
export const writable = persistent || !process.env.VERCEL;

// One client per warm function instance, reused across requests.
type KvDoc = { _id: string; value: unknown; expiresAt?: Date };
const cache = globalThis as unknown as { __ltMongo?: Promise<Db> };
function mongo(): Promise<Db> {
  cache.__ltMongo ??= (async () => {
    const client = await new MongoClient(mongoUri!, { serverSelectionTimeoutMS: 8000, maxPoolSize: 5 }).connect();
    const db = client.db(process.env.MONGODB_DB || 'lataglia');
    await db.collection<KvDoc>('kv').createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 });
    return db;
  })().catch((e) => {
    cache.__ltMongo = undefined;
    throw new Error(`Storage error: ${e instanceof Error ? e.message : 'could not connect to MongoDB'}`);
  });
  return cache.__ltMongo;
}
const kv = async () => (await mongo()).collection<KvDoc>('kv');
// Hashes become their own collection (e.g. "orders"), one document per field, so they read naturally in Atlas.
const hash = async (key: string) => (await mongo()).collection<Record<string, unknown> & { _id: string }>(key);
const live = (d: KvDoc | null) => (d && (!d.expiresAt || d.expiresAt > new Date()) ? d : null);
const strip = ({ _id, ...rest }: Record<string, unknown>) => (void _id, rest);

type Mem = { kv: Map<string, string>; hashes: Map<string, Map<string, string>>; expiry: Map<string, number> };
const g = globalThis as unknown as { __ltMem?: Mem };
const mem: Mem = (g.__ltMem ??= { kv: new Map(), hashes: new Map(), expiry: new Map() });

function memAlive(key: string) {
  const exp = mem.expiry.get(key);
  if (exp && exp < Date.now()) {
    mem.kv.delete(key);
    mem.expiry.delete(key);
  }
}

async function redis<T>(...args: (string | number)[]): Promise<T> {
  const res = await fetch(url!, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(args),
  });
  const data = (await res.json()) as { result?: T; error?: string };
  if (!res.ok || data.error) throw new Error(`Storage error: ${data.error ?? res.status}`);
  return data.result as T;
}

export async function getJSON<T>(key: string): Promise<T | null> {
  if (useMongo) return (live(await (await kv()).findOne({ _id: key }))?.value as T) ?? null;
  const raw = useRedis ? await redis<string | null>('GET', key) : (memAlive(key), mem.kv.get(key) ?? null);
  return raw ? (JSON.parse(raw) as T) : null;
}

export async function setJSON(key: string, value: unknown) {
  if (useMongo) return void (await (await kv()).replaceOne({ _id: key }, { value }, { upsert: true }));
  const raw = JSON.stringify(value);
  if (useRedis) await redis('SET', key, raw);
  else mem.kv.set(key, raw);
}

export async function incr(key: string, ttlSeconds?: number): Promise<number> {
  if (useMongo) {
    const col = (await mongo()).collection<{ _id: string; value: number; expiresAt?: Date }>('kv');
    // An expired counter that the TTL monitor hasn't removed yet starts over.
    await col.deleteOne({ _id: key, expiresAt: { $lte: new Date() } });
    const doc = await col.findOneAndUpdate({ _id: key }, { $inc: { value: 1 } }, { upsert: true, returnDocument: 'after' });
    const n = Number(doc?.value ?? 1);
    if (ttlSeconds && n === 1) await col.updateOne({ _id: key }, { $set: { expiresAt: new Date(Date.now() + ttlSeconds * 1000) } });
    return n;
  }
  if (useRedis) {
    const n = await redis<number>('INCR', key);
    if (ttlSeconds && n === 1) await redis('EXPIRE', key, ttlSeconds);
    return n;
  }
  memAlive(key);
  const n = Number(mem.kv.get(key) ?? 0) + 1;
  mem.kv.set(key, String(n));
  if (ttlSeconds && n === 1) mem.expiry.set(key, Date.now() + ttlSeconds * 1000);
  return n;
}

export async function del(key: string) {
  if (useMongo) return void (await (await kv()).deleteOne({ _id: key }));
  if (useRedis) await redis('DEL', key);
  else mem.kv.delete(key);
}

export async function hset(key: string, field: string, value: Record<string, unknown>) {
  if (useMongo) return void (await (await hash(key)).replaceOne({ _id: field }, value, { upsert: true }));
  const raw = JSON.stringify(value);
  if (useRedis) await redis('HSET', key, field, raw);
  else (mem.hashes.get(key) ?? mem.hashes.set(key, new Map()).get(key)!).set(field, raw);
}

export async function hget<T>(key: string, field: string): Promise<T | null> {
  if (useMongo) {
    const doc = await (await hash(key)).findOne({ _id: field });
    return doc ? (strip(doc) as T) : null;
  }
  const raw = useRedis ? await redis<string | null>('HGET', key, field) : mem.hashes.get(key)?.get(field) ?? null;
  return raw ? (JSON.parse(raw) as T) : null;
}

export async function hvals<T>(key: string): Promise<T[]> {
  if (useMongo) return (await (await hash(key)).find().toArray()).map((d) => strip(d) as T);
  const raws = useRedis ? await redis<string[]>('HVALS', key) : [...(mem.hashes.get(key)?.values() ?? [])];
  return raws.map((r) => JSON.parse(r) as T);
}
