import type { ReactNode } from 'react';
import type { Order } from '../shared/types';

export const usd = (n: number) => `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
export const usd0 = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`;
export const shortDate = (iso: string) => new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
export const dateTime = (iso: string) => new Date(iso).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
export const customerName = (o: Order) => `${o.customer.firstName} ${o.customer.lastName}`.trim();
export const itemCount = (o: Order) => o.items.reduce((n, i) => n + i.qty, 0);

export const label = 'font-label-caps text-label-caps uppercase tracking-widest';
export const field = 'w-full rounded-lg border-0 bg-surface-container-low px-3.5 py-2.5 text-sm text-on-surface placeholder:text-ink-tertiary focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none';
export const btnPrimary = 'inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-on-primary hover:bg-wine-hover transition-colors disabled:opacity-50 disabled:pointer-events-none';
export const btnGhost = 'inline-flex items-center justify-center gap-2 rounded-full bg-surface-container px-4 py-2.5 text-sm font-bold text-on-surface hover:bg-surface-container-high transition-colors disabled:opacity-50 disabled:pointer-events-none';

export function Card({ title, action, children, className = '' }: { title?: ReactNode; action?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={`bg-surface-container-lowest rounded-xl shadow-sm p-5 sm:p-6 min-w-0 ${className}`}>
      {(title || action) && (
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          {title && <h2 className="font-headline-sm text-lg text-on-surface">{title}</h2>}
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

// Status colours are reserved for order state and always paired with an icon and a word.
export const statusStyle: Record<Order['status'], { cls: string; icon: string; label: string }> = {
  new: { cls: 'bg-[#E8EEFA] text-coastal-blue', icon: 'fiber_new', label: 'New' },
  processing: { cls: 'bg-secondary-fixed text-on-secondary-fixed-variant', icon: 'pending', label: 'Processing' },
  shipped: { cls: 'bg-surface-container-high text-on-surface', icon: 'local_shipping', label: 'Shipped' },
  delivered: { cls: 'bg-tertiary-fixed text-on-tertiary-fixed-variant', icon: 'check_circle', label: 'Delivered' },
  cancelled: { cls: 'bg-error-container text-on-error-container', icon: 'cancel', label: 'Cancelled' },
};

export function StatusChip({ status }: { status: Order['status'] }) {
  const s = statusStyle[status];
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold whitespace-nowrap ${s.cls}`}>
      <span aria-hidden="true" className="material-symbols-outlined text-sm">{s.icon}</span>
      {s.label}
    </span>
  );
}

export function TagChip({ tag, onRemove }: { tag: string; onRemove?: () => void }) {
  return (
    <span className="inline-flex items-center gap-1 rounded bg-surface-parchment px-2 py-0.5 text-[11px] font-bold text-badge-ink whitespace-nowrap">
      {tag}
      {onRemove && (
        <button type="button" onClick={onRemove} aria-label={`Remove tag ${tag}`} className="hover:text-status-red">
          <span aria-hidden="true" className="material-symbols-outlined text-xs">close</span>
        </button>
      )}
    </span>
  );
}

export function Empty({ icon, title, children }: { icon: string; title: string; children?: ReactNode }) {
  return (
    <div className="flex flex-col items-center text-center py-12 px-4 gap-3">
      <span aria-hidden="true" className="material-symbols-outlined text-4xl text-ink-tertiary">{icon}</span>
      <p className="font-headline-sm text-lg text-on-surface">{title}</p>
      {children && <div className="text-sm text-ink-secondary max-w-md">{children}</div>}
    </div>
  );
}

export function Drawer({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: ReactNode; children: ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40" onClick={onClose}>
      <div role="dialog" aria-modal="true" className="h-full w-full max-w-xl overflow-y-auto bg-background shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-surface-container-high bg-background/95 backdrop-blur px-6 py-4">
          <div className="min-w-0">{title}</div>
          <button type="button" onClick={onClose} aria-label="Close" className="rounded-full p-2 hover:bg-surface-container">
            <span aria-hidden="true" className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="p-6 space-y-6">{children}</div>
      </div>
    </div>
  );
}
