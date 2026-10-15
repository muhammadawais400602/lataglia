import { useEffect, useState } from 'react';
import type { Photo, RegionStory } from './types';

export type LookedUp = { url: string; alt: string; author: string; profile: string; link: string; color?: string };

const keyOf = (p: Exclude<Photo, string>) => `${p.orientation ?? 'landscape'}|${p.q}`;

/** Every photo description used on a story page. */
export function storyPhotoQueries(s: RegionStory): string[] {
  const all: (Photo | undefined)[] = [
    s.hero.image,
    ...s.pantry.items.flatMap((i) => i.products.map((p) => p.img)),
    ...s.dishes.items.map((d) => d.image),
    ...(s.maker?.photos.map((p) => p.src) ?? []),
    ...(s.maker?.products.map((p) => p.img) ?? []),
    s.cook?.recipe.image,
    ...(s.cook?.recipe.products.map((p) => p.img) ?? []),
    s.cook?.shortcut?.image,
    ...(s.cook?.shortcut?.products.map((p) => p.img) ?? []),
    ...s.set.products.map((p) => p.img),
  ];
  return [...new Set(all.filter((p): p is Exclude<Photo, string> => !!p && typeof p !== 'string').map(keyOf))];
}

/** Looks up a page's described photos in one request; direct URLs pass straight through. */
export function usePhotos(queries: string[]) {
  const [found, setFound] = useState<Record<string, LookedUp | null>>({});
  const joined = queries.join('\n');
  useEffect(() => {
    if (!queries.length) return;
    let live = true;
    let timer: number | undefined;
    const qs = queries.map((q) => `q=${encodeURIComponent(q)}`).join('&');
    // The server looks up a few new photos per request; keep asking while some are still pending.
    const load = (attempt: number) =>
      fetch(`/api/photos?${qs}${attempt ? `&t=${attempt}` : ''}`)
        .then((r) => (r.ok ? r.json() : { photos: {}, pending: false }))
        .then((d: { photos: Record<string, LookedUp | null>; pending: boolean }) => {
          if (!live) return;
          setFound(d.photos ?? {});
          if (d.pending && attempt < 12) timer = window.setTimeout(() => load(attempt + 1), 1500);
        })
        .catch(() => {});
    load(0);
    return () => {
      live = false;
      window.clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [joined]);

  /** Image URL at a given width, or undefined while loading / when nothing suitable was found. */
  const src = (p: Photo | undefined, width = 1200): string | undefined => {
    if (!p) return undefined;
    if (typeof p === 'string') return p;
    const hit = found[keyOf(p)];
    return hit ? `${hit.url}${hit.url.includes('?') ? '&' : '?'}w=${width}&q=75&auto=format&fit=crop` : undefined;
  };
  const credits = Object.values(found).filter((x): x is LookedUp => !!x);
  return { src, credits };
}
