import type { RegionStory } from './types';

// Content from the Sicilia story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const sicilia: RegionStory = {
  "slug": "sicilia",
  "name": "Sicilia",
  "seoTitle": "Sicilian Food and Pantry Ingredients | Italy Region by Region | La Taglia",
  "seoDescription": "Cook Sicily from its pantry: Bronte pistachios, Pantelleria capers, Avola almonds, Modica chocolate and the dishes they make, with a recipe for pasta alla Norma.",
  "kicker": "Region one: the island",
  "subtitle": "A table shaped by the sea, the sun and centuries of exchange.",
  "hero": {
    "color": "#1B3C8C",
    "colorDeep": "#132B66"
  },
  "intro": [
    "Sicily sits at the toe of Italy’s boot, separated from Calabria by the narrow Strait of Messina and closer to the coast of Tunisia than to Naples. It is the largest island in the Mediterranean: hot, dry, and ringed by sea, with Mount Etna, Europe’s tallest active volcano, rising over the east. That position made it a crossroads. Greeks planted olives and vines, Arabs brought citrus, sugar cane, and saffron, and Spanish rule carried tomatoes and cacao from the Americas. Sicilians absorbed all of it, farming volcanic slopes and sunbaked plains and fishing the waters on every side. The result is a cuisine of sea and sun, thrifty and festive at once, where North African couscous and Spanish-era chocolate sit comfortably beside the pasta.",
    "Sicily tastes of many things at once: bright citrus and tomato, toasted almonds, sea salt, wild fennel, and the surprise of raisins folded into savory dishes. The simplest ingredients here carry a remarkable amount of history.",
    "The best way to know a region is to cook from its pantry. Start with the ingredients that define Sicily, learn the dishes they make possible, and meet one of the families putting the island into jars."
  ],
  "pantry": {
    "lede": "Six ingredients behind Sicily’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Pistachio",
        "place": "Bronte, on the slopes of Etna",
        "body": "Grown in volcanic soil, Bronte pistachios are vivid green with a concentrated, almost resinous flavor. They go into savory pestos as readily as pastries and spoonable creams.",
        "lookFor": "Pistacchio Verde di Bronte DOP. “Sicilian pistachio” alone guarantees nothing.",
        "products": [
          {
            "id": "sic-pistachios-bronte",
            "name": "Bronte pistachios",
            "meta": "Shelled"
          },
          {
            "id": "sic-pistachio-cream",
            "name": "Sicilian pistachio cream",
            "meta": "Jar"
          }
        ]
      },
      {
        "title": "Tomato",
        "place": "Pachino and the southeast",
        "body": "Small, sun-ripened tomatoes with high sugar and lively acidity. A good passata, a jar of datterini, or a few sun-dried tomatoes can carry a whole plate of pasta.",
        "lookFor": "Pomodoro di Pachino IGP.",
        "products": [
          {
            "id": "sic-sundried-tomatoes",
            "name": "Sun-dried cherry tomatoes",
            "meta": "Jar, in oil"
          },
          {
            "id": "sic-datterino-sauce",
            "name": "Datterino tomato sauce",
            "meta": "Jar"
          }
        ]
      },
      {
        "title": "Capers",
        "place": "Pantelleria",
        "body": "Cured in sea salt rather than brine, which keeps their floral character. Soak, rinse, and add to caponata, tomato sauces, or fish. A little goes a long way.",
        "lookFor": "Cappero di Pantelleria IGP, packed in salt.",
        "products": [
          {
            "id": "sic-capers-pantelleria",
            "name": "Pantelleria IGP capers",
            "meta": "Salt-packed"
          },
          {
            "id": "sic-castelvetrano-olives",
            "name": "Castelvetrano olives",
            "meta": "Jar"
          }
        ]
      },
      {
        "title": "Almond",
        "place": "Avola, near Siracusa",
        "body": "The flat Pizzuta d’Avola is the backbone of Sicilian sweets, from marzipan to almond granita, and the base of Trapani’s raw tomato-and-almond pesto.",
        "lookFor": "the Avola name on the ingredient list, not just “Sicilian almonds.”",
        "products": [
          {
            "id": "sic-pesto-trapanese",
            "name": "Pesto alla trapanese",
            "meta": "With Avola almonds"
          }
        ]
      },
      {
        "title": "Olive oil",
        "place": "Across the island",
        "body": "Where Sicilian cooking starts. Styles run from gently fruity Biancolilla to grassy, peppery Nocellara del Belice, the same variety sold as Castelvetrano olives.",
        "lookFor": "Val di Mazara, Monti Iblei, or Valle del Belice DOP, with a recent harvest date.",
        "products": [
          {
            "id": "sic-evoo-dop",
            "name": "Sicilian DOP extra-virgin olive oil",
            "meta": "Bottle"
          }
        ]
      },
      {
        "title": "Chocolate",
        "place": "Modica, in the Ragusa hills",
        "body": "Worked at low temperature so the sugar never fully melts, Modica chocolate keeps a crystalline, sandy snap. Often flavored simply, with cinnamon, vanilla, or orange.",
        "lookFor": "Cioccolato di Modica IGP.",
        "products": [
          {
            "id": "sic-modica-chocolate",
            "name": "Cioccolato di Modica IGP",
            "meta": "Bar"
          }
        ]
      }
    ]
  },
  "dishes": {
    "lede": "Four dishes Sicily makes its own.",
    "items": [
      {
        "title": "Pasta alla Norma",
        "where": "Catania",
        "body": "Tomato, fried eggplant, basil, and salty ricotta salata. Generous and restrained at once, and the best first dish for anyone new to Sicilian cooking.",
        "tip": "[Cook it below](#norma)"
      },
      {
        "title": "Caponata",
        "where": "Across the island",
        "body": "Eggplant, celery, tomato, olives, and capers in a sweet-and-sour agrodolce. Serve at room temperature as an antipasto, beside grilled fish, or on toasted bread. In Palermo, many cooks add raisins and pine nuts.",
        "tip": "Skip the hour at the stove with [a ready-made jar](product:sic-caponata)."
      },
      {
        "title": "Pasta con le sarde",
        "where": "Palermo",
        "body": "Sardines, wild fennel, raisins, pine nuts, saffron, and toasted breadcrumbs. The raisins, pine nuts, and saffron arrived with Arab rule in the ninth century and never left Palermo’s kitchens.",
        "tip": "Can’t find wild fennel? Use cultivated fennel fronds plus a pinch of [wild fennel seed](product:sic-wild-fennel)."
      },
      {
        "title": "Cannoli and granita",
        "where": "Sweet Sicily",
        "body": "Crisp fried shells with sweetened sheep’s-milk ricotta; icy granita of coffee, almond, or lemon. Both are built on contrast.",
        "tip": "For the table: [pistachio-filled cannoli](product:sic-cannoli)."
      }
    ]
  },
  "maker": {
    "name": "Campo D’Oro",
    "place": "Sciacca",
    "paragraphs": [
      "On Sicily’s southwest coast, about 50 kilometers from the Valley of the Temples, Paolo Licata founded Campo D’Oro more than three decades ago. Today it is a second-generation family business making preserves, pestos, sauces, and sweet creams from Sicilian recipes.",
      "Most of the vegetables come from the family’s own organic farm: eggplant, tomatoes, basil, garlic, and onions, processed within a day of harvest and without artificial additives or colorings. The facility runs on solar and wind power. Several recipes build on protected Sicilian ingredients, including Pantelleria IGP capers in the caponata and Avola almonds in the pesto alla trapanese."
    ],
    "photos": [],
    "facts": [
      {
        "label": "Based in",
        "value": "Sciacca, Agrigento"
      },
      {
        "label": "Family farm",
        "value": "130 hectares, organic"
      },
      {
        "label": "Range",
        "value": "120+ specialties"
      }
    ],
    "productsLabel": "From Campo D’Oro",
    "products": [
      {
        "id": "sic-caponata",
        "name": "Campo D’Oro caponata",
        "meta": "Jar"
      },
      {
        "id": "sic-pesto-trapanese",
        "name": "Campo D’Oro pesto alla trapanese",
        "meta": "With Avola almonds"
      },
      {
        "id": "sic-sundried-tomatoes",
        "name": "Campo D’Oro sun-dried cherry tomatoes",
        "meta": "Jar, in oil"
      },
      {
        "id": "sic-blood-orange-marmalade",
        "name": "Campo D’Oro blood orange marmalade",
        "meta": "Jar"
      }
    ]
  },
  "cook": {
    "title": "Cook Sicily",
    "lede": "One classic from scratch and one ten-minute shortcut from Trapani.",
    "recipe": {
      "id": "norma",
      "title": "Pasta alla Norma",
      "serves": "4",
      "time": "about 50 minutes",
      "from": "Catania",
      "steps": [
        {
          "title": "Prepare the eggplant.",
          "body": "Cut the eggplant into 2 cm cubes. Salt lightly and rest for 15 minutes if you like, then pat thoroughly dry."
        },
        {
          "title": "Make the sauce.",
          "body": "Warm 2 tablespoons olive oil in a saucepan and cook the crushed garlic until fragrant. Add the passata and a pinch of salt, and simmer uncovered for 20–25 minutes, until slightly thickened. Tear in a few basil leaves."
        },
        {
          "title": "Fry the eggplant.",
          "body": "Heat a 3 mm layer of olive oil in a wide skillet over medium-high heat. Fry the eggplant in batches, turning, until deeply golden and tender, adding a little oil between batches. Don’t crowd the pan. Drain on paper towels."
        },
        {
          "title": "Cook the pasta.",
          "body": "Boil the pasta in well-salted water until just short of al dente. Reserve a mug of pasta water, then drain."
        },
        {
          "title": "Bring it together.",
          "body": "Toss the pasta with the sauce and a splash of pasta water. Fold in most of the eggplant. Divide among warm bowls and top with the remaining eggplant, torn basil, and coarsely grated or shaved ricotta salata."
        }
      ],
      "touch": "Finish with ricotta salata, never fresh ricotta. Its firm texture and salty edge are what make this dish Norma. A final pinch of [Trapani sea salt](product:sic-trapani-salt) on the eggplant just before serving keeps it crisp-edged.",
      "shoppingList": [
        "400 g rigatoni or maccheroni",
        "650–700 g passata (two jars of [fine tomato pulp](product:sic-passata))",
        "About 120 ml [extra-virgin olive oil](product:sic-evoo-dop)",
        "2 medium eggplants",
        "2 garlic cloves",
        "Fresh basil",
        "80 g ricotta salata",
        "Sea salt and black pepper"
      ],
      "products": [
        {
          "id": "sic-passata",
          "name": "Tomato passata",
          "meta": "Jar"
        },
        {
          "id": "sic-trapani-salt",
          "name": "Trapani sea salt",
          "meta": "Hand-harvested"
        }
      ],
      "schema": {
        "yield": "4 servings",
        "prepTime": "PT20M",
        "cookTime": "PT30M",
        "totalTime": "PT50M",
        "ingredients": [
          "400 g short pasta, such as rigatoni or maccheroni",
          "650–700 g tomato passata or fine tomato pulp",
          "2 medium eggplants (about 700 g)",
          "About 120 ml extra-virgin olive oil, divided",
          "2 garlic cloves, crushed",
          "A handful of fresh basil",
          "80 g ricotta salata",
          "Fine sea salt and black pepper"
        ]
      }
    },
    "shortcut": {
      "title": "Ten minutes in Trapani",
      "body": "Busiate are hand-rolled spirals from western Sicily, made to grab hold of pesto alla trapanese, a raw sauce of tomato, basil, garlic, and almonds. Cook the busiate, loosen the pesto with a spoonful of pasta water, toss, and finish with olive oil and a few chopped almonds or pistachios.",
      "products": [
        {
          "id": "sic-busiate",
          "name": "Busiate pasta",
          "meta": "Durum wheat"
        },
        {
          "id": "sic-pesto-trapanese",
          "name": "Pesto alla trapanese",
          "meta": "With Avola almonds"
        }
      ]
    }
  },
  "readTheLabel": "“Sicilian-style” is not the same as made in Sicily. Check the place of production, the ingredient list, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Sicily home",
    "body": "A Sicilian table starts with a few excellent ingredients allowed to speak clearly. We’ve gathered eight from this story into one set: enough for pasta, an antipasto board, and something sweet to finish.",
    "button": "Add the Sicilian pantry set",
    "products": [
      {
        "id": "sic-pistachios-bronte",
        "name": "Bronte pistachios",
        "meta": "Shelled"
      },
      {
        "id": "sic-pesto-trapanese",
        "name": "Pesto alla trapanese",
        "meta": "With Avola almonds"
      },
      {
        "id": "sic-caponata",
        "name": "Caponata",
        "meta": "Jar"
      },
      {
        "id": "sic-castelvetrano-olives",
        "name": "Castelvetrano olives",
        "meta": "Jar"
      },
      {
        "id": "sic-busiate",
        "name": "Busiate pasta",
        "meta": "Durum wheat"
      },
      {
        "id": "sic-trapani-salt",
        "name": "Trapani sea salt",
        "meta": "Hand-harvested"
      },
      {
        "id": "sic-oregano",
        "name": "Sicilian oregano",
        "meta": "On the stem"
      },
      {
        "id": "sic-blood-orange-marmalade",
        "name": "Blood orange marmalade",
        "meta": "Jar"
      }
    ]
  },
  "about": [
    "La Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "Italia.it, “Typical Sicilian Products and Dishes”; Visit Sicily, “Sicily Flavours Not to Be Missed”; European Commission eAmbrosia register (Pistacchio Verde di Bronte DOP, Pomodoro di Pachino IGP, Cappero di Pantelleria IGP, Cioccolato di Modica IGP); Forbes Italia, “100 Eccellenze 2024: Campo d’Oro”; Italian Trade Agency and Pitti Taste exhibitor profiles for Campo d’Oro."
};

export default sicilia;
