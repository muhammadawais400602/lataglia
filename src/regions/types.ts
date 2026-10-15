// A region story page. Text fields accept light markup:
//   [label](product:<id>)  link to a catalog product (falls back to /shop if it isn't in the catalog)
//   [label](#anchor) or [label](/path)  ordinary links
//   **bold**

export type StoryProduct = {
  /** Catalog product id (the part after /product/). Set the same id in Admin → Products to link it. */
  id: string;
  name: string;
  meta: string;
  img: string;
};

export type RegionStory = {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  kicker: string;
  subtitle: string;
  intro: string[];
  pantry: {
    lede: string;
    items: { title: string; place: string; body: string; lookFor: string; shelfLabel?: string; products: StoryProduct[] }[];
  };
  dishes: { lede: string; items: { title: string; where: string; body: string; tip: string }[] };
  maker?: {
    name: string;
    place: string;
    paragraphs: string[];
    photos: { src: string; alt: string }[];
    facts: { label: string; value: string }[];
    products: StoryProduct[];
  };
  cook?: {
    lede: string;
    recipe: {
      id: string;
      title: string;
      serves: string;
      time: string;
      from: string;
      steps: { title: string; body: string }[];
      touch: string;
      shoppingList: string[];
      products: StoryProduct[];
      /** schema.org Recipe fields for search engines */
      schema: { yield: string; prepTime: string; cookTime: string; totalTime: string; ingredients: string[] };
    };
    shortcut?: { title: string; body: string; products: StoryProduct[] };
  };
  readTheLabel?: string;
  set: { title: string; body: string; button: string; products: StoryProduct[] };
  about: string[];
  sources: string;
};
