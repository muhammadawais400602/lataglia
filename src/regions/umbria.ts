import type { RegionStory } from './types';

// Content from the Umbria story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const umbria: RegionStory = {
  "slug": "umbria",
  "name": "Umbria",
  "seoTitle": "Umbrian Food and Pantry Ingredients | Italy Region by Region | La Taglia",
  "seoDescription": "Cook Umbria from its pantry: black truffles, Castelluccio lentils, Prosciutto di Norcia, Umbrian olive oil, farro and strangozzi, with a recipe for Castelluccio lentils.",
  "kicker": "Region thirteen: the green heart",
  "subtitle": "Black truffles, tiny lentils, and the butchers of Norcia.",
  "hero": {
    "color": "#2F4F5A",
    "colorDeep": "#203840",
    "dossier": "Terroir archive · Dossier N° 13",
    "badge": "The green heart",
    "metrics": [
      {
        "icon": "map",
        "label": "Location",
        "value": "Center of Italy"
      },
      {
        "icon": "water",
        "label": "River",
        "value": "The Tiber"
      },
      {
        "icon": "terrain",
        "label": "Mountains",
        "value": "Apennines and Sibillini"
      },
      {
        "icon": "history_edu",
        "label": "Saints",
        "value": "Francis and Benedict"
      }
    ],
    "heritage": "Land of saints",
    "imageCaption": {
      "title": "Castelluccio plain",
      "body": "A karst plain about 1,500 meters up, where lentil flowers bloom with poppies each summer."
    },
    "imageTag": "Castelluccio, Monti Sibillini",
    "heritageNote": "black diamond",
    "image": {
      "q": "Castelluccio plain Umbria || Umbria landscape",
      "orientation": "landscape"
    },
    "imageAlt": "A karst plain about 1,500 meters up, where lentil flowers bloom with poppies each summer."
  },
  "intro": [
    "Umbria sits at the very center of Italy, the only region with neither a coastline nor a border with another country, which is why Italians call it the green heart of the peninsula. The Apennines and the Sibillini mountains rise to the east, the Tiber runs through its middle, and between them lie wooded hills, olive groves, and the high Castelluccio plain. It is a land of saints, home to Francis of Assisi and Benedict of Norcia, and of farmers rather than courts. Umbrian cooking grew from what the land gave: egg-free pastas of flour and water, unsalted bread, legumes and ancient grains, pork cured by the butchers of Norcia, peppery olive oil, and black truffles from the oak woods. The result is earthy, honest food, where a few superb ingredients do all the work.",
    "Umbria proves how far simple food can go when the ingredients are this good. Start with the ingredients that define the region, learn the dishes they make possible, and meet a family that has traded Umbrian truffles since 1852."
  ],
  "pantry": {
    "lede": "Six ingredients behind Umbria’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Black truffle",
        "place": "Norcia, Spoleto, and the Valnerina",
        "body": "Tuber melanosporum, known in Italy as the black truffle of Norcia and Spoleto, with a rough black skin and a dark, violet-black interior veined with fine white lines. It is harvested in winter, roughly December to March.",
        "lookFor": "Tuber melanosporum on the label. The summer black truffle, Tuber aestivum or scorzone, is a different and less prized species.",
        "products": [
          {
            "id": "umb-tartufo-nero",
            "name": "Fresh black truffle, Tuber melanosporum",
            "meta": "Winter only",
            "tag": "Winter only",
            "tagTone": "gold",
            "origin": "Norcia, Spoleto",
            "img": {
              "q": "Fresh black truffle Umbria || Fresh black truffle || Black truffle food",
              "orientation": "squarish"
            }
          }
        ],
        "shelfLabel": "In season"
      },
      {
        "title": "Lentils",
        "place": "The Castelluccio plateau, Monti Sibillini",
        "body": "Tiny, thin-skinned lentils grown on a karst plain about 1,500 meters up, inside the Monti Sibillini National Park. They need no soaking and cook quickly. Each summer their flowers join poppies and cornflowers in the famous fioritura of the plain.",
        "lookFor": "Lenticchia di Castelluccio di Norcia IGP.",
        "products": [
          {
            "id": "umb-lenticchie",
            "name": "Lenticchia di Castelluccio IGP",
            "meta": "500 g",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Castelluccio",
            "img": {
              "q": "Lenticchia di Castelluccio Umbria || Lenticchia di Castelluccio || Lentils food",
              "orientation": "squarish"
            }
          }
        ]
      },
      {
        "title": "Prosciutto di Norcia",
        "place": "Norcia and the Valnerina",
        "body": "Norcia is so identified with pork that across central Italy a pork butcher is still called a norcino. Its cured ham sits alongside a long line of local salumi.",
        "lookFor": "Prosciutto di Norcia IGP.",
        "products": [
          {
            "id": "umb-prosciutto",
            "name": "Prosciutto di Norcia IGP",
            "meta": "Sliced",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Norcia",
            "img": {
              "q": "Prosciutto di Norcia Umbria || Prosciutto di Norcia || Prosciutto di Norcia food",
              "orientation": "squarish"
            }
          }
        ]
      },
      {
        "title": "Olive oil",
        "place": "From Assisi to Spoleto and beyond",
        "body": "Made mainly from Moraiolo, Frantoio, and Leccino olives, Umbrian oil is green to golden, with a strong fruity flavor and a bitter, peppery finish. In November, mills across the region open their doors for Frantoi Aperti.",
        "lookFor": "Umbria DOP, often with a sub-area such as Colli Assisi-Spoleto.",
        "products": [
          {
            "id": "umb-olio",
            "name": "Umbria DOP extra-virgin olive oil",
            "meta": "Bottle",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Assisi to Spoleto",
            "img": {
              "q": "Umbria extra-virgin olive oil || Olive oil food",
              "orientation": "squarish"
            }
          }
        ]
      },
      {
        "title": "Farro",
        "place": "Monteleone di Spoleto",
        "body": "An ancient grain grown in the mountains of the Valnerina, cooked into thick soups, sometimes with pumpkin, and finished with olive oil.",
        "lookFor": "Farro di Monteleone di Spoleto DOP.",
        "products": [
          {
            "id": "umb-farro",
            "name": "Farro di Monteleone di Spoleto DOP",
            "meta": "Bag",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Monteleone",
            "img": {
              "q": "Farro di Monteleone Spoleto Umbria || Farro di Monteleone Spoleto || Farro food",
              "orientation": "squarish"
            }
          }
        ]
      },
      {
        "title": "Strangozzi",
        "place": "Spoleto and Foligno",
        "body": "Thick, rough ribbons of flour and water, made without eggs like most Umbrian pasta. Around Perugia similar pasta is called umbricelli.",
        "lookFor": "egg-free strangozzi made in Umbria.",
        "products": [
          {
            "id": "umb-strangozzi",
            "name": "Strangozzi",
            "meta": "500 g",
            "tag": "Egg-free",
            "tagTone": "neutral",
            "origin": "Spoleto, Foligno",
            "img": {
              "q": "Strangozzi Umbria || Strangozzi || Strangozzi food",
              "orientation": "squarish"
            }
          }
        ]
      }
    ],
    "eyebrow": "Green heart pantry"
  },
  "dishes": {
    "lede": "Four dishes Umbria makes its own.",
    "items": [
      {
        "title": "Lenticchie di Castelluccio",
        "where": "Norcia",
        "body": "The plateau’s tiny lentils, simmered with a soft vegetable base until tender but whole, and finished with raw olive oil.",
        "tip": "[Cook it below](#lenticchie)",
        "image": {
          "q": "Lenticchie di Castelluccio Umbria food || Lenticchie di Castelluccio food",
          "orientation": "landscape"
        }
      },
      {
        "title": "Strangozzi al tartufo",
        "where": "Spoleto and Norcia",
        "body": "Thick flour-and-water ribbons dressed with black truffle, the region’s signature pasta.",
        "tip": "[Make it below](#shortcut)",
        "image": {
          "q": "Strangozzi al tartufo Umbria food || Strangozzi al tartufo food",
          "orientation": "landscape"
        }
      },
      {
        "title": "Pasta alla norcina",
        "where": "Norcia",
        "body": "Short pasta with crumbled pork sausage and ricotta, often finished with black truffle. A dish built on Norcia’s pork tradition.",
        "note": "Norcia’s pork tradition",
        "image": {
          "q": "Pasta alla norcina Umbria food || Pasta alla norcina food",
          "orientation": "landscape"
        }
      },
      {
        "title": "Torta al testo",
        "where": "Across the region",
        "body": "A flatbread of flour, water, and salt, cooked on a hot stone or iron griddle called a testo and eaten filled with cured meats such as Prosciutto di Norcia. In Gubbio it is called crescia.",
        "note": "Called crescia in Gubbio",
        "image": {
          "q": "Torta al testo Umbria food || Torta al testo food",
          "orientation": "landscape"
        }
      }
    ],
    "eyebrow": "Culinary canon"
  },
  "maker": {
    "name": "Urbani Tartufi",
    "place": "Scheggino",
    "paragraphs": [
      "In 1852, Costantino Urbani began sending fresh truffles from the Valnerina to Carpentras, in Provence, from Scheggino, a small village on the river Nera. Trade soon spread to Germany, Switzerland, and beyond, and later generations took the business to the United States and pioneered truffle cultivation in Italy.",
      "The company is still run by the Urbani family, with a sixth generation now joining, and has become the world’s largest truffle business. Its first production site, in the family home in Scheggino, now houses the Urbani Truffle Museum, telling the story of the Valnerina’s “black diamond.”"
    ],
    "photos": [
      {
        "src": {
          "q": "Scheggino Valnerina Umbria || Scheggino Umbria",
          "orientation": "landscape"
        },
        "alt": "Scheggino on the river Nera",
        "caption": "Scheggino on the river Nera"
      },
      {
        "src": {
          "q": "truffles Scheggino Umbria || truffles Umbria || Scheggino Umbria",
          "orientation": "landscape"
        },
        "alt": "Valnerina black truffles",
        "caption": "Valnerina black truffles"
      },
      {
        "src": {
          "q": "Urbani black truffle Scheggino Umbria || Urbani black truffle Umbria || Scheggino Umbria",
          "orientation": "landscape"
        },
        "alt": "Urbani preserved truffle",
        "caption": "Urbani preserved truffle"
      }
    ],
    "facts": [
      {
        "label": "Founded",
        "value": "1852"
      },
      {
        "label": "Village",
        "value": "Scheggino"
      },
      {
        "label": "Family",
        "value": "Six generations"
      }
    ],
    "productsLabel": "From Urbani",
    "products": [
      {
        "id": "umb-urbani-nero",
        "name": "Urbani black truffle, preserved",
        "meta": "Jar",
        "tag": "Black truffle",
        "tagTone": "gold",
        "origin": "Scheggino",
        "img": {
          "q": "Urbani black truffle Umbria || Urbani black truffle",
          "orientation": "squarish"
        }
      },
      {
        "id": "umb-urbani-salsa",
        "name": "Urbani black truffle sauce",
        "meta": "Jar",
        "tag": "Truffle sauce",
        "tagTone": "gold",
        "origin": "Scheggino",
        "img": {
          "q": "Urbani black truffle sauce Umbria || Urbani black truffle sauce",
          "orientation": "squarish"
        }
      }
    ]
  },
  "cook": {
    "title": "Cook Umbria",
    "lede": "One classic from scratch and one ten-minute shortcut from Spoleto.",
    "recipe": {
      "id": "lenticchie",
      "title": "Lenticchie di Castelluccio",
      "serves": "4",
      "time": "about 50 minutes",
      "from": "Norcia",
      "steps": [
        {
          "title": "Make the base.",
          "body": "In a heavy pot, cook the onion, carrot, celery, and garlic gently in the olive oil for 8–10 minutes, until soft. Stir in the tomato paste."
        },
        {
          "title": "Add the lentils.",
          "body": "Add the rinsed lentils and stir to coat them in the oil, then pour in the hot water or broth."
        },
        {
          "title": "Simmer.",
          "body": "Simmer gently, partly covered, for 30–40 minutes, until the lentils are tender but still whole. Add salt toward the end."
        },
        {
          "title": "Serve.",
          "body": "Ladle into bowls over toasted bread and finish with a pour of raw olive oil and black pepper."
        }
      ],
      "touch": "True [Castelluccio lentils](product:umb-lenticchie) need no soaking and cook quickly. Finish with a peppery [Umbrian oil](product:umb-olio) poured raw, so its flavor stays bright.",
      "shoppingList": [
        "300 g [Castelluccio lentils](product:umb-lenticchie)",
        "1 small onion, 1 carrot, 1 celery stalk",
        "1 garlic clove",
        "3 tbsp [extra-virgin olive oil](product:umb-olio), plus more",
        "1 tbsp tomato paste",
        "About 1.2 L water or light broth",
        "Salt, pepper, and toasted bread"
      ],
      "products": [
        {
          "id": "umb-lenticchie",
          "name": "Lenticchia di Castelluccio IGP",
          "meta": "500 g",
          "tag": "IGP",
          "tagTone": "green",
          "origin": "Castelluccio",
          "img": {
            "q": "Lenticchia di Castelluccio Umbria || Lenticchia di Castelluccio || Lentils food",
            "orientation": "squarish"
          }
        },
        {
          "id": "umb-olio",
          "name": "Umbria DOP extra-virgin olive oil",
          "meta": "Bottle",
          "tag": "DOP",
          "tagTone": "green",
          "origin": "Assisi to Spoleto",
          "img": {
            "q": "Umbria extra-virgin olive oil || Olive oil food",
            "orientation": "squarish"
          }
        }
      ],
      "schema": {
        "yield": "4 servings",
        "prepTime": "PT10M",
        "cookTime": "PT40M",
        "totalTime": "PT50M",
        "ingredients": [
          "300 g Castelluccio lentils, rinsed (no soaking needed)",
          "1 small onion, 1 carrot, and 1 celery stalk, finely chopped",
          "1 garlic clove",
          "3 tablespoons extra-virgin olive oil, plus more to serve",
          "1 tablespoon tomato paste",
          "About 1.2 L hot water or light broth",
          "Salt and black pepper",
          "Toasted bread, to serve"
        ]
      },
      "imageCaption": "Norcia classic · about 50 minutes",
      "image": {
        "q": "Lenticchie di Castelluccio Umbria food || Lenticchie di Castelluccio food",
        "orientation": "landscape"
      }
    },
    "shortcut": {
      "title": "Ten minutes in Spoleto",
      "body": "Cook strangozzi in salted water. Meanwhile, gently warm olive oil with a little garlic and an anchovy fillet until the anchovy melts. Off the heat, while the oil is still warm, stir in grated black truffle. Toss with the drained pasta and a splash of cooking water, and shave a little more truffle on top.",
      "products": [
        {
          "id": "umb-strangozzi",
          "name": "Strangozzi",
          "meta": "500 g",
          "tag": "Egg-free",
          "tagTone": "neutral",
          "origin": "Spoleto, Foligno",
          "img": {
            "q": "Strangozzi Umbria || Strangozzi || Strangozzi food",
            "orientation": "squarish"
          }
        },
        {
          "id": "umb-urbani-nero",
          "name": "Urbani black truffle, preserved",
          "meta": "Jar",
          "tag": "Black truffle",
          "tagTone": "gold",
          "origin": "Scheggino",
          "img": {
            "q": "Urbani black truffle Umbria || Urbani black truffle",
            "orientation": "squarish"
          }
        }
      ],
      "eyebrow": "Ten minutes in Spoleto",
      "button": "Get the truffle pair"
    },
    "eyebrow": "Terroir kitchen"
  },
  "readTheLabel": "“Black truffle” can mean the prized Tuber melanosporum or the cheaper summer truffle, so check the species. Lentils sold as “Castelluccio-style” may be grown anywhere. Check the species, the place of production, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Umbria home",
    "body": "An Umbrian table is simple and generous: good oil, good bread, legumes, and something from the norcino. We’ve gathered eight ingredients from this story into one set: enough for a pot of lentils, a plate of strangozzi with truffle, and a board of Norcia salumi.",
    "button": "Add the Umbria pantry set",
    "products": [
      {
        "id": "umb-lenticchie",
        "name": "Lenticchia di Castelluccio IGP",
        "meta": "500 g",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "Castelluccio",
        "img": {
          "q": "Lenticchia di Castelluccio Umbria || Lenticchia di Castelluccio || Lentils food",
          "orientation": "squarish"
        }
      },
      {
        "id": "umb-farro",
        "name": "Farro di Monteleone DOP",
        "meta": "Bag",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Monteleone",
        "img": {
          "q": "Farro di Monteleone Spoleto Umbria || Farro di Monteleone Spoleto || Farro food",
          "orientation": "squarish"
        }
      },
      {
        "id": "umb-strangozzi",
        "name": "Strangozzi",
        "meta": "500 g",
        "tag": "Egg-free",
        "tagTone": "neutral",
        "origin": "Spoleto, Foligno",
        "img": {
          "q": "Strangozzi Umbria || Strangozzi || Strangozzi food",
          "orientation": "squarish"
        }
      },
      {
        "id": "umb-olio",
        "name": "Umbria DOP olive oil",
        "meta": "Bottle",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Assisi to Spoleto",
        "img": {
          "q": "Umbria extra-virgin olive oil || Olive oil food",
          "orientation": "squarish"
        }
      },
      {
        "id": "umb-prosciutto",
        "name": "Prosciutto di Norcia IGP",
        "meta": "Sliced",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "Norcia",
        "img": {
          "q": "Prosciutto di Norcia Umbria || Prosciutto di Norcia || Prosciutto di Norcia food",
          "orientation": "squarish"
        }
      },
      {
        "id": "umb-salumi-norcia",
        "name": "Norcia salami",
        "meta": "Whole",
        "tag": "Norcino craft",
        "tagTone": "neutral",
        "origin": "Norcia",
        "img": {
          "q": "Norcia salami Umbria || Norcia salami",
          "orientation": "squarish"
        }
      },
      {
        "id": "umb-urbani-nero",
        "name": "Urbani black truffle",
        "meta": "Jar",
        "tag": "Black truffle",
        "tagTone": "gold",
        "origin": "Scheggino",
        "img": {
          "q": "Urbani black truffle Umbria || Urbani black truffle",
          "orientation": "squarish"
        }
      },
      {
        "id": "umb-urbani-salsa",
        "name": "Urbani truffle sauce",
        "meta": "Jar",
        "tag": "Truffle sauce",
        "tagTone": "gold",
        "origin": "Scheggino",
        "img": {
          "q": "Urbani black truffle sauce Umbria || Urbani black truffle sauce",
          "orientation": "squarish"
        }
      }
    ],
    "eyebrow": "Limited curation · Parcel N° 13"
  },
  "about": [
    "La Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "Umbria Tourism (Regione Umbria) on Lenticchia di Castelluccio IGP and Umbrian food traditions; Regione Umbria traditional product sheet for tartufo nero pregiato; Italo Americano and Gambero Rosso on Castelluccio; Camera di Commercio di Perugia on Norcia products; Dissapore on Umbrian dishes, black truffle, and pasta alla norcina; Michelin Guide and Agriturismo.it on Umbrian olive oil, strangozzi, and torta al testo; Fortune Italia, Museimpresa, and Urbani on Urbani Tartufi."
};

export default umbria;
