import type { RegionStory } from './types';

// Photos are stand-ins from elsewhere on the site, to be replaced.
// Content from the Piemonte story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const piemonte: RegionStory = {
  "slug": "piemonte",
  "name": "Piemonte",
  "seoTitle": "Piedmont Food and Pantry Ingredients | Italy Region by Region | Casa Taglia",
  "seoDescription": "Cook Piedmont from its pantry: Nocciola Piemonte hazelnuts, white truffles from Alba, Carnaroli rice, Castelmagno and grissini, with a recipe for risotto al Castelmagno.",
  "kicker": "Region five: the foot of the mountains",
  "subtitle": "Truffles, hazelnuts, and a royal appetite.",
  "hero": {
    "color": "#5B2A4A",
    "colorDeep": "#3E1C33",
    "dossier": "Terroir archive · Dossier N° 05",
    "badge": "Birthplace of Slow Food",
    "metrics": [
      {
        "icon": "castle",
        "label": "First capital",
        "value": "Turin, 1861"
      },
      {
        "icon": "terrain",
        "label": "Mountains",
        "value": "Alps on three sides"
      },
      {
        "icon": "water",
        "label": "River",
        "value": "The Po"
      },
      {
        "icon": "eco",
        "label": "Slow Food",
        "value": "Born in Bra"
      }
    ],
    "heritage": "Savoy royal court",
    "imageCaption": {
      "title": "The Langhe",
      "body": "Vineyard hills of the Langhe, Roero, and Monferrato roll south toward the sea."
    },
    "imageTag": "Langhe, Roero, Monferrato",
    "heritageNote": "at the foot of the mountains",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuB2slSQexHb65wGxM1BmjHsv2HDR0JxYkp1_797_5C6hQ-VssXWRFXHGsZiRVvDRJ0lW5kiMqWb7ov4nVwaBRFu0QudIz8yPk8oDGI5RgetbxYgswJcvlkXDqk43z4jfCzXyDPRCogKAsIQDHpqeJDPnzcWcFVAsff-q-mKrLKbL8xT13RBt-1OfRR1ZjSUkSqLt-E6vZKzMGuvf-bwUBkgICI_iH38dHy50W4tAcvFAoBESck6EwyC",
    "imageAlt": "Vineyard hills of the Langhe, Roero, and Monferrato roll south toward the sea."
  },
  "intro": [
    "Piedmont means “at the foot of the mountains,” and the Alps wrap around it on three sides, along the borders with France and Switzerland. The Po river rises here, flowing east past Turin into flat plains flooded each spring for rice, while to the south the vineyard hills of the Langhe, Roero, and Monferrato roll toward the sea. For centuries the House of Savoy ruled from Turin, which became the first capital of a united Italy in 1861, and its court borrowed freely from France: butter, cream, sauces, and a taste for elaborate dishes. Below the palaces, mountain herders made cheese, hill farmers grew hazelnuts and grapes, and mule trains on the salt roads from Liguria carried in the anchovies still central to the local kitchen. The Slow Food movement was born here, in the town of Bra. The result is a rich, patient cuisine of eggs and butter, slow braises in Barolo, and in autumn, the white truffle.",
    "Piedmont cooks with the seasons more strictly than almost anywhere in Italy. Start with the ingredients that define it, learn the dishes they make possible, and meet a Turin chocolate maker keeping the city’s hazelnut tradition alive."
  ],
  "pantry": {
    "lede": "Six ingredients behind Piedmont’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Hazelnuts",
        "place": "The Langhe, Roero, and Monferrato",
        "body": "The Tonda Gentile variety is round, sweet, and intensely aromatic once toasted, and its skin slips off easily. It is the hazelnut behind gianduja, torta di nocciole, and many of Italy’s finest chocolates.",
        "lookFor": "Nocciola Piemonte IGP.",
        "products": [
          {
            "id": "pie-nocciole",
            "name": "Nocciola Piemonte IGP hazelnuts",
            "meta": "Toasted",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "The Langhe",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
          }
        ]
      },
      {
        "title": "White truffle",
        "place": "Alba and the Langhe hills",
        "body": "Found by trained dogs in autumn woods and impossible to farm, the white truffle has a heady, garlicky perfume. It is never cooked, only shaved raw over eggs, pasta, or risotto at the table.",
        "lookFor": "Tuber magnatum Pico on the label. Most “truffle oil” is flavored with a synthetic aroma, not truffles.",
        "products": [
          {
            "id": "pie-tartufo-bianco",
            "name": "Fresh white truffle, Alba",
            "meta": "Autumn only",
            "tag": "Autumn only",
            "tagTone": "gold",
            "origin": "Alba",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDtz4nC-_Ocop-ZSNl-oDRC-xid0fbJjTqVPUEMGXDc-UbWWdybXrqmu31H6mlNxK4JZOSsBI_3IAP1pL-W1sqt1ikgMdtTPYAT0fiJGYVfiXm7UE6JSLZGJ-xb1o2egOuz7ozHvr2e63HG1-ErCgCkLhUPU-GdEtqrYqG00tazkWu8J6e4OugEKo2UbKYbn45zRYHOGVhj2I5_DSh4G0FKDs3o_7WoAfI3PI8c74tSjobPIsG3e2gB"
          }
        ],
        "shelfLabel": "In season"
      },
      {
        "title": "Rice",
        "place": "The plains of Vercelli, Novara, and Biella",
        "body": "Piedmont grows more rice than any other region in Italy. Carnaroli, with its firm core and creamy starch, is the risotto rice cooks prize most.",
        "lookFor": "Riso di Baraggia Biellese e Vercellese DOP, Italy’s only protected-origin rice.",
        "products": [
          {
            "id": "pie-carnaroli",
            "name": "Carnaroli rice from Vercelli",
            "meta": "1 kg",
            "tag": "Risotto rice",
            "tagTone": "neutral",
            "origin": "Vercelli",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCMFgCdqzLvdJxYGaDAFlEDMYMT857D05ZZADK6F6LJbmst8APC4Nl4JYWyknq_CXy-wFoodx0MUTgMC0CntsIT7QemPR1DFgTLpY8U5WaTySi2AMxuyA04SwrYM2r3qDPPxCLOcyksMQ7bLZwM15ouLGkJeE9C1OWinZ6B7mwQYAmW_rezg2MqBTu7ntbCcLZlJzaaNWjiRvS33b7WJEC_xWcEO70o30NIuOjdMNQabBFxLaWU-Jhc"
          }
        ]
      },
      {
        "title": "Castelmagno",
        "place": "The Grana valley, above Cuneo",
        "body": "A crumbly, mountain cow’s-milk cheese that develops faint blue veining and a sharp, mineral depth as it ages. Rare, prized, and wonderful melted into risotto or gnocchi.",
        "lookFor": "Castelmagno DOP, and “di alpeggio” for cheese made on summer mountain pastures.",
        "products": [
          {
            "id": "pie-castelmagno",
            "name": "Castelmagno DOP",
            "meta": "Wedge",
            "tag": "Rare · DOP",
            "tagTone": "gold",
            "origin": "Grana valley",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
          }
        ]
      },
      {
        "title": "Robiola di Roccaverano",
        "place": "The Langa Astigiana",
        "body": "A small, soft cheese made mostly from goat’s milk in the hills south of Asti. Fresh and tangy when young, it grows denser and nuttier with a few weeks of age.",
        "lookFor": "Robiola di Roccaverano DOP.",
        "products": [
          {
            "id": "pie-robiola",
            "name": "Robiola di Roccaverano DOP",
            "meta": "Single round",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Langa Astigiana",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr"
          }
        ]
      },
      {
        "title": "Grissini",
        "place": "Turin",
        "body": "Turin’s bread sticks date to the Savoy court of the 1600s. The best are stretched by hand to arm’s length, knobbly and uneven, nothing like the pencil-straight packaged kind.",
        "lookFor": "“stirati a mano” or “rubatà,” meaning hand-stretched.",
        "products": [
          {
            "id": "pie-grissini",
            "name": "Hand-stretched grissini rubatà",
            "meta": "Bag",
            "tag": "Hand-stretched",
            "tagTone": "neutral",
            "origin": "Turin",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo"
          }
        ]
      }
    ],
    "eyebrow": "Essential terroir goods"
  },
  "dishes": {
    "lede": "Four dishes Piedmont makes its own.",
    "items": [
      {
        "title": "Risotto al Castelmagno",
        "where": "The Cuneo valleys",
        "body": "Creamy Carnaroli risotto finished with crumbled Castelmagno, rich, sharp, and simple. A mountain dish made with the plain’s rice.",
        "tip": "[Cook it below](#risotto)",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCMFgCdqzLvdJxYGaDAFlEDMYMT857D05ZZADK6F6LJbmst8APC4Nl4JYWyknq_CXy-wFoodx0MUTgMC0CntsIT7QemPR1DFgTLpY8U5WaTySi2AMxuyA04SwrYM2r3qDPPxCLOcyksMQ7bLZwM15ouLGkJeE9C1OWinZ6B7mwQYAmW_rezg2MqBTu7ntbCcLZlJzaaNWjiRvS33b7WJEC_xWcEO70o30NIuOjdMNQabBFxLaWU-Jhc"
      },
      {
        "title": "Tajarin",
        "where": "Alba and the Langhe",
        "body": "Thin golden ribbons of pasta made with an extravagant number of egg yolks, tossed in butter or a light meat sauce. In autumn, the classic base for shaved white truffle.",
        "tip": "Try [dried egg tajarin](product:pie-tajarin) for a ten-minute version.",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
      },
      {
        "title": "Vitello tonnato",
        "where": "Turin and across Piedmont",
        "body": "Thin slices of cold poached veal under a creamy sauce of tuna, capers, and anchovy. A summer antipasto that sounds unlikely and tastes perfect.",
        "note": "A summer antipasto",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAPcC0a36PdQKRFN67N9n4iWBfhvVaOYD4lAqKygnUjTrscttDOYLVoI8x1mJHXJybsSr0etHTwY4pU0A01kN4o1IfpMOvEBAXOIrB8eZ11ou4LrSyCjELVvYNkcTxy0DtPWugtK_maKrpF1S29ogN-YzCyzhDGWnfH4HdQ3jXFuv8h73Z3GNxqFxYhHzG5euOwWXNcUn83KLa8hc2NC2nQFY3TdtlSPgMj0otF-z9Yn-C7fprrBLWX"
      },
      {
        "title": "Bagna càuda",
        "where": "Asti and the Langhe",
        "body": "A warm dip of garlic, anchovies, and olive oil kept hot at the table for raw and cooked autumn vegetables. A communal, garlicky feast that marks the end of the grape harvest.",
        "tip": "Serve with [hand-stretched grissini](product:pie-grissini) for dipping.",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg7ZeusKi1XJ_YIbUpf7bMvUDHPzrJBa0kGGcUmiEWQXn5vyYqb10N5ExBRlYr2yJ0WfsFPe7URckqO8PDwMH0UDSwVm6XQCF-NoeAM33s50RkHXH5cUKTQIls7nyQjkd8xFb7E1CVsnD4Hx0oK8so72g2UalmTdOWlUWCd2mUYhcv42IUIFm1cqLKE69xjZ96SmNApFtb-zmua5MK2Erwp7yfRDiKgHOwIebR0rdf84T1bYeSwKl"
      }
    ],
    "eyebrow": "Culinary canon"
  },
  "maker": {
    "name": "Guido Gobino",
    "place": "Turin",
    "paragraphs": [
      "Turin gave the world gianduja. As the story goes, when Napoleon’s blockades made cocoa scarce in the early 1800s, the city’s chocolate makers stretched it with ground Piedmont hazelnuts. The Gobino family’s chapter began in 1964, when Giuseppe Gobino became production manager of a small chocolate workshop on Via Cagliari. He bought it in 1980, and his son Guido took it over a few years later.",
      "Guido made the giandujotto, Turin’s ingot-shaped hazelnut chocolate, his specialty. In 1995 he introduced the Tourinot, a 5-gram giandujotto extruded rather than molded and made with Nocciola Piemonte IGP hazelnuts. The original Via Cagliari workshop still produces the chocolates, and the company also runs a shop in the center of Turin on Via Lagrange."
    ],
    "photos": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCC3hXgtO47-HYlfWhixDmIvGeTORmhXWh-0mhqJFRiG405EoadpsWrNrhqsLIFFpDAqYH1QIdFzwMR73JQb-HxmTHFSFFnC0WNxh4tOQIEZA_nZacNem5iBUWjnfVgmUFcjBLMehUCESqr6VmxEEbhF2pMviwfwNweiWbDiMgyIPAj7_QO7izWh74iILXcxADKdMDXfSyYvtfRhhGhUHPdVyTJPDYQm_d646dur2oNjr8M78rgogJx",
        "alt": "Via Cagliari workshop · Turin",
        "caption": "Via Cagliari workshop · Turin"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuDUkq6TgfKOwjF2ahABZJgDKtC894gDZY8GKNiQPJ_MoIkulL3tvTpZl1ouHlSnOUIzStVyQn1gA36A68G7N7dOBGYe_Prtvhk5490gOHHUtwKMidPAvub6mNTxg1jTXprEtNacMowXVRBQqPgeiij-358JiScZ_OjUDH94BnwD-CZSGmZ1ztElrosH9nHqweXxYn7-z8jRTnONLS2ZON9OLtS_uR_CVysQEzR404aqkOMi79NEqmAN",
        "alt": "Piedmont hazelnuts · gianduja",
        "caption": "Piedmont hazelnuts · gianduja"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq",
        "alt": "Tourinot giandujotti · Gobino",
        "caption": "Tourinot giandujotti · Gobino"
      }
    ],
    "facts": [
      {
        "label": "Workshop",
        "value": "Since 1964"
      },
      {
        "label": "Family-owned",
        "value": "Since 1980"
      },
      {
        "label": "Tourinot",
        "value": "5 grams"
      }
    ],
    "productsLabel": "From Guido Gobino",
    "products": [
      {
        "id": "pie-gobino-tourinot",
        "name": "Guido Gobino Tourinot giandujotti",
        "meta": "Box",
        "tag": "5 grams",
        "tagTone": "gold",
        "origin": "Turin",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDMH2M-VN1-Pz9hCbkXgdgup639qKPj1bgJo2jf1PgPm9NKzrgAY_T6MZujPmHAC4Z5W83H6bgIwaOrwcCLEuI-3an8k7c44fESuTzHNkXQYSCN_pESKkZUsjfCP-01ZMORW4JuJXmElmpAAAxPwRTi5o5Crpmlu_bVRSOXjhggx377vb87iOfKRdkb1LjsaiX1pF73K7pXrg-DIruRvIfEPidPaOJoOlRNnbEwUK6fqguV0N3VVklu"
      },
      {
        "id": "pie-gobino-crema",
        "name": "Guido Gobino gianduja spread",
        "meta": "Jar",
        "tag": "Gianduja",
        "tagTone": "neutral",
        "origin": "Turin",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCC3hXgtO47-HYlfWhixDmIvGeTORmhXWh-0mhqJFRiG405EoadpsWrNrhqsLIFFpDAqYH1QIdFzwMR73JQb-HxmTHFSFFnC0WNxh4tOQIEZA_nZacNem5iBUWjnfVgmUFcjBLMehUCESqr6VmxEEbhF2pMviwfwNweiWbDiMgyIPAj7_QO7izWh74iILXcxADKdMDXfSyYvtfRhhGhUHPdVyTJPDYQm_d646dur2oNjr8M78rgogJx"
      }
    ]
  },
  "cook": {
    "title": "Cook Piemonte",
    "lede": "One classic from scratch and one ten-minute shortcut from Alba.",
    "recipe": {
      "id": "risotto",
      "title": "Risotto al Castelmagno",
      "serves": "4",
      "time": "about 35 minutes",
      "from": "the Cuneo valleys",
      "steps": [
        {
          "title": "Soften the shallot.",
          "body": "Melt 40 g butter in a wide, heavy pan and cook the shallot gently for 5 minutes, until soft but not colored."
        },
        {
          "title": "Toast the rice.",
          "body": "Add the rice and stir for 2 minutes, until the grains are hot and translucent at the edges. Pour in the wine and let it evaporate."
        },
        {
          "title": "Cook with broth.",
          "body": "Add hot broth a ladle at a time, stirring often and letting each addition absorb before the next, for 16–18 minutes, until the rice is tender with a slight bite at the center."
        },
        {
          "title": "Finish off the heat.",
          "body": "Take the pan off the heat. Beat in the cold butter, the Castelmagno, and the grated cheese until the risotto is creamy and loose enough to ripple when you shake the pan. Rest for 1 minute, season, and serve."
        }
      ],
      "touch": "Scatter a few chopped, toasted [Piedmont hazelnuts](product:pie-nocciole) over each plate. Their sweetness plays beautifully against the sharp, mineral cheese.",
      "shoppingList": [
        "320 g [Carnaroli rice](product:pie-carnaroli)",
        "1 shallot or small onion",
        "70 g butter",
        "120 ml dry white wine",
        "About 1.2 L light broth",
        "120 g [Castelmagno DOP](product:pie-castelmagno)",
        "20 g Grana Padano or Parmigiano Reggiano",
        "Salt and pepper",
        "Optional: [toasted hazelnuts](product:pie-nocciole)"
      ],
      "products": [
        {
          "id": "pie-carnaroli",
          "name": "Carnaroli rice from Vercelli",
          "meta": "1 kg",
          "tag": "Risotto rice",
          "tagTone": "neutral",
          "origin": "Vercelli",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCMFgCdqzLvdJxYGaDAFlEDMYMT857D05ZZADK6F6LJbmst8APC4Nl4JYWyknq_CXy-wFoodx0MUTgMC0CntsIT7QemPR1DFgTLpY8U5WaTySi2AMxuyA04SwrYM2r3qDPPxCLOcyksMQ7bLZwM15ouLGkJeE9C1OWinZ6B7mwQYAmW_rezg2MqBTu7ntbCcLZlJzaaNWjiRvS33b7WJEC_xWcEO70o30NIuOjdMNQabBFxLaWU-Jhc"
        },
        {
          "id": "pie-castelmagno",
          "name": "Castelmagno DOP",
          "meta": "Wedge",
          "tag": "Rare · DOP",
          "tagTone": "gold",
          "origin": "Grana valley",
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
          "1 shallot or small onion, finely chopped",
          "40 g butter, plus 30 g cold butter, diced",
          "120 ml dry white wine",
          "About 1.2 L hot light broth",
          "120 g Castelmagno DOP, crumbled",
          "20 g grated Grana Padano or Parmigiano Reggiano",
          "Salt and black pepper",
          "Optional: a handful of toasted Piedmont hazelnuts, chopped"
        ]
      },
      "imageCaption": "Cuneo valleys classic · about 35 minutes",
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCMFgCdqzLvdJxYGaDAFlEDMYMT857D05ZZADK6F6LJbmst8APC4Nl4JYWyknq_CXy-wFoodx0MUTgMC0CntsIT7QemPR1DFgTLpY8U5WaTySi2AMxuyA04SwrYM2r3qDPPxCLOcyksMQ7bLZwM15ouLGkJeE9C1OWinZ6B7mwQYAmW_rezg2MqBTu7ntbCcLZlJzaaNWjiRvS33b7WJEC_xWcEO70o30NIuOjdMNQabBFxLaWU-Jhc"
    },
    "shortcut": {
      "title": "Ten minutes in Alba",
      "body": "Cook egg tajarin for 2–3 minutes. Meanwhile, melt a generous knob of butter with a splash of the pasta water. Toss the drained tajarin in the butter with plenty of grated Parmigiano Reggiano. In autumn, shave white truffle over the top at the table, as much as you dare.",
      "products": [
        {
          "id": "pie-tajarin",
          "name": "Egg tajarin from the Langhe",
          "meta": "Dried nests",
          "tag": "Egg pasta",
          "tagTone": "neutral",
          "origin": "The Langhe",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCZhnC6OD1VrmeoAkesXcV61vBh25ZoqFu3NKi1EWxScFq08esuCcNzj28MeLyPLME1eJ4rqHGka5Va1TpbBHJJjtXPwJCp0j6OcrdBzYqdqkNECgc1aIdIrdUQ-3yQ49QItc5wh4ZkdvFaJm6-EOJLmg_-fEa9Y74OCjgdx1yeFqlC35iIO1cg2THDFfbVWTTKfIfoC35P_lksCF2Ua-5Tn5iAP5Amgfwuc-v6kUOIJSkESvhpWyfq"
        },
        {
          "id": "pie-tartufo-bianco",
          "name": "Fresh white truffle, Alba",
          "meta": "Autumn only",
          "tag": "Autumn only",
          "tagTone": "gold",
          "origin": "Alba",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDtz4nC-_Ocop-ZSNl-oDRC-xid0fbJjTqVPUEMGXDc-UbWWdybXrqmu31H6mlNxK4JZOSsBI_3IAP1pL-W1sqt1ikgMdtTPYAT0fiJGYVfiXm7UE6JSLZGJ-xb1o2egOuz7ozHvr2e63HG1-ErCgCkLhUPU-GdEtqrYqG00tazkWu8J6e4OugEKo2UbKYbn45zRYHOGVhj2I5_DSh4G0FKDs3o_7WoAfI3PI8c74tSjobPIsG3e2gB"
        }
      ],
      "eyebrow": "Alba shortcut",
      "button": "Get the tajarin pair"
    },
    "eyebrow": "Seasonal kitchen"
  },
  "readTheLabel": "“Truffle flavor” and most truffle oils contain no truffle at all, and “Italian hazelnuts” is not Nocciola Piemonte IGP. Check the place of production, the ingredient list, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Piemonte home",
    "body": "A Piedmontese table moves with the seasons, but its pantry stays rich year-round. We’ve gathered eight ingredients from this story into one set: enough for a risotto, a cheese board with grissini, a plate of tajarin, and gianduja to finish.",
    "button": "Add the Piemonte pantry set",
    "products": [
      {
        "id": "pie-nocciole",
        "name": "Nocciola Piemonte IGP",
        "meta": "Toasted",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "The Langhe",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
      },
      {
        "id": "pie-carnaroli",
        "name": "Carnaroli rice",
        "meta": "1 kg",
        "tag": "Risotto rice",
        "tagTone": "neutral",
        "origin": "Vercelli",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCMFgCdqzLvdJxYGaDAFlEDMYMT857D05ZZADK6F6LJbmst8APC4Nl4JYWyknq_CXy-wFoodx0MUTgMC0CntsIT7QemPR1DFgTLpY8U5WaTySi2AMxuyA04SwrYM2r3qDPPxCLOcyksMQ7bLZwM15ouLGkJeE9C1OWinZ6B7mwQYAmW_rezg2MqBTu7ntbCcLZlJzaaNWjiRvS33b7WJEC_xWcEO70o30NIuOjdMNQabBFxLaWU-Jhc"
      },
      {
        "id": "pie-castelmagno",
        "name": "Castelmagno DOP",
        "meta": "Wedge",
        "tag": "Rare · DOP",
        "tagTone": "gold",
        "origin": "Grana valley",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
      },
      {
        "id": "pie-robiola",
        "name": "Robiola di Roccaverano DOP",
        "meta": "Single round",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Langa Astigiana",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr"
      },
      {
        "id": "pie-grissini",
        "name": "Grissini rubatà",
        "meta": "Bag",
        "tag": "Hand-stretched",
        "tagTone": "neutral",
        "origin": "Turin",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo"
      },
      {
        "id": "pie-tajarin",
        "name": "Egg tajarin",
        "meta": "Dried nests",
        "tag": "Egg pasta",
        "tagTone": "neutral",
        "origin": "The Langhe",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCZhnC6OD1VrmeoAkesXcV61vBh25ZoqFu3NKi1EWxScFq08esuCcNzj28MeLyPLME1eJ4rqHGka5Va1TpbBHJJjtXPwJCp0j6OcrdBzYqdqkNECgc1aIdIrdUQ-3yQ49QItc5wh4ZkdvFaJm6-EOJLmg_-fEa9Y74OCjgdx1yeFqlC35iIO1cg2THDFfbVWTTKfIfoC35P_lksCF2Ua-5Tn5iAP5Amgfwuc-v6kUOIJSkESvhpWyfq"
      },
      {
        "id": "pie-gobino-tourinot",
        "name": "Gobino Tourinot giandujotti",
        "meta": "Box",
        "tag": "5 grams",
        "tagTone": "gold",
        "origin": "Turin",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDMH2M-VN1-Pz9hCbkXgdgup639qKPj1bgJo2jf1PgPm9NKzrgAY_T6MZujPmHAC4Z5W83H6bgIwaOrwcCLEuI-3an8k7c44fESuTzHNkXQYSCN_pESKkZUsjfCP-01ZMORW4JuJXmElmpAAAxPwRTi5o5Crpmlu_bVRSOXjhggx377vb87iOfKRdkb1LjsaiX1pF73K7pXrg-DIruRvIfEPidPaOJoOlRNnbEwUK6fqguV0N3VVklu"
      },
      {
        "id": "pie-gobino-crema",
        "name": "Gobino gianduja spread",
        "meta": "Jar",
        "tag": "Gianduja",
        "tagTone": "neutral",
        "origin": "Turin",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCC3hXgtO47-HYlfWhixDmIvGeTORmhXWh-0mhqJFRiG405EoadpsWrNrhqsLIFFpDAqYH1QIdFzwMR73JQb-HxmTHFSFFnC0WNxh4tOQIEZA_nZacNem5iBUWjnfVgmUFcjBLMehUCESqr6VmxEEbhF2pMviwfwNweiWbDiMgyIPAj7_QO7izWh74iILXcxADKdMDXfSyYvtfRhhGhUHPdVyTJPDYQm_d646dur2oNjr8M78rgogJx"
      }
    ],
    "eyebrow": "Limited curation · Parcel N° 05"
  },
  "about": [
    "Casa Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "Consorzio Tutela Nocciola Piemonte IGP; Consorzio per la Tutela del Formaggio Castelmagno DOP; Consorzio di Tutela Robiola di Roccaverano DOP; Ente Nazionale Risi; European Commission eAmbrosia register; Linkiesta (2021) and First&Food interview with Guido Gobino."
};

export default piemonte;
