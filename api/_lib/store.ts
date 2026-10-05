const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

export const persistent = Boolean(url && token);
// On Vercel without a database every cold start would lose data, so writes are refused there.
export const writable = persistent || !process.env.VERCEL;

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
  const raw = persistent ? await redis<string | null>('GET', key) : (memAlive(key), mem.kv.get(key) ?? null);
  return raw ? (JSON.parse(raw) as T) : null;
}

export async function setJSON(key: string, value: unknown) {
  const raw = JSON.stringify(value);
  if (persistent) await redis('SET', key, raw);
  else mem.kv.set(key, raw);
}

export async function incr(key: string, ttlSeconds?: number): Promise<number> {
  if (persistent) {
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
  if (persistent) await redis('DEL', key);
  else mem.kv.delete(key);
}

export async function hset(key: string, field: string, value: unknown) {
  const raw = JSON.stringify(value);
  if (persistent) await redis('HSET', key, field, raw);
  else (mem.hashes.get(key) ?? mem.hashes.set(key, new Map()).get(key)!).set(field, raw);
}

export async function hget<T>(key: string, field: string): Promise<T | null> {
  const raw = persistent ? await redis<string | null>('HGET', key, field) : mem.hashes.get(key)?.get(field) ?? null;
  return raw ? (JSON.parse(raw) as T) : null;
}

export async function hvals<T>(key: string): Promise<T[]> {
  const raws = persistent ? await redis<string[]>('HVALS', key) : [...(mem.hashes.get(key)?.values() ?? [])];
  return raws.map((r) => JSON.parse(r) as T);
}
