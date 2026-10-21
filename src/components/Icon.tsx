import type { CSSProperties, ReactNode } from 'react';

/*
  La Taglia icon set: hand-drawn, fine-line SVGs on a 24px grid.
  - Stroke follows the text colour, sized at 1em, so Tailwind text-* classes keep working.
  - Soft tinted fills (A) give each icon depth without extra colours.
  - data-a names a small hover motion (see .ic rules in index.css); it plays when the
    nearest link, button or .group is hovered.
  Old Material Symbols names still work through ALIAS, so data files need no rewrite.
*/

type Anim = 'right' | 'left' | 'down' | 'up' | 'diag' | 'lid' | 'pop' | 'tilt' | 'swing' | 'drive' | 'spin' | 'flap' | 'twinkle' | 'rise';
type Def = { a?: Anim; g: ReactNode };

/** Tinted fill layer. */
const A = ({ d }: { d: string }) => <path d={d} className="ic-tint" fill="currentColor" stroke="none" />;
const Dot = ({ x, y, r = 0.9 }: { x: number; y: number; r?: number }) => <circle cx={x} cy={y} r={r} fill="currentColor" stroke="none" />;

/** Wavy-edged circle, used for wax seals and rosettes. */
function scallop(cx: number, cy: number, r: number, amp: number, lobes: number) {
  const pts: string[] = [];
  for (let i = 0; i < 96; i++) {
    const t = (i / 96) * Math.PI * 2;
    const rr = r + amp * Math.cos(lobes * t);
    pts.push(`${(cx + rr * Math.cos(t)).toFixed(2)} ${(cy + rr * Math.sin(t)).toFixed(2)}`);
  }
  return `M${pts.join('L')}Z`;
}
const seal = scallop(12, 11, 7.6, 0.75, 12);
const sealSmall = scallop(12, 9.5, 6.2, 0.6, 10);

const giftBow = 'M12 8c-1.1-2.9-5-3.7-5-1.4C7 8 10 8 12 8zm0 0c1.1-2.9 5-3.7 5-1.4C17 8 14 8 12 8z';
const shield = 'M12 3.5 19 6v5.6c0 4.3-2.9 7.7-7 8.9-4.1-1.2-7-4.6-7-8.9V6z';
const bag = 'M5.5 8h13l-1 12.5h-11z';
const doc = 'M6 3.5h8l4 4v13H6z';
const bubble = 'M4 4.5h16a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1h-8.5L7 19.5V16H4a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1z';
const envelope = 'M4 5.5h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1z';
const tag = 'M3.5 12.2V4.5a1 1 0 0 1 1-1h7.7l8.3 8.3a1 1 0 0 1 0 1.4l-7.2 7.2a1 1 0 0 1-1.4 0z';
const leaf = 'M5 19c0-8.5 5.5-14 15-14 0 9-5.5 14-13 14z';
const star = 'M12 3.6l2.5 5.2 5.7.8-4.1 4 1 5.7L12 16.6l-5.1 2.7 1-5.7-4.1-4 5.7-.8z';
const sparkle = 'M11 3c.7 4.4 2.2 5.9 6.5 6.5-4.3.7-5.8 2.2-6.5 6.5-.7-4.3-2.2-5.8-6.5-6.5C8.8 8.9 10.3 7.4 11 3z';
const eye = 'M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z';
const people = (
  <>
    <circle cx="12" cy="7.5" r="2.6" />
    <circle cx="5.8" cy="9.6" r="2" />
    <circle cx="18.2" cy="9.6" r="2" />
    <A d="M7.2 19.5a4.8 4.8 0 0 1 9.6 0z" />
    <path d="M7.2 19.5a4.8 4.8 0 0 1 9.6 0M2.5 18.5a3.4 3.4 0 0 1 4.9-3.1M21.5 18.5a3.4 3.4 0 0 0-4.9-3.1" />
  </>
);
const truck = (lines: boolean) => (
  <>
    <A d="M3 6.5h10.5v9.5H3z" />
    <path d="M3 6.5h10.5V16H3zM13.5 9.5h3.8l3.2 3.6V16h-7" />
    <circle cx="7" cy="17.3" r="1.8" className="ic-wheel" />
    <circle cx="17" cy="17.3" r="1.8" className="ic-wheel" />
    <path d="M6.5 9.5c.6-.9 1.8-.9 2.2.1.4-1 1.6-1 2.2-.1.6 1-1 2.4-2.2 3.2-1.2-.8-2.8-2.2-2.2-3.2z" />
    {lines && <path d="M.8 9h1.4M.5 12h1.7" />}
  </>
);
const giftBox = (
  <>
    <A d="M5 11.5h14V20H5z" />
    <g className="ic-lid">
      <path d="M3.5 8h17v3.5h-17z" />
      <path d={giftBow} />
    </g>
    <path d="M5 11.5V20h14v-8.5M12 8v12" />
  </>
);
const lock = (
  <>
    <A d="M5.5 10.5h13v10h-13z" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" className="ic-shackle" />
    <rect x="5.5" y="10.5" width="13" height="10" rx="2" />
    <circle cx="12" cy="14.6" r="1.2" />
    <path d="M12 15.8v1.8" />
  </>
);
const check = 'M5 12.5l4.5 4.5L19 7.5';
const chart = 'M5 20v-6M10 20V7.5M15 20v-9M20 20V4.5';

