import { regions as regionCards } from '../data';
import sicilia from './sicilia';
import type { RegionStory } from './types';

// Add a new region: create src/regions/<slug>.ts (copy sicilia.ts) and list it here.
export const stories: Record<string, RegionStory> = { sicilia };

export const regionSlug = (name: string) => name.toLowerCase().normalize('NFD').replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');

/** Where a region card should go: its story if there is one, otherwise the shop. */
export const regionHref = (name: string) => (stories[regionSlug(name)] ? `/regions/${regionSlug(name)}` : null);

export { regionCards };
