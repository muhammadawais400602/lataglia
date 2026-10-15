import type { RegionStory } from './types';

// Content from the Basilicata story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const basilicata: RegionStory = {
  "slug": "basilicata",
  "name": "Basilicata",
  "seoTitle": "Food and Pantry Ingredients of Basilicata | Italy Region by Region | La Taglia",
  "seoDescription": "Cook Basilicata from its pantry: Senise peppers, Pane di Matera, Sarconi beans, Canestrato di Moliterno, red eggplant of Rotonda and lucanica, with a recipe for pasta with peperoni cruschi.",
  "kicker": "Region eighteen: the land of Lucania",
  "subtitle": "Crisp red peppers, durum-wheat bread, and the cave city of Matera.",
  "hero": {
    "color": "#5A5A2E",
    "colorDeep": "#3D3D1F",
    "dossier": "Terroir archive · Dossier N° 18",
    "badge": "UNESCO Sassi of Matera",
    "metrics": [
      {
        "icon": "history_edu",
        "label": "Ancient name",
        "value": "Lucania"
      },
      {
        "icon": "castle",
        "label": "Landmark",
        "value": "Sassi of Matera"
      },
      {
        "icon": "location_city",
        "label": "Culture capital",
        "value": "Matera, 2019"
      },
      {
        "icon": "restaurant",
        "label": "Signature",
        "value": "Peperoni cruschi"
      }
    ],
    "heritage": "Waste-nothing kitchen",
    "imageCaption": {
      "title": "The Sassi of Matera",
      "body": "Matera’s cave dwellings, a UNESCO World Heritage Site, in the European Capital of Culture of 2019."
    },
    "imageTag": "Matera · the Sassi",
    "heritageNote": "a kitchen that wastes nothing",
    "image": {
      "q": "Sassi of Matera Basilicata || Basilicata landscape",
      "orientation": "landscape"
    },
    "imageAlt": "Matera’s cave dwellings, a UNESCO World Heritage Site, in the European Capital of Culture of 2019."
  },
  "intro": [
    "Basilicata, also known by its ancient name Lucania, sits in the instep of Italy’s boot between Campania, Puglia, and Calabria, a land of mountains, valleys, and deep ravines that touches the sea only briefly on two coasts. Its most famous city is Matera, whose cave dwellings, the Sassi, are a UNESCO World Heritage Site; in 2019 Matera was European Capital of Culture. For centuries this was farming and shepherding country, crossed by transhumance routes and shaped by poverty, and its cooks learned to waste nothing. Durum wheat became bread that kept for a week; red peppers were dried in strings in the August sun; stale bread, beans, and grains became soups and toppings for pasta. The result is a cuisine once called “poor,” now prized for its honesty and built on a few ingredients of real character.",
    "Basilicata is one of Italy’s best-kept food secrets. Start with the ingredients that define it, learn the dishes they make possible, and meet a Matera family whose bread won the title of Italy’s best."
  ],
  "pantry": {
    "lede": "Six ingredients behind Basilicata’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Senise peppers",
        "place": "Senise and the Pollino National Park",
        "body": "Sweet red peppers, pointed, blunt, or hooked, picked by hand in August and strung in braids to dry in the sun. Fried for a few seconds in olive oil, they turn into peperoni cruschi, crisp and deep red, known as the “red gold” of Basilicata.",
        "lookFor": "Peperone di Senise IGP.",
        "products": [
          {
            "id": "bas-peperoni-senise",
            "name": "Peperone di Senise IGP, dried",
            "meta": "Braid or bag",
            "tag": "IGP",
            "tagTone": "red",
            "origin": "Senise",
            "img": {
              "q": "Peperone di Senise Basilicata || Peperone di Senise || Senise peppers food",
              "orientation": "squarish"
            }
          }
        ]
      },
      {
        "title": "Pane di Matera",
        "place": "Matera",
        "body": "Bread of remilled durum-wheat semolina from local varieties, including Senatore Cappelli, leavened with a natural starter made from macerated fruit and baked in wood-fired ovens. It keeps for a week or more. Families once marked their loaves with carved wooden stamps before taking them to the communal oven.",
        "lookFor": "Pane di Matera IGP.",
        "products": [
          {
            "id": "bas-pane-matera",
            "name": "Pane di Matera IGP",
            "meta": "Loaf",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Matera",
            "img": {
              "q": "Pane di Matera Basilicata || Pane di Matera || Pane di Matera food",
              "orientation": "squarish"
            }
          }
        ]
      },
      {
        "title": "Sarconi beans",
        "place": "The upper Val d’Agri",
        "body": "Beans from the high valley between Monte Sirino and Monte Volturino, a staple of Lucania’s legume-rich cooking.",
        "lookFor": "Fagiolo di Sarconi IGP.",
        "products": [
          {
            "id": "bas-fagioli-sarconi",
            "name": "Fagiolo di Sarconi IGP",
            "meta": "500 g",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Val d’Agri",
            "img": {
              "q": "Fagiolo di Sarconi Basilicata || Fagiolo di Sarconi || Sarconi beans food",
              "orientation": "squarish"
            }
          }
        ]
      },
      {
        "title": "Canestrato di Moliterno",
        "place": "Moliterno",
        "body": "A hard cheese from a historic transhumance town, made from whole goat’s and sheep’s milk with a smaller share of cow’s milk.",
        "lookFor": "Canestrato di Moliterno IGP.",
        "products": [
          {
            "id": "bas-canestrato",
            "name": "Canestrato di Moliterno IGP",
            "meta": "Wedge",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Moliterno",
            "img": {
              "q": "Canestrato di Moliterno Basilicata || Canestrato di Moliterno || Canestrato di Moliterno food",
              "orientation": "squarish"
            }
          }
        ]
      },
      {
        "title": "Red eggplant",
        "place": "Rotonda, in the Pollino",
        "body": "It looks like a tomato but is an eggplant, with a slightly spicy flavor. Good in sauces, fried, or stuffed.",
        "lookFor": "Melanzana Rossa di Rotonda DOP.",
        "products": [
          {
            "id": "bas-melanzana-rossa",
            "name": "Melanzana Rossa di Rotonda DOP, preserved",
            "meta": "Jar",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Rotonda",
            "img": {
              "q": "Melanzana Rossa di Rotonda Basilicata || Melanzana Rossa di Rotonda || Red eggplant food",
              "orientation": "squarish"
            }
          }
        ]
      },
      {
        "title": "Lucanica",
        "place": "Across the region",
        "body": "Basilicata’s pork sausage, recognizable by its fennel seed and a fixture of local salumi boards.",
        "lookFor": "lucanica made in Basilicata, such as Lucanica di Picerno.",
        "products": [
          {
            "id": "bas-lucanica",
            "name": "Lucanica",
            "meta": "Whole",
            "tag": "Fennel seed",
            "tagTone": "neutral",
            "origin": "Basilicata",
            "img": {
              "q": "Lucanica Basilicata || Lucanica || Lucanica food",
              "orientation": "squarish"
            }
          }
        ]
      }
    ],
    "eyebrow": "Essential terroir goods"
  },
  "dishes": {
    "lede": "Four dishes Basilicata makes its own.",
    "items": [
      {
        "title": "Pasta con i peperoni cruschi",
        "where": "Across the region",
        "body": "Homemade pasta tossed with toasted breadcrumbs and crumbled crisp peppers, the region’s signature first course.",
        "tip": "[Cook it below](#cruschi)",
        "image": {
          "q": "Pasta con i peperoni cruschi Basilicata food || Pasta con i peperoni cruschi food",
          "orientation": "landscape"
        }
      },
      {
        "title": "Crapiata",
        "where": "Matera",
        "body": "An ancient Materan soup of mixed legumes and grains, perfect for warming up on cold days.",
        "tip": "Start with [Sarconi beans](product:bas-fagioli-sarconi).",
        "image": {
          "q": "Crapiata Basilicata food || Crapiata food",
          "orientation": "landscape"
        }
      },
      {
        "title": "Baccalà alla lucana",
        "where": "Avigliano and Potenza",
        "body": "Salt cod, often cooked with crisp peppers, olives, and tomatoes. Avigliano holds a baccalà festival each August.",
        "note": "Avigliano’s August festival",
        "image": {
          "q": "Baccalà alla lucana Basilicata food || Baccalà alla lucana food",
          "orientation": "landscape"
        }
      },
      {
        "title": "Acquasala",
        "where": "Across the region",
        "body": "A thrifty one-dish meal of stale bread, eggs, tomato, and crushed peppers, a classic of the kitchen that wastes nothing.",
        "note": "A thrifty one-dish meal",
        "image": {
          "q": "Acquasala Basilicata food || Acquasala food",
          "orientation": "landscape"
        }
      }
    ],
    "eyebrow": "Lucanian canon"
  },
  "maker": {
    "name": "Perrone",
    "place": "Matera",
    "paragraphs": [
      "The Perrone family has been baking bread in Matera since 1918, in a historic bakery on Via delle Cererie, today called Pane e Pace. In 2019, the year Matera was European Capital of Culture, Gambero Rosso’s bread guide named it the best bakery in Italy.",
      "The bakery makes Pane di Matera IGP alongside some two dozen other breads, all from local flours. Gambero Rosso praised its century of repeated gestures, which have become a symbol of the city’s identity."
    ],
    "photos": [
      {
        "src": {
          "q": "wood-fired oven Matera Basilicata || wood-fired oven Basilicata || Matera Basilicata",
          "orientation": "landscape"
        },
        "alt": "Wood-fired oven · Perrone",
        "caption": "Wood-fired oven · Perrone"
      },
      {
        "src": {
          "q": "Matera loaves Basilicata || Matera Basilicata",
          "orientation": "landscape"
        },
        "alt": "Pane di Matera loaves",
        "caption": "Pane di Matera loaves"
      },
      {
        "src": {
          "q": "Matera Basilicata",
          "orientation": "landscape"
        },
        "alt": "Matera · baking since 1918",
        "caption": "Matera · baking since 1918"
      }
    ],
    "facts": [
      {
        "label": "Baking since",
        "value": "1918"
      },
      {
        "label": "City",
        "value": "Matera"
      },
      {
        "label": "Breads",
        "value": "About two dozen"
      }
    ],
    "productsLabel": "From Perrone",
    "products": [
      {
        "id": "bas-perrone-pane",
        "name": "Perrone Pane di Matera IGP",
        "meta": "Loaf",
        "tag": "Since 1918",
        "tagTone": "gold",
        "origin": "Matera",
        "img": {
          "q": "Perrone Pane di Matera Basilicata || Perrone Pane di Matera",
          "orientation": "squarish"
        }
      }
    ]
  },
  "cook": {
    "title": "Cook Basilicata",
    "lede": "One classic from scratch and one ten-minute shortcut from Senise.",
    "recipe": {
      "id": "cruschi",
      "title": "Pasta con peperoni cruschi e mollica",
      "serves": "4",
      "time": "about 25 minutes",
      "from": "Basilicata",
      "steps": [
        {
          "title": "Fry the peppers.",
          "body": "Heat the olive oil in a wide pan. Fry the dried peppers for just a few seconds, until they darken slightly and turn crisp. Lift them out and drain on paper."
        },
        {
          "title": "Toast the crumbs.",
          "body": "In the same oil, cook the garlic briefly, then add the breadcrumbs and toast, stirring, until golden. Remove the garlic."
        },
        {
          "title": "Cook the pasta.",
          "body": "Boil the pasta in salted water until al dente and drain, keeping a little of the water."
        },
        {
          "title": "Toss and serve.",
          "body": "Toss the pasta in the pan with the crumbs and a splash of the water. Crumble the crisp peppers over the top and serve, with grated cheese if you like."
        }
      ],
      "touch": "Toast the crumbs in the same oil you used for the peppers, and don’t leave the peppers in the pan for more than a few seconds. Day-old [Pane di Matera](product:bas-pane-matera) makes the best crumbs.",
      "shoppingList": [
        "320 g short durum-wheat pasta",
        "6–8 dried [Senise peppers](product:bas-peperoni-senise)",
        "80 g stale [Matera bread](product:bas-pane-matera)",
        "5 tbsp extra-virgin olive oil",
        "1 garlic clove",
        "Salt",
        "Pecorino or cacioricotta (optional)"
      ],
      "products": [
        {
          "id": "bas-peperoni-senise",
          "name": "Peperone di Senise IGP, dried",
          "meta": "Braid or bag",
          "tag": "IGP",
          "tagTone": "red",
          "origin": "Senise",
          "img": {
            "q": "Peperone di Senise Basilicata || Peperone di Senise || Senise peppers food",
            "orientation": "squarish"
          }
        },
        {
          "id": "bas-pane-matera",
          "name": "Pane di Matera IGP",
          "meta": "Loaf",
          "tag": "IGP",
          "tagTone": "green",
          "origin": "Matera",
          "img": {
            "q": "Pane di Matera Basilicata || Pane di Matera || Pane di Matera food",
            "orientation": "squarish"
          }
        }
      ],
      "schema": {
        "yield": "4 servings",
        "prepTime": "PT10M",
        "cookTime": "PT15M",
        "totalTime": "PT25M",
        "ingredients": [
          "320 g short durum-wheat pasta, such as strascinati or cavatelli",
          "6–8 dried Senise peppers, stems and seeds removed",
          "80 g stale Matera bread, made into coarse crumbs",
          "5 tablespoons extra-virgin olive oil",
          "1 garlic clove, lightly crushed",
          "Salt",
          "Grated pecorino or cacioricotta (optional)"
        ]
      },
      "imageCaption": "Lucanian classic · about 25 minutes",
      "image": {
        "q": "Pasta con peperoni cruschi e mollica Basilicata food || Pasta con peperoni cruschi e mollica food",
        "orientation": "landscape"
      }
    },
    "shortcut": {
      "title": "Ten minutes in Senise",
      "body": "Fry a handful of dried Senise peppers in hot olive oil for a few seconds each until crisp, and salt them lightly. Serve as a snack with shards of aged cheese, slices of lucanica, and a glass of local wine.",
      "products": [
        {
          "id": "bas-peperoni-senise",
          "name": "Peperone di Senise IGP, dried",
          "meta": "Braid or bag",
          "tag": "IGP",
          "tagTone": "red",
          "origin": "Senise",
          "img": {
            "q": "Peperone di Senise Basilicata || Peperone di Senise || Senise peppers food",
            "orientation": "squarish"
          }
        },
        {
          "id": "bas-canestrato",
          "name": "Canestrato di Moliterno IGP",
          "meta": "Wedge",
          "tag": "IGP",
          "tagTone": "green",
          "origin": "Moliterno",
          "img": {
            "q": "Canestrato di Moliterno Basilicata || Canestrato di Moliterno || Canestrato di Moliterno food",
            "orientation": "squarish"
          }
        }
      ],
      "eyebrow": "Senise shortcut",
      "button": "Get the cruschi pair"
    },
    "eyebrow": "Terroir kitchen"
  },
  "readTheLabel": "“Crusco-style” peppers may be any dried pepper, and not every durum loaf is Pane di Matera. Check the place of production, the ingredient list, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Basilicata home",
    "body": "A Lucanian table makes a feast from very little. We’ve gathered eight ingredients from this story into one set: enough for pasta with peperoni cruschi, a pot of beans, and a board of cheese and lucanica.",
    "button": "Add the Basilicata pantry set",
    "products": [
      {
        "id": "bas-peperoni-senise",
        "name": "Peperone di Senise IGP",
        "meta": "Dried",
        "tag": "IGP",
        "tagTone": "red",
        "origin": "Senise",
        "img": {
          "q": "Peperone di Senise Basilicata || Peperone di Senise || Senise peppers food",
          "orientation": "squarish"
        }
      },
      {
        "id": "bas-perrone-pane",
        "name": "Perrone Pane di Matera IGP",
        "meta": "Loaf",
        "tag": "Since 1918",
        "tagTone": "gold",
        "origin": "Matera",
        "img": {
          "q": "Perrone Pane di Matera Basilicata || Perrone Pane di Matera",
          "orientation": "squarish"
        }
      },
      {
        "id": "bas-fagioli-sarconi",
        "name": "Fagiolo di Sarconi IGP",
        "meta": "500 g",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "Val d’Agri",
        "img": {
          "q": "Fagiolo di Sarconi Basilicata || Fagiolo di Sarconi || Sarconi beans food",
          "orientation": "squarish"
        }
      },
      {
        "id": "bas-canestrato",
        "name": "Canestrato di Moliterno IGP",
        "meta": "Wedge",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "Moliterno",
        "img": {
          "q": "Canestrato di Moliterno Basilicata || Canestrato di Moliterno || Canestrato di Moliterno food",
          "orientation": "squarish"
        }
      },
      {
        "id": "bas-melanzana-rossa",
        "name": "Melanzana Rossa di Rotonda DOP",
        "meta": "Jar",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Rotonda",
        "img": {
          "q": "Melanzana Rossa di Rotonda Basilicata || Melanzana Rossa di Rotonda || Red eggplant food",
          "orientation": "squarish"
        }
      },
      {
        "id": "bas-lucanica",
        "name": "Lucanica",
        "meta": "Whole",
        "tag": "Fennel seed",
        "tagTone": "neutral",
        "origin": "Basilicata",
        "img": {
          "q": "Lucanica Basilicata || Lucanica || Lucanica food",
          "orientation": "squarish"
        }
      },
      {
        "id": "bas-pasta",
        "name": "Strascinati",
        "meta": "500 g",
        "tag": "Pantry staple",
        "tagTone": "neutral",
        "origin": "Basilicata",
        "img": {
          "q": "Strascinati Basilicata || Strascinati",
          "orientation": "squarish"
        }
      },
      {
        "id": "bas-olio-vulture",
        "name": "Vulture DOP olive oil",
        "meta": "Bottle",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Vulture",
        "img": {
          "q": "Vulture olive oil Basilicata || Vulture olive oil",
          "orientation": "squarish"
        }
      }
    ],
    "eyebrow": "Limited curation · Parcel N° 18"
  },
  "about": [
    "La Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "Italia.it (ENIT) on Pane di Matera and peperoni cruschi; APT Basilicata, “Basilicata enogastronomica”; Scatti di Gusto, Gambero Rosso, La Voce di New York, and Sapere Sapori on Pane di Matera; Dissapore and Agriturismo.it on Lucanian products; Eroica Fenice on Lucanian dishes; Blitz Quotidiano (ANSA) and Gambero Rosso on the Perrone family bakery."
};

export default basilicata;
