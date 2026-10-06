import { useEffect, useState, type FormEvent } from 'react';
import type { Settings } from '../shared/types';
import type { Session } from './api';
import { Card, TagChip, btnGhost, btnPrimary, field, label } from './ui';

export default function SettingsPanel({ settings, session, onSave, readOnly }: {
  settings: Settings;
  session: Session;
  onSave: (s: Settings) => Promise<void>;
  readOnly: boolean;
}) {
  const [s, setS] = useState(settings);
  const [newTag, setNewTag] = useState('');
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [saving, setSaving] = useState(false);
  useEffect(() => setS(settings), [settings]);

  const dirty = JSON.stringify(s) !== JSON.stringify(settings);
  const pct = (r: number) => Math.round(r * 1000) / 10;

  async function submit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMsg(null);
    try {
      await onSave(s);
      setMsg({ ok: true, text: 'Settings saved. The shop picks them up within about a minute.' });
    } catch (err) {
      setMsg({ ok: false, text: err instanceof Error ? err.message : 'Could not save' });
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-6">
      <fieldset disabled={readOnly} className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card title="Store announcement">
          <p className="text-sm text-ink-secondary mb-4">A wine-coloured bar shown above the menu on every page.</p>
          <label htmlFor="s-ann" className={`block ${label} text-ink-secondary mb-1.5`}>Message</label>
          <input id="s-ann" maxLength={160} value={s.announcement} onChange={(e) => setS({ ...s, announcement: e.target.value })} className={field} />
          <label className="mt-4 flex items-center gap-2 text-sm text-on-surface">
            <input type="checkbox" checked={s.announcementOn} onChange={(e) => setS({ ...s, announcementOn: e.target.checked })} className="rounded text-primary focus:ring-primary" />
            Show the announcement
          </label>
          {s.announcementOn && s.announcement && <div className="mt-4 rounded-lg bg-primary px-4 py-2 text-center text-xs font-semibold text-on-primary">{s.announcement}</div>}
        </Card>

        <Card title="Shipping & duty">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="s-free" className={`block ${label} text-ink-secondary mb-1.5`}>Free express over ($)</label>
              <input id="s-free" type="number" min={0} step={1} value={s.freeShippingAt} onChange={(e) => setS({ ...s, freeShippingAt: Number(e.target.value) })} className={field} />
            </div>
            <div>
              <label htmlFor="s-duty" className={`block ${label} text-ink-secondary mb-1.5`}>Duty (%)</label>
              <input id="s-duty" type="number" min={0} max={50} step={0.1} value={pct(s.dutyRate)} onChange={(e) => setS({ ...s, dutyRate: Number(e.target.value) / 100 })} className={field} />
            </div>
            <div>
              <label htmlFor="s-exp" className={`block ${label} text-ink-secondary mb-1.5`}>Express freight ($)</label>
              <input id="s-exp" type="number" min={0} step={0.5} value={s.freightExpress} onChange={(e) => setS({ ...s, freightExpress: Number(e.target.value) })} className={field} />
            </div>
            <div>
              <label htmlFor="s-ovn" className={`block ${label} text-ink-secondary mb-1.5`}>Overnight freight ($)</label>
              <input id="s-ovn" type="number" min={0} step={0.5} value={s.freightOvernight} onChange={(e) => setS({ ...s, freightOvernight: Number(e.target.value) })} className={field} />
            </div>
          </div>
        </Card>

        <Card title="Promo code">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="s-code" className={`block ${label} text-ink-secondary mb-1.5`}>Code</label>
              <input id="s-code" maxLength={24} value={s.promo.code} onChange={(e) => setS({ ...s, promo: { ...s.promo, code: e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '') } })} className={`${field} uppercase`} />
            </div>
            <div>
              <label htmlFor="s-rate" className={`block ${label} text-ink-secondary mb-1.5`}>Discount (%)</label>
              <input id="s-rate" type="number" min={0} max={90} step={1} value={pct(s.promo.rate)} onChange={(e) => setS({ ...s, promo: { ...s.promo, rate: Number(e.target.value) / 100 } })} className={field} />
            </div>
          </div>
          <label className="mt-4 flex items-center gap-2 text-sm text-on-surface">
            <input type="checkbox" checked={s.promo.active} onChange={(e) => setS({ ...s, promo: { ...s.promo, active: e.target.checked } })} className="rounded text-primary focus:ring-primary" />
            Code is active
          </label>
        </Card>

        <Card title="Order tags">
          <p className="text-sm text-ink-secondary mb-4">The quick-pick tags offered on every order. You can still type a one-off tag on an order.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {s.tags.map((t) => <TagChip key={t} tag={t} onRemove={readOnly ? undefined : () => setS({ ...s, tags: s.tags.filter((x) => x !== t) })} />)}
            {s.tags.length === 0 && <span className="text-sm text-ink-tertiary">No tags yet.</span>}
          </div>
          <div className="flex gap-2">
            <input value={newTag} onChange={(e) => setNewTag(e.target.value)} placeholder="New tag" aria-label="New tag" maxLength={32} className={field}
              onKeyDown={(e) => {
                if (e.key !== 'Enter') return;
                e.preventDefault();
                const t = newTag.trim();
                if (t && !s.tags.includes(t)) setS({ ...s, tags: [...s.tags, t] });
                setNewTag('');
              }}
            />
            <button type="button" className={btnGhost} onClick={() => { const t = newTag.trim(); if (t && !s.tags.includes(t)) setS({ ...s, tags: [...s.tags, t] }); setNewTag(''); }}>Add</button>
          </div>
        </Card>
      </fieldset>

      <div className="flex flex-wrap items-center gap-3">
        {!readOnly && <button type="submit" disabled={!dirty || saving} className={btnPrimary}>{saving ? 'Saving…' : 'Save settings'}</button>}
        {dirty && !saving && <button type="button" onClick={() => setS(settings)} className={btnGhost}>Discard changes</button>}
        {msg && <span role="status" className={`text-sm font-semibold ${msg.ok ? 'text-tertiary-container' : 'text-status-red'}`}>{msg.text}</span>}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card title="Admin password">
          <p className="text-sm text-ink-secondary">
            The password lives in Vercel, not in the site's code. To change it, go to your Vercel project → Settings → Environment Variables, edit <code className="rounded bg-surface-container px-1">ADMIN_PASSWORD</code>, then redeploy. Changing it signs every admin out.
          </p>
        </Card>
        <Card title="Database">
          <p className="text-sm text-ink-secondary">
            {session.storage === 'database' && 'Connected. Products, orders and settings are saved permanently.'}
            {session.storage === 'memory' && 'Running on this computer only (local development). Changes reset when the dev server restarts.'}
            {session.storage === 'none' && 'Not connected, so nothing can be saved. In Vercel, add MONGODB_URI (your MongoDB Atlas connection string) under Settings → Environment Variables, then redeploy.'}
          </p>
        </Card>
      </div>
    </form>
  );
}
