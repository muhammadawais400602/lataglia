import { regions as baseCards } from '../data';
import molise from './molise';
import sicilia from './sicilia';
import type { RegionStory } from './types';

// Add a new region: create src/regions/<slug>.ts (copy molise.ts) and list it here.
export const stories: Record<string, RegionStory> = { sicilia, molise };

export const regionSlug = (name: string) => name.toLowerCase().normalize('NFD').replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');

/** Where a region card should go: its story if there is one. */
export const regionHref = (name: string) => (stories[regionSlug(name)] ? `/regions/${regionSlug(name)}` : null);

type Card = (typeof baseCards)[number];

/** Every region: the home-page cards plus any story region that has no card yet. */
export const regionCards: Card[] = [
  ...baseCards,
  ...Object.values(stories)
    .filter((s) => !baseCards.some((c) => regionSlug(c.name) === s.slug))
    .map((s) => ({ name: s.name, blurb: s.blurb ?? s.subtitle, img: s.hero.image ?? '' })),
];

/** Eight regions for the menu and home grid: those with a story first, then the rest in order. */
export const featuredRegions: Card[] = [...regionCards.filter((c) => regionHref(c.name)), ...regionCards.filter((c) => !regionHref(c.name))].slice(0, 8);
