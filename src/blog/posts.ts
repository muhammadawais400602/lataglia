import { stories } from '../data';
import type { Product } from '../shared/types';

// Blog articles. To add one, copy a post below, give it a new slug and put it first in the list
// (newest first). The slug becomes the address: /blog/<slug>.
export type Post = {
  slug: string;
  title: string;
  tag: string;
  excerpt: string;
  read: string;
  img: string;
  /** Shop category shown under the article as "From the pantry". */
  shop?: Product['category'];
  sections: { heading?: string; paragraphs: string[] }[];
};

export const posts: Post[] = [
  {
    slug: 'the-green-gold-of-bronte',
    title: 'The green gold of Bronte',
    tag: 'Sicilia · Pistachio',
    excerpt: 'Why the pistachios grown on the lava slopes of Mount Etna taste like nothing else, and how to tell the real thing.',
    read: '5 min read',
    img: stories[0].img,
    shop: 'pistachio',
    sections: [
      {
        paragraphs: [
          'On the western slopes of Mount Etna, around the town of Bronte, pistachio trees grow out of black lava rock between roughly 400 and 900 metres above the sea. Sicilians call the nut oro verde, green gold, and since 2009 it has been protected as Pistacchio Verde di Bronte DOP.',
        ],
      },
      {
        heading: 'A harvest every other year',
        paragraphs: [
          'Bronte growers traditionally harvest only every second year. In the off year the buds are removed so the tree can rest and put its strength into the next crop. The harvest itself is done by hand: the trees grow on steep, rocky ground where machines simply cannot go.',
          'That is a large part of why Bronte pistachios are rare and expensive. The area is small, the yield is low and almost all of the work is manual.',
        ],
      },
      {
        heading: 'What makes them different',
        paragraphs: [
          'Bronte pistachios are slimmer than most, with a deep emerald kernel and a purple-red skin. The flavour is sweet and resinous, with a long, almost floral finish. The colour and aroma are what pastry chefs look for, and why a good pistachio cream from Bronte is so vividly green without any colouring.',
        ],
      },
      {
        heading: 'How to buy them',
        paragraphs: [
          'Look for the DOP mark and the words Pistacchio Verde di Bronte on the label. For creams and spreads, check the percentage of pistachio: the higher it is, the closer you are to the nut itself. Anything bright green with a long list of oils and colourings is a different product altogether.',
        ],
      },
    ],
  },
  {
    slug: 'reading-a-balsamic-label',
    title: 'IGP, condiment or Tradizionale DOP?',
    tag: 'Emilia-Romagna · Balsamic',
    excerpt: 'Three very different products share the word balsamic. Here is how to read the label and know which one you are buying.',
    read: '6 min read',
    img: stories[1].img,
    shop: 'balsamics',
    sections: [
      {
        paragraphs: [
          'Few foods are as confusing on the shelf as balsamic vinegar. The same word appears on a few-dollar supermarket bottle and on a tiny flask that costs more than a bottle of good wine. The difference is written on the label, once you know where to look.',
        ],
      },
      {
        heading: 'Aceto Balsamico Tradizionale DOP',
        paragraphs: [
          'The traditional balsamic of Modena and of Reggio Emilia is made from one ingredient: grape must, cooked down and then aged for at least twelve years in a series of barrels of different woods, each smaller than the last. Nothing else is added.',
          'It is only sold in small official bottles. In Modena, Affinato means at least 12 years and Extravecchio at least 25. In Reggio Emilia the label colour tells you the age: Aragosta, Argento and Oro, from youngest to oldest. Use it a few drops at a time, on Parmigiano Reggiano, strawberries or a finished risotto.',
        ],
      },
      {
        heading: 'Aceto Balsamico di Modena IGP',
        paragraphs: [
          'The everyday balsamic most of us know. It is made from cooked grape must blended with wine vinegar and aged for at least 60 days, or three years if labelled invecchiato. A little caramel is allowed for colour. A good IGP is a fine vinegar for dressings and cooking, just not the same thing as the Tradizionale.',
        ],
      },
      {
        heading: 'Condimento balsamico',
        paragraphs: [
          'Condiments are not covered by either designation, so what is in the bottle is up to the producer. Some are excellent, made from cooked must and aged in wood but outside the official system; others are thickened vinegar. Here the ingredient list is everything: grape must should come first.',
        ],
      },
    ],
  },
  {
    slug: 'why-bronze-die-pasta-matters',
    title: 'Why bronze-die pasta matters',
    tag: 'Campania · Pasta',
    excerpt: 'A rough surface, slow drying and the town of Gragnano: what separates artisan pasta from the factory kind.',
    read: '4 min read',
    img: stories[2].img,
    shop: 'pasta',
    sections: [
      {
        paragraphs: [
          'Dried pasta has only two ingredients, durum wheat semolina and water. What changes everything is how it is shaped and how it is dried.',
        ],
      },
      {
        heading: 'The die',
        paragraphs: [
          'Pasta gets its shape by being pushed through a die, a metal plate with holes cut in it. Most industrial pasta uses dies lined with Teflon, which are fast and leave a smooth, shiny surface. Artisan makers use bronze, trafilatura al bronzo. The dough drags against the metal and comes out rough and porous, and that texture is what lets the sauce cling to every piece.',
        ],
      },
      {
        heading: 'Slow drying',
        paragraphs: [
          'Industrial pasta is dried quickly at high heat. Artisan pasta is dried slowly, at low temperatures, sometimes over several days. It keeps more of the flavour of the wheat and gives pasta that holds its bite in the pot.',
          'Gragnano, near Naples, has been making pasta this way for centuries, helped by its sea breezes. Pasta di Gragnano IGP must be made there, with durum wheat semolina, local water and bronze dies.',
        ],
      },
      {
        heading: 'How to spot it, and cook it',
        paragraphs: [
          'Bronze-die pasta looks pale and matte, almost chalky, never glossy. Cook it in plenty of well-salted water, take it out a minute before the packet time, and finish it in the pan with the sauce and a splash of the cooking water. The starch on that rough surface turns it all into a silky coat.',
        ],
      },
    ],
  },
];

export const findPost = (slug: string) => posts.find((p) => p.slug === slug);
