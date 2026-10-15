import Layout from '../components/Layout';
import { regionCards, regionHref } from '../regions';
import { useRegionImage } from '../regions/regionPhotos';

export default function Regions() {
  const imgOf = useRegionImage();
  return (
    <Layout>
      <section className="bg-primary text-on-primary">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
          <p className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-container mb-4">Italy, region by region</p>
          <h1 className="font-display-hero italic text-[56px] leading-[1] sm:text-[84px] tracking-tight text-white">Cook Italy from its pantry</h1>
          <p className="font-headline-sm text-xl leading-snug text-white/80 max-w-2xl mt-6">
            Italian food is regional before it is Italian. Each story walks through one region’s pantry, the dishes it makes possible, and a family putting it into jars.
          </p>
        </div>
      </section>
      <section className="max-w-[1320px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regionCards.map((r) => {
            const href = regionHref(r.name);
            const Tag = href ? 'a' : 'div';
            return (
              <Tag key={r.name} href={href ?? undefined} className={`group relative rounded-xl overflow-hidden aspect-[4/5] bg-surface-container shadow block ${href ? 'hover:shadow-xl transition-all' : ''}`}>
                <div className={`size-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105`} style={{ backgroundImage: `url('${imgOf(r)}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className={`inline-block w-max mb-2 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${href ? 'bg-secondary-container text-button-ink' : 'bg-white/20 backdrop-blur'}`}>
                    {href ? 'Read the story' : 'Story coming soon'}
                  </span>
                  <h2 className="font-headline-sm text-2xl text-white mb-1">{r.name}</h2>
                  <p className="text-xs text-white/80 line-clamp-2">{r.blurb}</p>
                </div>
              </Tag>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
