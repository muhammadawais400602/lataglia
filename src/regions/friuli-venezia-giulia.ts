import type { RegionStory } from './types';

// Content from the Friuli-Venezia Giulia story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const friuliVeneziaGiulia: RegionStory = {
  "slug": "friuli-venezia-giulia",
  "name": "Friuli-Venezia Giulia",
  "seoTitle": "Friulian Food and Pantry Ingredients | Italy Region by Region | La Taglia",
  "seoDescription": "Cook Friuli-Venezia Giulia from its pantry: Prosciutto di San Daniele, Montasio, Prosciutto di Sauris, brovada, smoked ricotta and gubana, with a recipe for frico con patate.",
  "kicker": "Region sixteen: where three cultures meet",
  "subtitle": "Prosciutto, mountain cheese, and the coffeehouses of Trieste.",
  "hero": {
    "color": "#4A3428",
    "colorDeep": "#32231B"
  },
  "intro": [
    "Friuli-Venezia Giulia occupies Italy’s northeastern corner, bordering Austria and Slovenia, and runs from the Carnic and Julian Alps across a broad plain to the Adriatic at Trieste. Its cooking is the meeting point of three traditions: Central European, Venetian, and Slavic. Trieste spent some five centuries under Habsburg rule and grew into the empire’s great port, which is why it has Viennese pastries, sauerkraut soups, and a coffeehouse culture all its own. Up in Carnia, the mountain economy rested on dairy cattle, and cooks made cheese go a long way. The old spice routes from the port to the Alpine passes ran straight through the region, and Carnia’s cjarsons, filled with raisins and dusted with cinnamon, are among its most distinctive dishes. The result is one of Italy’s most surprising cuisines, half Alpine, half Adriatic.",
    "This is a small region with outsized flavors. Start with the ingredients that define it, learn the dishes they make possible, and meet a family curing smoked ham in an Alpine village whose dialect has German roots."
  ],
  "pantry": {
    "lede": "Six ingredients behind the region’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Prosciutto di San Daniele",
        "place": "San Daniele del Friuli",
        "body": "Made from only three things: legs of Italian pork, sea salt, and the hill-town microclimate. Each ham keeps its trotter, and every one must be cured within the town of San Daniele itself. Sweet and delicate, with rose-red meat and pure white fat.",
        "lookFor": "the consortium’s brand burned into the skin, and the trotter left on the whole leg.",
        "products": [
          {
            "id": "fvg-san-daniele",
            "name": "Prosciutto di San Daniele DOP",
            "meta": "Sliced"
          }
        ]
      },
      {
        "title": "Montasio",
        "place": "The Friulian Alps and plain",
        "body": "A cow’s-milk cheese first recorded by name in 1775 in a San Daniele price list. Sold fresco at about two months, mild and milky; mezzano after four; stagionato after ten, firm and full-flavored. It is the cheese of frico.",
        "lookFor": "Montasio DOP and its age on the label.",
        "products": [
          {
            "id": "fvg-montasio-fresco",
            "name": "Montasio DOP Fresco",
            "meta": "Wedge"
          },
          {
            "id": "fvg-montasio-stagionato",
            "name": "Montasio DOP Stagionato",
            "meta": "Wedge"
          }
        ]
      },
      {
        "title": "Prosciutto di Sauris",
        "place": "Sauris, in the Carnic Alps",
        "body": "A cured ham lightly smoked over beech wood, from a village 1,200 meters up where people still speak a dialect of German origin. The smoking is light and clean, never overpowering.",
        "lookFor": "Prosciutto di Sauris IGP.",
        "products": [
          {
            "id": "fvg-sauris",
            "name": "Prosciutto di Sauris IGP",
            "meta": "Sliced"
          }
        ]
      },
      {
        "title": "Brovada",
        "place": "The Friulian plain",
        "body": "Purple-topped turnips fermented in grape pomace left over from winemaking, then cooked and traditionally eaten with muset, the local cotechino.",
        "lookFor": "Brovada DOP.",
        "products": [
          {
            "id": "fvg-brovada",
            "name": "Brovada DOP",
            "meta": "Pack"
          }
        ]
      },
      {
        "title": "Smoked ricotta",
        "place": "Carnia",
        "body": "Firm ricotta smoked until it can be grated, Carnia’s traditional topping for gnocchi and pasta, and the finishing touch on cjarsons.",
        "lookFor": "ricotta affumicata from Carnia.",
        "products": [
          {
            "id": "fvg-ricotta-affumicata",
            "name": "Ricotta affumicata",
            "meta": "Piece"
          }
        ]
      },
      {
        "title": "Gubana",
        "place": "The Natisone valleys",
        "body": "A sweet leavened dough filled with raisins, walnuts, pine nuts, sugar, and grappa, the cake of holidays and celebrations.",
        "lookFor": "gubana made in the Natisone valleys.",
        "products": [
          {
            "id": "fvg-gubana",
            "name": "Gubana",
            "meta": "Whole"
          }
        ]
      }
    ]
  },
  "dishes": {
    "lede": "Four dishes Friuli-Venezia Giulia makes its own.",
    "items": [
      {
        "title": "Frico con patate",
        "where": "Across Friuli",
        "body": "A potato and Montasio cake, crisp outside and molten within. There is also a thin, crunchy frico of cheese alone.",
        "tip": "[Cook it below](#frico)"
      },
      {
        "title": "Jota",
        "where": "Trieste",
        "body": "A thick soup of sauerkraut, beans, potatoes, and pork, seasoned with cumin and simmered for hours. Trieste’s signature dish, served in its informal buffet taverns."
      },
      {
        "title": "Cjarsons",
        "where": "Carnia",
        "body": "Ravioli with fillings that mix sweet and savory, from ricotta, potatoes, and spinach to raisins, cinnamon, and cocoa, served with melted butter, smoked ricotta, sugar, and cinnamon.",
        "tip": "Finish with grated [smoked ricotta](product:fvg-ricotta-affumicata)."
      },
      {
        "title": "Brovada e muset",
        "where": "The Friulian plain",
        "body": "Fermented turnips cooked with oil and garlic and served with muset, Friuli’s cotechino sausage.",
        "tip": "Start with [Brovada DOP](product:fvg-brovada)."
      }
    ]
  },
  "maker": {
    "name": "Prosciuttificio Wolf",
    "place": "Sauris",
    "paragraphs": [
      "Pietro Schneider, known as “Wolf,” was born in Sauris in 1862 and became a skilled curer of hams and salumi in this isolated Alpine village. His grandson Giuseppe Petris learned the craft and, in the 1960s, founded the prosciuttificio that bears his nickname. It is still run by the Petris family.",
      "Wolf makes Prosciutto di Sauris IGP and speck, smoked the traditional way in real chimneys burning only beech wood, then aged in the cool mountain air at 1,200 meters. The ham’s growth helped bring new life to the village itself."
    ],
    "photos": [],
    "facts": [
      {
        "label": "Family tradition",
        "value": "Since 1862"
      },
      {
        "label": "Altitude",
        "value": "1,200 meters"
      },
      {
        "label": "Smoke",
        "value": "Beech wood only"
      }
    ],
    "productsLabel": "From Wolf",
    "products": [
      {
        "id": "fvg-wolf-sauris",
        "name": "Wolf Prosciutto di Sauris IGP",
        "meta": "Sliced"
      },
      {
        "id": "fvg-wolf-speck",
        "name": "Wolf Sauris speck",
        "meta": "Piece"
      }
    ]
  },
  "cook": {
    "title": "Cook Friuli-Venezia Giulia",
    "lede": "One classic from scratch and one ten-minute shortcut from the mountains.",
    "recipe": {
      "id": "frico",
      "title": "Frico con patate",
      "serves": "4",
      "time": "about 55 minutes",
      "from": "Friuli",
      "steps": [
        {
          "title": "Cook the potatoes.",
          "body": "Melt the butter in a nonstick pan about 24 cm wide. Add the onion and potatoes, season, cover, and cook gently for about 20 minutes, stirring now and then, until very soft. Crush them lightly with a spoon."
        },
        {
          "title": "Add the cheese.",
          "body": "Stir in the Montasio until it starts to melt, then press the mixture into an even, flat cake."
        },
        {
          "title": "Form the crust.",
          "body": "Cook over medium heat without stirring for 8–10 minutes, until a deep golden crust forms underneath."
        },
        {
          "title": "Flip and finish.",
          "body": "Slide the frico onto a plate, flip it back into the pan, and cook the other side until golden. Serve hot, in wedges."
        }
      ],
      "touch": "Use a mix of young and aged [Montasio](product:fvg-montasio-fresco): the fresco melts into the potatoes, while the stagionato brings depth and helps the crust crisp.",
      "shoppingList": [
        "600 g floury potatoes",
        "1 onion",
        "30 g butter",
        "150 g [Montasio Fresco](product:fvg-montasio-fresco)",
        "150 g [Montasio Stagionato](product:fvg-montasio-stagionato)",
        "Salt and pepper"
      ],
      "products": [
        {
          "id": "fvg-montasio-fresco",
          "name": "Montasio DOP Fresco",
          "meta": "Wedge"
        },
        {
          "id": "fvg-montasio-stagionato",
          "name": "Montasio DOP Stagionato",
          "meta": "Wedge"
        }
      ],
      "schema": {
        "yield": "4 servings",
        "prepTime": "PT15M",
        "cookTime": "PT40M",
        "totalTime": "PT55M",
        "ingredients": [
          "600 g floury potatoes, peeled and thinly sliced",
          "1 onion, thinly sliced",
          "30 g butter",
          "300 g Montasio, half fresco and half stagionato, cut into small cubes",
          "Salt and black pepper"
        ]
      }
    },
    "shortcut": {
      "title": "Ten minutes in Carnia",
      "body": "For the crisp frico, grate aged Montasio and scatter it in thin rounds in a hot nonstick pan. Cook until the cheese melts, bubbles, and turns golden, then lift each round out to cool and crisp. Serve with thin slices of San Daniele or Sauris ham.",
      "products": [
        {
          "id": "fvg-montasio-stagionato",
          "name": "Montasio DOP Stagionato",
          "meta": "Wedge"
        },
        {
          "id": "fvg-san-daniele",
          "name": "Prosciutto di San Daniele DOP",
          "meta": "Sliced"
        }
      ]
    }
  },
  "readTheLabel": "Only ham cured in San Daniele itself can be called Prosciutto di San Daniele, and only cheese made under the DOP can be called Montasio. Check the place of production, the ingredient list, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Friuli-Venezia Giulia home",
    "body": "A Friulian table is built on cured ham, mountain cheese, and something sweet with raisins. We’ve gathered eight ingredients from this story into one set: enough for frico, a board of two hams, and gubana with coffee.",
    "button": "Add the Friuli-Venezia Giulia pantry set",
    "products": [
      {
        "id": "fvg-san-daniele",
        "name": "Prosciutto di San Daniele DOP",
        "meta": "Sliced"
      },
      {
        "id": "fvg-wolf-sauris",
        "name": "Wolf Prosciutto di Sauris IGP",
        "meta": "Sliced"
      },
      {
        "id": "fvg-montasio-fresco",
        "name": "Montasio DOP Fresco",
        "meta": "Wedge"
      },
      {
        "id": "fvg-montasio-stagionato",
        "name": "Montasio DOP Stagionato",
        "meta": "Wedge"
      },
      {
        "id": "fvg-ricotta-affumicata",
        "name": "Smoked ricotta",
        "meta": "Piece"
      },
      {
        "id": "fvg-brovada",
        "name": "Brovada DOP",
        "meta": "Pack"
      },
      {
        "id": "fvg-gubana",
        "name": "Gubana",
        "meta": "Whole"
      },
      {
        "id": "fvg-caffe-trieste",
        "name": "Trieste coffee",
        "meta": "Bag"
      }
    ]
  },
  "about": [
    "La Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "Regione Friuli Venezia Giulia and Consorzio del Prosciutto di San Daniele on San Daniele DOP; Italia.it (ENIT) on San Daniele; ONAF on Montasio DOP; University of Trieste course notes on regional DOP and IGP products; Turismo FVG on regional cuisine; Eroica Fenice, Travel365, Italy Segreta, Volagratis, GoNOMAD, and Linkiesta on Friulian and Triestine dishes; Trieste in Cucina (Guido Tommasi) on jota; Decanter on Trieste; Il Nordest, Sauris.org, Cibus, and Gambero Rosso on Prosciuttificio Wolf."
};

export default friuliVeneziaGiulia;
