import { useMemo, useState, type ChangeEvent } from 'react';
import type { Product } from '../shared/types';
import { Drawer, btnGhost, btnPrimary, field, label, usd } from './ui';
import { BADGE_STYLES, CATEGORIES, CERTS, REGIONS, slug } from './productOptions';
import { parseDelimited, readFileText, rowsToProducts, type ImportRow } from './importParse';

const MAX_PRODUCTS = 500;
const MAX_FILE_BYTES = 8 * 1024 * 1024;
const key = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, '');

const SAMPLE = 'name,price,stock,image_url,brand,size,place,description,bullet_point1,bullet_point2\n"Pistachio cream, 190g",16.00,24,https://example.com/cream.jpg,Bronte Dolci,190g jar,Bronte,"Stone-ground Bronte pistachios blended with cane sugar and olive oil.",35% pistachio,No palm oil\n';

export default function ImportProducts({ products, onClose, onImport, error }: {
  products: Product[]; error: string; onClose: () => void; onImport: (next: Product[]) => Promise<boolean>;
}) {
  const [fileName, setFileName] = useState('');
  const [rows, setRows] = useState<ImportRow[]>([]);
  const [columns, setColumns] = useState<Record<string, string>>({});
  const [parseError, setParseError] = useState('');
  const [picked, setPicked] = useState<Set<number>>(new Set());
  const [opts, setOpts] = useState({ category: 'pasta' as Product['category'], region: 'sicilia' as Product['region'], cert: 'estate' as Product['cert'], status: 'hidden' as Product['status'], markup: 0, duplicates: 'update' as 'update' | 'skip' });
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState('');

  const existing = useMemo(() => new Map(products.map((p) => [key(p.name), p])), [products]);

  async function onFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    setDone('');
    setParseError('');
    setRows([]);
    setFileName(file.name);
    if (/\.(xlsx?|xlsm)$/i.test(file.name)) return setParseError('This is an Excel file. In Excel choose File → Save As → “CSV UTF-8”, then upload the .csv.');
    if (file.size > MAX_FILE_BYTES) return setParseError('That file is over 8 MB. Split it into smaller files.');
    const result = rowsToProducts(parseDelimited(await readFileText(file)));
    if (result.error) return setParseError(result.error);
    if (!result.rows.length) return setParseError('No product rows found under the header.');
    setRows(result.rows);
    setColumns(result.columns as Record<string, string>);
    setPicked(new Set(result.rows.filter((r) => !r.problem).map((r) => r.line)));
  }

  const chosen = rows.filter((r) => picked.has(r.line) && !r.problem);
  const updates = chosen.filter((r) => existing.has(key(r.name)));
  const adds = chosen.filter((r, i, all) => !existing.has(key(r.name)) && all.findIndex((x) => key(x.name) === key(r.name)) === i);
  const willAdd = adds.length;
  const willUpdate = opts.duplicates === 'update' ? updates.length : 0;
  const room = MAX_PRODUCTS - products.length;
  const adjust = (price: number) => Math.round(price * (1 + opts.markup / 100) * 100) / 100;

  async function runImport() {
    const ids = new Set(products.map((p) => p.id));
    const byKey = new Map(chosen.map((r) => [key(r.name), r]));
    let next = products.map((p) => {
      const r = opts.duplicates === 'update' ? byKey.get(key(p.name)) : undefined;
      return r ? { ...p, price: adjust(r.price), stock: r.stock, img: r.img || p.img, description: r.description || p.description, features: r.features.length ? r.features : p.features } : p;
    });
    for (const r of adds) {
      const base = slug(r.name) || 'product';
      let id = base;
      for (let n = 2; ids.has(id); n++) id = `${base}-${n}`;
      ids.add(id);
      next = [...next, {
        id, name: r.name, producer: r.producer, place: r.place, unit: r.unit, price: adjust(r.price),
        category: opts.category, region: opts.region, cert: opts.cert, badge: { label: '', className: BADGE_STYLES[0][0] },
        img: r.img, gift: false, rare: false, stock: r.stock, status: opts.status,
        ...(r.description ? { description: r.description } : {}), ...(r.features.length ? { features: r.features } : {}),
      }];
    }
    setSaving(true);
    const ok = await onImport(next);
    setSaving(false);
    if (ok) {
      setDone(`Imported ${willAdd} new and updated ${willUpdate} existing ${willAdd + willUpdate === 1 ? 'product' : 'products'}.`);
      setRows([]);
      setFileName('');
    }
  }

  const toggle = (line: number) => setPicked((cur) => {
    const n = new Set(cur);
    if (n.has(line)) n.delete(line); else n.add(line);
    return n;
  });
  const valid = rows.filter((r) => !r.problem);
  const allPicked = valid.length > 0 && valid.every((r) => picked.has(r.line));
  const sampleHref = `data:text/csv;charset=utf-8,${encodeURIComponent(SAMPLE)}`;

  return (
    <Drawer open onClose={onClose} title={<h2 className="font-headline-sm text-xl text-on-surface">Import products</h2>}>
      <div className="rounded-xl bg-surface-parchment p-4 text-sm text-ink-secondary space-y-2">
        <p className="font-bold text-on-surface">From Amazon Seller Central</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Go to <b>Inventory → Inventory Reports</b> (or <b>Reports → Inventory</b>).</li>
          <li>Pick <b>All Listings Report</b> (or Active Listings) → <b>Request report</b>, then <b>Download</b> it when ready.</li>
          <li>Upload the downloaded <b>.txt</b> file below. Inventory template files (.csv/.txt) work too.</li>
        </ol>
        <p>Any other CSV works if it has columns like <b>name, price, stock, image_url, brand, size, description, bullet_point1…</b>. <a href={sampleHref} download="lataglia-products-sample.csv" className="font-bold text-primary underline">Download a sample</a>.</p>
      </div>

      <div>
        <label htmlFor="imp-file" className={`block ${label} text-ink-secondary mb-1.5`}>File</label>
        <input id="imp-file" type="file" accept=".txt,.tsv,.csv,text/csv,text/plain,text/tab-separated-values" onChange={onFile}
          className="block w-full text-sm text-ink-secondary file:mr-3 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-bold file:text-on-primary hover:file:bg-wine-hover" />
        {fileName && !parseError && rows.length > 0 && <p className="mt-2 text-xs text-ink-tertiary">{fileName}: {rows.length} rows · read {Object.entries(columns).map(([f, c]) => `${f} ← “${c}”`).join(', ')}</p>}
        {parseError && <p role="alert" className="mt-2 text-sm font-semibold text-status-red">{parseError}</p>}
        {done && <p role="status" className="mt-2 text-sm font-semibold text-tertiary">{done}</p>}
      </div>

      {rows.length > 0 && (
        <>
          <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <legend className={`${label} text-ink-secondary mb-2`}>New products get</legend>
            <div>
              <label htmlFor="imp-cat" className="block text-xs font-semibold text-ink-secondary mb-1">Category</label>
              <select id="imp-cat" value={opts.category} onChange={(e) => setOpts({ ...opts, category: e.target.value as Product['category'] })} className={field}>{CATEGORIES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select>
            </div>
            <div>
              <label htmlFor="imp-region" className="block text-xs font-semibold text-ink-secondary mb-1">Region</label>
              <select id="imp-region" value={opts.region} onChange={(e) => setOpts({ ...opts, region: e.target.value as Product['region'] })} className={field}>{REGIONS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select>
            </div>
            <div>
              <label htmlFor="imp-cert" className="block text-xs font-semibold text-ink-secondary mb-1">Certification</label>
              <select id="imp-cert" value={opts.cert} onChange={(e) => setOpts({ ...opts, cert: e.target.value as Product['cert'] })} className={field}>{CERTS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select>
            </div>
            <div>
              <label htmlFor="imp-status" className="block text-xs font-semibold text-ink-secondary mb-1">Shop visibility</label>
              <select id="imp-status" value={opts.status} onChange={(e) => setOpts({ ...opts, status: e.target.value as Product['status'] })} className={field}>
                <option value="hidden">Hidden (review first)</option>
                <option value="active">Live right away</option>
              </select>
            </div>
            <div>
              <label htmlFor="imp-markup" className="block text-xs font-semibold text-ink-secondary mb-1">Price adjustment (%)</label>
              <input id="imp-markup" type="number" min={-90} max={500} step={1} value={opts.markup} onChange={(e) => setOpts({ ...opts, markup: Math.min(500, Math.max(-90, Number(e.target.value) || 0)) })} className={field} />
            </div>
            <div>
              <label htmlFor="imp-dupes" className="block text-xs font-semibold text-ink-secondary mb-1">Same name already in shop</label>
              <select id="imp-dupes" value={opts.duplicates} onChange={(e) => setOpts({ ...opts, duplicates: e.target.value as 'update' | 'skip' })} className={field}>
                <option value="update">Update price, stock & image</option>
                <option value="skip">Leave it alone</option>
              </select>
            </div>
          </fieldset>

          <div className="overflow-x-auto -mx-6">
            <table className="w-full min-w-[520px] text-sm">
              <thead>
                <tr className={`${label} text-ink-tertiary text-left`}>
                  <th className="pl-6 pr-2 py-2"><input type="checkbox" aria-label="Select all" checked={allPicked} onChange={() => setPicked(allPicked ? new Set() : new Set(valid.map((r) => r.line)))} className="rounded text-primary focus:ring-primary" /></th>
                  <th className="px-2 py-2 font-bold">Product</th>
                  <th className="px-2 py-2 font-bold text-right">Price</th>
                  <th className="px-2 py-2 font-bold text-right">Stock</th>
                  <th className="pl-2 pr-6 py-2 font-bold">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {rows.map((r) => {
                  const dupe = existing.has(key(r.name));
                  return (
                    <tr key={r.line} className={r.problem ? 'opacity-60' : ''}>
                      <td className="pl-6 pr-2 py-2"><input type="checkbox" aria-label={`Import ${r.name}`} disabled={!!r.problem} checked={picked.has(r.line) && !r.problem} onChange={() => toggle(r.line)} className="rounded text-primary focus:ring-primary" /></td>
                      <td className="px-2 py-2">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded bg-surface-parchment overflow-hidden shrink-0">{r.img && <img src={r.img} alt="" className="size-full object-cover" loading="lazy" />}</div>
                          <div className="min-w-0">
                            <div className="font-semibold text-on-surface line-clamp-2">{r.name}</div>
                            <div className="text-xs text-ink-tertiary truncate">{[r.producer, r.sku].filter(Boolean).join(' · ')}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-2 py-2 text-right whitespace-nowrap">{r.price ? usd(adjust(r.price)) : '—'}</td>
                      <td className="px-2 py-2 text-right">{r.stock}</td>
                      <td className="pl-2 pr-6 py-2 text-xs font-bold whitespace-nowrap">
                        {r.problem ? <span className="text-status-red">{r.problem}</span> : dupe ? <span className="text-badge-ink">{opts.duplicates === 'update' ? 'Updates existing' : 'Skipped'}</span> : <span className="text-tertiary">New</span>}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {rows.some((r) => !r.img) && <p className="text-xs text-ink-tertiary">Amazon reports often leave the image empty. Those products import without a photo; add an image link in Edit afterwards.</p>}
          {willAdd > room && <p role="alert" className="text-sm font-semibold text-status-red">The shop holds up to {MAX_PRODUCTS} products. You have room for {room} more; untick {willAdd - room}.</p>}
          {error && <p role="alert" className="text-sm font-semibold text-status-red">{error}</p>}
          <div className="sticky bottom-0 -mx-6 -mb-6 flex flex-wrap gap-3 border-t border-surface-container-high bg-background/95 px-6 py-4 backdrop-blur">
            <button type="button" onClick={runImport} disabled={saving || willAdd + willUpdate === 0 || willAdd > room} className={btnPrimary}>
              {saving ? 'Importing…' : `Import ${willAdd} new${willUpdate ? `, update ${willUpdate}` : ''}`}
            </button>
            <button type="button" onClick={onClose} className={btnGhost}>Close</button>
          </div>
        </>
      )}
    </Drawer>
  );
}
