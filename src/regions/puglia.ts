import type { RegionStory } from './types';

// Content from the Puglia story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const puglia: RegionStory = {
  "slug": "puglia",
  "name": "Puglia",
  "seoTitle": "Puglian Food and Pantry Ingredients | Italy Region by Region | La Taglia",
  "seoDescription": "Cook Puglia from its pantry: Coratina olive oil, burrata di Andria, orecchiette, taralli, Cerignola olives and Canestrato Pugliese, with a recipe for orecchiette con le cime di rapa.",
  "kicker": "Region six: the heel",
  "subtitle": "Olive groves, golden wheat, and two seas.",
  "hero": {
    "color": "#8A5A1F",
    "colorDeep": "#5E3C12",
    "dossier": "Terroir archive · Dossier N° 06",
    "badge": "Granary of Italy",
    "metrics": [
      {
        "icon": "waves",
        "label": "Seas",
        "value": "Adriatic and Ionian"
      },
      {
        "icon": "agriculture",
        "label": "Granary",
        "value": "The Tavoliere"
      },
      {
        "icon": "castle",
        "label": "Landmark",
        "value": "Trulli of the Itria"
      },
      {
        "icon": "eco",
        "label": "Olive oil",
        "value": "Italy’s top producer"
      }
    ],
    "heritage": "Cucina povera heritage",
    "imageCaption": {
      "title": "The Itria valley",
      "body": "Cone-roofed stone trulli and fortified masserie, where Puglians worked the land."
    },
    "imageTag": "Itria valley · Murgia",
    "heritageNote": "granary of italy",
    "image": {
      "q": "Itria valley Puglia || Puglia landscape",
      "orientation": "landscape"
    },
    "imageAlt": "Cone-roofed stone trulli and fortified masserie, where Puglians worked the land."
  },
  "intro": [
    "Puglia is the heel of Italy’s boot, a long, mostly flat region with a longer coastline than any other on the mainland, washed by the Adriatic on one side and the Ionian on the other. In the north, the wheat fields of the Tavoliere earned it the name “granary of Italy”; in the middle rise the limestone uplands of the Murgia; and in the south, the Salento peninsula reaches toward Greece. Greek colonists founded Taranto, the Via Appia ended at Brindisi, and Normans, the emperor Frederick II, and Spanish viceroys all left castles and churches behind. Most Puglians, though, worked the land from fortified farmhouses called masserie and the cone-roofed stone trulli of the Itria valley, and their cooking made the most of what grew: durum wheat, vegetables, beans, and olive oil from tens of millions of trees. It is Italy’s great cucina povera, humble ingredients turned into some of the most satisfying food in the country.",
    "Puglia produces more olive oil than any other Italian region and some of its finest durum wheat. Start with the ingredients that define it, learn the dishes they make possible, and meet a family of olive millers working the same land for five generations."
  ],
  "pantry": {
    "lede": "Six ingredients behind Puglia’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Olive oil",
        "place": "From the Gargano to the Salento",
        "body": "Puglian oil ranges from mild and buttery to the intense Coratina of the Bari hills, bitter and peppery with unusually high polyphenols. Since 2013 a bacterial blight has devastated the ancient groves of the Salento, making the oils of the north more important than ever.",
        "lookFor": "Terra di Bari, Dauno, Collina di Brindisi, or Terra d’Otranto DOP, with a recent harvest date.",
        "products": [
          {
            "id": "pug-olio-coratina",
            "name": "Puglian Coratina extra-virgin olive oil",
            "meta": "Bottle, new harvest",
            "tag": "New harvest",
            "tagTone": "green",
            "origin": "Bari hills",
            "img": {
              "q": "Puglian Coratina extra-virgin olive oil Puglia || Puglian Coratina extra-virgin olive oil || Olive oil food",
              "orientation": "squarish"
            }
          }
        ]
      },
      {
        "title": "Burrata",
        "place": "Andria and the Murgia",
        "body": "A pouch of fresh mozzarella filled with stracciatella, soft shreds of curd soaked in cream. Created in Andria in the early twentieth century, it is best eaten within a day or two, at room temperature.",
        "lookFor": "Burrata di Andria IGP.",
        "products": [
          {
            "id": "pug-burrata",
            "name": "Burrata di Andria IGP",
            "meta": "Fresh",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Andria",
            "img": {
              "q": "Burrata di Andria Puglia || Burrata di Andria || Burrata food",
              "orientation": "squarish"
            }
          }
        ]
      },
      {
        "title": "Orecchiette",
        "place": "Bari",
        "body": "“Little ears” of durum wheat semolina and water, pressed with a knife and turned over the thumb. In the old town of Bari, women still shape them by hand on tables in the street.",
        "lookFor": "only durum wheat semolina and water on the label, ideally Puglian wheat and bronze dies.",
        "products": [
          {
            "id": "pug-orecchiette",
            "name": "Orecchiette from Puglia",
            "meta": "500 g",
            "tag": "Durum wheat",
            "tagTone": "neutral",
            "origin": "Bari",
            "img": {
              "q": "Orecchiette from Puglia || Orecchiette food",
              "orientation": "squarish"
            }
          }
        ]
      },
      {
        "title": "Taralli",
        "place": "Across the region",
        "body": "Small rings of dough made with olive oil and white wine, boiled and then baked until crunchy, often flavored with fennel seed or chili. Puglia’s constant snack, with a glass of wine before dinner.",
        "lookFor": "extra-virgin olive oil in the ingredients, not other fats.",
        "products": [
          {
            "id": "pug-taralli",
            "name": "Taralli with fennel seed",
            "meta": "Bag",
            "tag": "Fennel seed",
            "tagTone": "neutral",
            "origin": "Puglia",
            "img": {
              "q": "Taralli with fennel seed Puglia || Taralli with fennel seed || Taralli food",
              "orientation": "squarish"
            }
          }
        ]
      },
      {
        "title": "Bella di Cerignola olives",
        "place": "Cerignola, on the Tavoliere plain",
        "body": "Some of the largest table olives in the world, mild, meaty, and buttery. Bright green, black, or occasionally dyed red, they are made for eating, not pressing.",
        "lookFor": "La Bella della Daunia DOP.",
        "products": [
          {
            "id": "pug-cerignola",
            "name": "Bella di Cerignola olives",
            "meta": "Jar",
            "tag": "Table olive",
            "tagTone": "neutral",
            "origin": "Cerignola",
            "img": {
              "q": "Bella di Cerignola olives Puglia || Bella di Cerignola olives || Bella di Cerignola olives food",
              "orientation": "squarish"
            }
          }
        ]
      },
      {
        "title": "Canestrato Pugliese",
        "place": "The provinces of Foggia and Bari",
        "body": "A hard sheep’s-milk cheese aged in woven rush baskets, or canestri, that leave their pattern on the rind. Sharp and savory, it is grated over pasta or eaten in chunks.",
        "lookFor": "Canestrato Pugliese DOP.",
        "products": [
          {
            "id": "pug-canestrato",
            "name": "Canestrato Pugliese DOP",
            "meta": "Wedge",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Foggia and Bari",
            "img": {
              "q": "Canestrato Pugliese Puglia || Canestrato Pugliese || Canestrato Pugliese food",
              "orientation": "squarish"
            }
          }
        ]
      }
    ],
    "eyebrow": "Essential terroir goods"
  },
  "dishes": {
    "lede": "Four dishes Puglia makes its own.",
    "items": [
      {
        "title": "Orecchiette con le cime di rapa",
        "where": "Bari",
        "body": "Orecchiette and bitter turnip greens cooked in the same pot, then tossed with garlic, anchovy, chili, and plenty of olive oil. The defining dish of Puglia.",
        "tip": "[Cook it below](#orecchiette)",
        "image": {
          "q": "Orecchiette con le cime di rapa Puglia food || Orecchiette con le cime di rapa food",
          "orientation": "landscape"
        }
      },
      {
        "title": "Fave e cicoria",
        "where": "Across the region",
        "body": "A smooth purée of dried fava beans served with bitter wild chicory and a pool of raw olive oil. Peasant food at its most elegant.",
        "tip": "Dress it with your best [Coratina oil](product:pug-olio-coratina).",
        "image": {
          "q": "Fave e cicoria Puglia food || Fave e cicoria food",
          "orientation": "landscape"
        }
      },
      {
        "title": "Tiella barese",
        "where": "Bari",
        "body": "Rice, potatoes, and mussels layered in a pan with tomato, onion, and pecorino, then baked until the top crisps. A Spanish-era cousin of paella.",
        "note": "Spanish-era cousin of paella",
        "image": {
          "q": "Tiella barese Puglia food || Tiella barese food",
          "orientation": "landscape"
        }
      },
      {
        "title": "Focaccia barese",
        "where": "Bari",
        "body": "Thick, soft focaccia with a crisp, oily base, studded with cherry tomatoes and olives and scattered with oregano. Often made with a little potato in the dough.",
        "note": "Crisp, oily base",
        "image": {
          "q": "Focaccia barese Puglia food || Focaccia barese food",
          "orientation": "landscape"
        }
      }
    ],
    "eyebrow": "Culinary canon"
  },
  "maker": {
    "name": "Frantoio Muraglia",
    "place": "Andria",
    "paragraphs": [
      "In Andria, which calls itself the capital of Puglian olive oil, the Muraglia family has been pressing olives for five generations. The story begins with a single tree: a Coratina olive believed to be more than 450 years old, which Savino Muraglia senior bought to make oil despite being told there was no fortune in land and olives.",
      "Today the family’s groves spread across the limestone uplands of the Murgia. The olives are still picked by hand and cold-pressed, mostly Coratina, the local variety known for its bitterness, pepper, and unusually high polyphenols. The oil that began with one stubborn great-great-grandfather is now sold in dozens of countries."
    ],
    "photos": [
      {
        "src": {
          "q": "olive grove Andria Puglia || olive grove Puglia || Andria Puglia",
          "orientation": "landscape"
        },
        "alt": "Coratina groves · the Murgia",
        "caption": "Coratina groves · the Murgia"
      },
      {
        "src": {
          "q": "mill harvest Andria Puglia || mill harvest Puglia || Andria Puglia",
          "orientation": "landscape"
        },
        "alt": "Hand-picked, cold-pressed",
        "caption": "Hand-picked, cold-pressed"
      },
      {
        "src": {
          "q": "Frantoio Muraglia Coratina extra-virgin olive oil Andria Puglia || Frantoio Muraglia Coratina extra-virgin olive oil Puglia || Andria Puglia",
          "orientation": "landscape"
        },
        "alt": "Muraglia Coratina oil",
        "caption": "Muraglia Coratina oil"
      }
    ],
    "facts": [
      {
        "label": "Based in",
        "value": "Andria"
      },
      {
        "label": "Family",
        "value": "Five generations"
      },
      {
        "label": "Oldest tree",
        "value": "450+ years"
      }
    ],
    "productsLabel": "From Frantoio Muraglia",
    "products": [
      {
        "id": "pug-muraglia-coratina",
        "name": "Frantoio Muraglia Coratina extra-virgin olive oil",
        "meta": "Bottle",
        "tag": "Cold-pressed",
        "tagTone": "gold",
        "origin": "Andria",
        "img": {
          "q": "Frantoio Muraglia Coratina extra-virgin olive oil Puglia || Frantoio Muraglia Coratina extra-virgin olive oil",
          "orientation": "squarish"
        }
      }
    ]
  },
  "cook": {
    "title": "Cook Puglia",
    "lede": "One classic from scratch and one ten-minute shortcut from Andria.",
    "recipe": {
      "id": "orecchiette",
      "title": "Orecchiette con le cime di rapa",
      "serves": "4",
      "time": "about 30 minutes",
      "from": "Bari",
      "steps": [
        {
          "title": "Prepare the greens.",
          "body": "Trim the cime di rapa, keeping the tender leaves, buds, and thin stems. Discard any tough, woody stalks."
        },
        {
          "title": "Cook pasta and greens together.",
          "body": "Boil the orecchiette in well-salted water. About 6 minutes before the pasta is done, add the greens to the same pot."
        },
        {
          "title": "Make the dressing.",
          "body": "Meanwhile, warm the olive oil with the garlic, anchovies, and chili in a wide pan over low heat, stirring until the anchovies melt into the oil."
        },
        {
          "title": "Toss and serve.",
          "body": "Drain the pasta and greens, keeping a mug of the water. Toss everything in the pan with the anchovy oil and a splash of water until glossy. Serve with a pour of raw olive oil and the toasted breadcrumbs."
        }
      ],
      "touch": "Skip the cheese. In Puglia, crisp breadcrumbs toasted in olive oil take its place, and a final pour of peppery [Coratina oil](product:pug-olio-coratina) pulls the dish together. In the US, broccoli rabe is the same plant.",
      "shoppingList": [
        "400 g [orecchiette](product:pug-orecchiette)",
        "1 kg cime di rapa (broccoli rabe)",
        "5 tbsp [extra-virgin olive oil](product:pug-olio-coratina), plus more",
        "2 garlic cloves",
        "4–6 anchovy fillets in oil",
        "Dried chili",
        "40 g dried breadcrumbs",
        "Salt"
      ],
      "products": [
        {
          "id": "pug-orecchiette",
          "name": "Orecchiette from Puglia",
          "meta": "500 g",
          "tag": "Durum wheat",
          "tagTone": "neutral",
          "origin": "Bari",
          "img": {
            "q": "Orecchiette from Puglia || Orecchiette food",
            "orientation": "squarish"
          }
        },
        {
          "id": "pug-olio-coratina",
          "name": "Puglian Coratina extra-virgin olive oil",
          "meta": "Bottle, new harvest",
          "tag": "New harvest",
          "tagTone": "green",
          "origin": "Bari hills",
          "img": {
            "q": "Puglian Coratina extra-virgin olive oil Puglia || Puglian Coratina extra-virgin olive oil || Olive oil food",
            "orientation": "squarish"
          }
        }
      ],
      "schema": {
        "yield": "4 servings",
        "prepTime": "PT10M",
        "cookTime": "PT20M",
        "totalTime": "PT30M",
        "ingredients": [
          "400 g dried orecchiette",
          "1 kg cime di rapa (broccoli rabe)",
          "5 tablespoons extra-virgin olive oil, plus more to serve",
          "2 garlic cloves, sliced",
          "4–6 anchovy fillets in oil",
          "A pinch of dried chili",
          "40 g dried breadcrumbs, toasted in a little oil (optional)",
          "Salt"
        ]
      },
      "imageCaption": "Bari classic · about 30 minutes",
      "image": {
        "q": "Orecchiette con le cime di rapa Puglia food || Orecchiette con le cime di rapa food",
        "orientation": "landscape"
      }
    },
    "shortcut": {
      "title": "Ten minutes in Andria",
      "body": "Take a burrata out of the fridge half an hour ahead. Set it on a plate with halved cherry tomatoes, tear it open at the table, and finish with salt, black pepper, and a generous pour of olive oil. Add a bowl of taralli and Cerignola olives, and you have a Puglian aperitivo.",
      "products": [
        {
          "id": "pug-burrata",
          "name": "Burrata di Andria IGP",
          "meta": "Fresh",
          "tag": "IGP",
          "tagTone": "green",
          "origin": "Andria",
          "img": {
            "q": "Burrata di Andria Puglia || Burrata di Andria || Burrata food",
            "orientation": "squarish"
          }
        },
        {
          "id": "pug-taralli",
          "name": "Taralli with fennel seed",
          "meta": "Bag",
          "tag": "Fennel seed",
          "tagTone": "neutral",
          "origin": "Puglia",
          "img": {
            "q": "Taralli with fennel seed Puglia || Taralli with fennel seed || Taralli food",
            "orientation": "squarish"
          }
        }
      ],
      "eyebrow": "Aperitivo shortcut",
      "button": "Get the aperitivo pair"
    },
    "eyebrow": "Terroir kitchen"
  },
  "readTheLabel": "“Packed in Italy” on olive oil can mean olives grown anywhere, and most burrata sold in the US is made far from Puglia. Check the place of production, the harvest date, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Puglia home",
    "body": "A Puglian table needs good wheat, great oil, and something to share before the meal. We’ve gathered eight ingredients from this story into one set: enough for a pot of orecchiette, a plate of fave e cicoria, and an aperitivo to start.",
    "button": "Add the Puglia pantry set",
    "products": [
      {
        "id": "pug-olio-coratina",
        "name": "Coratina olive oil",
        "meta": "New harvest",
        "tag": "New harvest",
        "tagTone": "green",
        "origin": "Bari hills",
        "img": {
          "q": "Puglian Coratina extra-virgin olive oil Puglia || Puglian Coratina extra-virgin olive oil || Olive oil food",
          "orientation": "squarish"
        }
      },
      {
        "id": "pug-burrata",
        "name": "Burrata di Andria IGP",
        "meta": "Fresh",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "Andria",
        "img": {
          "q": "Burrata di Andria Puglia || Burrata di Andria || Burrata food",
          "orientation": "squarish"
        }
      },
      {
        "id": "pug-orecchiette",
        "name": "Orecchiette",
        "meta": "500 g",
        "tag": "Durum wheat",
        "tagTone": "neutral",
        "origin": "Bari",
        "img": {
          "q": "Orecchiette from Puglia || Orecchiette food",
          "orientation": "squarish"
        }
      },
      {
        "id": "pug-taralli",
        "name": "Taralli with fennel",
        "meta": "Bag",
        "tag": "Fennel seed",
        "tagTone": "neutral",
        "origin": "Puglia",
        "img": {
          "q": "Taralli with fennel seed Puglia || Taralli with fennel seed || Taralli food",
          "orientation": "squarish"
        }
      },
      {
        "id": "pug-cerignola",
        "name": "Bella di Cerignola olives",
        "meta": "Jar",
        "tag": "Table olive",
        "tagTone": "neutral",
        "origin": "Cerignola",
        "img": {
          "q": "Bella di Cerignola olives Puglia || Bella di Cerignola olives || Bella di Cerignola olives food",
          "orientation": "squarish"
        }
      },
      {
        "id": "pug-canestrato",
        "name": "Canestrato Pugliese DOP",
        "meta": "Wedge",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Foggia and Bari",
        "img": {
          "q": "Canestrato Pugliese Puglia || Canestrato Pugliese || Canestrato Pugliese food",
          "orientation": "squarish"
        }
      },
      {
        "id": "pug-fave",
        "name": "Dried split fava beans",
        "meta": "Bag",
        "tag": "Pantry staple",
        "tagTone": "neutral",
        "origin": "For fave e cicoria",
        "img": {
          "q": "Dried split fava beans Puglia || Dried split fava beans",
          "orientation": "squarish"
        }
      },
      {
        "id": "pug-muraglia-coratina",
        "name": "Frantoio Muraglia oil",
        "meta": "Bottle",
        "tag": "Cold-pressed",
        "tagTone": "gold",
        "origin": "Andria",
        "img": {
          "q": "Frantoio Muraglia Coratina extra-virgin olive oil Puglia || Frantoio Muraglia Coratina extra-virgin olive oil",
          "orientation": "squarish"
        }
      }
    ],
    "eyebrow": "Limited curation · Parcel N° 06"
  },
  "about": [
    "La Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "Consorzio di Tutela Burrata di Andria IGP; Consorzio di Tutela La Bella della Daunia DOP; Regione Puglia; European Commission eAmbrosia register; Pitti Taste exhibitor profile for Frantoio Muraglia."
};

export default puglia;
