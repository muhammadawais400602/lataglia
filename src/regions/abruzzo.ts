import type { RegionStory } from './types';

// Content from the Abruzzo story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const abruzzo: RegionStory = {
  "slug": "abruzzo",
  "name": "Abruzzo",
  "seoTitle": "Abruzzese Food and Pantry Ingredients | Italy Region by Region | La Taglia",
  "seoDescription": "Cook Abruzzo from its pantry: L’Aquila saffron, maccheroni alla chitarra, pecorino, Santo Stefano lentils, Abruzzese olive oil and Sulmona confetti, with a recipe for scrippelle ’mbusse.",
  "kicker": "Region fifteen: strong and gentle",
  "subtitle": "Shepherds’ trails, saffron fields, and sugared almonds.",
  "hero": {
    "color": "#2E3350",
    "colorDeep": "#1F2338"
  },
  "intro": [
    "Abruzzo rises from 130 kilometers of Adriatic coast to the highest peaks of the Apennines, the Gran Sasso and the Majella, so close together that you can eat in the mountains in the morning and reach the sea in under two hours. For centuries its people lived by sheep. Each year shepherds drove their flocks along the great transhumance trails between the cool summer pastures of the Abruzzo mountains and the plains of Puglia, and their cooking still shapes the region: lamb and mutton grilled over embers or stewed for hours in copper pots, and pecorino made from raw sheep’s milk. On the high plateaus, farmers grew saffron and lentils; in towns like Teramo and Sulmona, cooks and confectioners turned simple ingredients into festive specialties. Italians describe Abruzzo as “forte e gentile,” strong and gentle, and its food is both.",
    "Abruzzo is mountain food and sea food in a single day. Start with the ingredients that define the region, learn the dishes they make possible, and meet a family business that grew from an almond trade founded in 1783 into Sulmona’s best-known confetti maker."
  ],
  "pantry": {
    "lede": "Six ingredients behind Abruzzo’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Saffron",
        "place": "The Navelli plateau, near L’Aquila",
        "body": "The crocus flowers are picked at dawn in October, and their scarlet stigmas are removed one by one and dried to make Abruzzo’s “red gold.”",
        "lookFor": "Zafferano dell’Aquila DOP, sold as whole threads.",
        "products": [
          {
            "id": "abr-zafferano",
            "name": "Zafferano dell’Aquila DOP",
            "meta": "Threads"
          }
        ]
      },
      {
        "title": "Chitarra pasta",
        "place": "Across the region",
        "body": "Maccheroni alla chitarra are cut on a beech-wood frame strung with steel wires a few millimeters apart. A sheet of egg pasta is pressed through the wires with a rolling pin, making long strands with a square edge. The tool dates to around 1860.",
        "lookFor": "egg pasta labeled “alla chitarra,” made in Abruzzo.",
        "products": [
          {
            "id": "abr-chitarra",
            "name": "Maccheroni alla chitarra",
            "meta": "500 g"
          }
        ]
      },
      {
        "title": "Pecorino",
        "place": "The mountain pastures",
        "body": "Raw sheep’s-milk pecorino fed Abruzzo’s shepherds on the move. Look out for Pecorino di Farindola, made with a rare pig’s rennet, and the hard Canestrato di Castel del Monte from the high Gran Sasso pastures.",
        "lookFor": "Pecorino di Farindola, protected as a Slow Food Presidium.",
        "products": [
          {
            "id": "abr-pecorino-farindola",
            "name": "Pecorino di Farindola",
            "meta": "Wedge"
          }
        ]
      },
      {
        "title": "Lentils",
        "place": "Santo Stefano di Sessanio",
        "body": "The lentils of Santo Stefano di Sessanio, like the chickpeas of Navelli, are a staple of Abruzzo’s hearty mountain soups.",
        "lookFor": "lentils grown in Santo Stefano di Sessanio.",
        "products": [
          {
            "id": "abr-lenticchie",
            "name": "Lentils of Santo Stefano di Sessanio",
            "meta": "500 g"
          }
        ]
      },
      {
        "title": "Olive oil",
        "place": "The hills of Pescara, Chieti, and Teramo",
        "body": "Abruzzo’s olive-growing tradition is tied to Puglia’s through the old transhumance routes, and its native varieties give oils of many characters.",
        "lookFor": "Aprutino Pescarese, Colline Teatine, or Pretuziano delle Colline Teramane DOP.",
        "products": [
          {
            "id": "abr-olio",
            "name": "Aprutino Pescarese DOP extra-virgin olive oil",
            "meta": "Bottle"
          }
        ]
      },
      {
        "title": "Confetti",
        "place": "Sulmona",
        "body": "Whole almonds in a crisp sugar shell, the sweets Italians give at weddings and christenings. Sulmona’s archives mention confetti as early as 1492, and its nuns once shaped them into flowers and rosaries. Good confetti contain no flour or starch.",
        "lookFor": "confetti made in Sulmona. Dissolve one in water: a floury residue means starch was added.",
        "products": [
          {
            "id": "abr-confetti",
            "name": "Confetti di Sulmona",
            "meta": "Box"
          }
        ]
      }
    ]
  },
  "dishes": {
    "lede": "Four dishes Abruzzo makes its own.",
    "items": [
      {
        "title": "Scrippelle ’mbusse",
        "where": "Teramo",
        "body": "Thin crepes sprinkled with cheese, rolled up, and served in hot chicken broth. A festive first course in Teramo.",
        "tip": "[Cook it below](#scrippelle)"
      },
      {
        "title": "Chitarra con le pallottine",
        "where": "Across the region",
        "body": "Square-edged chitarra pasta in tomato sauce with tiny meatballs, the classic Abruzzese Sunday lunch. It is also served with lamb ragù.",
        "tip": "Start with [maccheroni alla chitarra](product:abr-chitarra)."
      },
      {
        "title": "Arrosticini",
        "where": "The Gran Sasso and beyond",
        "body": "Small skewers of sheep meat grilled over embers on a brazier called a fornacella. Born as a shepherds’ way to use the less noble cuts, eaten by the dozen.",
        "tip": "[Make them below](#shortcut)"
      },
      {
        "title": "Pecora alla callara",
        "where": "The mountains",
        "body": "Mutton stewed for hours in a copper pot, once hung over the fire on the hearth chain. A dish of the transhumance."
      }
    ]
  },
  "maker": {
    "name": "Confetti Pelino",
    "place": "Sulmona",
    "paragraphs": [
      "In 1783, Berardino Pelino started a business trading almonds in Introdacqua, just outside Sulmona. Over the generations it became a confetti maker and, in the second half of the 1800s, moved into the heart of Sulmona, by then home to a dozen confetti workshops. The company is still run by the Pelino family, today led by Mario Pelino.",
      "Pelino makes confetti from almonds and sugar, without flour or starch. Next to the factory, the family runs a free museum of confetti making, with the old machines and tools, documents, family photographs, and the first telephone installed in Sulmona."
    ],
    "photos": [],
    "facts": [
      {
        "label": "Founded",
        "value": "1783"
      },
      {
        "label": "Town",
        "value": "Sulmona"
      },
      {
        "label": "Museum",
        "value": "Free entry"
      }
    ],
    "productsLabel": "From Pelino",
    "products": [
      {
        "id": "abr-pelino-classici",
        "name": "Pelino almond confetti",
        "meta": "Box"
      },
      {
        "id": "abr-pelino-assortiti",
        "name": "Pelino assorted confetti",
        "meta": "Box"
      }
    ]
  },
  "cook": {
    "title": "Cook Abruzzo",
    "lede": "One classic from scratch and one ten-minute shortcut from the Gran Sasso.",
    "recipe": {
      "id": "scrippelle",
      "title": "Scrippelle ’mbusse",
      "serves": "4",
      "time": "about 40 minutes",
      "from": "Teramo",
      "steps": [
        {
          "title": "Make the batter.",
          "body": "Whisk the eggs, flour, water, parsley, and salt into a smooth, thin batter. Let it rest for 30 minutes."
        },
        {
          "title": "Cook the scrippelle.",
          "body": "Lightly grease a small nonstick pan and cook very thin crepes, about a minute on each side, stacking them as they are done."
        },
        {
          "title": "Fill and roll.",
          "body": "Sprinkle each crepe with a little grated cheese and roll it up tightly."
        },
        {
          "title": "Serve in broth.",
          "body": "Place three rolled scrippelle in each warm bowl, pour over the boiling broth, and finish with more cheese."
        }
      ],
      "touch": "Everything depends on the broth, so make it from a good hen if you can. Use a mix of sharp pecorino and Parmigiano for the filling, so the cheese melts into the hot broth.",
      "shoppingList": [
        "4 eggs",
        "100 g flour",
        "About 200 ml water",
        "Fresh parsley",
        "About 1.2 L chicken broth",
        "60 g [pecorino](product:abr-pecorino-farindola) and Parmigiano Reggiano",
        "Salt, and oil or lard for the pan"
      ],
      "products": [
        {
          "id": "abr-pecorino-farindola",
          "name": "Pecorino di Farindola",
          "meta": "Wedge"
        }
      ],
      "schema": {
        "yield": "4 servings",
        "prepTime": "PT15M",
        "cookTime": "PT25M",
        "totalTime": "PT40M",
        "ingredients": [
          "4 eggs",
          "100 g flour",
          "About 200 ml water",
          "1 tablespoon finely chopped parsley",
          "A pinch of salt",
          "A little olive oil or lard for the pan",
          "About 1.2 L hot chicken broth",
          "60 g grated pecorino and Parmigiano Reggiano, mixed"
        ]
      }
    },
    "shortcut": {
      "title": "Ten minutes on the Gran Sasso",
      "body": "Heat a grill pan or barbecue until very hot. Season arrosticini skewers with salt and cook for a few minutes, turning often, until browned outside and juicy within. Serve with bread drizzled with Abruzzese olive oil and a glass of Montepulciano d’Abruzzo.",
      "products": [
        {
          "id": "abr-arrosticini",
          "name": "Arrosticini",
          "meta": "Skewers"
        },
        {
          "id": "abr-olio",
          "name": "Aprutino Pescarese DOP extra-virgin olive oil",
          "meta": "Bottle"
        }
      ]
    }
  },
  "readTheLabel": "Saffron sold without a named origin may come from anywhere; whole threads from a protected origin are easier to trust. Confetti made with starch are cheaper, but not the same. Check the place of production, the ingredient list, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Abruzzo home",
    "body": "An Abruzzese table moves from the mountains to the sea and ends with something sweet. We’ve gathered eight ingredients from this story into one set: enough for chitarra, a pot of lentils, a saffron dish, and confetti to finish.",
    "button": "Add the Abruzzo pantry set",
    "products": [
      {
        "id": "abr-zafferano",
        "name": "Zafferano dell’Aquila DOP",
        "meta": "Threads"
      },
      {
        "id": "abr-chitarra",
        "name": "Maccheroni alla chitarra",
        "meta": "500 g"
      },
      {
        "id": "abr-lenticchie",
        "name": "Santo Stefano lentils",
        "meta": "500 g"
      },
      {
        "id": "abr-ceci-navelli",
        "name": "Navelli chickpeas",
        "meta": "500 g"
      },
      {
        "id": "abr-pecorino-farindola",
        "name": "Pecorino di Farindola",
        "meta": "Wedge"
      },
      {
        "id": "abr-olio",
        "name": "Aprutino Pescarese DOP oil",
        "meta": "Bottle"
      },
      {
        "id": "abr-pelino-classici",
        "name": "Pelino almond confetti",
        "meta": "Box"
      },
      {
        "id": "abr-confetti",
        "name": "Confetti di Sulmona",
        "meta": "Box"
      }
    ]
  },
  "about": [
    "La Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "Italia.it (ENIT) guides to Abruzzese food, saffron, arrosticini, and maccheroni alla chitarra; Agriturismo.it and Eroica Fenice on Abruzzese dishes; Il Sole 24 Ore, Internazionale, Gambero Rosso, Inside the Vatican, Epicurean Traveler, and Life in Abruzzo on Confetti Pelino and Sulmona."
};

export default abruzzo;