const ICONS: Record<string, Def> = {
  // ── Direction & controls
  arrow_forward: { a: 'right', g: <path d="M4 12h14.5M13 6.5l5.5 5.5-5.5 5.5" /> },
  arrow_downward: { a: 'down', g: <path d="M12 4v14.5M6.5 13l5.5 5.5 5.5-5.5" /> },
  arrow_outward: { a: 'diag', g: <path d="M7 17 17 7M8.5 7H17v8.5" /> },
  chevron_left: { a: 'left', g: <path d="M14.5 5.5 8 12l6.5 6.5" /> },
  chevron_right: { a: 'right', g: <path d="M9.5 5.5 16 12l-6.5 6.5" /> },
  expand_more: { g: <path d="M6 9.5l6 6 6-6" /> },
  add: { a: 'pop', g: <path d="M12 5v14M5 12h14" /> },
  remove: { a: 'pop', g: <path d="M5 12h14" /> },
  close: { a: 'spin', g: <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" /> },
  check: { a: 'pop', g: <path d={check} /> },
  menu: { g: <path d="M4 7h16M4 12h11M4 17h16" /> },
  search: { a: 'tilt', g: <><A d="M10.5 4.5a6 6 0 1 1 0 12 6 6 0 0 1 0-12z" /><circle cx="10.5" cy="10.5" r="6" /><path d="M15 15l5 5M7.8 8.6a3 3 0 0 1 2.4-1.6" /></> },
  tune: { g: <><path d="M4 7h9M17 7h3M4 17h3M11 17h9" /><circle cx="15" cy="7" r="2" /><circle cx="9" cy="17" r="2" /></> },
  refresh: { a: 'spin', g: <path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3M18 3.5v3.8h-3.8" /> },
  progress_activity: { g: <><circle cx="12" cy="12" r="8.5" className="ic-tint-stroke" /><path d="M12 3.5a8.5 8.5 0 0 1 8.5 8.5" /></> },
  logout: { a: 'right', g: <><path d="M10.5 4H5.5v16h5" /><path d="M14 8l4 4-4 4M18 12H9" /></> },
  download: { a: 'down', g: <path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 19.5h14" /> },
  link: { a: 'tilt', g: <path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1" /> },
  edit: { a: 'tilt', g: <><A d="M14.5 5.5 18.5 9.5 9 19H5v-4z" /><path d="M14.5 5.5 18.5 9.5 9 19H5v-4zM13 7l4 4M5 21h14" /></> },
  delete: { a: 'lid', g: <><path d="M6.5 7l1 13h9l1-13M10 11v5.5M14 11v5.5" /><g className="ic-lid"><path d="M5 7h14M9.5 7V4.5h5V7" /></g></> },
  visibility: { g: <><A d={eye} /><path d={eye} /><circle cx="12" cy="12" r="3" /></> },
  visibility_off: { g: <><path d={eye} /><circle cx="12" cy="12" r="3" /><path d="M4 4l16 16" /></> },
  filter_alt_off: { g: <><path d="M4 5h16l-6 7.5V19l-4 1.5v-8z" /><path d="M3.5 3.5l17 17" /></> },

  // ── Status
  check_circle: { a: 'pop', g: <><circle cx="12" cy="12" r="9" className="ic-body ic-tintable" /><path d="M8 12.3l2.8 2.8 5.4-5.6" className="ic-on" /></> },
  cancel: { a: 'pop', g: <><A d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z" /><circle cx="12" cy="12" r="9" /><path d="M9 9l6 6M15 9l-6 6" /></> },
  info: { g: <><A d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z" /><circle cx="12" cy="12" r="9" /><path d="M12 11v5.5" /><Dot x={12} y={7.9} /></> },
  help_outline: { g: <><circle cx="12" cy="12" r="9" /><path d="M9.6 9.4a2.5 2.5 0 1 1 3.4 2.3c-.6.3-1 .8-1 1.5v.6" /><Dot x={12} y={16.8} /></> },
  warning: { a: 'swing', g: <><A d="M12 4 21 19.5H3z" /><path d="M10.7 4.8a1.5 1.5 0 0 1 2.6 0l7.6 13.2a1.5 1.5 0 0 1-1.3 2.2H3.4A1.5 1.5 0 0 1 2.1 18z" /><path d="M12 10v4.2" /><Dot x={12} y={16.9} /></> },
  block: { g: <><circle cx="12" cy="12" r="9" /><path d="M5.6 5.6l12.8 12.8" /></> },
  pending: { g: <><circle cx="12" cy="12" r="9" /><Dot x={8} y={12} r={1.1} /><Dot x={12} y={12} r={1.1} /><Dot x={16} y={12} r={1.1} /></> },
  fiber_new: { a: 'twinkle', g: <><A d={sparkle} /><path d={sparkle} /><path d="M18.5 14.5c.3 1.8.9 2.4 2.5 2.7-1.6.3-2.2.9-2.5 2.7-.3-1.8-.9-2.4-2.5-2.7 1.6-.3 2.2-.9 2.5-2.7z" /></> },
  trending_up: { a: 'diag', g: <path d="M3.5 17 9.5 11l4 4L20.5 8M15.5 8h5v5" /> },
  trending_down: { a: 'down', g: <path d="M3.5 7l6 6 4-4 7 7M15.5 16h5v-5" /> },

  // ── Shop & orders
  shopping_bag: { a: 'swing', g: <><A d={bag} /><path d={bag} /><path d="M9 8V6.5a3 3 0 0 1 6 0V8" /><path d="M9 11.5c.8 1.4 1.8 2 3 2s2.2-.6 3-2" /></> },
  add_shopping_cart: { a: 'pop', g: <><A d={bag} /><path d={bag} /><path d="M9 8V6.5a3 3 0 0 1 6 0V8M12 11.5v5.5M9.3 14.2h5.4" /></> },
  shopping_basket: { a: 'swing', g: <><A d="M3.5 10.5h17l-1.8 9H5.3z" /><path d="M3.5 10.5h17l-1.8 9H5.3zM7 10.5l3-5.5M17 10.5l-3-5.5M9 13.5v3M12 13.5v3M15 13.5v3" /></> },
  sell: { a: 'swing', g: <><A d={tag} /><path d={tag} /><circle cx="8" cy="8" r="1.4" /><path d="M8 8C6 6 5.5 3.5 6.5 2" /></> },
  loyalty: { a: 'pop', g: <><path d={tag} /><circle cx="8" cy="8" r="1.4" /><path d="M13.2 16.2c-.5-.4-3.2-2.3-3.2-4a1.6 1.6 0 0 1 3.2-.5 1.6 1.6 0 0 1 3.2.5c0 1.7-2.7 3.6-3.2 4z" fill="currentColor" className="ic-tint" /></> },
  credit_card: { g: <><A d="M3 5.5h18v4.5H3z" /><rect x="3" y="5.5" width="18" height="13" rx="2" /><path d="M3 10h18M6.5 14.5h4M15 14.5h2.5" /></> },
  payments: { g: <><A d="M2.5 6h19v12h-19z" /><rect x="2.5" y="6" width="19" height="12" rx="1.5" /><circle cx="12" cy="12" r="2.6" /><Dot x={6} y={12} r={0.8} /><Dot x={18} y={12} r={0.8} /></> },
  receipt_long: { g: <><A d="M6 3h12v18l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3-2 1.3z" /><path d="M6 3h12v18l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3-2 1.3zM9 8h6M9 11.5h6M9 15h3.5" /></> },
  storefront: { g: <><A d="M5 4h14l1.5 5h-17z" /><path d="M5 4h14l1.5 5h-17zM9.5 4 9 9M14.5 4l.5 5" /><path d="M3.5 9a2.1 2.1 0 0 0 4.25 0 2.1 2.1 0 0 0 4.25 0 2.1 2.1 0 0 0 4.25 0 2.1 2.1 0 0 0 4.25 0" /><path d="M5 11.5V20h14v-8.5M10 20v-4.5h4V20" /></> },
  inventory_2: { a: 'lid', g: <><A d="M4 8.5h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" /><path d="M4 8.5h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM4 13.5h16M4 17h16M9.5 11h5" /><g className="ic-lid"><path d="M3 4.5h18v4H3z" /></g></> },
  package_2: { a: 'pop', g: <><A d="M4 7.5 12 11.5v9l-8-4z" /><path d="M4 7.5 12 3.5l8 4v9l-8 4-8-4zM4 7.5l8 4 8-4M12 11.5v9" /><path d="M8 5.5l8 4V13" /></> },
  local_shipping: { a: 'drive', g: truck(false) },
  shipping_tier: { a: 'drive', g: truck(true) },
  bolt: { a: 'pop', g: <><A d="M13 3 5.5 13.5H12L11 21l7.5-10.5H12z" /><path d="M13 3 5.5 13.5H12L11 21l7.5-10.5H12z" /></> },

  // ── Gifts
  gift: { a: 'lid', g: giftBox },
  card_giftcard: {
    a: 'pop',
    g: <><A d="M3 7h18v12H3z" /><rect x="3" y="7" width="18" height="12" rx="1.5" /><path d="M3 12h18M9 7v12" /><path d="M9 12c-1-2.6-4.6-3.2-4.6-1.2C4.4 12 7.2 12 9 12zm0 0c1-2.6 4.6-3.2 4.6-1.2 0 1.2-2.8 1.2-4.6 1.2zM9 12l-2 3M9 12l2 3" /></>,
  },
  gift_send: {
    a: 'lid',
    g: <>
      <A d="M3 13.5h10V20H3z" />
      <g className="ic-lid"><path d="M2.5 11h11v2.5h-11z" /><path d="M8 11c-.8-2-3.6-2.5-3.6-1 0 1 2.2 1 3.6 1zm0 0c.8-2 3.6-2.5 3.6-1 0 1-2.2 1-3.6 1z" /></g>
      <path d="M3 13.5V20h10v-6.5M8 11v9" />
      <path d="M18 3a3 3 0 0 0-3 3c0 2.2 3 5 3 5s3-2.8 3-5a3 3 0 0 0-3-3z" />
      <Dot x={18} y={6} />
      <path d="M15 17h2.5M16.5 20h3" strokeDasharray="1 2" />
    </>,
  },

  // ── Food & Italy
  pistachio: {
    a: 'tilt',
    g: <>
      <path d="M12 4c4 2.4 5.6 6.8 5.1 10.4-.5 3.9-2.6 6.1-5.1 6.1s-4.6-2.2-5.1-6.1C6.4 10.8 8 6.4 12 4z" />
      <A d="M12 8c2 1.7 2.6 4.3 2.3 6.4-.3 1.9-1.2 3.1-2.3 3.1s-2-1.2-2.3-3.1C9.4 12.3 10 9.7 12 8z" />
      <path d="M12 8c2 1.7 2.6 4.3 2.3 6.4-.3 1.9-1.2 3.1-2.3 3.1s-2-1.2-2.3-3.1C9.4 12.3 10 9.7 12 8z" />
      <path d="M12 4c.6-1.4 2-2 3.4-1.9-.3 1.4-1.6 2.2-3.4 1.9z" />
    </>,
  },
  barrel: {
    a: 'swing',
    g: <>
      <A d="M6.5 4h11c1.3 2.5 2 5.2 2 8s-.7 5.5-2 8h-11c-1.3-2.5-2-5.2-2-8s.7-5.5 2-8z" />
      <path d="M6.5 4h11c1.3 2.5 2 5.2 2 8s-.7 5.5-2 8h-11c-1.3-2.5-2-5.2-2-8s.7-5.5 2-8zM5.3 8h13.4M5.3 16h13.4" />
      <path d="M10 4c-.6 2.6-.9 5.3-.9 8s.3 5.4.9 8M14 4c.6 2.6.9 5.3.9 8s-.3 5.4-.9 8" />
    </>,
  },
  balsamic: {
    a: 'swing',
    g: <>
      <A d="M7 14h10v4.5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" />
      <path d="M10 2.5h4M10.5 2.5V6c-2.3.9-3.5 3-3.5 5.6v6.9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6.9c0-2.6-1.2-4.7-3.5-5.6V2.5M7 14h10" />
      <path d="M20 8.5c0 .9-.6 1.5-1.2 1.5s-1.3-.6-1.3-1.5c0-.8 1.2-2.2 1.2-2.2S20 7.7 20 8.5z" className="ic-drop" />
    </>,
  },
  truffle: {
    a: 'pop',
    g: <>
      <A d="M12 4.5c3.8-.3 7.3 2.8 7.3 7 0 4.4-3.3 8-7.6 8-4 0-7.2-3.2-7-7.3C4.9 8 7.9 4.8 12 4.5z" />
      <path d="M12 4.5c3.8-.3 7.3 2.8 7.3 7 0 4.4-3.3 8-7.6 8-4 0-7.2-3.2-7-7.3C4.9 8 7.9 4.8 12 4.5z" />
      <Dot x={9} y={9.5} r={0.7} /><Dot x={13.5} y={8.3} r={0.7} /><Dot x={15.8} y={12.3} r={0.7} /><Dot x={10.2} y={13.8} r={0.7} /><Dot x={13.3} y={16.2} r={0.7} /><Dot x={8} y={16} r={0.6} />
    </>,
  },
  olive: {
    a: 'swing',
    g: <>
      <path d="M4 20C8 16.5 13 10.5 20 4" />
      <path d="M8.3 16.2C6 16.4 4.3 15.4 3.5 13.5c2.2-.6 4.1.2 4.8 2.7zM11.5 12.8c.6-2.4-.2-4.3-2.1-5.4-.8 2.2-.1 4.2 2.1 5.4zM15.6 8.4c2.3-.3 4.1.6 5 2.4-2.2.7-4.1 0-5-2.4z" />
      <ellipse cx="14.4" cy="14.3" rx="1.9" ry="2.4" transform="rotate(-30 14.4 14.3)" className="ic-tint" fill="currentColor" stroke="none" />
      <ellipse cx="14.4" cy="14.3" rx="1.9" ry="2.4" transform="rotate(-30 14.4 14.3)" />
      <path d="M13.9 10.6l.4 1.4" />
    </>,
  },
  leaf: { a: 'tilt', g: <><A d={leaf} /><path d={leaf} /><path d="M5 19c3-4.5 6.5-7.5 10.5-9.5" /></> },
  wheat: {
    a: 'swing',
    g: <>
      <path d="M12 21V8" />
      <A d="M12 7c-.9-1.2-.9-2.8 0-4 .9 1.2.9 2.8 0 4z" />
      <path d="M12 7c-.9-1.2-.9-2.8 0-4 .9 1.2.9 2.8 0 4z" />
      <path d="M12 10.5c-2.3-.3-3.5-1.8-3.5-4 2.3.3 3.5 1.8 3.5 4zm0 0c2.3-.3 3.5-1.8 3.5-4-2.3.3-3.5 1.8-3.5 4zM12 14.5c-2.3-.3-3.5-1.8-3.5-4 2.3.3 3.5 1.8 3.5 4zm0 0c2.3-.3 3.5-1.8 3.5-4-2.3.3-3.5 1.8-3.5 4zM12 18.5c-2.3-.3-3.5-1.8-3.5-4 2.3.3 3.5 1.8 3.5 4zm0 0c2.3-.3 3.5-1.8 3.5-4-2.3.3-3.5 1.8-3.5 4z" />
    </>,
  },
  harvest: {
    a: 'rise',
    g: <>
      <g className="ic-sprout">
        <A d="M12 8C12 5.5 10.2 4 7.5 4c0 2.5 1.8 4 4.5 4zM12 9.7c0-2.3 1.6-3.7 4-3.7 0 2.3-1.6 3.7-4 3.7z" />
        <path d="M12 12.5V8m0 0C12 5.5 10.2 4 7.5 4c0 2.5 1.8 4 4.5 4zm0 1.7c0-2.3 1.6-3.7 4-3.7 0 2.3-1.6 3.7-4 3.7z" />
      </g>
      <path d="M2.5 15h3.2l3.6 1.6h3.9a1.4 1.4 0 0 1 0 2.8H9.4M13.2 17.2l4.6-1.9a1.5 1.5 0 0 1 1.6 2.5L15 21H8.5l-2.8-1.3M5.7 15v5.5H2.5" />
    </>,
  },
  wine_bar: {
    a: 'swing',
    g: <>
      <A d="M7.3 8h9.4c.1 2.7-2 4.8-4.7 4.8S7.2 10.7 7.3 8z" />
      <path d="M7.5 3.5h9l.3 4.2c.3 3-1.8 5.6-4.8 5.6s-5.1-2.6-4.8-5.6zM7.4 8h9.2M12 13.3V20M8.5 20.5h7" />
    </>,
  },
  restaurant: {
    g: <>
      <A d="M12 8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z" />
      <circle cx="12" cy="12.5" r="4.5" />
      <circle cx="12" cy="12.5" r="2.4" />
      <path d="M3.5 4v4.5a1.5 1.5 0 0 0 3 0V4M5 8.5V20M19.8 20V4c-1.8 1-2.5 3-2.5 6.2h2.5" />
    </>,
  },
  bowl: {
    a: 'rise',
    g: <>
      <A d="M3.5 11.5h17c0 4.7-3.8 8-8.5 8s-8.5-3.3-8.5-8z" />
      <path d="M3.5 11.5h17c0 4.7-3.8 8-8.5 8s-8.5-3.3-8.5-8zM9.5 20h5" />
      <path d="M9 8.5c-1-1 1-2 0-3.5M12 8.5c-1-1 1-2 0-3.5M15 8.5c-1-1 1-2 0-3.5" className="ic-steam" />
    </>,
  },
  millstone: {
    a: 'spin',
    g: <>
      <A d="M4 8.5c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z" />
      <path d="M4 8.5c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 8.5v2.5c0 1.7 3.6 3 8 3s8-1.3 8-3V8.5" />
      <path d="M4 14.5v2.5c0 1.7 3.6 3 8 3s8-1.3 8-3v-2.5M12 2.5v6" />
    </>,
  },
  snowflake: {
    a: 'spin',
    g: <><path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M9.8 4.2 12 6l2.2-1.8M9.8 19.8 12 18l2.2 1.8M4.6 10.4l2.6-.4-1-2.5M19.4 13.6l-2.6.4 1 2.5M5.7 16.6l1-2.5-2.6-.4M18.3 7.4l-1 2.5 2.6.4" /><circle cx="12" cy="12" r="1.6" className="ic-body ic-tintable" /></>,
  },
  thermostat: {
    a: 'rise',
    g: <>
      <path d="M10 13.5V5a2 2 0 0 1 4 0v8.5a4 4 0 1 1-4 0z" />
      <circle cx="12" cy="16.8" r="1.7" fill="currentColor" stroke="none" />
      <path d="M12 9.5v6" className="ic-mercury" />
      <path d="M16.5 6h2M16.5 9h2" />
    </>,
  },

  // ── Places
  landscape: {
    a: 'rise',
    g: <>
      <A d="M2.5 18c3-3 6-4 9.5-2.5s6.5 1 9.5-1.5V21h-19z" />
      <path d="M2.5 18c3-3 6-4 9.5-2.5s6.5 1 9.5-1.5" />
      <path d="M7 16V11.5m0-7.3c1.6 2 2 4.8 0 7.3-2-2.5-1.6-5.3 0-7.3z" />
      <circle cx="17" cy="7" r="2.2" className="ic-sun" />
    </>,
  },
  terrain: { a: 'rise', g: <><A d="M2.5 19 9 8.5l4 6.5 2.5-3.5 6 7.5z" /><path d="M2.5 19 9 8.5l4 6.5 2.5-3.5 6 7.5zM7.4 11.1 9 12l1.6-.9" /></> },
  volcano: {
    a: 'rise',
    g: <>
      <A d="M9 9.5c1-.8 2-.8 3 0s2 .8 3 0l2.4 4.5H6.6z" />
      <path d="M2.5 20 9 9.5h6L21.5 20zM9 9.5c1-.8 2-.8 3 0s2 .8 3 0" />
      <path d="M10.8 6.5c-1-1.2.2-2.4 1.4-2.2.6-1.2 2.6-1.2 3.2.2 1.3-.1 2 1.3 1 2.2" className="ic-steam" />
    </>,
  },
  waves: { a: 'right', g: <path d="M2.5 8c1.6 0 1.6-1.5 3.2-1.5S7.3 8 8.9 8s1.6-1.5 3.2-1.5S13.7 8 15.3 8s1.6-1.5 3.2-1.5S20.1 8 21.5 8M2.5 13c1.6 0 1.6-1.5 3.2-1.5S7.3 13 8.9 13s1.6-1.5 3.2-1.5 1.6 1.5 3.2 1.5 1.6-1.5 3.2-1.5 1.6 1.5 3 1.5M2.5 18c1.6 0 1.6-1.5 3.2-1.5S7.3 18 8.9 18s1.6-1.5 3.2-1.5 1.6 1.5 3.2 1.5 1.6-1.5 3.2-1.5 1.6 1.5 3 1.5" /> },
  hiking: { a: 'swing', g: <><path d="M5 20.5c3 0 4.5-1.5 4-3.5s-3-2.5-2.5-4.5 3-2.5 6-2.5" strokeDasharray="1.5 2" /><A d="M13.5 3.5l5 2-5 2z" /><path d="M13.5 10V3.5l5 2-5 2" /></> },
  map: { a: 'pop', g: <><A d="M9 4.5l6 2v13l-6-2z" /><path d="M3.5 6.5 9 4.5l6 2 5.5-2v13l-5.5 2-6-2-5.5 2zM9 4.5v13M15 6.5v13" /></> },
  explore: { a: 'spin', g: <><circle cx="12" cy="12" r="9" /><A d="M15.2 8.8 13.2 13.2 8.8 15.2 10.8 10.8z" /><path d="M15.2 8.8 13.2 13.2 8.8 15.2 10.8 10.8z" /></> },
  public: { a: 'spin', g: <><A d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z" /><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z" /></> },
  estate: {
    a: 'rise',
    g: <>
      <A d="M4 12.5 10 7.5l6 5V20H4z" />
      <path d="M2.5 13.5 10 7l7.5 6.5M4 12.3V20h12v-7.7M8.5 20v-4h3v4M2 20.5h20" />
      <path d="M19.5 20v-3m0-9.5c1.5 2 1.8 6 0 9.5-1.8-3.5-1.5-7.5 0-9.5z" />
    </>,
  },
  family_home: {
    a: 'pop',
    g: <>
      <path d="M3.5 11 12 4l8.5 7M5.5 9.5V20h13V9.5" />
      <path d="M12 17.5c-.6-.5-3.5-2.4-3.5-4.4a1.8 1.8 0 0 1 3.5-.6 1.8 1.8 0 0 1 3.5.6c0 2-2.9 3.9-3.5 4.4z" fill="currentColor" className="ic-tint" />
      <path d="M12 17.5c-.6-.5-3.5-2.4-3.5-4.4a1.8 1.8 0 0 1 3.5-.6 1.8 1.8 0 0 1 3.5.6c0 2-2.9 3.9-3.5 4.4z" />
    </>,
  },

  // ── Trust, seals & quality
  verified: { a: 'pop', g: <><A d={seal} /><path d={seal} /><path d="M8.6 11.2l2.3 2.3 4.5-4.6" /><path d="M8.5 17.5 7.5 22 12 20l4.5 2-1-4.5" /></> },
  workspace_premium: { a: 'swing', g: <><A d={sealSmall} /><path d={sealSmall} /><path d="M12 6.7l.9 1.8 2 .3-1.4 1.4.3 2-1.8-1-1.8 1 .3-2-1.4-1.4 2-.3z" /><path d="M8.8 14.7 7.5 21l4.5-2 4.5 2-1.3-6.3" /></> },
  wax_seal: {
    a: 'pop',
    g: <>
      <A d={scallop(12, 12, 8, 0.7, 11)} />
      <path d={scallop(12, 12, 8, 0.7, 11)} />
      <circle cx="12" cy="12" r="4.6" />
      <path d="M12 14.6V10m0 0c0-1.4-1-2.2-2.4-2.2 0 1.4 1 2.2 2.4 2.2zm0 1.2c0-1.3.9-2.1 2.2-2.1 0 1.3-.9 2.1-2.2 2.1z" />
    </>,
  },
  shield: { a: 'pop', g: <><A d={shield} /><path d={shield} /></> },
  verified_user: { a: 'pop', g: <><A d={shield} /><path d={shield} /><path d="M8.7 12l2.3 2.3 4.4-4.5" /></> },
  security: { a: 'pop', g: <><A d={shield} /><path d={shield} /><circle cx="12" cy="10.8" r="1.6" /><path d="M12 12.4v3" /></> },
  label_check: { a: 'swing', g: <><A d={tag} /><path d={tag} /><circle cx="8" cy="8" r="1.4" /><path d="M10.5 13.5l2 2 3.5-3.6" /></> },
  lock: { a: 'lid', g: lock },
  lock_clock: { a: 'lid', g: lock },
  key: { a: 'tilt', g: <><A d="M8 11.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" /><circle cx="8" cy="15" r="3.5" /><circle cx="8" cy="15" r="1.1" /><path d="M10.5 12.5 19.5 3.5M16 7l2.2 2.2M14 9l1.6 1.6" /></> },
  gavel: { a: 'swing', g: <><A d="M13 3.5l7.5 7.5-2.5 2.5-7.5-7.5z" /><path d="M13 3.5l7.5 7.5-2.5 2.5-7.5-7.5zM14.2 9.8 4.6 19.4a1.3 1.3 0 0 1-1.9-1.9l9.6-9.6M12.5 20.5h8" /></> },
  star: { a: 'pop', g: <path d={star} className="ic-body ic-tintable" /> },
  stars: { a: 'twinkle', g: <><A d={sparkle} /><path d={sparkle} className="ic-body" /><path d="M18.5 14.5c.3 1.8.9 2.4 2.5 2.7-1.6.3-2.2.9-2.5 2.7-.3-1.8-.9-2.4-2.5-2.7 1.6-.3 2.2-.9 2.5-2.7z" className="ic-body" /></> },
  favorite: { a: 'pop', g: <><A d="M12 20s-8-5-8-10.6A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 8 2.4C20 15 12 20 12 20z" /><path d="M12 20s-8-5-8-10.6A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 8 2.4C20 15 12 20 12 20z" /></> },
  fact_check: { a: 'pop', g: <><A d="M5 4.5h14v16H5z" /><rect x="5" y="4.5" width="14" height="16.5" rx="1.5" /><path d="M9 3h6v3H9zM8 11l1.3 1.3L11.5 10M13.5 11.3h3M8 16l1.3 1.3 2.2-2.3M13.5 16.3h3" /></> },

  // ── Words & paper
  auto_stories: { a: 'flap', g: <><A d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5z" /><path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5c-3.5-.5-6.5 0-8.5 1.5zM12 6.5v13M15 9.3c1.3-.4 2.6-.5 3.5-.4M15 12.5c1.3-.4 2.6-.5 3.5-.4" /></> },
  quill: { a: 'tilt', g: <><A d="M19.5 3.5c-6 .5-11 5-12.5 12l1 1c7-1.5 11.5-6.5 11.5-13z" /><path d="M19.5 3.5c-6 .5-11 5-12.5 12l1 1c7-1.5 11.5-6.5 11.5-13zM7.5 16 4 19.5M10.5 13.5 15 9M3.5 21h8" /></> },
  format_quote: { g: <><A d="M5 17v-3.5C5 10 6.8 7.6 10 6.5l.6 1.3c-1.8.9-2.8 2.2-3 3.7H10V17zm8.5 0v-3.5c0-3.5 1.8-5.9 5-7l.6 1.3c-1.8.9-2.8 2.2-3 3.7h2.4V17z" /><path d="M5 17v-3.5C5 10 6.8 7.6 10 6.5l.6 1.3c-1.8.9-2.8 2.2-3 3.7H10V17zm8.5 0v-3.5c0-3.5 1.8-5.9 5-7l.6 1.3c-1.8.9-2.8 2.2-3 3.7h2.4V17z" /></> },
  description: { g: <><A d={doc} /><path d={doc} /><path d="M14 3.5v4h4M9 12h6M9 15.5h6" /></> },
  upload_file: { a: 'up', g: <><path d={doc} /><path d="M14 3.5v4h4" /><path d="M12 18v-6M9.5 14.3 12 11.8l2.5 2.5" className="ic-arrow" /></> },
  image: { a: 'rise', g: <><A d="M3.5 17l5-5 4 4 2.5-2.5 5.5 5.5H4.5z" /><rect x="3.5" y="4.5" width="17" height="15" rx="1.5" /><path d="M3.5 17l5-5 4 4 2.5-2.5 5 5" /><circle cx="15.5" cy="9" r="1.6" /></> },
  table_chart: { g: <><A d="M3.5 4.5h17v4h-17z" /><rect x="3.5" y="4.5" width="17" height="15" rx="1.5" /><path d="M3.5 8.5h17M3.5 13h17M9 8.5v11M14.5 8.5v11" /></> },
  bar_chart: { a: 'rise', g: <><path d={chart} /><path d="M3 20.5h18" /></> },
  monitoring: { a: 'rise', g: <><A d="M3.5 20v-5l5-5 4 3.5 7.5-7V20z" /><path d="M3.5 3.5v17h17M3.5 15l5-5 4 3.5 7.5-7" /></> },
  science: { a: 'swing', g: <><A d="M7 14.5h10l2.2 4A1.5 1.5 0 0 1 17.9 20.5H6.1A1.5 1.5 0 0 1 4.8 18.5z" /><path d="M9.5 3.5h5M10 3.5v6L4.8 18.5A1.5 1.5 0 0 0 6.1 20.5h11.8a1.5 1.5 0 0 0 1.3-2L14 9.5v-6M7 14.5h10" /></> },
  cloud_off: { g: <><path d="M7 18.5a4.5 4.5 0 0 1-.6-9 6 6 0 0 1 11.2 1.6 3.8 3.8 0 0 1-.6 7.4z" /><path d="M3.5 3.5l17 17" /></> },

  schedule: { a: 'pop', g: <><A d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z" /><circle cx="12" cy="12" r="9" /><path d="M12 7.5V12l3 2" /></> },

  // ── People & contact
  mail: { a: 'flap', g: <><A d={envelope} /><path d={envelope} /><path d="M3.5 6.5 12 13l8.5-6.5" className="ic-flap" /><circle cx="12" cy="13" r="1.8" fill="currentColor" stroke="none" /></> },
  mark_email_read: { a: 'pop', g: <><path d="M13 18.5H4a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V12" /><path d="M3.5 6.5 12 13l8.5-6.5" /><A d="M18 14a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" /><path d="M16.5 17.5l1.1 1.1 2-2.1" /></> },
  phone_in_talk: { a: 'swing', g: <><A d="M5 4.5h3l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5C10.5 20 4 13.5 3.5 6.1A1.5 1.5 0 0 1 5 4.5z" /><path d="M5 4.5h3l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5C10.5 20 4 13.5 3.5 6.1A1.5 1.5 0 0 1 5 4.5zM14.5 4a6 6 0 0 1 5.5 5.5M14.5 7.2a3 3 0 0 1 2.3 2.3" /></> },
  support_agent: { a: 'pop', g: <><A d={bubble} /><path d={bubble} /><Dot x={8} y={10.3} /><Dot x={12} y={10.3} /><Dot x={16} y={10.3} /></> },
  group: { a: 'pop', g: people },
};

/** Material Symbols names used in data files → icon in this set. */
const ALIAS: Record<string, string> = {
  // gifts
  redeem: 'gift',
  featured_seasonal_and_gifts: 'gift',
  domain: 'estate',
  // food & places
  spa: 'olive',
  eco: 'leaf',
  nest_eco_leaf: 'leaf',
  nature: 'truffle',
  liquor: 'balsamic',
  hourglass_empty: 'barrel',
  grain: 'wheat',
  agriculture: 'harvest',
  pan_tool: 'harvest',
  brunch_dining: 'bowl',
  precision_manufacturing: 'millstone',
  ac_unit: 'snowflake',
  // paper & trust
  history_edu: 'quill',
  draw: 'wax_seal',
  menu_book: 'auto_stories',
  policy: 'label_check',
  handshake: 'family_home',
  diversity_3: 'group',
  message: 'support_agent',
  email: 'mail',
  payment_method: 'credit_card',
  recycling: 'leaf',
  arrow_back_ios_new: 'pistachio',
};

export const iconNames = [...Object.keys(ICONS), ...Object.keys(ALIAS)];

type Props = {
  name: string;
  className?: string;
  /** Solid fill (stars, filled checks). */
  filled?: boolean;
  title?: string;
  style?: CSSProperties;
};

export default function Icon({ name, className = '', filled, title, style }: Props) {
  const def = ICONS[name] ?? ICONS[ALIAS[name]];
  if (!def && import.meta.env.DEV) console.warn(`Icon: no icon named "${name}"`);
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      data-a={def?.a}
      className={`ic ${filled ? 'ic-filled' : ''} ${className}`}
      style={style}
    >
      {title && <title>{title}</title>}
      {def?.g ?? <circle cx="12" cy="12" r="2" fill="currentColor" />}
    </svg>
  );
}
