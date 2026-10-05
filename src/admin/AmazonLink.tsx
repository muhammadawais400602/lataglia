import { useState, type FormEvent } from 'react';
import { adminApi, type AmazonLookup } from './api';
import { Drawer, btnGhost, btnPrimary, field, label } from './ui';

export default function AmazonLink({ onClose, onFound }: { onClose: () => void; onFound: (found: AmazonLookup) => void }) {
  const [url, setUrl] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr('');
    try {
      onFound(await adminApi.amazon(url));
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Could not read that link');
    } finally {
      setBusy(false);
    }
  }

  return (
    <Drawer open onClose={onClose} title={<h2 className="font-headline-sm text-xl text-on-surface">Add from Amazon link</h2>}>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label htmlFor="amz-url" className={`block ${label} text-ink-secondary mb-1.5`}>Amazon product link</label>
          <input id="amz-url" autoFocus required value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://www.amazon.com/…/dp/B0…" className={field} />
          <p className="mt-2 text-xs text-ink-tertiary">Paste the link the seller sent you (amazon.com, amazon.co.uk, amzn.to…). You’ll check the details and set your price and stock before it’s added.</p>
        </div>
        {err && <p role="alert" className="text-sm font-semibold text-status-red">{err}</p>}
        <div className="flex gap-3">
          <button type="submit" disabled={busy || !url.trim()} className={btnPrimary}>{busy ? 'Reading the link…' : 'Get product'}</button>
          <button type="button" onClick={onClose} className={btnGhost}>Cancel</button>
        </div>
      </form>
    </Drawer>
  );
}
