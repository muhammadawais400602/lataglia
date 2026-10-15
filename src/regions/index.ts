import { regions as baseCards } from '../data';
import { regionMeta } from './meta';
import type { RegionStory } from './types';

// Add a new region: create src/regions/<slug>.ts (copy any existing file) and add a line to meta.ts.
// Story content is split per region and loaded only when its page opens.
const loaders = import.meta.glob<{ default: RegionStory }>(['./*.ts', '!./index.ts', '!./meta.ts', '!./types.ts']);

export const hasStory = (slug: string) => regionMeta.some((m) => m.slug === slug);

export async function loadStory(slug: string): Promise<RegionStory | null> {
  const load = hasStory(slug) ? loaders[`./${slug}.ts`] : undefined;
  if (!load) return null;
  const story = (await load()).default;
  // The site's own region photo (home-page card) wins over a described Unsplash banner.
  const card = baseCards.find((c) => regionSlug(c.name) === slug);
  return card && typeof story.hero.image !== 'string' ? { ...story, hero: { ...story.hero, image: card.img } } : story;
}

export const regionSlug = (name: string) => name.toLowerCase().normalize('NFD').replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');

/** Where a region card should go: its story if there is one. */
export const regionHref = (name: string) => (hasStory(regionSlug(name)) ? `/regions/${regionSlug(name)}` : null);

type Card = (typeof baseCards)[number];

/** Maiolica tile in a region's banner colour, as an image URL for cards without a photo. */
export function tilePattern(color = '#6E1626') {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100"><rect width="100" height="100" fill="#FBF6EC"/><g fill="${color}"><circle r="26"/><circle cx="100" r="26"/><circle cy="100" r="26"/><circle cx="100" cy="100" r="26"/></g><g fill="#FBF6EC"><circle r="14"/><circle cx="100" r="14"/><circle cy="100" r="14"/><circle cx="100" cy="100" r="14"/></g><g fill="#FEB62C"><ellipse cx="50" cy="31" rx="9" ry="17"/><ellipse cx="50" cy="69" rx="9" ry="17"/><ellipse cx="31" cy="50" rx="17" ry="9"/><ellipse cx="69" cy="50" rx="17" ry="9"/></g><circle cx="50" cy="50" r="8" fill="#D62F3A"/><circle cx="50" cy="50" r="3" fill="#FBF6EC"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/** Every region: the home-page cards plus any story region that has no card yet. */
export const regionCards: Card[] = [
  ...baseCards,
  ...regionMeta
    .filter((m) => !baseCards.some((c) => regionSlug(c.name) === m.slug))
    .map((m) => ({ name: m.name, blurb: m.blurb, img: m.image ?? tilePattern(m.color) })),
];

/** Eight regions for the menu and home grid: those with a story first, then the rest in order. */
export const featuredRegions: Card[] = [...regionCards.filter((c) => regionHref(c.name)), ...regionCards.filter((c) => !regionHref(c.name))].slice(0, 8);
