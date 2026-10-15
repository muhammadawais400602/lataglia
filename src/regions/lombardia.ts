import type { RegionStory } from './types';

// Photos are stand-ins from elsewhere on the site, to be replaced.
// Content from the Lombardia story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const lombardia: RegionStory = {
  "slug": "lombardia",
  "name": "Lombardia",
  "seoTitle": "Lombard and Milanese Food and Pantry Ingredients | Italy Region by Region | La Taglia",
  "seoDescription": "Cook Lombardy from its pantry: Taleggio, Gorgonzola, Grana Padano, bresaola, pizzoccheri and panettone, with a recipe for risotto alla milanese.",
  "kicker": "Region ten: the lakes and the plain",
  "subtitle": "Butter, rice, saffron, and the cheeses of the Alps.",
  "hero": {
    "color": "#3C4A5C",
    "colorDeep": "#2A3442",
    "dossier": "Terroir archive · Dossier N° 10",
    "badge": "Alpine dairy country",
    "metrics": [
      {
        "icon": "location_city",
        "label": "Capital",
        "value": "Milan"
      },
      {
        "icon": "terrain",
        "label": "Mountains",
        "value": "The Alps"
      },
      {
        "icon": "water",
        "label": "Lake",
        "value": "Lake Como"
      },
      {
        "icon": "workspace_premium",
        "label": "Bergamo",
        "value": "Nine protected cheeses"
      }
    ],
    "heritage": "Alpine dairy heritage",
    "imageCaption": {
      "title": "The Valtellina",
      "body": "An Alpine valley where buckwheat filled the gap and cool mountain air cures beef."
    },
    "imageTag": "Valtellina · Lake Como",
    "heritageNote": "taleggio di grotta",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuASAzDXfTpj8Z-3Pie7yJS1yRvHePfxVaL802wXx0UgBJrd0VJUWltwmw2j6xJwO5TqmEgNnDPB8dZIYjfJNSOsR3tT9ElTZZOkhQmzIXZLW_QqBIicMQUwmdW0b3KTnxviycOTX4jJn2Fhsq5ody5WpPvjnV6fFP9YFJtys1IuENR446FiEccDsrKaKVLaKrrK8Bs2XjzLW7Zyip0YT_2owLFIPg4Q_UMpF8sW7I0epMJ2jcGXidPw",
    "imageAlt": "An Alpine valley where buckwheat filled the gap and cool mountain air cures beef."
  },
  "intro": [
    "Lombardy stretches from the Alps on the Swiss border, through the valleys of the Valtellina and the shores of Lake Como, down to the flat, well-watered Po plain, with Milan at its center. It is dairy country above all: Alpine herders moved their cows to high pastures each summer, and the plain grew rich on milk and cattle. The province of Bergamo alone has nine protected cheeses, more than any other part of Italy. Milanese cooks traditionally reach for butter rather than olive oil, and the city’s kitchen is built on rice and slow-braised meat more than pasta. Up in the Valtellina, where wheat grew poorly, buckwheat filled the gap, and the long, cool mountain air proved ideal for curing beef. The result is a rich, generous cuisine of golden risotto, braised veal, buttery cutlets, and some of Italy’s greatest cheeses.",
    "Few regions can match Lombardy’s cheese board. Start with the ingredients that define it, learn the dishes they make possible, and meet a Valsassina family aging Taleggio in mountain caves."
  ],
  "pantry": {
    "lede": "Six ingredients behind Lombardy’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Taleggio",
        "place": "Val Taleggio and the Valsassina",
        "body": "A square, soft cow’s-milk cheese with a thin, washed orange rind. Its aroma recalls the forest floor; the paste is sweet and buttery. It is aged at least 35 days and is often at its best at 40 to 50.",
        "lookFor": "Taleggio DOP. Every DOP wheel is marked.",
        "products": [
          {
            "id": "lom-taleggio",
            "name": "Taleggio DOP",
            "meta": "Wedge",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Val Taleggio",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
          }
        ]
      },
      {
        "title": "Gorgonzola",
        "place": "Lombardy and Piedmont",
        "body": "A blue-veined cow’s-milk cheese in two styles: dolce, soft and creamy, aged at least 50 days, and piccante, firmer and sharper, aged at least 80. Born in Lombardy, today it is mostly made in the Piedmontese province of Novara.",
        "lookFor": "Gorgonzola DOP, with “piccante” on the label for the sharp style.",
        "products": [
          {
            "id": "lom-gorgonzola-dolce",
            "name": "Gorgonzola DOP Dolce",
            "meta": "Wedge",
            "tag": "Aged 50+ days",
            "tagTone": "green",
            "origin": "Lombardy",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuAl_5nHHJIzoS-WsCluRQYcsvFaCEJgLpMKhF74uchwSFZaiasRvF2QgOGb8yQIioI-Tl012aRJqnvzUfYVXVIN42AtBrqz67jqjAH3CbxmYm6uEHRkYdah0q_WAQSgW93YHOemOcCRZN921JwihtDRxkKHN7PzTEk88hPG_P2AV7Y_dSVKxmfxeIubOnR3JAqjFS_dXGAzG2xxfQE3VDOGzRjZcEhJ1T-LSazL8n3fCCvhoP3Kr76d"
          },
          {
            "id": "lom-gorgonzola-piccante",
            "name": "Gorgonzola DOP Piccante",
            "meta": "Wedge",
            "tag": "Aged 80+ days",
            "tagTone": "gold",
            "origin": "Lombardy",
            "img": "https://lh3.googleusercontent.com/aida/AEtjO1XWLjABkN9JNdg2bMlYH0fIp3xRDXJYWo5LVly80wovSC1tTyvX-HHS1Z91q401b7ynxsVkhS-vyRNVTzYxLLT2ewPKyZ1N57DPMd9UpCRVoUk_lHtsprvCectHtmhxNOyZDy6MYysvgWyJSSTLw7Yw1UPq9h1QL-MIHwdcpwKXYxlGNp_XW673nd9VsUbx3Cs0zt7NLyEcNI4GNFIhU0lMAgUvh5IIl2qctPoY_gs89gr5IUNqpbhokFY"
          }
        ]
      },
      {
        "title": "Grana Padano",
        "place": "The Po valley",
        "body": "A hard, slow-ripened cow’s-milk cheese, nutty and lightly salty, aged at least nine months and often far longer. It is the everyday grating cheese of northern Italy and the classic finish for risotto.",
        "lookFor": "Grana Padano DOP, the only cheese allowed to use the word “grana” in its name.",
        "products": [
          {
            "id": "lom-grana",
            "name": "Grana Padano DOP",
            "meta": "Wedge",
            "tag": "Aged 9+ mos",
            "tagTone": "gold",
            "origin": "Po valley",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
          }
        ]
      },
      {
        "title": "Bresaola",
        "place": "The Valtellina, province of Sondrio",
        "body": "Lean beef from the best cuts of the leg, salted and slowly air-dried in the fresh Alpine air that flows down the valley. Sliced paper-thin, it is the classic Valtellina antipasto.",
        "lookFor": "Bresaola della Valtellina IGP, which only producers in the province of Sondrio may use.",
        "products": [
          {
            "id": "lom-bresaola",
            "name": "Bresaola della Valtellina IGP",
            "meta": "Sliced",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Sondrio",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
          }
        ]
      },
      {
        "title": "Pizzoccheri",
        "place": "Teglio and the Valtellina",
        "body": "Short, flat ribbons of pasta made mostly from buckwheat flour, a grain that thrived in the cold valley where wheat struggled. They are cooked with potatoes and cabbage and layered with melting cheese and butter.",
        "lookFor": "Pizzoccheri della Valtellina IGP, protected since 2016.",
        "products": [
          {
            "id": "lom-pizzoccheri",
            "name": "Pizzoccheri della Valtellina IGP",
            "meta": "500 g",
            "tag": "Buckwheat",
            "tagTone": "green",
            "origin": "Teglio",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr"
          }
        ]
      },
      {
        "title": "Panettone",
        "place": "Milan",
        "body": "Milan’s tall Christmas bread, rich with butter and eggs and studded with raisins and candied citrus. The best rise slowly over many hours with natural yeast.",
        "lookFor": "lievito madre (natural sourdough starter) and real butter on the ingredient list.",
        "products": [
          {
            "id": "lom-panettone",
            "name": "Milanese panettone",
            "meta": "Christmas",
            "tag": "Christmas",
            "tagTone": "neutral",
            "origin": "Milan",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuC66Qz_O1vxGNBZSyhKBG7E11V9J_ynfSiGuUL5GLDjS-pp7xx0eqw_gmnVIRMXOEiaJ2wLNz9eDe-dRv1HJffGFDGWKIH-9TlU0UBDIw940qDCkUbeXjZjdsjLtKuD3B7Gg0GWHngYfm0d0u9xYun-FrttGnejAkzJLWV7HyuC_ZCA_QHWryHtkt4PkqDJFzQjJqtsSDMMGOLlU2E8sTTNiKXafW91SYmjA9P72M1cR5KetKzCi5cq"
          }
        ],
        "shelfLabel": "In season"
      }
    ],
    "eyebrow": "Essential terroir goods"
  },
  "dishes": {
    "lede": "Four dishes Lombardy makes its own.",
    "items": [
      {
        "title": "Risotto alla milanese",
        "where": "Milan",
        "body": "Rice cooked in butter with beef marrow and broth, colored deep gold with saffron. Milan granted it a municipal designation, De.Co., in 2007. It is traditionally served with ossobuco.",
        "tip": "[Cook it below](#risotto)",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCMFgCdqzLvdJxYGaDAFlEDMYMT857D05ZZADK6F6LJbmst8APC4Nl4JYWyknq_CXy-wFoodx0MUTgMC0CntsIT7QemPR1DFgTLpY8U5WaTySi2AMxuyA04SwrYM2r3qDPPxCLOcyksMQ7bLZwM15ouLGkJeE9C1OWinZ6B7mwQYAmW_rezg2MqBTu7ntbCcLZlJzaaNWjiRvS33b7WJEC_xWcEO70o30NIuOjdMNQabBFxLaWU-Jhc"
      },
      {
        "title": "Ossobuco",
        "where": "Milan",
        "body": "Thick slices of veal shank, bone and marrow included, braised slowly with white wine and broth until the meat falls away. Finished with gremolata, a mix of parsley, garlic, and lemon zest.",
        "note": "Finished with gremolata",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAPcC0a36PdQKRFN67N9n4iWBfhvVaOYD4lAqKygnUjTrscttDOYLVoI8x1mJHXJybsSr0etHTwY4pU0A01kN4o1IfpMOvEBAXOIrB8eZ11ou4LrSyCjELVvYNkcTxy0DtPWugtK_maKrpF1S29ogN-YzCyzhDGWnfH4HdQ3jXFuv8h73Z3GNxqFxYhHzG5euOwWXNcUn83KLa8hc2NC2nQFY3TdtlSPgMj0otF-z9Yn-C7fprrBLWX"
      },
      {
        "title": "Cotoletta alla milanese",
        "where": "Milan",
        "body": "A thick veal chop on the bone, dipped in egg and breadcrumbs and fried in clarified butter. The thin, boneless “elephant ear” is a popular cousin, but not the canonical version.",
        "note": "Fried in clarified butter",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuD3DyLWjHZNnUahIXVRqFuwGgYJBdyZm09UGDnl9cXdl6H6UU-Pl1gDXv1bLWsXseTdwuiujzAsWyj9bvxPR1CAJQ04u9iac5o5XBSAm-OHuk41AFvTp3mgciUZ6LQJZxFGgmgutgDDoQfkKMXnfg2UjCCYPPf06y4eK5F08c5c7bX4ZeqGT2I0gLJcVPbnyHaJ73geG9GreqIzaSTdWVO5L5D7fWpS3je3wDAORcXER6iiX2rkYkQn"
      },
      {
        "title": "Pizzoccheri",
        "where": "Teglio",
        "body": "Buckwheat pasta boiled with potatoes and savoy cabbage, then layered with Valtellina Casera cheese and butter sizzled with garlic. Teglio’s Accademia del Pizzocchero guards the recipe.",
        "tip": "Start with [Pizzoccheri della Valtellina IGP](product:lom-pizzoccheri).",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
      }
    ],
    "eyebrow": "Milanese canon"
  },
  "maker": {
    "name": "Mauri",
    "place": "Pasturo",
    "paragraphs": [
      "In 1920, Emilio Mauri began making cheese in Pasturo, a village in the Valsassina at the foot of the Grigna mountains, an Alpine valley long devoted to dairy and one of the two traditional homes of Taleggio. The family business still has its heart there, alongside a newer plant in Treviglio, and makes the classic cheeses of Lombardy, from Taleggio and Gorgonzola to fresh quartirolo.",
      "What sets Mauri apart is its caves. Its Taleggio is washed and brushed several times in its first month; selected wheels then age further in caves beneath the Grigna, where cool, humid mountain air gives a firmer, richer cheese with a heavier rind, sold as Taleggio di Grotta."
    ],
    "photos": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy",
        "alt": "Aging caves under the Grigna",
        "caption": "Aging caves under the Grigna"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq",
        "alt": "Valsassina · Pasturo",
        "caption": "Valsassina · Pasturo"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuAl_5nHHJIzoS-WsCluRQYcsvFaCEJgLpMKhF74uchwSFZaiasRvF2QgOGb8yQIioI-Tl012aRJqnvzUfYVXVIN42AtBrqz67jqjAH3CbxmYm6uEHRkYdah0q_WAQSgW93YHOemOcCRZN921JwihtDRxkKHN7PzTEk88hPG_P2AV7Y_dSVKxmfxeIubOnR3JAqjFS_dXGAzG2xxfQE3VDOGzRjZcEhJ1T-LSazL8n3fCCvhoP3Kr76d",
        "alt": "Mauri Taleggio di Grotta",
        "caption": "Mauri Taleggio di Grotta"
      }
    ],
    "facts": [
      {
        "label": "Founded",
        "value": "1920"
      },
      {
        "label": "Valley",
        "value": "Valsassina"
      },
      {
        "label": "Aging",
        "value": "Mountain caves"
      }
    ],
    "productsLabel": "From Mauri",
    "products": [
      {
        "id": "lom-mauri-taleggio",
        "name": "Mauri Taleggio DOP",
        "meta": "Wedge",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Pasturo",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
      },
      {
        "id": "lom-mauri-grotta",
        "name": "Mauri Taleggio di Grotta DOP",
        "meta": "Wedge",
        "tag": "Cave aged",
        "tagTone": "gold",
        "origin": "Pasturo",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
      }
    ]
  },
  "cook": {
    "title": "Cook Lombardia",
    "lede": "One classic from scratch and one ten-minute shortcut from the Valtellina.",
    "recipe": {
      "id": "risotto",
      "title": "Risotto alla milanese",
      "serves": "4",
      "time": "about 35 minutes",
      "from": "Milan",
      "steps": [
        {
          "title": "Soften the onion.",
          "body": "Melt half the butter with the marrow in a wide, heavy pan and cook the onion gently until soft and translucent."
        },
        {
          "title": "Toast the rice.",
          "body": "Add the rice and stir for 2 minutes, until hot and translucent at the edges. Pour in the wine and let it evaporate."
        },
        {
          "title": "Cook with broth and saffron.",
          "body": "Add hot broth a ladle at a time, stirring often. About halfway through, add the saffron dissolved in a ladle of broth. Cook for 16–18 minutes in all, until tender with a slight bite."
        },
        {
          "title": "Finish off the heat.",
          "body": "Take the pan off the heat and beat in the remaining butter and the Grana Padano until the risotto is creamy and loose enough to flow. Rest for a minute and serve."
        }
      ],
      "touch": "Cook it in butter, not oil, as Milan does, and finish with [Grana Padano](product:lom-grana). The marrow is traditional and gives a deeper, rounder flavor; ask your butcher for a piece of beef bone.",
      "shoppingList": [
        "320 g [Carnaroli rice](product:lom-carnaroli)",
        "1 small onion",
        "20–30 g beef bone marrow",
        "60 g butter",
        "A splash of dry white wine",
        "About 1.2 L beef broth",
        "[Saffron](product:lom-zafferano) threads or 1 sachet",
        "50 g [Grana Padano DOP](product:lom-grana)",
        "Salt"
      ],
      "products": [
        {
          "id": "lom-carnaroli",
          "name": "Carnaroli rice",
          "meta": "1 kg",
          "tag": "Risotto rice",
          "tagTone": "neutral",
          "origin": "For risotto",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCMFgCdqzLvdJxYGaDAFlEDMYMT857D05ZZADK6F6LJbmst8APC4Nl4JYWyknq_CXy-wFoodx0MUTgMC0CntsIT7QemPR1DFgTLpY8U5WaTySi2AMxuyA04SwrYM2r3qDPPxCLOcyksMQ7bLZwM15ouLGkJeE9C1OWinZ6B7mwQYAmW_rezg2MqBTu7ntbCcLZlJzaaNWjiRvS33b7WJEC_xWcEO70o30NIuOjdMNQabBFxLaWU-Jhc"
        },
        {
          "id": "lom-grana",
          "name": "Grana Padano DOP",
          "meta": "Wedge",
          "tag": "Aged 9+ mos",
          "tagTone": "gold",
          "origin": "Po valley",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
        }
      ],
      "schema": {
        "yield": "4 servings",
        "prepTime": "PT10M",
        "cookTime": "PT25M",
        "totalTime": "PT35M",
        "ingredients": [
          "320 g Carnaroli rice",
          "1 small onion, very finely chopped",
          "20–30 g beef bone marrow (optional but traditional)",
          "60 g butter, divided",
          "A splash of dry white wine",
          "About 1.2 L hot beef broth",
          "A good pinch of saffron threads, or 1 sachet of powdered saffron",
          "50 g Grana Padano DOP, grated",
          "Salt"
        ]
      },
      "imageCaption": "Milan classic · about 35 minutes",
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCMFgCdqzLvdJxYGaDAFlEDMYMT857D05ZZADK6F6LJbmst8APC4Nl4JYWyknq_CXy-wFoodx0MUTgMC0CntsIT7QemPR1DFgTLpY8U5WaTySi2AMxuyA04SwrYM2r3qDPPxCLOcyksMQ7bLZwM15ouLGkJeE9C1OWinZ6B7mwQYAmW_rezg2MqBTu7ntbCcLZlJzaaNWjiRvS33b7WJEC_xWcEO70o30NIuOjdMNQabBFxLaWU-Jhc"
    },
    "shortcut": {
      "title": "Ten minutes in the Valtellina",
      "body": "Lay thin slices of bresaola across a plate, squeeze over a little lemon juice, and drizzle with olive oil. Top with a handful of arugula and shavings of Grana Padano, and finish with black pepper. Serve with crusty bread and a glass of Valtellina red.",
      "products": [
        {
          "id": "lom-bresaola",
          "name": "Bresaola della Valtellina IGP",
          "meta": "Sliced",
          "tag": "IGP",
          "tagTone": "green",
          "origin": "Sondrio",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
        },
        {
          "id": "lom-grana",
          "name": "Grana Padano DOP",
          "meta": "Wedge",
          "tag": "Aged 9+ mos",
          "tagTone": "gold",
          "origin": "Po valley",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
        }
      ],
      "eyebrow": "Valtellina shortcut",
      "button": "Get the bresaola pair"
    },
    "eyebrow": "Terroir kitchen"
  },
  "readTheLabel": "“Blue cheese” is not Gorgonzola DOP, “bresaola” without the Valtellina IGP can be made anywhere, and “grana-style” cheese is not Grana Padano. Check the place of production, the ingredient list, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Lombardia home",
    "body": "A Lombard table runs on rice, butter, and a serious cheese board. We’ve gathered eight ingredients from this story into one set: enough for a golden risotto, a pan of pizzoccheri, and a board of Taleggio, Gorgonzola, and bresaola.",
    "button": "Add the Lombardia pantry set",
    "products": [
      {
        "id": "lom-carnaroli",
        "name": "Carnaroli rice",
        "meta": "1 kg",
        "tag": "Risotto rice",
        "tagTone": "neutral",
        "origin": "For risotto",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCMFgCdqzLvdJxYGaDAFlEDMYMT857D05ZZADK6F6LJbmst8APC4Nl4JYWyknq_CXy-wFoodx0MUTgMC0CntsIT7QemPR1DFgTLpY8U5WaTySi2AMxuyA04SwrYM2r3qDPPxCLOcyksMQ7bLZwM15ouLGkJeE9C1OWinZ6B7mwQYAmW_rezg2MqBTu7ntbCcLZlJzaaNWjiRvS33b7WJEC_xWcEO70o30NIuOjdMNQabBFxLaWU-Jhc"
      },
      {
        "id": "lom-zafferano",
        "name": "Saffron threads",
        "meta": "Jar",
        "tag": "Saffron",
        "tagTone": "gold",
        "origin": "For risotto",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo"
      },
      {
        "id": "lom-grana",
        "name": "Grana Padano DOP",
        "meta": "Wedge",
        "tag": "Aged 9+ mos",
        "tagTone": "gold",
        "origin": "Po valley",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
      },
      {
        "id": "lom-mauri-taleggio",
        "name": "Mauri Taleggio DOP",
        "meta": "Wedge",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Pasturo",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
      },
      {
        "id": "lom-gorgonzola-dolce",
        "name": "Gorgonzola DOP Dolce",
        "meta": "Wedge",
        "tag": "Aged 50+ days",
        "tagTone": "green",
        "origin": "Lombardy",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuAl_5nHHJIzoS-WsCluRQYcsvFaCEJgLpMKhF74uchwSFZaiasRvF2QgOGb8yQIioI-Tl012aRJqnvzUfYVXVIN42AtBrqz67jqjAH3CbxmYm6uEHRkYdah0q_WAQSgW93YHOemOcCRZN921JwihtDRxkKHN7PzTEk88hPG_P2AV7Y_dSVKxmfxeIubOnR3JAqjFS_dXGAzG2xxfQE3VDOGzRjZcEhJ1T-LSazL8n3fCCvhoP3Kr76d"
      },
      {
        "id": "lom-bresaola",
        "name": "Bresaola della Valtellina IGP",
        "meta": "Sliced",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "Sondrio",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
      },
      {
        "id": "lom-pizzoccheri",
        "name": "Pizzoccheri della Valtellina IGP",
        "meta": "500 g",
        "tag": "Buckwheat",
        "tagTone": "green",
        "origin": "Teglio",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr"
      },
      {
        "id": "lom-casera",
        "name": "Valtellina Casera DOP",
        "meta": "Wedge",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Valtellina",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
      }
    ],
    "eyebrow": "Limited curation · Parcel N° 10"
  },
  "about": [
    "La Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "Gorgonzola DOP production specification (Regione Piemonte bulletin); Il Giorno on the Taleggio consortium; Linkiesta and Italy Segreta on Lombard cheeses; In Lombardia (Regione Lombardia) on bresaola and risotto alla milanese; Il Giorno, First&Food, and Dissapore on pizzoccheri; Milanofree and Dissapore on Milanese recipes; Gambero Rosso and Calendar Cheese on Mauri."
};

export default lombardia;
