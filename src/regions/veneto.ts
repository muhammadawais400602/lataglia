import type { RegionStory } from './types';

// Photos are stand-ins from elsewhere on the site, to be replaced.
// Content from the Veneto story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const veneto: RegionStory = {
  "slug": "veneto",
  "name": "Veneto",
  "seoTitle": "Venetian Food and Pantry Ingredients | Italy Region by Region | La Taglia",
  "seoDescription": "Cook Veneto from its pantry: Radicchio di Treviso, Vialone Nano rice, Asiago, stockfish, white polenta and Sopressa Vicentina, with a recipe for risotto al radicchio.",
  "kicker": "Region nine: the lagoon",
  "subtitle": "Rice, polenta, radicchio, and the spice routes of Venice.",
  "hero": {
    "color": "#2F5D50",
    "colorDeep": "#1F4038",
    "dossier": "Terroir archive · Dossier N° 09",
    "badge": "Venetian spice routes",
    "metrics": [
      {
        "icon": "sailing",
        "label": "Republic",
        "value": "Venice, until 1797"
      },
      {
        "icon": "terrain",
        "label": "Mountains",
        "value": "The Dolomites"
      },
      {
        "icon": "water",
        "label": "Lake",
        "value": "Lake Garda"
      },
      {
        "icon": "agriculture",
        "label": "Rice",
        "value": "Farmed since the 1500s"
      }
    ],
    "heritage": "Spice trade heritage",
    "imageCaption": {
      "title": "The Venetian lagoon",
      "body": "Where the plain of rivers meets the Adriatic, home of the Republic’s trading ships."
    },
    "imageTag": "Venetian lagoon · Adriatic",
    "heritageNote": "all’onda",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuASAzDXfTpj8Z-3Pie7yJS1yRvHePfxVaL802wXx0UgBJrd0VJUWltwmw2j6xJwO5TqmEgNnDPB8dZIYjfJNSOsR3tT9ElTZZOkhQmzIXZLW_QqBIicMQUwmdW0b3KTnxviycOTX4jJn2Fhsq5ody5WpPvjnV6fFP9YFJtys1IuENR446FiEccDsrKaKVLaKrrK8Bs2XjzLW7Zyip0YT_2owLFIPg4Q_UMpF8sW7I0epMJ2jcGXidPw",
    "imageAlt": "Where the plain of rivers meets the Adriatic, home of the Republic’s trading ships."
  },
  "intro": [
    "Veneto runs from the Dolomites in the north across a broad plain of rivers to the Venetian lagoon and the Po delta on the Adriatic, with Lake Garda on its western edge. For more than a thousand years, until 1797, it was the heartland of the Venetian Republic, and Venice’s ships brought home pepper, spices, sugar, and dried fruit that still season its cooking. The Republic also reshaped the land: from the 1500s its officials drained marshes south of Verona and turned them into rice paddies. Later, corn from the Americas became the staple of the countryside, eaten as polenta; a Venetian merchant shipwrecked in Norway in 1432 began the region’s long love of dried cod; and on the mountain plateaus, herders made cheese. The result is a cuisine of rice and polenta, fish from the lagoon, sweet-and-sour flavors from the spice trade, and, in winter, the bittersweet red radicchio of Treviso.",
    "Venetian cooking is where Italy’s farm kitchen meets its trading port. Start with the ingredients that define Veneto, learn the dishes they make possible, and meet a family still milling rice in a water-powered mill that dates to the 1600s."
  ],
  "pantry": {
    "lede": "Six ingredients behind Veneto’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Radicchio di Treviso",
        "place": "Treviso, Padua, and Venice provinces",
        "body": "The prized late variety, the tardivo, is harvested after the first frosts, then stood in tanks of spring water at about 11°C for days until new pale, crisp shoots form with deep red leaves and white ribs. It is in season from about November to March; the earlier precoce arrives from September.",
        "lookFor": "Radicchio Rosso di Treviso IGP, Tardivo or Precoce.",
        "products": [
          {
            "id": "ven-radicchio-tardivo",
            "name": "Radicchio Rosso di Treviso IGP Tardivo",
            "meta": "Winter only",
            "tag": "Winter only",
            "tagTone": "green",
            "origin": "Treviso",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
          }
        ],
        "shelfLabel": "In season"
      },
      {
        "title": "Vialone Nano rice",
        "place": "The lowlands south of Verona",
        "body": "The rice of choice for Veronese risotto, bred in the twentieth century from two older varieties, Vialone and Nano. It is grown in 24 towns of the Veronese plain, where rice has been farmed since the early 1500s.",
        "lookFor": "Riso Nano Vialone Veronese IGP, in 1996 the first rice in Europe to receive an IGP.",
        "products": [
          {
            "id": "ven-vialone",
            "name": "Vialone Nano Veronese IGP rice",
            "meta": "1 kg",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Veronese plain",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCMFgCdqzLvdJxYGaDAFlEDMYMT857D05ZZADK6F6LJbmst8APC4Nl4JYWyknq_CXy-wFoodx0MUTgMC0CntsIT7QemPR1DFgTLpY8U5WaTySi2AMxuyA04SwrYM2r3qDPPxCLOcyksMQ7bLZwM15ouLGkJeE9C1OWinZ6B7mwQYAmW_rezg2MqBTu7ntbCcLZlJzaaNWjiRvS33b7WJEC_xWcEO70o30NIuOjdMNQabBFxLaWU-Jhc"
          }
        ]
      },
      {
        "title": "Asiago",
        "place": "The Asiago plateau and its foothills",
        "body": "A cow’s-milk cheese in two forms. Asiago Fresco, also called pressato, is aged at least 20 days and is soft and milky. Asiago Stagionato, or d’allevo, is made from partly skimmed milk, aged at least 90 days, and grows firmer and more savory with time.",
        "lookFor": "the Asiago DOP seal. In the US, “Asiago” on its own can be made anywhere.",
        "products": [
          {
            "id": "ven-asiago-stagionato",
            "name": "Asiago DOP Stagionato",
            "meta": "Wedge",
            "tag": "Aged 90+ days",
            "tagTone": "gold",
            "origin": "Asiago plateau",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
          },
          {
            "id": "ven-asiago-fresco",
            "name": "Asiago DOP Fresco",
            "meta": "Wedge",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Asiago plateau",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuAl_5nHHJIzoS-WsCluRQYcsvFaCEJgLpMKhF74uchwSFZaiasRvF2QgOGb8yQIioI-Tl012aRJqnvzUfYVXVIN42AtBrqz67jqjAH3CbxmYm6uEHRkYdah0q_WAQSgW93YHOemOcCRZN921JwihtDRxkKHN7PzTEk88hPG_P2AV7Y_dSVKxmfxeIubOnR3JAqjFS_dXGAzG2xxfQE3VDOGzRjZcEhJ1T-LSazL8n3fCCvhoP3Kr76d"
          }
        ]
      },
      {
        "title": "Stockfish",
        "place": "Norway to Venice, since 1432",
        "body": "Cod dried in the open air until hard as wood, soaked for days before cooking. Confusingly, Venetians call it baccalà, the word most Italians use for salt cod.",
        "lookFor": "stoccafisso, dried rather than salted cod, for the Venetian classics.",
        "products": [
          {
            "id": "ven-stoccafisso",
            "name": "Stockfish",
            "meta": "Dried",
            "tag": "Air-dried",
            "tagTone": "neutral",
            "origin": "Norway to Venice",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg7ZeusKi1XJ_YIbUpf7bMvUDHPzrJBa0kGGcUmiEWQXn5vyYqb10N5ExBRlYr2yJ0WfsFPe7URckqO8PDwMH0UDSwVm6XQCF-NoeAM33s50RkHXH5cUKTQIls7nyQjkd8xFb7E1CVsnD4Hx0oK8so72g2UalmTdOWlUWCd2mUYhcv42IUIFm1cqLKE69xjZ96SmNApFtb-zmua5MK2Erwp7yfRDiKgHOwIebR0rdf84T1bYeSwKl"
          }
        ]
      },
      {
        "title": "Polenta",
        "place": "The Venetian plain",
        "body": "Corn arrived from the Americas and became the everyday food of the Veneto countryside. Old local varieties include Marano and Biancoperla, a white corn whose polenta is softer and more delicate than the yellow kind.",
        "lookFor": "stone-ground flour from a named Venetian corn variety.",
        "products": [
          {
            "id": "ven-polenta-bianca",
            "name": "White polenta flour",
            "meta": "Bag",
            "tag": "White corn",
            "tagTone": "neutral",
            "origin": "Venetian plain",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr"
          }
        ]
      },
      {
        "title": "Sopressa",
        "place": "The province of Vicenza",
        "body": "A pork salami seasoned with salt, pepper, spices, and garlic, a fixture of Venetian antipasto boards. Vicenza’s was the first sopressa to win protected status.",
        "lookFor": "Sopressa Vicentina DOP.",
        "products": [
          {
            "id": "ven-sopressa",
            "name": "Sopressa Vicentina DOP",
            "meta": "Sliced",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Vicenza",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo"
          }
        ]
      }
    ],
    "eyebrow": "Essential terroir goods"
  },
  "dishes": {
    "lede": "Four dishes Veneto makes its own.",
    "items": [
      {
        "title": "Risotto al radicchio",
        "where": "Treviso",
        "body": "Creamy Vialone Nano risotto with wilted radicchio, its bitterness softened by butter and cheese. A winter dish, made when the tardivo is at its best.",
        "tip": "[Cook it below](#risotto)",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCMFgCdqzLvdJxYGaDAFlEDMYMT857D05ZZADK6F6LJbmst8APC4Nl4JYWyknq_CXy-wFoodx0MUTgMC0CntsIT7QemPR1DFgTLpY8U5WaTySi2AMxuyA04SwrYM2r3qDPPxCLOcyksMQ7bLZwM15ouLGkJeE9C1OWinZ6B7mwQYAmW_rezg2MqBTu7ntbCcLZlJzaaNWjiRvS33b7WJEC_xWcEO70o30NIuOjdMNQabBFxLaWU-Jhc"
      },
      {
        "title": "Baccalà",
        "where": "Venice and Vicenza",
        "body": "In Venice’s wine bars, stockfish is whipped with olive oil into baccalà mantecato and spread on bread or grilled polenta. In Vicenza it is stewed slowly with milk, onions, and anchovies, and served over polenta.",
        "tip": "Both start with [stockfish](product:ven-stoccafisso) soaked for several days.",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg7ZeusKi1XJ_YIbUpf7bMvUDHPzrJBa0kGGcUmiEWQXn5vyYqb10N5ExBRlYr2yJ0WfsFPe7URckqO8PDwMH0UDSwVm6XQCF-NoeAM33s50RkHXH5cUKTQIls7nyQjkd8xFb7E1CVsnD4Hx0oK8so72g2UalmTdOWlUWCd2mUYhcv42IUIFm1cqLKE69xjZ96SmNApFtb-zmua5MK2Erwp7yfRDiKgHOwIebR0rdf84T1bYeSwKl"
      },
      {
        "title": "Sarde in saor",
        "where": "Venice",
        "body": "Fried sardines layered with onions cooked in vinegar, a way to keep fish for days before refrigeration. Raisins and pine nuts, arrivals from the spice trade, soften the sourness.",
        "note": "Kept for days in vinegar",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg7ZeusKi1XJ_YIbUpf7bMvUDHPzrJBa0kGGcUmiEWQXn5vyYqb10N5ExBRlYr2yJ0WfsFPe7URckqO8PDwMH0UDSwVm6XQCF-NoeAM33s50RkHXH5cUKTQIls7nyQjkd8xFb7E1CVsnD4Hx0oK8so72g2UalmTdOWlUWCd2mUYhcv42IUIFm1cqLKE69xjZ96SmNApFtb-zmua5MK2Erwp7yfRDiKgHOwIebR0rdf84T1bYeSwKl"
      },
      {
        "title": "Risi e bisi",
        "where": "Venice",
        "body": "Rice and young peas cooked to a consistency between soup and risotto. It was traditionally presented to the Doge on April 25, the feast of St. Mark, with the first peas of spring.",
        "tip": "Make it with [Vialone Nano](product:ven-vialone) and the freshest peas you can find.",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBuOw47CyMWHDfy1LAq7y8_6mlfUhX3sEaCTYRv4qpRLnga9lWW5hwNQ9w_AIrmxk8_0R1H04C8RAhLH9XB9fzSkV-dgKgfS7nbEGJGJK3EuhcwEfgN3tsOD2UPXJNmrmMv9_Wlqx5Tnx0Dg7F_cEC1I3aWKH9xxJQ_SoJsdPaPxfUek-WKbQYSjxR-TxPYHcipLGuNzwiE99IH2fubNMCWvOQYLzXSDW8GSn74soI-lVOr7-Azy12C"
      }
    ],
    "eyebrow": "Culinary canon"
  },
  "maker": {
    "name": "Riseria Ferron",
    "place": "Isola della Scala",
    "paragraphs": [
      "When rice came to the lowlands south of Verona in the 1500s, the Venetian Republic also allowed farmers to build pile, mills where water-powered wooden pestles husked the grain. One of them, the Pila Vecia at Isola della Scala, dates to the mid-1600s. The Ferron family took it over in the early twentieth century, and five generations have run it since.",
      "The old mill is protected as a historic monument and still works: a water wheel drives nine wooden pestles that whiten the rice the traditional way. The family sells Vialone Nano under two names, Riso Ferron and the higher-end Pila Vecia, and has long helped organize Isola della Scala’s rice fair, held every year since 1967."
    ],
    "photos": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCMFgCdqzLvdJxYGaDAFlEDMYMT857D05ZZADK6F6LJbmst8APC4Nl4JYWyknq_CXy-wFoodx0MUTgMC0CntsIT7QemPR1DFgTLpY8U5WaTySi2AMxuyA04SwrYM2r3qDPPxCLOcyksMQ7bLZwM15ouLGkJeE9C1OWinZ6B7mwQYAmW_rezg2MqBTu7ntbCcLZlJzaaNWjiRvS33b7WJEC_xWcEO70o30NIuOjdMNQabBFxLaWU-Jhc",
        "alt": "Pila Vecia · Isola della Scala",
        "caption": "Pila Vecia · Isola della Scala"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuBuOw47CyMWHDfy1LAq7y8_6mlfUhX3sEaCTYRv4qpRLnga9lWW5hwNQ9w_AIrmxk8_0R1H04C8RAhLH9XB9fzSkV-dgKgfS7nbEGJGJK3EuhcwEfgN3tsOD2UPXJNmrmMv9_Wlqx5Tnx0Dg7F_cEC1I3aWKH9xxJQ_SoJsdPaPxfUek-WKbQYSjxR-TxPYHcipLGuNzwiE99IH2fubNMCWvOQYLzXSDW8GSn74soI-lVOr7-Azy12C",
        "alt": "Rice paddies south of Verona",
        "caption": "Rice paddies south of Verona"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuA4EH7PBxM5mkGtU_hUOJIWGkBVxZJn4EFpJjF38EOKBU7wo_ddyMCFm271EacOGO5w4Xv6DGSB-7_saGCFJU5iM16suJDjSS0a_VzFQbhUmwPL8egJ5XILWwdPmz-_POZdud-1IbUhFmWHh2snwuV7-TAFb5uKZfOhuCAAC57-6VjgZFhqO7vaYO8y1vEORke8lGfQXTjEtIhhnE1cknP388wuircWvsS4xPwHGOMZ7oIWF5WLtCf7",
        "alt": "Ferron Vialone Nano",
        "caption": "Ferron Vialone Nano"
      }
    ],
    "facts": [
      {
        "label": "Mill",
        "value": "Mid-1600s"
      },
      {
        "label": "Family",
        "value": "Five generations"
      },
      {
        "label": "Pestles",
        "value": "Nine, water-driven"
      }
    ],
    "productsLabel": "From Riseria Ferron",
    "products": [
      {
        "id": "ven-ferron-vialone",
        "name": "Riso Ferron Vialone Nano",
        "meta": "1 kg",
        "tag": "Pestle-milled",
        "tagTone": "neutral",
        "origin": "Isola della Scala",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBuOw47CyMWHDfy1LAq7y8_6mlfUhX3sEaCTYRv4qpRLnga9lWW5hwNQ9w_AIrmxk8_0R1H04C8RAhLH9XB9fzSkV-dgKgfS7nbEGJGJK3EuhcwEfgN3tsOD2UPXJNmrmMv9_Wlqx5Tnx0Dg7F_cEC1I3aWKH9xxJQ_SoJsdPaPxfUek-WKbQYSjxR-TxPYHcipLGuNzwiE99IH2fubNMCWvOQYLzXSDW8GSn74soI-lVOr7-Azy12C"
      },
      {
        "id": "ven-pila-vecia",
        "name": "Pila Vecia Vialone Nano",
        "meta": "1 kg",
        "tag": "Higher-end",
        "tagTone": "gold",
        "origin": "Isola della Scala",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuA4EH7PBxM5mkGtU_hUOJIWGkBVxZJn4EFpJjF38EOKBU7wo_ddyMCFm271EacOGO5w4Xv6DGSB-7_saGCFJU5iM16suJDjSS0a_VzFQbhUmwPL8egJ5XILWwdPmz-_POZdud-1IbUhFmWHh2snwuV7-TAFb5uKZfOhuCAAC57-6VjgZFhqO7vaYO8y1vEORke8lGfQXTjEtIhhnE1cknP388wuircWvsS4xPwHGOMZ7oIWF5WLtCf7"
      }
    ]
  },
  "cook": {
    "title": "Cook Veneto",
    "lede": "One classic from scratch and one ten-minute shortcut from Treviso.",
    "recipe": {
      "id": "risotto",
      "title": "Risotto al radicchio di Treviso",
      "serves": "4",
      "time": "about 35 minutes",
      "from": "Treviso",
      "steps": [
        {
          "title": "Soften the shallot.",
          "body": "Melt 40 g butter in a wide, heavy pan and cook the shallot gently for 5 minutes, until soft."
        },
        {
          "title": "Wilt the radicchio.",
          "body": "Add most of the radicchio, keeping a handful aside, and cook for 2–3 minutes until it wilts and darkens."
        },
        {
          "title": "Toast the rice.",
          "body": "Add the rice and stir for 2 minutes, until hot and translucent at the edges. Pour in the wine and let it evaporate."
        },
        {
          "title": "Cook with broth.",
          "body": "Add hot broth a ladle at a time, stirring often, for 15–17 minutes, until the rice is tender with a slight bite."
        },
        {
          "title": "Finish off the heat.",
          "body": "Take the pan off the heat and beat in the cold butter and cheese until the risotto is creamy and loose enough to flow. Season and scatter the reserved raw radicchio on top."
        }
      ],
      "touch": "Make it with [Vialone Nano](product:ven-vialone), the Veronese risotto rice, and finish it all’onda, loose enough to ripple like a wave when you shake the pan. A little raw radicchio on top keeps a crisp, bitter edge.",
      "shoppingList": [
        "320 g [Vialone Nano rice](product:ven-vialone)",
        "300 g [radicchio di Treviso](product:ven-radicchio-tardivo)",
        "1 shallot",
        "70 g butter",
        "A splash of dry red wine",
        "About 1.2 L light broth",
        "50 g [Asiago Stagionato](product:ven-asiago-stagionato) or Grana Padano",
        "Salt and pepper"
      ],
      "products": [
        {
          "id": "ven-vialone",
          "name": "Vialone Nano Veronese IGP rice",
          "meta": "1 kg",
          "tag": "IGP",
          "tagTone": "green",
          "origin": "Veronese plain",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCMFgCdqzLvdJxYGaDAFlEDMYMT857D05ZZADK6F6LJbmst8APC4Nl4JYWyknq_CXy-wFoodx0MUTgMC0CntsIT7QemPR1DFgTLpY8U5WaTySi2AMxuyA04SwrYM2r3qDPPxCLOcyksMQ7bLZwM15ouLGkJeE9C1OWinZ6B7mwQYAmW_rezg2MqBTu7ntbCcLZlJzaaNWjiRvS33b7WJEC_xWcEO70o30NIuOjdMNQabBFxLaWU-Jhc"
        },
        {
          "id": "ven-asiago-stagionato",
          "name": "Asiago DOP Stagionato",
          "meta": "Wedge",
          "tag": "Aged 90+ days",
          "tagTone": "gold",
          "origin": "Asiago plateau",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
        }
      ],
      "schema": {
        "yield": "4 servings",
        "prepTime": "PT10M",
        "cookTime": "PT25M",
        "totalTime": "PT35M",
        "ingredients": [
          "320 g Vialone Nano rice",
          "300 g radicchio rosso di Treviso, sliced into thin strips",
          "1 shallot, finely chopped",
          "40 g butter, plus 30 g cold butter, diced",
          "A splash of dry red wine",
          "About 1.2 L hot light broth",
          "50 g Asiago stagionato or Grana Padano, grated",
          "Salt and black pepper"
        ]
      },
      "imageCaption": "Treviso classic · about 35 minutes",
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCMFgCdqzLvdJxYGaDAFlEDMYMT857D05ZZADK6F6LJbmst8APC4Nl4JYWyknq_CXy-wFoodx0MUTgMC0CntsIT7QemPR1DFgTLpY8U5WaTySi2AMxuyA04SwrYM2r3qDPPxCLOcyksMQ7bLZwM15ouLGkJeE9C1OWinZ6B7mwQYAmW_rezg2MqBTu7ntbCcLZlJzaaNWjiRvS33b7WJEC_xWcEO70o30NIuOjdMNQabBFxLaWU-Jhc"
    },
    "shortcut": {
      "title": "Ten minutes in Treviso",
      "body": "Cut a head of radicchio tardivo in half lengthwise, brush with olive oil, and cook on a hot grill pan for a few minutes on each side, until the leaves wilt and char at the tips. Finish with salt, pepper, and more oil, and serve with slices of Asiago or sopressa.",
      "products": [
        {
          "id": "ven-radicchio-tardivo",
          "name": "Radicchio Rosso di Treviso IGP Tardivo",
          "meta": "Winter only",
          "tag": "Winter only",
          "tagTone": "green",
          "origin": "Treviso",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
        },
        {
          "id": "ven-sopressa",
          "name": "Sopressa Vicentina DOP",
          "meta": "Sliced",
          "tag": "DOP",
          "tagTone": "green",
          "origin": "Vicenza",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo"
        }
      ],
      "eyebrow": "Winter grill shortcut",
      "button": "Get the radicchio pair"
    },
    "eyebrow": "Terroir kitchen"
  },
  "readTheLabel": "“Asiago” without the DOP seal can be made anywhere, and “baccalà” can mean salt cod or stockfish depending on who is selling it. Check the place of production, the ingredient list, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Veneto home",
    "body": "A Venetian table is built on rice, polenta, and good cheese, with a bitter red leaf in winter. We’ve gathered eight ingredients from this story into one set: enough for a risotto, a pot of polenta, and a board of Asiago and sopressa.",
    "button": "Add the Veneto pantry set",
    "products": [
      {
        "id": "ven-vialone",
        "name": "Vialone Nano IGP rice",
        "meta": "1 kg",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "Veronese plain",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCMFgCdqzLvdJxYGaDAFlEDMYMT857D05ZZADK6F6LJbmst8APC4Nl4JYWyknq_CXy-wFoodx0MUTgMC0CntsIT7QemPR1DFgTLpY8U5WaTySi2AMxuyA04SwrYM2r3qDPPxCLOcyksMQ7bLZwM15ouLGkJeE9C1OWinZ6B7mwQYAmW_rezg2MqBTu7ntbCcLZlJzaaNWjiRvS33b7WJEC_xWcEO70o30NIuOjdMNQabBFxLaWU-Jhc"
      },
      {
        "id": "ven-pila-vecia",
        "name": "Pila Vecia Vialone Nano",
        "meta": "1 kg",
        "tag": "Higher-end",
        "tagTone": "gold",
        "origin": "Isola della Scala",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuA4EH7PBxM5mkGtU_hUOJIWGkBVxZJn4EFpJjF38EOKBU7wo_ddyMCFm271EacOGO5w4Xv6DGSB-7_saGCFJU5iM16suJDjSS0a_VzFQbhUmwPL8egJ5XILWwdPmz-_POZdud-1IbUhFmWHh2snwuV7-TAFb5uKZfOhuCAAC57-6VjgZFhqO7vaYO8y1vEORke8lGfQXTjEtIhhnE1cknP388wuircWvsS4xPwHGOMZ7oIWF5WLtCf7"
      },
      {
        "id": "ven-asiago-stagionato",
        "name": "Asiago DOP Stagionato",
        "meta": "Wedge",
        "tag": "Aged 90+ days",
        "tagTone": "gold",
        "origin": "Asiago plateau",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
      },
      {
        "id": "ven-asiago-fresco",
        "name": "Asiago DOP Fresco",
        "meta": "Wedge",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Asiago plateau",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuAl_5nHHJIzoS-WsCluRQYcsvFaCEJgLpMKhF74uchwSFZaiasRvF2QgOGb8yQIioI-Tl012aRJqnvzUfYVXVIN42AtBrqz67jqjAH3CbxmYm6uEHRkYdah0q_WAQSgW93YHOemOcCRZN921JwihtDRxkKHN7PzTEk88hPG_P2AV7Y_dSVKxmfxeIubOnR3JAqjFS_dXGAzG2xxfQE3VDOGzRjZcEhJ1T-LSazL8n3fCCvhoP3Kr76d"
      },
      {
        "id": "ven-sopressa",
        "name": "Sopressa Vicentina DOP",
        "meta": "Sliced",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Vicenza",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo"
      },
      {
        "id": "ven-polenta-bianca",
        "name": "White polenta flour",
        "meta": "Bag",
        "tag": "White corn",
        "tagTone": "neutral",
        "origin": "Venetian plain",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr"
      },
      {
        "id": "ven-stoccafisso",
        "name": "Stockfish",
        "meta": "Dried",
        "tag": "Air-dried",
        "tagTone": "neutral",
        "origin": "Norway to Venice",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg7ZeusKi1XJ_YIbUpf7bMvUDHPzrJBa0kGGcUmiEWQXn5vyYqb10N5ExBRlYr2yJ0WfsFPe7URckqO8PDwMH0UDSwVm6XQCF-NoeAM33s50RkHXH5cUKTQIls7nyQjkd8xFb7E1CVsnD4Hx0oK8so72g2UalmTdOWlUWCd2mUYhcv42IUIFm1cqLKE69xjZ96SmNApFtb-zmua5MK2Erwp7yfRDiKgHOwIebR0rdf84T1bYeSwKl"
      },
      {
        "id": "ven-radicchio-tardivo",
        "name": "Radicchio Tardivo IGP",
        "meta": "Winter only",
        "tag": "Winter only",
        "tagTone": "green",
        "origin": "Treviso",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
      }
    ],
    "eyebrow": "Limited curation · Parcel N° 09"
  },
  "about": [
    "La Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "European Commission, Riso Nano Vialone Veronese IGP product page; Radicchio Rosso di Treviso IGP production specification; ONAF and Consorzio Tutela Formaggio Asiago product sheets; Il Post and Gazzetta del Gusto on Radicchio di Treviso; Visit Italy, Quotidiano Nazionale, and Adrijo on Venetian stockfish and Pietro Querini; Italoamericano on risi e bisi and sarde in saor; Regione Veneto and Gambero Rosso on Riseria Ferron and the Pila Vecia; Gazzetta del Gusto interview with Gabriele Ferron; MagicoVeneto on Venetian corn varieties; Agriturismo.it on Sopressa Vicentina."
};

export default veneto;
