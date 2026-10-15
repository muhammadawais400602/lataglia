// A region story page. Text fields accept light markup:
//   [label](product:<id>)  link to a catalog product (falls back to /shop if it isn't in the catalog)
//   [label](#anchor) or [label](/path)  ordinary links
//   **bold**  *italic*

export type Tone = 'green' | 'red' | 'gold' | 'neutral';

export type StoryProduct = {
  /** Catalog product id (the part after /product/). Set the same Page address in Admin → Products to link it. */
  id: string;
  name: string;
  meta: string;
  img?: string;
  /** Small label on the pantry card, e.g. "DOP Method" or "Cold Ship". */
  tag?: string;
  tagTone?: Tone;
  /** Where it comes from, shown above the name in the set grid. */
  origin?: string;
};

export type RegionStory = {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  /** Short line shown in the breadcrumb strip, e.g. "Region nineteen: the land of the tratturi". */
  kicker: string;
  subtitle: string;
  /** Card blurb for menus; defaults to the subtitle. */
  blurb?: string;
  hero: {
    /** Landscape photo. Without one, a maiolica tile pattern is shown. */
    image?: string;
    imageAlt?: string;
    dossier?: string;
    badge?: string;
    metrics?: { icon: string; label: string; value: string }[];
    heritage?: string;
    heritageNote?: string;
    imageCaption?: { title: string; body: string };
    imageTag?: string;
  };
  intro: string[];
  /** Closing line of the essay, shown as a pull quote. */
  introQuote?: string;
  pantry: {
    eyebrow?: string;
    lede: string;
    items: { title: string; place: string; body: string; lookFor: string; shelfLabel?: string; products: StoryProduct[] }[];
  };
  dishes: {
    eyebrow?: string;
    lede: string;
    items: { title: string; where: string; body: string; image?: string; tip?: string; note?: string }[];
  };
  maker?: {
    name: string;
    place: string;
    paragraphs: string[];
    photos: { src: string; alt: string; caption?: string }[];
    facts: { label: string; value: string }[];
    productsLabel?: string;
    products: StoryProduct[];
  };
  cook?: {
    eyebrow?: string;
    lede: string;
    recipe: {
      id: string;
      title: string;
      serves: string;
      time: string;
      from: string;
      image?: string;
      imageCaption?: string;
      steps: { title: string; body: string }[];
      touch: string;
      shoppingList: string[];
      products: StoryProduct[];
      /** schema.org Recipe fields for search engines (optional). */
      schema?: { yield: string; prepTime: string; cookTime: string; totalTime: string; ingredients: string[] };
    };
    shortcut?: { eyebrow?: string; title: string; body: string; image?: string; button?: string; products: StoryProduct[] };
  };
  readTheLabel?: string;
  set: { eyebrow?: string; title: string; body: string; button: string; products: StoryProduct[] };
  about: string[];
  sources: string;
};
