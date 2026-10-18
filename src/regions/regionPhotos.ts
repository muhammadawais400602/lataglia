import { useEffect, useState } from 'react';
import { regionSlug } from './index';

// Regions without a photo of their own show the lead photo of a well-known Wikipedia article about
// one of their landmarks. One request for all of them, kept in the browser for a week.
// Swap for your own photo any time by adding "image" to the region in meta.ts.
const landmark: Record<string, string> = {
  abruzzo: 'Santo Stefano di Sessanio',
  basilicata: 'Sassi di Matera',
  'friuli-venezia-giulia': "Piazza Unità d'Italia",
  lazio: 'Civita di Bagnoregio',
  marche: 'Urbino',
  sardegna: 'Bosa',
  umbria: 'Assisi',
  veneto: 'Grand Canal (Venice)',
  liguria: 'Cinque Terre',
  "valle-daosta": 'Aosta Valley',
};

const KEY = 'lt-region-photos-v1';
const WEEK = 7 * 24 * 3600 * 1000;
let cache: Record<string, string> | null = null;
let pending: Promise<Record<string, string>> | null = null;

function readStored(): Record<string, string> | null {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) ?? 'null') as { at: number; photos: Record<string, string> } | null;
    return raw && Date.now() - raw.at < WEEK ? raw.photos : null;
  } catch {
    return null;
  }
}

async function fetchAll(): Promise<Record<string, string>> {
  const titles = Object.values(landmark);
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&redirects=1&prop=pageimages&piprop=thumbnail&pithumbsize=480&titles=${encodeURIComponent(titles.join('|'))}`;
  const body = (await (await fetch(url)).json()) as {
    query?: { pages?: Record<string, { title: string; thumbnail?: { source: string } }>; redirects?: { from: string; to: string }[]; normalized?: { from: string; to: string }[] };
  };
  const byTitle = new Map<string, string>();
  for (const p of Object.values(body.query?.pages ?? {})) if (p.thumbnail) byTitle.set(p.title, p.thumbnail.source);
  const resolve = (t: string) => {
    for (const n of body.query?.normalized ?? []) if (n.from === t) t = n.to;
    for (const r of body.query?.redirects ?? []) if (r.from === t) t = r.to;
    return byTitle.get(t);
  };
  const photos: Record<string, string> = {};
  for (const [slug, title] of Object.entries(landmark)) {
    const src = resolve(title);
    if (src) photos[slug] = src;
  }
  try {
    localStorage.setItem(KEY, JSON.stringify({ at: Date.now(), photos }));
  } catch {
    /* storage unavailable */
  }
  return photos;
}

/** Returns a function giving the best image for a region card: its own photo, else a landmark photo. */
export function useRegionImage() {
  const [photos, setPhotos] = useState<Record<string, string>>(() => (cache ??= readStored()) ?? {});
  useEffect(() => {
    if (cache) return;
    pending ??= fetchAll().catch(() => ({}));
    let live = true;
    pending.then((p) => {
      cache = p;
      if (live) setPhotos(p);
    });
    return () => {
      live = false;
    };
  }, []);
  return (r: { name: string; img: string }) => (r.img.startsWith('data:') && photos[regionSlug(r.name)]) || r.img;
}
