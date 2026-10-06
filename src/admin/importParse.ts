// Turns a spreadsheet export into product rows. Understands Amazon Seller Central reports
// (All Listings / Active Listings, tab-separated), Amazon inventory templates (field names on
// the 2nd or 3rd row) and plain CSV files with headers like name, price, stock, image.

export type ImportRow = {
  line: number;
  name: string;
  price: number;
  stock: number;
  img: string;
  producer: string;
  unit: string;
  place: string;
  sku: string;
  description: string;
  features: string[];
  problem: string;
};

type Field = 'name' | 'price' | 'stock' | 'img' | 'producer' | 'unit' | 'place' | 'sku' | 'description';

const ALIASES: Record<Field, string[]> = {
  name: ['itemname', 'title', 'producttitle', 'productname', 'name'],
  price: ['price', 'yourprice', 'standardprice', 'saleprice', 'ourprice', 'listprice', 'listpricewithtax'],
  stock: ['quantity', 'qty', 'quantityavailable', 'afnfulfillablequantity', 'fulfillablequantity', 'stock', 'inventory'],
  img: ['imageurl', 'mainimageurl', 'mainimage', 'imagelink', 'image', 'img'],
  producer: ['brandname', 'brand', 'manufacturer', 'producer', 'vendor'],
  unit: ['sizename', 'size', 'unit', 'itemsize', 'variant'],
  place: ['place', 'origin', 'countryoforigin'],
  sku: ['sellersku', 'itemsku', 'sku', 'asin1', 'asin'],
  description: ['productdescription', 'itemdescription', 'description', 'longdescription', 'about'],
};

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

export function parseDelimited(text: string): string[][] {
  text = text.replace(/^﻿/, '');
  const firstLine = text.slice(0, text.search(/\r?\n|$/));
  const sep = firstLine.split('\t').length > firstLine.split(',').length ? '\t' : firstLine.split(';').length > firstLine.split(',').length ? ';' : ',';
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = '';
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') quoted = false;
      else cell += c;
    } else if (c === '"' && cell === '' && sep !== '\t') quoted = true; // Amazon's tab reports aren't quoted: 12" stays literal
    else if (c === sep) { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(cell); cell = '';
      if (row.some((v) => v.trim())) rows.push(row);
      row = [];
    } else cell += c;
  }
  row.push(cell);
  if (row.some((v) => v.trim())) rows.push(row);
  return rows;
}

export function parsePrice(raw: string): number {
  let s = raw.replace(/[^\d.,-]/g, '');
  const lastComma = s.lastIndexOf(',');
  const lastDot = s.lastIndexOf('.');
  if (lastComma > lastDot) {
    // "1.234,50" or "12,50" use a decimal comma; "1,234" is a thousands separator.
    s = s.length - lastComma === 4 && lastDot === -1 ? s.replace(/,/g, '') : s.replace(/\./g, '').replace(',', '.');
  } else s = s.replace(/,/g, '');
  const n = Number(s);
  return Number.isFinite(n) ? Math.round(n * 100) / 100 : NaN;
}

const shorten = (s: string, max: number) => {
  s = s.replace(/\s+/g, ' ').trim();
  if (s.length <= max) return s;
  const cut = s.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' ') > max * 0.6 ? cut.lastIndexOf(' ') : cut.length).replace(/[\s,;:–-]+$/, '')}…`;
};

export function rowsToProducts(table: string[][]): { rows: ImportRow[]; columns: Partial<Record<Field, string>>; error?: string } {
  // Amazon templates put field names on row 2 or 3, so pick the header row that matches best.
  let headerAt = -1;
  let best = 0;
  let map: Partial<Record<Field, number>> = {};
  for (let r = 0; r < Math.min(table.length, 6); r++) {
    const cells = table[r].map(norm);
    const m: Partial<Record<Field, number>> = {};
    for (const f of Object.keys(ALIASES) as Field[]) {
      for (const alias of ALIASES[f]) {
        const at = cells.indexOf(alias);
        if (at !== -1) { m[f] = at; break; }
      }
    }
    const score = Object.keys(m).length + (m.name !== undefined ? 2 : 0) + (m.price !== undefined ? 1 : 0);
    // On a tie the later row wins: Amazon templates repeat the headers as field names on row 3.
    if (score > 0 && score >= best) { best = score; headerAt = r; map = m; }
  }
  if (headerAt === -1 || map.name === undefined) {
    return { rows: [], columns: {}, error: 'Couldn’t find a product name column. The file needs a header row with a column such as “item-name”, “title” or “name”.' };
  }
  const header = table[headerAt];
  const columns = Object.fromEntries(Object.entries(map).map(([f, i]) => [f, header[i as number].trim()])) as Partial<Record<Field, string>>;
  // Amazon templates spread selling points over bullet_point1…5.
  const bulletCols = header.map((h, i) => (/^(bulletpoint|keyproductfeatures|feature)\d*$/.test(norm(h)) ? i : -1)).filter((i) => i >= 0);
  const get = (cells: string[], f: Field) => (map[f] === undefined ? '' : (cells[map[f]!] ?? '').trim());

  const rows: ImportRow[] = [];
  for (let r = headerAt + 1; r < table.length; r++) {
    const cells = table[r];
    const name = shorten(get(cells, 'name'), 120);
    if (!name || ALIASES.name.includes(norm(name))) continue;
    const price = parsePrice(get(cells, 'price'));
    const stockRaw = get(cells, 'stock');
    const stock = stockRaw === '' ? 0 : Math.max(0, Math.floor(Number(stockRaw.replace(/[^\d.-]/g, '')) || 0));
    let img = get(cells, 'img').split(/[\s|,]+/)[0] ?? '';
    if (img.startsWith('http://')) img = `https://${img.slice(7)}`;
    if (img && !img.startsWith('https://')) img = '';
    const problem = !(price > 0) ? 'No price' : price >= 10_000 ? 'Price over $10,000' : '';
    rows.push({
      line: r + 1, name, price: price > 0 ? price : 0, stock: Math.min(stock, 99_999), img: img.slice(0, 1000),
      producer: shorten(get(cells, 'producer'), 80), unit: shorten(get(cells, 'unit'), 80), place: shorten(get(cells, 'place'), 80),
      sku: get(cells, 'sku').slice(0, 80), problem,
      description: get(cells, 'description').replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '').trim().slice(0, 6000),
      features: bulletCols.map((i) => (cells[i] ?? '').trim().slice(0, 500)).filter(Boolean).slice(0, 12),
    });
  }
  return { rows, columns };
}

export async function readFileText(file: File): Promise<string> {
  const buf = await file.arrayBuffer();
  try {
    return new TextDecoder('utf-8', { fatal: true }).decode(buf);
  } catch {
    // Older Seller Central reports are Windows-1252.
    return new TextDecoder('windows-1252').decode(buf);
  }
}
