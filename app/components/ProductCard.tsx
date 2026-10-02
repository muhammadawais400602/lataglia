import type { Product } from "../lib/homepage-data";

const toneClass: Record<NonNullable<Product["badge"]>["tone"], string> = {
  gold: "bg-amber text-button-ink",
  amber: "bg-[#9a6a00] text-white",
  wine: "bg-primary text-white",
  pistachio: "bg-[#4e6a22] text-white",
  red: "bg-status-red text-white",
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative flex flex-col justify-between p-4 bg-white border border-border-line rounded hover:shadow-lg transition-shadow">
      {product.badge && (
        <span
          className={`absolute top-6 left-6 z-10 text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${toneClass[product.badge.tone]}`}
        >
          {product.badge.label}
        </span>
      )}
      <div className="aspect-square w-full rounded overflow-hidden mb-4 bg-surface-soft">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div>
        <span className="text-xs text-ink-tertiary uppercase tracking-wider block mb-1">
          {product.producer}
        </span>
        <h3 className="font-serif text-base mb-1">{product.name}</h3>
        <p className="text-primary font-bold text-base mt-2">{product.price}</p>
      </div>
      <button className="mt-4 w-full py-2 bg-[#f0eded] hover:bg-primary hover:text-white text-ink font-sans text-xs font-bold uppercase tracking-wider rounded transition-colors">
        Add to Bag
      </button>
    </div>
  );
}
