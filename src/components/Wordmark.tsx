// Text wordmark for Casa Taglia, used until a new logo file replaces the old La Taglia artwork.
// Sizes: sm (admin), md (header), lg (footer). `light` for dark backgrounds.
const sizes = {
  sm: { name: 'text-[22px]', sub: 'text-[7px] tracking-[0.42em]' },
  md: { name: 'text-[24px] sm:text-[30px]', sub: 'text-[7px] sm:text-[8px] tracking-[0.45em]' },
  lg: { name: 'text-[36px]', sub: 'text-[9px] tracking-[0.5em]' },
};

export default function Wordmark({ size = 'md', light = false }: { size?: keyof typeof sizes; light?: boolean }) {
  const s = sizes[size];
  return (
    <span className={`inline-flex flex-col items-center leading-none ${light ? 'text-white' : 'text-[#8B0B0A]'}`}>
      <span className={`font-headline-lg ${s.name} uppercase tracking-[0.04em] whitespace-nowrap`}>Casa Taglia</span>
      <span className={`font-headline-lg ${s.sub} uppercase mt-1 pl-[0.45em] whitespace-nowrap ${light ? 'text-white/80' : 'text-[#8B0B0A]/85'}`}>Artisanal Italy</span>
    </span>
  );
}
