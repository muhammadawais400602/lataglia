import type { RegionStory } from './types';

// Content from the Sardegna story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const sardegna: RegionStory = {
  "slug": "sardegna",
  "name": "Sardegna",
  "seoTitle": "Sardinian Food and Pantry Ingredients | Italy Region by Region | La Taglia",
  "seoDescription": "Cook Sardinia from its pantry: Fiore Sardo, pane carasau, malloreddus, fregola, Cabras bottarga and Sardinian saffron, with a recipe for malloreddus alla campidanese.",
  "kicker": "Region eleven: the island of shepherds",
  "subtitle": "Sheep’s cheese, saffron, and the salt of the lagoons.",
  "hero": {
    "color": "#5C5248",
    "colorDeep": "#3F3832"
  },
  "intro": [
    "Sardinia sits alone in the Tyrrhenian Sea, west of the Italian mainland, an island that geologically and culturally evolved apart from the peninsula. Some 7,000 stone towers called nuraghi still stand across its hills, left by a Bronze Age civilization that flourished here from the second millennium BC. Phoenicians, Romans, Genoese, Catalans, and Spanish all came and went, and a Catalan dialect has been spoken in the town of Alghero for nearly 700 years. Through all of it, the heart of island life was the flock: shepherding is Sardinia’s oldest form of farming, and shepherds on the move with their sheep needed bread that kept for weeks and cheese that could survive the journey. The result is a cuisine of sheep’s cheese and thin, crisp bread, hand-shaped pastas, spit-roasted pork, and, along the coast, lagoon fish and their cured roe.",
    "Sardinian food is like nothing else in Italy, and much of it is still made by hand. Start with the ingredients that define the island, learn the dishes they make possible, and meet the lagoon fishermen of Cabras."
  ],
  "pantry": {
    "lede": "Six ingredients behind Sardinia’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Fiore Sardo",
        "place": "Across the island",
        "body": "The shepherds’ cheese of Sardinia, made from whole, raw milk of Sardinian sheep and lightly smoked, a habit from the stone huts where shepherds once dried their cheeses over the fire. It is the only one of the island’s three protected cheeses that must be made from untreated milk.",
        "lookFor": "Fiore Sardo DOP. Sardinia also makes Pecorino Sardo DOP and most of the world’s Pecorino Romano.",
        "products": [
          {
            "id": "sar-fiore-sardo",
            "name": "Fiore Sardo DOP",
            "meta": "Wedge"
          }
        ]
      },
      {
        "title": "Pane carasau",
        "place": "The island’s interior",
        "body": "Paper-thin discs of bread baked twice until dry and crisp, nicknamed carta da musica, “sheet music.” Shepherds carried it for weeks during the seasonal moves with their flocks. Brushed with oil and salt it becomes pane guttiau; softened in broth and layered with tomato, pecorino, and an egg, pane frattau.",
        "lookFor": "carasau made in Sardinia, with durum wheat semolina.",
        "products": [
          {
            "id": "sar-carasau",
            "name": "Pane carasau",
            "meta": "Pack"
          }
        ]
      },
      {
        "title": "Malloreddus",
        "place": "The Campidano plain",
        "body": "Small ridged shells of durum wheat semolina and water, sometimes tinted with saffron. Sold on the mainland as gnocchetti sardi, they go by different names across the island.",
        "lookFor": "malloreddus made in Sardinia from durum wheat semolina.",
        "products": [
          {
            "id": "sar-malloreddus",
            "name": "Malloreddus",
            "meta": "500 g"
          }
        ]
      },
      {
        "title": "Fregola",
        "place": "Across the island",
        "body": "Tiny, irregular pearls of durum semolina and water, toasted so they take on a nutty flavor. Fregola is eaten all over Sardinia, cooked with clams in summer or made rich with pecorino.",
        "lookFor": "fregola made in Sardinia, ideally hand-rolled.",
        "products": [
          {
            "id": "sar-fregola",
            "name": "Fregola",
            "meta": "500 g"
          }
        ]
      },
      {
        "title": "Bottarga",
        "place": "The lagoon of Cabras",
        "body": "The roe of gray mullet, salted and air-dried into firm, amber slabs. Shaved thin with olive oil or grated over pasta, it tastes of the sea with a sweet, almond finish.",
        "lookFor": "“pescato nella laguna di Cabras.” Most bottarga sold as “di Cabras” is processed there from imported mullet roe.",
        "products": [
          {
            "id": "sar-bottarga",
            "name": "Bottarga di muggine",
            "meta": "Whole"
          }
        ]
      },
      {
        "title": "Saffron",
        "place": "San Gavino Monreale, Turri, and Villanovafranca",
        "body": "Hand-picked crocus threads from the plains of southern Sardinia, used to color and perfume malloreddus and sauces. San Gavino, Turri, and Villanovafranca each celebrate the harvest with a festival in November.",
        "lookFor": "Zafferano di Sardegna DOP, sold as whole threads.",
        "products": [
          {
            "id": "sar-zafferano",
            "name": "Zafferano di Sardegna DOP",
            "meta": "Threads"
          }
        ]
      }
    ]
  },
  "dishes": {
    "lede": "Four dishes Sardinia makes its own.",
    "items": [
      {
        "title": "Malloreddus alla campidanese",
        "where": "The Campidano",
        "body": "Malloreddus in a sauce of crumbled pork sausage with fennel, tomato, onion, and saffron, finished with plenty of grated pecorino. The island’s best-known pasta dish.",
        "tip": "[Cook it below](#malloreddus)"
      },
      {
        "title": "Culurgiones",
        "where": "Ogliastra",
        "body": "Plump pasta parcels filled with potato, pecorino, and mint, sealed with a braided edge that looks like an ear of wheat. The braid was once believed to bring a good harvest.",
        "tip": "Protected as Culurgiones d’Ogliastra IGP."
      },
      {
        "title": "Porceddu",
        "where": "Across the island",
        "body": "Suckling pig roasted slowly on a spit beside an open fire until the skin crackles, then served on cork boards over myrtle leaves."
      },
      {
        "title": "Seadas",
        "where": "Across the island",
        "body": "A round pastry filled with sheep’s cheese, fried until golden and drizzled with honey. Sweet, salty, and served hot."
      }
    ]
  },
  "maker": {
    "name": "Consorzio Pontis",
    "place": "Cabras",
    "paragraphs": [
      "On Sardinia’s west coast, in the Sinis peninsula, the lagoon of Cabras has long been one of the island’s great fishing waters. Its fishermen work together as the Nuovo Consorzio Cooperative Pontis, formed in 1993 when eleven fishing cooperatives joined forces to manage the Mar’e Pontis lagoon. Around 130 fishermen belong to it today.",
      "Their bottarga is made from the roe of mullet caught in the lagoon itself, salted and air-dried into amber slabs. That sets it apart: almost all bottarga sold as “di Cabras” is made in town from imported mullet. In 2025 the lagoon’s bottarga and traditional fishing became a Slow Food Presidium, recognition reserved for mullet fished in these waters."
    ],
    "photos": [],
    "facts": [
      {
        "label": "Formed",
        "value": "1993"
      },
      {
        "label": "Fishermen",
        "value": "About 130"
      },
      {
        "label": "Recognition",
        "value": "Slow Food Presidium"
      }
    ],
    "productsLabel": "From Consorzio Pontis",
    "products": [
      {
        "id": "sar-pontis-bottarga",
        "name": "Pontis bottarga, Cabras lagoon",
        "meta": "Whole"
      },
      {
        "id": "sar-pontis-grattugiata",
        "name": "Pontis bottarga, grated",
        "meta": "Jar"
      }
    ]
  },
  "cook": {
    "title": "Cook Sardegna",
    "lede": "One classic from scratch and one ten-minute shortcut from Cabras.",
    "recipe": {
      "id": "malloreddus",
      "title": "Malloreddus alla campidanese",
      "serves": "4",
      "time": "about 55 minutes",
      "from": "the Campidano",
      "steps": [
        {
          "title": "Brown the sausage.",
          "body": "In a wide pan, soften the onion in the olive oil. Add the crumbled sausage and cook gently for about 10 minutes, until browned."
        },
        {
          "title": "Simmer the sauce.",
          "body": "Add the passata and a pinch of salt and simmer over moderate heat for about 30 minutes. Stir in the basil and the saffron with its soaking water."
        },
        {
          "title": "Cook the pasta.",
          "body": "Boil the malloreddus in salted water until al dente, then drain."
        },
        {
          "title": "Toss and serve.",
          "body": "Toss the pasta in the sauce with a generous handful of grated pecorino, and serve with more on top."
        }
      ],
      "touch": "Use a sausage seasoned with fennel seed, as Sardinians do, and steep real [saffron threads](product:sar-zafferano) before adding them, so their color and perfume spread through the sauce.",
      "shoppingList": [
        "400 g [malloreddus](product:sar-malloreddus)",
        "250 g fresh pork sausage with fennel",
        "1 small onion",
        "2 tbsp extra-virgin olive oil",
        "500 g tomato passata",
        "[Saffron threads](product:sar-zafferano)",
        "A few basil leaves",
        "60 g [Fiore Sardo](product:sar-fiore-sardo) or Pecorino Sardo",
        "Salt"
      ],
      "products": [
        {
          "id": "sar-malloreddus",
          "name": "Malloreddus",
          "meta": "500 g"
        },
        {
          "id": "sar-zafferano",
          "name": "Zafferano di Sardegna DOP",
          "meta": "Threads"
        }
      ],
      "schema": {
        "yield": "4 servings",
        "prepTime": "PT10M",
        "cookTime": "PT45M",
        "totalTime": "PT55M",
        "ingredients": [
          "400 g malloreddus (gnocchetti sardi)",
          "250 g fresh Sardinian pork sausage with fennel, casing removed",
          "1 small onion, finely chopped",
          "2 tablespoons extra-virgin olive oil",
          "500 g tomato passata",
          "A pinch of saffron threads or 1 sachet, steeped in a little warm water",
          "A few basil leaves",
          "60 g Pecorino Sardo or Fiore Sardo, grated",
          "Salt"
        ]
      }
    },
    "shortcut": {
      "title": "Ten minutes in Cabras",
      "body": "Cook spaghetti until al dente. Meanwhile, warm olive oil with a sliced garlic clove. Toss the drained pasta in the oil with a splash of pasta water, then, off the heat, grate over bottarga and add chopped parsley. Go easy: bottarga is intense, and a little goes a long way.",
      "products": [
        {
          "id": "sar-pontis-grattugiata",
          "name": "Pontis bottarga, grated",
          "meta": "Jar"
        },
        {
          "id": "sar-bottarga",
          "name": "Bottarga di muggine",
          "meta": "Whole"
        }
      ]
    }
  },
  "readTheLabel": "“Bottarga di Cabras” usually means made in Cabras, not caught there, and “Sardinian-style” pasta can be made anywhere. Check the place of production, the ingredient list, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Sardegna home",
    "body": "A Sardinian table starts with sheep’s cheese and crisp bread and ends with something hand-shaped. We’ve gathered eight ingredients from this story into one set: enough for malloreddus, spaghetti with bottarga, a pot of fregola, and a board of Fiore Sardo with carasau.",
    "button": "Add the Sardegna pantry set",
    "products": [
      {
        "id": "sar-fiore-sardo",
        "name": "Fiore Sardo DOP",
        "meta": "Wedge"
      },
      {
        "id": "sar-pecorino-sardo",
        "name": "Pecorino Sardo DOP",
        "meta": "Wedge"
      },
      {
        "id": "sar-carasau",
        "name": "Pane carasau",
        "meta": "Pack"
      },
      {
        "id": "sar-malloreddus",
        "name": "Malloreddus",
        "meta": "500 g"
      },
      {
        "id": "sar-fregola",
        "name": "Fregola",
        "meta": "500 g"
      },
      {
        "id": "sar-zafferano",
        "name": "Zafferano di Sardegna DOP",
        "meta": "Threads"
      },
      {
        "id": "sar-pontis-bottarga",
        "name": "Pontis bottarga",
        "meta": "Whole"
      },
      {
        "id": "sar-miele",
        "name": "Sardinian honey",
        "meta": "Jar"
      }
    ]
  },
  "about": [
    "La Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "Sardegna Turismo on Sardinian saffron; Geopop on the nuraghi and on Catalan in Alghero; Dissapore on Fiore Sardo DOP and Cabras bottarga; Slow Food Foundation on Fiore Sardo dei pastori; Ilisso on Sardinian DOP cheeses; Sardegna Turismo (Regione Sardegna) on Sardinian pasta; Moby, Grimaldi Lines, Lonely Planet, Italy Segreta, and WeRoad on Sardinian dishes; Charming Sardinia on malloreddus alla campidanese; Gambero Rosso and L’Unione Sarda on the Consorzio Pontis, the Cabras lagoon, and its Slow Food Presidium."
};

export default sardegna;
