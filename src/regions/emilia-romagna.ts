import type { RegionStory } from './types';

// Content from the Emilia-Romagna story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const emiliaRomagna: RegionStory = {
  "slug": "emilia-romagna",
  "name": "Emilia-Romagna",
  "seoTitle": "Emilia-Romagna Food and Pantry Ingredients | Italy Region by Region | La Taglia",
  "seoDescription": "Cook Emilia-Romagna from its pantry: Parmigiano Reggiano, Prosciutto di Parma, balsamic vinegar of Modena, mortadella and egg pasta, with a recipe for tagliatelle al ragù.",
  "kicker": "Region two: the food valley",
  "subtitle": "Patience, pork, and the richest plain in Italy.",
  "hero": {
    "color": "#8C2A1C",
    "colorDeep": "#5F1C13"
  },
  "intro": [
    "Emilia-Romagna stretches across northern Italy from the Apennine ridge to the Adriatic, with the broad, flat Po Valley at its heart. It is two old lands joined by one road: the Via Emilia, laid by the Romans in 187 BC, still runs straight from Piacenza to Rimini, stringing together Parma, Reggio Emilia, Modena, and Bologna. The plain is some of the most fertile land in Europe, and its farmers built a cuisine around what it does best: dairy cattle, wheat, and pigs, with the whey left from cheesemaking traditionally fed to the pigs that become prosciutto. The ducal courts of Parma and Modena refined that abundance, Bologna earned the nickname la grassa, “the fat one,” and Romagna, toward the sea, kept a simpler table of flatbreads, fish, and grilled meat. The result is a cuisine of patience: cheese aged for years, ham for more than a year, vinegar for decades.",
    "Few places anywhere can claim as many protected-origin foods, which is why it is often called Italy’s food valley. Start with the ingredients that define it, learn the dishes they make possible, and meet a family that has been perfecting one of them for four centuries."
  ],
  "pantry": {
    "lede": "Six ingredients behind Emilia-Romagna’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Parmigiano Reggiano",
        "place": "Parma, Reggio Emilia, Modena, and parts of Bologna and Mantua",
        "body": "Made from just raw cow’s milk, salt, and rennet, and aged at least 12 months. At 24 to 36 months it develops the crunchy crystals and deep, nutty flavor most cooks prize.",
        "lookFor": "the pin-dot “Parmigiano Reggiano” lettering on the rind and the DOP seal. In the US, “parmesan” can be made anywhere.",
        "products": [
          {
            "id": "er-parmigiano-24",
            "name": "Parmigiano Reggiano DOP, 24 months",
            "meta": "Wedge, cut to order"
          }
        ]
      },
      {
        "title": "Prosciutto di Parma",
        "place": "The hills south of Parma",
        "body": "Only pork legs and sea salt, cured for at least 14 months in the dry hill air around Langhirano. Sweet and delicate, best sliced paper-thin and eaten soon after cutting.",
        "lookFor": "the five-pointed Ducal Crown branded on the skin or printed on the package.",
        "products": [
          {
            "id": "er-prosciutto-parma",
            "name": "Prosciutto di Parma DOP",
            "meta": "Sliced, aged 14+ months"
          }
        ]
      },
      {
        "title": "Balsamic vinegar",
        "place": "Modena and Reggio Emilia",
        "body": "Two different products share the name. Aceto Balsamico Tradizionale is cooked grape must aged at least 12 years through ever-smaller wooden casks and used by the drop. Aceto Balsamico di Modena IGP blends must with wine vinegar for everyday dressing and cooking.",
        "lookFor": "Tradizionale DOP is sold only in 100 ml bottles. On IGP labels, “invecchiato” means aged at least three years.",
        "products": [
          {
            "id": "er-balsamico-tradizionale",
            "name": "Aceto Balsamico Tradizionale di Modena DOP",
            "meta": "100 ml, aged 12+ years"
          },
          {
            "id": "er-balsamico-igp",
            "name": "Aceto Balsamico di Modena IGP",
            "meta": "250 ml"
          }
        ]
      },
      {
        "title": "Mortadella",
        "place": "Bologna",
        "body": "Finely ground pork studded with cubes of fat and slowly cooked. The best is silky, fragrant, and only lightly spiced, with or without pistachios.",
        "lookFor": "Mortadella Bologna IGP. American “bologna” is a distant cousin.",
        "products": [
          {
            "id": "er-mortadella",
            "name": "Mortadella Bologna IGP",
            "meta": "Sliced"
          }
        ]
      },
      {
        "title": "Culatello",
        "place": "Zibello and the Po riverbanks",
        "body": "The prized heart of the pork leg, tied by hand and aged in the damp, foggy cellars of the Bassa Parmense. Richer and more aromatic than prosciutto, and far rarer.",
        "lookFor": "Culatello di Zibello DOP.",
        "products": [
          {
            "id": "er-culatello",
            "name": "Culatello di Zibello DOP",
            "meta": "Sliced"
          }
        ]
      },
      {
        "title": "Egg pasta",
        "place": "Bologna and across Emilia",
        "body": "Tagliatelle, tortellini, and lasagne are made from soft wheat flour and eggs, rolled paper-thin with a long wooden pin. Bologna’s pasta makers, the sfogline, still do it by hand.",
        "lookFor": "“pasta all’uovo,” which by Italian law means at least four eggs per kilo of flour. The best use more.",
        "products": [
          {
            "id": "er-tagliatelle",
            "name": "Egg tagliatelle",
            "meta": "Dried nests"
          },
          {
            "id": "er-tortellini",
            "name": "Tortellini",
            "meta": "Pork and Parmigiano filling"
          }
        ]
      }
    ]
  },
  "dishes": {
    "lede": "Four dishes Emilia-Romagna makes its own.",
    "items": [
      {
        "title": "Tagliatelle al ragù",
        "where": "Bologna",
        "body": "A slow ragù of beef, pancetta, a little tomato, wine, and milk, tossed with wide ribbons of egg pasta. This is the real dish behind “spaghetti bolognese,” which you won’t find in Bologna.",
        "tip": "[Cook it below](#ragu)"
      },
      {
        "title": "Tortellini in brodo",
        "where": "Bologna and Modena",
        "body": "Tiny folded pasta filled with pork loin, prosciutto, mortadella, and Parmigiano, served in a clear capon or beef broth. The Christmas dish across Emilia.",
        "tip": "Buy [good tortellini](product:er-tortellini) and put your effort into the broth."
      },
      {
        "title": "Lasagne verdi",
        "where": "Bologna",
        "body": "Spinach-green egg pasta layered with ragù, béchamel, and Parmigiano, baked until the edges crisp. Lighter than the American version and better for it.",
        "tip": "Make a double batch of ragù on Saturday; this is Sunday lunch."
      },
      {
        "title": "Piadina",
        "where": "Romagna",
        "body": "A thin flatbread cooked on a griddle and folded around prosciutto, soft squacquerone cheese, and arugula. Romagna’s beach-kiosk street food.",
        "tip": "Look for Piadina Romagnola IGP, or [ready-made piadine](product:er-piadina) to warm at home."
      }
    ]
  },
  "maker": {
    "name": "Acetaia Giusti",
    "place": "Modena",
    "paragraphs": [
      "Just outside Modena, the Giusti family has been making balsamic vinegar for more than four centuries. Their records go back to 1605, when Giuseppe and Francesco Maria Giusti were registered in the city as sausage and lard makers under the Este dukes. The business has passed through 17 generations since and is led today by Claudio Stefani Giusti.",
      "The vinegar ages in a collection of thousands of wooden casks, some centuries old, made from oak, chestnut, cherry, mulberry, and juniper, each leaving its own mark on the flavor. In the late 1800s, Giusti balsamic won a run of gold medals at European exhibitions and a royal warrant from the King of Italy, both still shown on the label. The acetaia also runs a museum where visitors can see how balsamic is made."
    ],
    "photos": [],
    "facts": [
      {
        "label": "Founded",
        "value": "1605"
      },
      {
        "label": "Family",
        "value": "17 generations"
      },
      {
        "label": "Sold in",
        "value": "50+ countries"
      }
    ],
    "productsLabel": "From Acetaia Giusti",
    "products": [
      {
        "id": "er-giusti-igp",
        "name": "Giusti Aceto Balsamico di Modena IGP",
        "meta": "250 ml"
      },
      {
        "id": "er-giusti-tradizionale",
        "name": "Giusti Aceto Balsamico Tradizionale DOP",
        "meta": "100 ml"
      }
    ]
  },
  "cook": {
    "title": "Cook Emilia-Romagna",
    "lede": "One classic from scratch and one ten-minute shortcut from Modena.",
    "recipe": {
      "id": "ragu",
      "title": "Tagliatelle al ragù",
      "serves": "4–6",
      "time": "about 3½ hours, mostly simmering",
      "from": "Bologna",
      "steps": [
        {
          "title": "Soften the base.",
          "body": "In a heavy pot, gently cook the pancetta in the olive oil until the fat melts. Add the carrot, celery, and onion and cook over low heat for 10 minutes, until soft."
        },
        {
          "title": "Brown the meat.",
          "body": "Add the beef, raise the heat, and stir until it loses its raw color and begins to sizzle, about 10 minutes."
        },
        {
          "title": "Add the wine.",
          "body": "Pour in the wine and simmer until it has evaporated."
        },
        {
          "title": "Simmer slowly.",
          "body": "Stir in the passata and a ladle of broth. Cook at the barest simmer, partly covered, for 2½–3 hours, adding broth whenever it looks dry. Stir in the milk for the last 30 minutes and season with salt and pepper."
        },
        {
          "title": "Toss and serve.",
          "body": "Cook the tagliatelle in well-salted water until just tender. Toss with the ragù and a splash of pasta water, and serve with grated Parmigiano Reggiano."
        }
      ],
      "touch": "Leave out the garlic and herbs. Bologna’s ragù is about meat, time, and a little milk for softness. Finish with [24-month Parmigiano Reggiano](product:er-parmigiano-24), grated just before serving.",
      "shoppingList": [
        "500 g fresh [egg tagliatelle](product:er-tagliatelle), or 400 g dried",
        "300 g coarsely ground beef",
        "150 g pancetta",
        "50 g each carrot, celery, and onion",
        "125 ml dry white wine",
        "300 g tomato passata",
        "125 ml whole milk",
        "About 250 ml light meat broth",
        "Extra-virgin olive oil, salt, and pepper",
        "[Parmigiano Reggiano](product:er-parmigiano-24), to serve"
      ],
      "products": [
        {
          "id": "er-tagliatelle",
          "name": "Egg tagliatelle",
          "meta": "Dried nests"
        },
        {
          "id": "er-parmigiano-24",
          "name": "Parmigiano Reggiano DOP, 24 months",
          "meta": "Wedge, cut to order"
        }
      ],
      "schema": {
        "yield": "4–6 servings",
        "prepTime": "PT20M",
        "cookTime": "PT3H",
        "totalTime": "PT3H20M",
        "ingredients": [
          "300 g coarsely ground beef",
          "150 g pancetta, finely chopped",
          "50 g carrot, finely chopped",
          "50 g celery, finely chopped",
          "50 g onion, finely chopped",
          "2 tablespoons extra-virgin olive oil",
          "125 ml dry white wine",
          "300 g tomato passata",
          "125 ml whole milk",
          "About 250 ml light meat broth",
          "Salt and black pepper",
          "500 g fresh egg tagliatelle, or 400 g dried",
          "Parmigiano Reggiano, to serve"
        ]
      }
    },
    "shortcut": {
      "title": "Ten minutes in Modena",
      "body": "Break a wedge of aged Parmigiano Reggiano into rough chunks with a short almond-shaped knife rather than slicing it. Add a few drops of aged balsamic to each piece, and set it out with folded prosciutto, cubes of mortadella, and a glass of chilled Lambrusco. It’s how much of Emilia starts a meal.",
      "products": [
        {
          "id": "er-parmigiano-24",
          "name": "Parmigiano Reggiano DOP, 24 months",
          "meta": "Wedge, cut to order"
        },
        {
          "id": "er-balsamico-igp",
          "name": "Aceto Balsamico di Modena IGP",
          "meta": "250 ml"
        }
      ]
    }
  },
  "readTheLabel": "“Parmesan,” “bologna,” and “balsamic glaze” are not Parmigiano Reggiano, Mortadella Bologna, or Aceto Balsamico Tradizionale. Check the place of production, the ingredient list, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Emilia-Romagna home",
    "body": "A table in Emilia starts with a board of cheese and cured meat and ends with a pot of something that took all afternoon. We’ve gathered eight ingredients from this story into one set: enough for a tasting board, a pot of ragù, and Sunday lasagne.",
    "button": "Add the Emilia-Romagna pantry set",
    "products": [
      {
        "id": "er-parmigiano-24",
        "name": "Parmigiano Reggiano DOP",
        "meta": "24 months"
      },
      {
        "id": "er-prosciutto-parma",
        "name": "Prosciutto di Parma DOP",
        "meta": "Sliced"
      },
      {
        "id": "er-mortadella",
        "name": "Mortadella Bologna IGP",
        "meta": "Sliced"
      },
      {
        "id": "er-culatello",
        "name": "Culatello di Zibello DOP",
        "meta": "Sliced"
      },
      {
        "id": "er-balsamico-igp",
        "name": "Aceto Balsamico di Modena IGP",
        "meta": "250 ml"
      },
      {
        "id": "er-tagliatelle",
        "name": "Egg tagliatelle",
        "meta": "Dried nests"
      },
      {
        "id": "er-tortellini",
        "name": "Tortellini",
        "meta": "Pork and Parmigiano"
      },
      {
        "id": "er-piadina",
        "name": "Piadina Romagnola IGP",
        "meta": "Pack of flatbreads"
      }
    ]
  },
  "about": [
    "La Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "Consorzio del Formaggio Parmigiano Reggiano; Consorzio del Prosciutto di Parma, “New Production Rules” (2023); Consorzio Tutela Aceto Balsamico Tradizionale di Modena; European Commission eAmbrosia register; Accademia Italiana della Cucina, registered recipe for ragù alla bolognese; Gambero Rosso (2024), Scatti di Gusto, and Pitti Taste exhibitor profile for Acetaia Giusti."
};

export default emiliaRomagna;
