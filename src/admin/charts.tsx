import { useState } from 'react';

export type Point = { label: string; value: number; detail?: string };

function niceMax(v: number) {
  if (v <= 0) return 1;
  const p = 10 ** Math.floor(Math.log10(v));
  return [1, 2, 2.5, 5, 10].map((m) => m * p).find((m) => m >= v)!;
}

export function ColumnChart({ data, format, title }: { data: Point[]; format: (n: number) => string; title: string }) {
  const [hover, setHover] = useState<number | null>(null);
  const max = niceMax(Math.max(0, ...data.map((d) => d.value)));
  const ticks = [max, max / 2, 0];
  const every = Math.ceil(data.length / 8);

  return (
    <figure className="w-full">
      <div className="flex gap-3">
        <div className="flex flex-col justify-between h-56 text-[11px] text-ink-tertiary text-right shrink-0 -my-1.5" aria-hidden="true">
          {ticks.map((t) => <span key={t}>{format(t)}</span>)}
        </div>
        <div className="flex-1 min-w-0">
        <div className="relative h-56">
          {ticks.map((t) => (
            <div key={t} className="absolute inset-x-0 border-t border-surface-container-high" style={{ top: `${(1 - t / max) * 100}%` }} aria-hidden="true" />
          ))}
          <div className="absolute inset-0 flex items-end gap-[2px]" role="img" aria-label={title} onMouseLeave={() => setHover(null)}>
            {data.map((d, i) => (
              <div
                key={d.label + i}
                className="relative flex-1 h-full flex items-end cursor-default"
                onMouseEnter={() => setHover(i)}
                onFocus={() => setHover(i)}
                onBlur={() => setHover(null)}
                tabIndex={0}
                aria-label={`${d.label}: ${format(d.value)}`}
              >
                <div
                  className={`w-full max-w-[28px] mx-auto rounded-t-[4px] transition-colors ${hover === null || hover === i ? 'bg-primary' : 'bg-primary/35'}`}
                  style={{ height: d.value > 0 ? `max(${(d.value / max) * 100}%, 2px)` : 0 }}
                />
                {hover === i && (
                  <div className={`absolute bottom-full mb-2 z-10 whitespace-nowrap rounded-lg bg-on-surface px-3 py-2 text-xs text-surface shadow-lg pointer-events-none ${i > data.length / 2 ? 'right-0' : 'left-0'}`}>
                    <div className="font-bold">{d.label}</div>
                    <div>{format(d.value)}</div>
                    {d.detail && <div className="text-surface/70">{d.detail}</div>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-[2px] mt-2" aria-hidden="true">
          {data.map((d, i) => (
            <span key={d.label + i} className="flex-1 text-center text-[11px] text-ink-tertiary whitespace-nowrap overflow-visible">{i % every === 0 ? d.label : ''}</span>
          ))}
        </div>
        </div>
      </div>
      <table className="sr-only">
        <caption>{title}</caption>
        <tbody>
          {data.map((d, i) => <tr key={i}><th>{d.label}</th><td>{format(d.value)}</td></tr>)}
        </tbody>
      </table>
    </figure>
  );
}

export function BarList({ data, format }: { data: Point[]; format: (n: number) => string }) {
  const max = Math.max(1, ...data.map((d) => d.value));
  return (
    <ul className="space-y-3">
      {data.map((d) => (
        <li key={d.label} className="text-sm">
          <div className="flex items-baseline justify-between gap-3 mb-1">
            <span className="text-on-surface truncate">{d.label}</span>
            <span className="font-semibold text-on-surface shrink-0">{format(d.value)}{d.detail && <span className="font-normal text-ink-tertiary"> · {d.detail}</span>}</span>
          </div>
          <div className="h-2 rounded-full bg-surface-container" aria-hidden="true">
            <div className="h-full rounded-full bg-primary" style={{ width: `${(d.value / max) * 100}%` }} />
          </div>
        </li>
      ))}
    </ul>
  );
}
