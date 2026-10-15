import type { RegionStory } from './types';

// Content from the Lazio story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const lazio: RegionStory = {
  "slug": "lazio",
  "name": "Lazio",
  "seoTitle": "Roman and Lazio Food and Pantry Ingredients | Italy Region by Region | La Taglia",
  "seoDescription": "Cook Lazio from its pantry: Pecorino Romano, guanciale, Romanesco artichokes, Porchetta di Ariccia, Ricotta Romana and Sabina olive oil, with a recipe for spaghetti all’amatriciana.",
  "kicker": "Region eight: the eternal city",
  "subtitle": "Shepherds’ cheese, pork cheek, and the cooking of Rome.",
  "hero": {
    "color": "#B5531E",
    "colorDeep": "#7E3712"
  },
  "intro": [
    "Lazio lies on Italy’s Tyrrhenian coast, halfway down the peninsula, with Rome and the Tiber at its heart. Around the city spreads the Agro Romano, the open countryside where shepherds grazed their flocks for millennia; to the north lie volcanic lakes and hills, to the south the Castelli Romani, and inland the olive hills of the Sabina and the mountains around Amatrice, which only became part of Lazio in 1927. For centuries Rome was ruled by the popes, and its cooking was shaped less by courts than by working people. Shepherds gave it pecorino and guanciale. Rome’s Jewish community, confined to a walled ghetto from 1555 to 1870, gave it fried artichokes and a whole kitchen of its own. Workers at the Testaccio slaughterhouse, paid partly in offal, gave it the “fifth quarter” dishes that still fill Roman menus. The result is direct, salty, deeply satisfying food, built on a handful of ingredients used with confidence.",
    "Roman cooking proves how much a few pantry staples can do. Start with the ingredients that define Lazio, learn the dishes they make possible, and meet one of the last dairies still making Pecorino Romano near Rome."
  ],
  "pantry": {
    "lede": "Six ingredients behind Lazio’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Pecorino Romano",
        "place": "The Agro Romano, around Rome",
        "body": "A hard, cooked cheese made from whole sheep’s milk, salty and sharp, eaten at the table after five months and grated over almost everything after that. Its protected zone covers Lazio, Sardinia, and the province of Grosseto, but more than 90 percent is now made in Sardinia.",
        "lookFor": "the sheep’s-head mark and dairy code on the rind. A code beginning with a Lazio province, such as RM for Rome, means it was made in Lazio.",
        "products": [
          {
            "id": "laz-pecorino",
            "name": "Pecorino Romano DOP made in Lazio",
            "meta": "Wedge"
          }
        ]
      },
      {
        "title": "Guanciale",
        "place": "Amatrice and the Lazio mountains",
        "body": "Cured pork cheek, fattier than pancetta, with fat that melts into a sauce and turns crisp at the edges. It is the backbone of amatriciana, gricia, and carbonara.",
        "lookFor": "guanciale, not pancetta or bacon, which change the dish entirely.",
        "products": [
          {
            "id": "laz-guanciale",
            "name": "Guanciale",
            "meta": "Whole piece"
          }
        ]
      },
      {
        "title": "Romanesco artichokes",
        "place": "The Lazio countryside",
        "body": "Round, tender artichokes, called mammole or cimaroli, without thorns and almost without a choke, so the whole flower can be cooked and eaten. Their season is short, roughly February to April.",
        "lookFor": "Carciofo Romanesco del Lazio IGP.",
        "products": [
          {
            "id": "laz-carciofi",
            "name": "Carciofo Romanesco del Lazio IGP",
            "meta": "Spring only"
          }
        ],
        "shelfLabel": "In season"
      },
      {
        "title": "Porchetta",
        "place": "Ariccia, in the Castelli Romani",
        "body": "A whole boned pig seasoned with rosemary, garlic, and black pepper, rolled, and roasted until the skin turns into a crisp, salty crust that stays crunchy for days. Ariccia has held a porchetta festival every year since 1950.",
        "lookFor": "Porchetta di Ariccia IGP.",
        "products": [
          {
            "id": "laz-porchetta",
            "name": "Porchetta di Ariccia IGP",
            "meta": "Sliced"
          }
        ]
      },
      {
        "title": "Ricotta Romana",
        "place": "Across Lazio",
        "body": "Made from the whey left over from making pecorino, heated until soft curds rise. Fine, white, and sweet with the taste of sheep’s milk, it fills ravioli, tarts, and Roman pastries.",
        "lookFor": "Ricotta Romana DOP, made from the whey of Lazio sheep’s milk.",
        "products": [
          {
            "id": "laz-ricotta",
            "name": "Ricotta Romana DOP",
            "meta": "Fresh"
          }
        ]
      },
      {
        "title": "Olive oil",
        "place": "The Sabina hills, between Rome and Rieti",
        "body": "Olives have grown in the Sabina since antiquity, on calcareous hills where small, sloping plots rule out intensive farming. The oil is fruity, smooth, and lightly peppery, made from local varieties such as Carboncella, Leccino, Frantoio, and Raja.",
        "lookFor": "Sabina DOP, one of Italy’s first protected olive oils, registered in 1996. Each bottle carries a numbered label traceable to its producer and mill.",
        "products": [
          {
            "id": "laz-olio-sabina",
            "name": "Sabina DOP extra-virgin olive oil",
            "meta": "Bottle"
          }
        ]
      }
    ]
  },
  "dishes": {
    "lede": "Four dishes Lazio makes its own.",
    "items": [
      {
        "title": "All’amatriciana",
        "where": "Amatrice and Rome",
        "body": "Guanciale, white wine, tomato, and pecorino. It grew from gricia, the same dish without tomato, and in 2020 “Amatriciana tradizionale” became a protected Traditional Speciality Guaranteed. In Amatrice it is made with spaghetti; in Rome, often with bucatini.",
        "tip": "[Cook it below](#amatriciana)"
      },
      {
        "title": "Carbonara",
        "where": "Rome",
        "body": "Crisp guanciale, egg yolks, Pecorino Romano, and plenty of black pepper, tossed with hot pasta until creamy. Roman carbonara uses no cream.",
        "tip": "The same [guanciale](product:laz-guanciale) and [Pecorino Romano](product:laz-pecorino) you need for amatriciana."
      },
      {
        "title": "Carciofi alla giudia",
        "where": "The Jewish ghetto",
        "body": "Whole Romanesco artichokes fried in olive oil until the leaves open like a crisp golden flower, then salted. Born in Rome’s Jewish ghetto in the sixteenth century. Carciofi alla romana, braised with mint, parsley, and garlic, are the gentler cousin.",
        "tip": "A spring dish, February to April."
      },
      {
        "title": "Coda alla vaccinara",
        "where": "Testaccio",
        "body": "Oxtail braised for hours in tomato, often finished with raisins, pine nuts, and sometimes bitter cocoa. The signature of the quinto quarto, the offal and lesser cuts that fed Testaccio’s slaughterhouse workers from 1890."
      }
    ]
  },
  "maker": {
    "name": "Casearia Agri In",
    "place": "Torrita Tiberina",
    "paragraphs": [
      "Pecorino Romano is named for Rome, but almost all of it is now made in Sardinia. Production began moving there in the late 1800s, after Rome banned the salting of pecorino in the city’s shops. Casearia Agri In is one of the few dairies still making it near the city, in the Tiber valley north of Rome, inside the Nazzano Tevere-Farfa nature reserve.",
      "Its Deroma pecorino, named for the owner, is made from the milk of Lazio sheep farms, one of them run by the family, with nothing added but rennet and salt. The rind carries the dairy code RM7, marking it as made in the province of Rome. In a Gambero Rosso tasting of Pecorino Romano, it took first place for its powerful, distinctly Roman character."
    ],
    "photos": [],
    "facts": [
      {
        "label": "Dairy",
        "value": "Tiber valley"
      },
      {
        "label": "Rind code",
        "value": "RM7"
      },
      {
        "label": "Ingredients",
        "value": "Milk, rennet, salt"
      }
    ],
    "productsLabel": "From Casearia Agri In",
    "products": [
      {
        "id": "laz-deroma",
        "name": "Deroma Pecorino Romano DOP",
        "meta": "Wedge"
      }
    ]
  },
  "cook": {
    "title": "Cook Lazio",
    "lede": "One classic from scratch and one ten-minute shortcut from Rome.",
    "recipe": {
      "id": "amatriciana",
      "title": "Spaghetti all’amatriciana",
      "serves": "4",
      "time": "about 35 minutes",
      "from": "Amatrice",
      "steps": [
        {
          "title": "Render the guanciale.",
          "body": "Cook the guanciale in the olive oil with the chili in a wide pan over medium heat until the fat runs and the strips turn golden."
        },
        {
          "title": "Add the wine.",
          "body": "Pour in the wine and let it evaporate. Lift out the guanciale and set it aside so it stays crisp."
        },
        {
          "title": "Cook the tomatoes.",
          "body": "Add the tomatoes and a pinch of salt to the pan and simmer for about 10 minutes, until slightly thickened. Return the guanciale to the sauce."
        },
        {
          "title": "Toss and serve.",
          "body": "Cook the spaghetti in salted water until al dente, then drain. Off the heat, toss with the sauce and most of the Pecorino, and serve with the rest on top."
        }
      ],
      "touch": "Taking the guanciale out before the tomatoes go in is the Amatrice way: left in the sauce, it boils instead of staying crisp. Finish with [Pecorino Romano](product:laz-pecorino), never Parmigiano.",
      "shoppingList": [
        "400 g [spaghetti](product:laz-spaghetti) or bucatini",
        "125 g [guanciale](product:laz-guanciale)",
        "1 tbsp [extra-virgin olive oil](product:laz-olio-sabina)",
        "A small dried chili",
        "A splash of dry white wine",
        "400 g [peeled San Marzano tomatoes](product:laz-pelati)",
        "80 g [Pecorino Romano DOP](product:laz-pecorino)",
        "Salt"
      ],
      "products": [
        {
          "id": "laz-guanciale",
          "name": "Guanciale",
          "meta": "Whole piece"
        },
        {
          "id": "laz-pecorino",
          "name": "Pecorino Romano DOP made in Lazio",
          "meta": "Wedge"
        }
      ],
      "schema": {
        "yield": "4 servings",
        "prepTime": "PT10M",
        "cookTime": "PT25M",
        "totalTime": "PT35M",
        "ingredients": [
          "400 g spaghetti (bucatini in Rome)",
          "125 g guanciale, cut into short strips",
          "1 tablespoon extra-virgin olive oil",
          "A small dried chili",
          "A splash of dry white wine",
          "400 g peeled San Marzano tomatoes, crushed by hand",
          "80 g Pecorino Romano DOP, finely grated, plus more to serve",
          "Salt"
        ]
      }
    },
    "shortcut": {
      "title": "Ten minutes in Rome",
      "body": "Cacio e pepe needs only pasta, Pecorino Romano, and black pepper. Cook tonnarelli or spaghetti in a little barely salted water, since the cheese brings plenty of salt. Toast plenty of cracked pepper in a dry pan. Stir finely grated pecorino with a ladle of slightly cooled pasta water into a smooth cream, then toss with the drained pasta and pepper off the heat.",
      "products": [
        {
          "id": "laz-pecorino",
          "name": "Pecorino Romano DOP made in Lazio",
          "meta": "Wedge"
        },
        {
          "id": "laz-spaghetti",
          "name": "Spaghetti",
          "meta": "500 g"
        }
      ]
    }
  },
  "readTheLabel": "“Romano” on its own is not Pecorino Romano DOP, and porchetta or ricotta sold without Ariccia IGP or Romana DOP can be made anywhere. Check the place of production, the ingredient list, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Lazio home",
    "body": "A Roman table runs on a few staples used with confidence. We’ve gathered eight ingredients from this story into one set: enough for amatriciana, cacio e pepe, carbonara, and a porchetta sandwich.",
    "button": "Add the Lazio pantry set",
    "products": [
      {
        "id": "laz-pecorino",
        "name": "Pecorino Romano DOP",
        "meta": "Made in Lazio"
      },
      {
        "id": "laz-guanciale",
        "name": "Guanciale",
        "meta": "Whole piece"
      },
      {
        "id": "laz-olio-sabina",
        "name": "Sabina DOP olive oil",
        "meta": "Bottle"
      },
      {
        "id": "laz-spaghetti",
        "name": "Spaghetti",
        "meta": "500 g"
      },
      {
        "id": "laz-bucatini",
        "name": "Bucatini",
        "meta": "500 g"
      },
      {
        "id": "laz-pelati",
        "name": "Peeled San Marzano tomatoes",
        "meta": "Can"
      },
      {
        "id": "laz-porchetta",
        "name": "Porchetta di Ariccia IGP",
        "meta": "Sliced"
      },
      {
        "id": "laz-ricotta",
        "name": "Ricotta Romana DOP",
        "meta": "Fresh"
      }
    ]
  },
  "about": [
    "La Taglia explores Italy through its food, traditions, and places. Protected designations (DOP, IGP, and STG) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "ARSIAL (Regione Lazio) product sheets for Pecorino Romano DOP, Porchetta di Ariccia IGP, and Sabina DOP oil, and the Amatriciana Tradizionale STG specification; Ricotta Romana DOP production specification (European Commission); Turismo Roma on Pecorino Romano and coda alla vaccinara; Gambero Rosso on Pecorino Romano producers, Casearia Agri In, and Ricotta Romana; Michelin Guide on Roman artichokes; Wikipedia on amatriciana and Pecorino Romano."
};

export default lazio;
