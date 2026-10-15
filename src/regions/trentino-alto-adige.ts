import type { RegionStory } from './types';

// Content from the Trentino-Alto Adige story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const trentinoAltoAdige: RegionStory = {
  "slug": "trentino-alto-adige",
  "name": "Trentino-Alto Adige",
  "seoTitle": "Trentino-Alto Adige Food and Pantry Ingredients | Italy Region by Region | La Taglia",
  "seoDescription": "Cook Trentino-Alto Adige from its pantry: Speck Alto Adige, Val di Non apples, Schüttelbrot, Trentingrana, Puzzone di Moena and Stelvio, with a recipe for canederli in broth.",
  "kicker": "Region seventeen: the Dolomites",
  "subtitle": "Speck, mountain cheese, and the apples of the Alps.",
  "hero": {
    "color": "#1F3D2E",
    "colorDeep": "#142A1F",
    "dossier": "Terroir archive · Dossier N° 17",
    "badge": "Bilingual Alpine kitchen",
    "metrics": [
      {
        "icon": "terrain",
        "label": "Mountains",
        "value": "The Dolomites"
      },
      {
        "icon": "location_city",
        "label": "Provinces",
        "value": "Trento & Bolzano"
      },
      {
        "icon": "agriculture",
        "label": "Orchards",
        "value": "7,000 hectares"
      },
      {
        "icon": "restaurant",
        "label": "Signature",
        "value": "Speck Alto Adige IGP"
      }
    ],
    "heritage": "Tyrolean mountain heritage",
    "imageCaption": {
      "title": "The Dolomites",
      "body": "High valleys where orchards and vineyards cover the slopes and dairy cows graze summer pastures."
    },
    "imageTag": "Dolomites · high valleys",
    "heritageNote": "a little salt, a little smoke",
    "image": {
      "q": "Dolomites South Tyrol || South Tyrol landscape",
      "orientation": "landscape"
    },
    "imageAlt": "High valleys where orchards and vineyards cover the slopes and dairy cows graze summer pastures."
  },
  "intro": [
    "Trentino-Alto Adige is Italy’s northernmost region, a world of high valleys among the Dolomites made of two self-governing provinces: Italian-speaking Trentino around Trento in the south, and Alto Adige, or South Tyrol, around Bolzano in the north, where most people speak German. South Tyrol belonged to Austria until after the First World War, and its kitchen still feels Tyrolean. In the valleys, orchards and vineyards cover the slopes; higher up, dairy cows graze summer pastures that give the region its cheeses. Its signature cured meat, speck, joins two traditions: the salt-curing and air-drying of the Mediterranean and the smoking of northern Europe. The result is a cuisine of bread dumplings and rye bread, smoked ham and mountain cheese, apples and strudel, equal parts Italian and Alpine.",
    "Two languages, one mountain kitchen. Start with the ingredients that define the region, learn the dishes they make possible, and meet a South Tyrolean family that has spent three generations making speck."
  ],
  "pantry": {
    "lede": "Six ingredients behind the region’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Speck",
        "place": "Alto Adige, South Tyrol",
        "body": "Boneless pork leg dry-cured with salt and spices such as juniper and pepper, gently smoked over low-resin wood like beech at no more than 20°C, then aged for about 22 weeks. The rule is “a little salt, a little smoke, and plenty of fresh air.”",
        "lookFor": "“Speck Alto Adige IGP” branded on the rind. Not all speck from the region carries it.",
        "products": [
          {
            "id": "taa-speck",
            "name": "Speck Alto Adige IGP",
            "meta": "Piece",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Alto Adige",
            "img": {
              "q": "Speck Alto Adige South Tyrol || Speck Alto Adige || Speck food",
              "orientation": "squarish"
            }
          }
        ]
      },
      {
        "title": "Apples",
        "place": "Val di Non, Val di Sole, and South Tyrol",
        "body": "In the Val di Non and Val di Sole, more than 4,000 growers tend some 7,000 hectares of orchards producing Italy’s only DOP apple. South Tyrol’s apples carry their own protected name.",
        "lookFor": "Mela Val di Non DOP or Mela Alto Adige IGP.",
        "products": [
          {
            "id": "taa-mele",
            "name": "Mela Val di Non DOP",
            "meta": "Bag",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Val di Non",
            "img": {
              "q": "Mela Val di Non South Tyrol || Mela Val di Non || Apples food",
              "orientation": "squarish"
            }
          }
        ]
      },
      {
        "title": "Schüttelbrot",
        "place": "South Tyrol",
        "body": "A thin, crisp rye flatbread, the traditional partner for speck and cheese on a South Tyrolean board.",
        "lookFor": "Schüttelbrot Alto Adige IGP.",
        "products": [
          {
            "id": "taa-schuttelbrot",
            "name": "Schüttelbrot Alto Adige IGP",
            "meta": "Pack",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "South Tyrol",
            "img": {
              "q": "Schüttelbrot Alto Adige South Tyrol || Schüttelbrot Alto Adige || Schüttelbrot food",
              "orientation": "squarish"
            }
          }
        ]
      },
      {
        "title": "Trentingrana",
        "place": "Trentino, especially the Val di Non",
        "body": "Trentino’s mountain grana, a hard cheese made once a day from milk delivered fresh each evening. It takes at least 500 liters of milk to make one wheel of about 36 kilos.",
        "lookFor": "Trentingrana by name, Trentino’s own mountain grana.",
        "products": [
          {
            "id": "taa-trentingrana",
            "name": "Trentingrana",
            "meta": "Wedge",
            "tag": "Mountain grana",
            "tagTone": "neutral",
            "origin": "Trentino",
            "img": {
              "q": "Trentingrana South Tyrol || Trentingrana || Trentingrana food",
              "orientation": "squarish"
            }
          }
        ]
      },
      {
        "title": "Puzzone di Moena",
        "place": "The Val di Fassa",
        "body": "A washed-rind mountain cheese whose powerful aroma, the source of its name, gives way to a surprisingly delicate flavor. Locally it is also called Spretz tzaorì.",
        "lookFor": "Puzzone di Moena DOP.",
        "products": [
          {
            "id": "taa-puzzone",
            "name": "Puzzone di Moena DOP",
            "meta": "Wedge",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Val di Fassa",
            "img": {
              "q": "Puzzone di Moena South Tyrol || Puzzone di Moena || Puzzone di Moena food",
              "orientation": "squarish"
            }
          }
        ]
      },
      {
        "title": "Stelvio",
        "place": "South Tyrol",
        "body": "South Tyrol’s mountain cheese, protected since 2007 and the province’s only DOP cheese.",
        "lookFor": "Stelvio DOP, also labeled Stilfser.",
        "products": [
          {
            "id": "taa-stelvio",
            "name": "Stelvio DOP",
            "meta": "Wedge",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "South Tyrol",
            "img": {
              "q": "Stelvio South Tyrol || Stelvio || Stelvio food",
              "orientation": "squarish"
            }
          }
        ]
      }
    ],
    "eyebrow": "Essential terroir goods"
  },
  "dishes": {
    "lede": "Four dishes Trentino-Alto Adige makes its own.",
    "items": [
      {
        "title": "Canederli",
        "where": "Across the region",
        "body": "Bread dumplings, Knödel in German, made with stale bread and speck and served in meat broth with chives.",
        "tip": "[Cook it below](#canederli)",
        "image": {
          "q": "Canederli South Tyrol food || Canederli food",
          "orientation": "landscape"
        }
      },
      {
        "title": "Strangolapreti",
        "where": "Trento",
        "body": "Trentino’s green gnocchi made with spinach, whose name means “priest stranglers.”",
        "note": "“Priest stranglers”",
        "image": {
          "q": "Strangolapreti South Tyrol food || Strangolapreti food",
          "orientation": "landscape"
        }
      },
      {
        "title": "Apple strudel",
        "where": "Across the region",
        "body": "Thin pastry rolled around apples, the dessert South Tyrol shares with Austria, made with fruit from the region’s own orchards.",
        "tip": "Bake it with [Val di Non apples](product:taa-mele).",
        "image": {
          "q": "Apple strudel South Tyrol food || Apple strudel food",
          "orientation": "landscape"
        }
      },
      {
        "title": "The South Tyrolean board",
        "where": "South Tyrol",
        "body": "Speck, cheese, crisp rye bread, and a glass of local wine: the classic mountain snack after a hike.",
        "tip": "[Make it below](#shortcut)",
        "image": {
          "q": "The South Tyrolean board Tyrol food || The South Tyrolean board food",
          "orientation": "landscape"
        }
      }
    ],
    "eyebrow": "Alpine canon"
  },
  "maker": {
    "name": "Recla",
    "place": "Silandro",
    "paragraphs": [
      "Recla began as a village butcher’s shop opened by Gino Recla in the Val Venosta, in western South Tyrol. In 1985 his sons, Gino and Franz, took over and moved the business to Silandro, turning it toward export, and in 2004 it began shipping speck to the United States. Today the company is run by the third generation, the brothers Robert and Paul Recla, and is still wholly owned by the family.",
      "Recla makes Speck Alto Adige IGP in four traditional steps: careful selection of the meat, seasoning with the family’s spice mix, light smoking over beech wood, and slow natural aging of at least 22 weeks. The dry mountain air of the Val Venosta, among the glaciers of the Ortles and Palla Bianca, does the rest."
    ],
    "photos": [
      {
        "src": {
          "q": "Val Venosta Silandro South Tyrol || Val Venosta South Tyrol || Silandro South Tyrol",
          "orientation": "landscape"
        },
        "alt": "Val Venosta · Silandro",
        "caption": "Val Venosta · Silandro"
      },
      {
        "src": {
          "q": "aging speck Silandro South Tyrol || aging speck South Tyrol || Silandro South Tyrol",
          "orientation": "landscape"
        },
        "alt": "Speck aging 22+ weeks",
        "caption": "Speck aging 22+ weeks"
      },
      {
        "src": {
          "q": "Recla Speck Alto Adige Silandro South Tyrol || Recla Speck Alto Adige South Tyrol || Silandro South Tyrol",
          "orientation": "landscape"
        },
        "alt": "Recla Speck Alto Adige IGP",
        "caption": "Recla Speck Alto Adige IGP"
      }
    ],
    "facts": [
      {
        "label": "Valley",
        "value": "Val Venosta"
      },
      {
        "label": "Family",
        "value": "Third generation"
      },
      {
        "label": "Aging",
        "value": "22+ weeks"
      }
    ],
    "productsLabel": "From Recla",
    "products": [
      {
        "id": "taa-recla-speck",
        "name": "Recla Speck Alto Adige IGP",
        "meta": "Piece",
        "tag": "Aged 22+ wks",
        "tagTone": "gold",
        "origin": "Val Venosta",
        "img": {
          "q": "Recla Speck Alto Adige South Tyrol || Recla Speck Alto Adige",
          "orientation": "squarish"
        }
      },
      {
        "id": "taa-recla-speck-sliced",
        "name": "Recla Speck Alto Adige IGP, sliced",
        "meta": "Pack",
        "tag": "Beech smoked",
        "tagTone": "gold",
        "origin": "Val Venosta",
        "img": {
          "q": "Recla Speck Alto Adige South Tyrol || Recla Speck Alto Adige",
          "orientation": "squarish"
        }
      }
    ]
  },
  "cook": {
    "title": "Cook Trentino-Alto Adige",
    "lede": "One classic from scratch and one ten-minute shortcut from South Tyrol.",
    "recipe": {
      "id": "canederli",
      "title": "Canederli allo speck in brodo",
      "serves": "4",
      "time": "about 45 minutes",
      "from": "South Tyrol",
      "steps": [
        {
          "title": "Soak the bread.",
          "body": "Mix the bread cubes with the speck and the softened onion. Beat the eggs with the milk, pour over, and leave for about 15 minutes until the bread is soft."
        },
        {
          "title": "Shape the dumplings.",
          "body": "Add the herbs, a pinch of salt, and just enough flour to bind. With wet hands, shape into firm dumplings about the size of a small orange."
        },
        {
          "title": "Cook.",
          "body": "Lower the canederli into gently simmering salted water or broth and cook for about 10 minutes."
        },
        {
          "title": "Serve.",
          "body": "Lift them out with a slotted spoon and serve two per bowl in hot meat broth, topped with chopped chives."
        }
      ],
      "touch": "Use day-old bread and real [Speck Alto Adige](product:taa-speck), diced small so its smoky flavor runs through every bite. Test one dumpling first: if it falls apart, add a little more flour.",
      "shoppingList": [
        "200 g stale white bread",
        "100 g [Speck Alto Adige IGP](product:taa-speck)",
        "2 eggs",
        "About 150 ml milk",
        "1 small onion and a little butter",
        "1–2 tbsp flour",
        "Chives or parsley",
        "About 1.5 L meat broth",
        "Salt"
      ],
      "products": [
        {
          "id": "taa-speck",
          "name": "Speck Alto Adige IGP",
          "meta": "Piece",
          "tag": "IGP",
          "tagTone": "green",
          "origin": "Alto Adige",
          "img": {
            "q": "Speck Alto Adige South Tyrol || Speck Alto Adige || Speck food",
            "orientation": "squarish"
          }
        }
      ],
      "schema": {
        "yield": "4 servings",
        "prepTime": "PT30M",
        "cookTime": "PT15M",
        "totalTime": "PT45M",
        "ingredients": [
          "200 g stale white bread, cut into small cubes",
          "100 g Speck Alto Adige IGP, finely diced",
          "2 eggs",
          "About 150 ml milk",
          "1 small onion, finely chopped and softened in a little butter",
          "1–2 tablespoons flour",
          "A small bunch of chives or parsley, chopped",
          "Salt",
          "About 1.5 L hot meat broth"
        ]
      },
      "imageCaption": "South Tyrol classic · about 45 minutes",
      "image": {
        "q": "Canederli allo speck in brodo South Tyrol food || Canederli allo speck in brodo food",
        "orientation": "landscape"
      }
    },
    "shortcut": {
      "title": "Ten minutes in South Tyrol",
      "body": "Cut speck into thin slices or small batons, set it on a wooden board with wedges of mountain cheese and sliced apple, and add a stack of Schüttelbrot. Pour a glass of local wine. That’s the South Tyrolean snack, ready in minutes.",
      "products": [
        {
          "id": "taa-schuttelbrot",
          "name": "Schüttelbrot Alto Adige IGP",
          "meta": "Pack",
          "tag": "IGP",
          "tagTone": "green",
          "origin": "South Tyrol",
          "img": {
            "q": "Schüttelbrot Alto Adige South Tyrol || Schüttelbrot Alto Adige || Schüttelbrot food",
            "orientation": "squarish"
          }
        },
        {
          "id": "taa-stelvio",
          "name": "Stelvio DOP",
          "meta": "Wedge",
          "tag": "DOP",
          "tagTone": "green",
          "origin": "South Tyrol",
          "img": {
            "q": "Stelvio South Tyrol || Stelvio || Stelvio food",
            "orientation": "squarish"
          }
        }
      ],
      "eyebrow": "Alpine board shortcut",
      "button": "Get the board pair"
    },
    "eyebrow": "Mountain kitchen"
  },
  "readTheLabel": "Not every speck from the region is Speck Alto Adige IGP, and plenty of “speck” sold abroad is made elsewhere. Check the place of production, the brand on the rind, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Trentino-Alto Adige home",
    "body": "An Alpine table is built on smoked ham, mountain cheese, good bread, and apples. We’ve gathered eight ingredients from this story into one set: enough for canederli in broth, a South Tyrolean board, and a strudel.",
    "button": "Add the Trentino-Alto Adige pantry set",
    "products": [
      {
        "id": "taa-recla-speck",
        "name": "Recla Speck Alto Adige IGP",
        "meta": "Piece",
        "tag": "Aged 22+ wks",
        "tagTone": "gold",
        "origin": "Val Venosta",
        "img": {
          "q": "Recla Speck Alto Adige South Tyrol || Recla Speck Alto Adige",
          "orientation": "squarish"
        }
      },
      {
        "id": "taa-schuttelbrot",
        "name": "Schüttelbrot Alto Adige IGP",
        "meta": "Pack",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "South Tyrol",
        "img": {
          "q": "Schüttelbrot Alto Adige South Tyrol || Schüttelbrot Alto Adige || Schüttelbrot food",
          "orientation": "squarish"
        }
      },
      {
        "id": "taa-trentingrana",
        "name": "Trentingrana",
        "meta": "Wedge",
        "tag": "Mountain grana",
        "tagTone": "neutral",
        "origin": "Trentino",
        "img": {
          "q": "Trentingrana South Tyrol || Trentingrana || Trentingrana food",
          "orientation": "squarish"
        }
      },
      {
        "id": "taa-puzzone",
        "name": "Puzzone di Moena DOP",
        "meta": "Wedge",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Val di Fassa",
        "img": {
          "q": "Puzzone di Moena South Tyrol || Puzzone di Moena || Puzzone di Moena food",
          "orientation": "squarish"
        }
      },
      {
        "id": "taa-stelvio",
        "name": "Stelvio DOP",
        "meta": "Wedge",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "South Tyrol",
        "img": {
          "q": "Stelvio South Tyrol || Stelvio || Stelvio food",
          "orientation": "squarish"
        }
      },
      {
        "id": "taa-mele",
        "name": "Mela Val di Non DOP",
        "meta": "Bag",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Val di Non",
        "img": {
          "q": "Mela Val di Non South Tyrol || Mela Val di Non || Apples food",
          "orientation": "squarish"
        }
      },
      {
        "id": "taa-succo-mela",
        "name": "Apple juice from the valleys",
        "meta": "Bottle",
        "tag": "Apple juice",
        "tagTone": "neutral",
        "origin": "The valleys",
        "img": {
          "q": "Apple juice from the valleys South Tyrol || Apple juice from the valleys",
          "orientation": "squarish"
        }
      },
      {
        "id": "taa-canederli-pane",
        "name": "Bread for canederli",
        "meta": "Bag",
        "tag": "For canederli",
        "tagTone": "neutral",
        "origin": "The region",
        "img": {
          "q": "Bread for canederli South Tyrol || Bread for canederli",
          "orientation": "squarish"
        }
      }
    ],
    "eyebrow": "Limited curation · Parcel N° 17"
  },
  "about": [
    "La Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "Consorzio Tutela Speck Alto Adige (speck.it and Google Arts & Culture); Italia.it (ENIT) on Speck Alto Adige IGP; Linkiesta on speck; Quotidiano Nazionale on South Tyrolean products; Visit Trentino and Taste Trentino on Trentino’s apples and cheeses; Visit Val di Sole on Melinda; Scatti di Gusto on Trentingrana; Gambero Rosso on Trentino cheeses; Bartolotta’s Trentino menu notes; Forbes Italia, Speck.it, and Camera di Commercio di Bolzano on Recla."
};

export default trentinoAltoAdige;
