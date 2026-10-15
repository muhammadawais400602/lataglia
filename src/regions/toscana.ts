import type { RegionStory } from './types';

// Content from the Toscana story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const toscana: RegionStory = {
  "slug": "toscana",
  "name": "Toscana",
  "seoTitle": "Tuscan Food and Pantry Ingredients | Italy Region by Region | La Taglia",
  "seoDescription": "Cook Tuscany from its pantry: new-harvest olive oil, Pecorino Toscano, cannellini beans, finocchiona, lardo di Colonnata and farro, with a recipe for ribollita.",
  "kicker": "Region four: the hills",
  "subtitle": "Great oil, honest bread, and nothing wasted.",
  "hero": {
    "color": "#3F5A2E",
    "colorDeep": "#2B3F1F"
  },
  "intro": [
    "Tuscany fills the heart of central Italy, from the Apennine ridge in the north and east to the Tyrrhenian coast in the west, with the rolling hills of Chianti and the Val d’Orcia between, the marble mountains of Carrara above the sea, and the wild Maremma to the south. The Etruscans farmed here before Rome, and Florence later became the banking capital of Europe and the cradle of the Renaissance. But for centuries most Tuscans lived as sharecroppers, splitting each harvest with the landowner, and their cooking learned to waste nothing. Bread is traditionally baked without salt, a habit often traced to medieval quarrels over salt taxes, and yesterday’s loaf becomes today’s soup or salad. Beans are eaten so often that Tuscans are nicknamed mangiafagioli, “bean eaters.” The result is cooking of real restraint: peppery new oil, good bread, beans, grilled meat, and little else.",
    "Tuscan food proves how far a few great ingredients can go. Start with the ingredients that define it, learn the dishes they make possible, and meet a bakery that has made the original almond biscuits in the same building since 1858."
  ],
  "pantry": {
    "lede": "Six ingredients behind Tuscany’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Olive oil",
        "place": "Across the region",
        "body": "Picked early, often while the olives are still green, Tuscan oil is grassy, bitter, and peppery enough to catch the back of your throat. It is poured raw over nearly everything, and at its best in the weeks after the autumn harvest.",
        "lookFor": "Toscano IGP or Chianti Classico DOP, with a harvest date from the last year.",
        "products": [
          {
            "id": "tos-olio-igp",
            "name": "Toscano IGP extra-virgin olive oil",
            "meta": "Bottle, new harvest"
          }
        ]
      },
      {
        "title": "Pecorino Toscano",
        "place": "Across the region, especially the south",
        "body": "Sheep’s-milk cheese, sold young and soft or aged until firm and nutty. Sweeter and milder than Pecorino Romano, it is eaten on its own with honey, pears, or fresh fava beans.",
        "lookFor": "Pecorino Toscano DOP. “Stagionato” means aged at least four months.",
        "products": [
          {
            "id": "tos-pecorino",
            "name": "Pecorino Toscano DOP stagionato",
            "meta": "Wedge"
          }
        ]
      },
      {
        "title": "Beans",
        "place": "Sorana, in the hills above Pescia",
        "body": "White cannellini are Tuscany’s everyday bean, simmered slowly with sage and finished with raw oil. The tiny, thin-skinned beans of Sorana are among the most prized.",
        "lookFor": "Fagiolo di Sorana IGP, or dried cannellini from a recent harvest.",
        "products": [
          {
            "id": "tos-fagioli",
            "name": "Tuscan cannellini beans",
            "meta": "Dried"
          }
        ]
      },
      {
        "title": "Finocchiona",
        "place": "Florence and the Chianti hills",
        "body": "A soft pork salami seasoned with wild fennel seed, garlic, and black pepper. Cut it thick and eat it with unsalted bread and a glass of Chianti.",
        "lookFor": "Finocchiona IGP.",
        "products": [
          {
            "id": "tos-finocchiona",
            "name": "Finocchiona IGP",
            "meta": "Sliced"
          }
        ]
      },
      {
        "title": "Lardo",
        "place": "Colonnata, in the Carrara marble quarries",
        "body": "Pork fatback cured for months in marble basins with salt, pepper, rosemary, and garlic. Sliced paper-thin over warm toast, it melts into something closer to butter than bacon.",
        "lookFor": "Lardo di Colonnata IGP.",
        "products": [
          {
            "id": "tos-lardo",
            "name": "Lardo di Colonnata IGP",
            "meta": "Sliced"
          }
        ]
      },
      {
        "title": "Farro",
        "place": "The Garfagnana, north of Lucca",
        "body": "An ancient wheat grown in the mountains for millennia, nutty and chewy. Tuscans cook it into soups, salads, and a thick farro-and-bean minestra.",
        "lookFor": "Farro della Garfagnana IGP.",
        "products": [
          {
            "id": "tos-farro",
            "name": "Farro della Garfagnana IGP",
            "meta": "Bag"
          }
        ]
      }
    ]
  },
  "dishes": {
    "lede": "Four dishes Tuscany makes its own.",
    "items": [
      {
        "title": "Ribollita",
        "where": "Florence",
        "body": "A thick soup of beans, cavolo nero, and stale bread, made one day and “reboiled” the next, which is what its name means. Better on the second day, and on the third.",
        "tip": "[Cook it below](#ribollita)"
      },
      {
        "title": "Bistecca alla fiorentina",
        "where": "Florence and the Val di Chiana",
        "body": "A T-bone at least three fingers thick, traditionally from white Chianina cattle, grilled over embers until charred outside and rare within, then finished with salt and oil.",
        "tip": "Serve with beans dressed in [new olive oil](product:tos-olio-igp) on the side."
      },
      {
        "title": "Pici all’aglione",
        "where": "Siena",
        "body": "Thick, hand-rolled spaghetti in a slow tomato sauce made with aglione, the giant, mild garlic of the Val di Chiana.",
        "tip": "Look for [dried pici](product:tos-pici) from Siena if you don’t roll your own."
      },
      {
        "title": "Cantucci and Vin Santo",
        "where": "Prato",
        "body": "Twice-baked almond biscuits dipped in Vin Santo, Tuscany’s amber dessert wine. The traditional way to end a meal, and to linger over it.",
        "tip": "Start with [the original from Prato](product:tos-mattei-prato)."
      }
    ]
  },
  "maker": {
    "name": "Biscottificio Antonio Mattei",
    "place": "Prato",
    "paragraphs": [
      "In 1858, Antonio Mattei opened a bakery in the center of Prato, the old textile town just northwest of Florence, and began making the almond biscuits now known around the world as cantucci. The business still bears his name, but since the early 1900s it has been run by the Pandolfini family, and it still bakes every day in the same building on Via Ricasoli.",
      "The original Biscotti di Prato use just five ingredients: flour, sugar, fresh eggs, almonds, and pine nuts. The dough is baked as a loaf, sliced, and baked again until crisp. The biscuits still leave the shop in the deep-blue paper bag, tied by hand, that has become a trademark of its own."
    ],
    "photos": [],
    "facts": [
      {
        "label": "Founded",
        "value": "1858"
      },
      {
        "label": "Bakery",
        "value": "Same building"
      },
      {
        "label": "Recipe",
        "value": "Five ingredients"
      }
    ],
    "productsLabel": "From Antonio Mattei",
    "products": [
      {
        "id": "tos-mattei-prato",
        "name": "Mattei Biscotti di Prato",
        "meta": "Blue bag"
      },
      {
        "id": "tos-mattei-cioccolato",
        "name": "Mattei biscotti with dark chocolate",
        "meta": "Bag"
      }
    ]
  },
  "cook": {
    "title": "Cook Toscana",
    "lede": "One classic from scratch and one ten-minute shortcut from Florence.",
    "recipe": {
      "id": "ribollita",
      "title": "Ribollita",
      "serves": "6",
      "time": "about 3 hours, plus overnight",
      "from": "Florence",
      "steps": [
        {
          "title": "Cook the beans.",
          "body": "Simmer the soaked beans in fresh water with the sage for 1–1½ hours, until tender, and salt them at the end. Purée half the beans with some of their cooking liquid. If using canned beans, skip straight to puréeing."
        },
        {
          "title": "Make the base.",
          "body": "In a large pot, cook the onion, carrot, celery, and garlic gently in the olive oil for 10 minutes, until soft. Stir in the tomato paste."
        },
        {
          "title": "Add the greens.",
          "body": "Add the cavolo nero, cabbage, potato, and thyme and stir until wilted. Add the bean purée, the whole beans, and enough bean liquid or water to cover. Simmer gently for 1 hour and season."
        },
        {
          "title": "Layer with bread.",
          "body": "In a clean pot, alternate slices of stale bread with ladles of soup. Let it cool, then rest overnight in the fridge."
        },
        {
          "title": "Reboil and serve.",
          "body": "The next day, reheat slowly, stirring, until thick enough to stand a spoon in. Serve with a generous pour of raw olive oil, black pepper, and thin slices of red onion on the side."
        }
      ],
      "touch": "The oil is the seasoning here, not a garnish. Save your best [new-harvest Tuscan oil](product:tos-olio-igp) for the table and pour it raw over each bowl.",
      "shoppingList": [
        "400 g dried [cannellini beans](product:tos-fagioli)",
        "1 sage sprig and 1 thyme sprig",
        "1 onion, 1 carrot, 2 celery stalks",
        "2 garlic cloves",
        "80 ml [extra-virgin olive oil](product:tos-olio-igp), plus more",
        "2 tbsp tomato paste",
        "300 g cavolo nero",
        "¼ savoy cabbage",
        "1 potato",
        "300 g stale country bread",
        "Salt, pepper, and red onion"
      ],
      "products": [
        {
          "id": "tos-fagioli",
          "name": "Tuscan cannellini beans",
          "meta": "Dried"
        },
        {
          "id": "tos-olio-igp",
          "name": "Toscano IGP extra-virgin olive oil",
          "meta": "Bottle, new harvest"
        }
      ],
      "schema": {
        "yield": "6 servings",
        "prepTime": "PT30M",
        "cookTime": "PT2H30M",
        "totalTime": "PT3H",
        "ingredients": [
          "400 g dried cannellini beans, soaked overnight (or three 400 g cans, drained)",
          "1 sage sprig",
          "1 onion, 1 carrot, and 2 celery stalks, finely chopped",
          "2 garlic cloves, sliced",
          "80 ml extra-virgin olive oil, plus more to serve",
          "2 tablespoons tomato paste",
          "300 g cavolo nero (lacinato kale), stems removed, sliced",
          "¼ savoy cabbage, shredded",
          "1 potato, diced",
          "1 thyme sprig",
          "300 g stale country bread, sliced",
          "Salt and black pepper",
          "Red onion, to serve (optional)"
        ]
      }
    },
    "shortcut": {
      "title": "Ten minutes in Florence",
      "body": "Fettunta is how Tuscans taste the new oil each autumn. Grill or toast thick slices of country bread, rub them with a cut garlic clove, sprinkle with salt, and pour on new-harvest olive oil until the bread is soaked through. Add a few slices of finocchiona or lardo and dinner is close to done.",
      "products": [
        {
          "id": "tos-olio-igp",
          "name": "Toscano IGP extra-virgin olive oil",
          "meta": "Bottle, new harvest"
        },
        {
          "id": "tos-finocchiona",
          "name": "Finocchiona IGP",
          "meta": "Sliced"
        }
      ]
    }
  },
  "readTheLabel": "“Bottled in Italy” or “imported from Italy” on olive oil is not the same as oil grown in Tuscany, and “Tuscan-style” means nothing at all. Check the place of production, the harvest date, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Toscana home",
    "body": "A Tuscan table is built on a few things done properly: oil, bread, beans, and something to slice. We’ve gathered eight ingredients from this story into one set: enough for a pot of ribollita, an antipasto board, and cantucci to finish.",
    "button": "Add the Toscana pantry set",
    "products": [
      {
        "id": "tos-olio-igp",
        "name": "Toscano IGP olive oil",
        "meta": "New harvest"
      },
      {
        "id": "tos-pecorino",
        "name": "Pecorino Toscano DOP",
        "meta": "Stagionato"
      },
      {
        "id": "tos-fagioli",
        "name": "Tuscan cannellini beans",
        "meta": "Dried"
      },
      {
        "id": "tos-farro",
        "name": "Farro della Garfagnana IGP",
        "meta": "Bag"
      },
      {
        "id": "tos-finocchiona",
        "name": "Finocchiona IGP",
        "meta": "Sliced"
      },
      {
        "id": "tos-lardo",
        "name": "Lardo di Colonnata IGP",
        "meta": "Sliced"
      },
      {
        "id": "tos-pici",
        "name": "Pici from Siena",
        "meta": "Dried"
      },
      {
        "id": "tos-mattei-prato",
        "name": "Mattei Biscotti di Prato",
        "meta": "Blue bag"
      }
    ]
  },
  "about": [
    "La Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "Consorzio per la Tutela dell’Olio Extravergine di Oliva Toscano IGP; Consorzio Tutela Pecorino Toscano DOP; Consorzio Tutela Finocchiona IGP; European Commission eAmbrosia register; Visit Tuscany; Pitti Taste exhibitor profile and Cibus company profile for Biscottificio Antonio Mattei."
};

export default toscana;
