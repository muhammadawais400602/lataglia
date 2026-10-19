import type { RegionStory } from './types';

// Photos are stand-ins from elsewhere on the site, to be replaced.
// Content from the Basilicata story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const basilicata: RegionStory = {
  "slug": "basilicata",
  "name": "Basilicata",
  "seoTitle": "Food and Pantry Ingredients of Basilicata | Italy Region by Region | La Taglia",
  "seoDescription": "Cook Basilicata from its pantry: Senise peppers, Pane di Matera, Sarconi beans, Canestrato di Moliterno, red eggplant of Rotonda and lucanica, with a recipe for pasta with peperoni cruschi.",
  "kicker": "Region eighteen: the land of Lucania",
  "subtitle": "Crisp red peppers, durum-wheat bread, and the cave city of Matera.",
  "hero": {
    "color": "#5A5A2E",
    "colorDeep": "#3D3D1F",
    "dossier": "Terroir archive · Dossier N° 18",
    "badge": "UNESCO Sassi of Matera",
    "metrics": [
      {
        "icon": "history_edu",
        "label": "Ancient name",
        "value": "Lucania"
      },
      {
        "icon": "castle",
        "label": "Landmark",
        "value": "Sassi of Matera"
      },
      {
        "icon": "location_city",
        "label": "Culture capital",
        "value": "Matera, 2019"
      },
      {
        "icon": "restaurant",
        "label": "Signature",
        "value": "Peperoni cruschi"
      }
    ],
    "heritage": "Waste-nothing kitchen",
    "imageCaption": {
      "title": "The Sassi of Matera",
      "body": "Matera’s cave dwellings, a UNESCO World Heritage Site, in the European Capital of Culture of 2019."
    },
    "imageTag": "Matera · the Sassi",
    "heritageNote": "a kitchen that wastes nothing",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCNrs681gN72nFEfp-6phdUsxZxTsiO1DTw_3yZcdEFNU98YNQPmUajjE04nmVN4-RJ7ArH45kzIjCheTeGHKsXZHHgSSeEPDs7vfU5J_YuLcXOVSmZuug76j9ZbGqjBE_2ilQ5fAfc2ZvCHtvPSUCQEzJSserRsRDgiw68pBqtx51V5y462K-rzBplOBNLsun6-9Fc1x4JRjWVZCL3MJkFaRLkPaT0iI34d0ItYlP6TjUThtVOv54S=w1600",
    "imageAlt": "Matera’s cave dwellings, a UNESCO World Heritage Site, in the European Capital of Culture of 2019."
  },
  "intro": [
    "Basilicata, also known by its ancient name Lucania, sits in the instep of Italy’s boot between Campania, Puglia, and Calabria, a land of mountains, valleys, and deep ravines that touches the sea only briefly on two coasts. Its most famous city is Matera, whose cave dwellings, the Sassi, are a UNESCO World Heritage Site; in 2019 Matera was European Capital of Culture. For centuries this was farming and shepherding country, crossed by transhumance routes and shaped by poverty, and its cooks learned to waste nothing. Durum wheat became bread that kept for a week; red peppers were dried in strings in the August sun; stale bread, beans, and grains became soups and toppings for pasta. The result is a cuisine once called “poor,” now prized for its honesty and built on a few ingredients of real character.",
    "Basilicata is one of Italy’s best-kept food secrets. Start with the ingredients that define it, learn the dishes they make possible, and meet a Matera family whose bread won the title of Italy’s best."
  ],
  "pantry": {
    "lede": "Six ingredients behind Basilicata’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Senise peppers",
        "place": "Senise and the Pollino National Park",
        "body": "Sweet red peppers, pointed, blunt, or hooked, picked by hand in August and strung in braids to dry in the sun. Fried for a few seconds in olive oil, they turn into peperoni cruschi, crisp and deep red, known as the “red gold” of Basilicata.",
        "lookFor": "Peperone di Senise IGP.",
        "products": [
          {
            "id": "bas-peperoni-senise",
            "name": "Peperone di Senise IGP, dried",
            "meta": "Braid or bag",
            "tag": "IGP",
            "tagTone": "red",
            "origin": "Senise",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCC3hXgtO47-HYlfWhixDmIvGeTORmhXWh-0mhqJFRiG405EoadpsWrNrhqsLIFFpDAqYH1QIdFzwMR73JQb-HxmTHFSFFnC0WNxh4tOQIEZA_nZacNem5iBUWjnfVgmUFcjBLMehUCESqr6VmxEEbhF2pMviwfwNweiWbDiMgyIPAj7_QO7izWh74iILXcxADKdMDXfSyYvtfRhhGhUHPdVyTJPDYQm_d646dur2oNjr8M78rgogJx=w1600"
          }
        ]
      },
      {
        "title": "Pane di Matera",
        "place": "Matera",
        "body": "Bread of remilled durum-wheat semolina from local varieties, including Senatore Cappelli, leavened with a natural starter made from macerated fruit and baked in wood-fired ovens. It keeps for a week or more. Families once marked their loaves with carved wooden stamps before taking them to the communal oven.",
        "lookFor": "Pane di Matera IGP.",
        "products": [
          {
            "id": "bas-pane-matera",
            "name": "Pane di Matera IGP",
            "meta": "Loaf",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Matera",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq=w1600"
          }
        ]
      },
      {
        "title": "Sarconi beans",
        "place": "The upper Val d’Agri",
        "body": "Beans from the high valley between Monte Sirino and Monte Volturino, a staple of Lucania’s legume-rich cooking.",
        "lookFor": "Fagiolo di Sarconi IGP.",
        "products": [
          {
            "id": "bas-fagioli-sarconi",
            "name": "Fagiolo di Sarconi IGP",
            "meta": "500 g",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Val d’Agri",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr=w1600"
          }
        ]
      },
      {
        "title": "Canestrato di Moliterno",
        "place": "Moliterno",
        "body": "A hard cheese from a historic transhumance town, made from whole goat’s and sheep’s milk with a smaller share of cow’s milk.",
        "lookFor": "Canestrato di Moliterno IGP.",
        "products": [
          {
            "id": "bas-canestrato",
            "name": "Canestrato di Moliterno IGP",
            "meta": "Wedge",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Moliterno",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy=w1600"
          }
        ]
      },
      {
        "title": "Red eggplant",
        "place": "Rotonda, in the Pollino",
        "body": "It looks like a tomato but is an eggplant, with a slightly spicy flavor. Good in sauces, fried, or stuffed.",
        "lookFor": "Melanzana Rossa di Rotonda DOP.",
        "products": [
          {
            "id": "bas-melanzana-rossa",
            "name": "Melanzana Rossa di Rotonda DOP, preserved",
            "meta": "Jar",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Rotonda",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo=w1600"
          }
        ]
      },
      {
        "title": "Lucanica",
        "place": "Across the region",
        "body": "Basilicata’s pork sausage, recognizable by its fennel seed and a fixture of local salumi boards.",
        "lookFor": "lucanica made in Basilicata, such as Lucanica di Picerno.",
        "products": [
          {
            "id": "bas-lucanica",
            "name": "Lucanica",
            "meta": "Whole",
            "tag": "Fennel seed",
            "tagTone": "neutral",
            "origin": "Basilicata",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDMH2M-VN1-Pz9hCbkXgdgup639qKPj1bgJo2jf1PgPm9NKzrgAY_T6MZujPmHAC4Z5W83H6bgIwaOrwcCLEuI-3an8k7c44fESuTzHNkXQYSCN_pESKkZUsjfCP-01ZMORW4JuJXmElmpAAAxPwRTi5o5Crpmlu_bVRSOXjhggx377vb87iOfKRdkb1LjsaiX1pF73K7pXrg-DIruRvIfEPidPaOJoOlRNnbEwUK6fqguV0N3VVklu=w1600"
          }
        ]
      }
    ],
    "eyebrow": "Essential terroir goods"
  },
  "dishes": {
    "lede": "Four dishes Basilicata makes its own.",
    "items": [
      {
        "title": "Pasta con i peperoni cruschi",
        "where": "Across the region",
        "body": "Homemade pasta tossed with toasted breadcrumbs and crumbled crisp peppers, the region’s signature first course.",
        "tip": "[Cook it below](#cruschi)",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl=w1600"
      },
      {
        "title": "Crapiata",
        "where": "Matera",
        "body": "An ancient Materan soup of mixed legumes and grains, perfect for warming up on cold days.",
        "tip": "Start with [Sarconi beans](product:bas-fagioli-sarconi).",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg7ZeusKi1XJ_YIbUpf7bMvUDHPzrJBa0kGGcUmiEWQXn5vyYqb10N5ExBRlYr2yJ0WfsFPe7URckqO8PDwMH0UDSwVm6XQCF-NoeAM33s50RkHXH5cUKTQIls7nyQjkd8xFb7E1CVsnD4Hx0oK8so72g2UalmTdOWlUWCd2mUYhcv42IUIFm1cqLKE69xjZ96SmNApFtb-zmua5MK2Erwp7yfRDiKgHOwIebR0rdf84T1bYeSwKl=w1600"
      },
      {
        "title": "Baccalà alla lucana",
        "where": "Avigliano and Potenza",
        "body": "Salt cod, often cooked with crisp peppers, olives, and tomatoes. Avigliano holds a baccalà festival each August.",
        "note": "Avigliano’s August festival",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg7ZeusKi1XJ_YIbUpf7bMvUDHPzrJBa0kGGcUmiEWQXn5vyYqb10N5ExBRlYr2yJ0WfsFPe7URckqO8PDwMH0UDSwVm6XQCF-NoeAM33s50RkHXH5cUKTQIls7nyQjkd8xFb7E1CVsnD4Hx0oK8so72g2UalmTdOWlUWCd2mUYhcv42IUIFm1cqLKE69xjZ96SmNApFtb-zmua5MK2Erwp7yfRDiKgHOwIebR0rdf84T1bYeSwKl=w1600"
      },
      {
        "title": "Acquasala",
        "where": "Across the region",
        "body": "A thrifty one-dish meal of stale bread, eggs, tomato, and crushed peppers, a classic of the kitchen that wastes nothing.",
        "note": "A thrifty one-dish meal",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCC3hXgtO47-HYlfWhixDmIvGeTORmhXWh-0mhqJFRiG405EoadpsWrNrhqsLIFFpDAqYH1QIdFzwMR73JQb-HxmTHFSFFnC0WNxh4tOQIEZA_nZacNem5iBUWjnfVgmUFcjBLMehUCESqr6VmxEEbhF2pMviwfwNweiWbDiMgyIPAj7_QO7izWh74iILXcxADKdMDXfSyYvtfRhhGhUHPdVyTJPDYQm_d646dur2oNjr8M78rgogJx=w1600"
      }
    ],
    "eyebrow": "Lucanian canon"
  },
  "maker": {
    "name": "Perrone",
    "place": "Matera",
    "paragraphs": [
      "The Perrone family has been baking bread in Matera since 1918, in a historic bakery on Via delle Cererie, today called Pane e Pace. In 2019, the year Matera was European Capital of Culture, Gambero Rosso’s bread guide named it the best bakery in Italy.",
      "The bakery makes Pane di Matera IGP alongside some two dozen other breads, all from local flours. Gambero Rosso praised its century of repeated gestures, which have become a symbol of the city’s identity."
    ],
    "photos": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq=w1600",
        "alt": "Wood-fired oven · Perrone",
        "caption": "Wood-fired oven · Perrone"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuAnmv_x6pp8pedaJCwB3KpOyHiwoux-_Zw7UEg-8tHQA_WJGaPfnDtGodkrZjSiPXFoiIM0lbvgYcoOUCfJSy5AbEl111xwfxRWxfyGgSnyKAinmiguDsYDuxWCvIiDR15Qwm2ZKdjCzGHWmTjzYB1abwN7YqA65e_DwIc2qf_h09V0xMNEdJKbcLMYZFXc3RN2UXvi9uOgM0JYY1X1L5Wl1aUwDP0dBBQfz6uOjhWBl1K0MoFePgpE=w1600",
        "alt": "Pane di Matera loaves",
        "caption": "Pane di Matera loaves"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuAup5gyH9Bp1XqQHaEiiC2B1SMPipV2xRwTcLm3TOGA0GNCv09xIIXehf9soQONqLtE55IpSKVV2vHbgUGmJpQGnLTCLLBiSDB4BzU5aSlKcLM_PDsskj_fEE8ltBLZQZhyrs-dYKsuNKchbMwpLJMYSI2vVUylZTp-dsa3zyy3uTSMiK0wnx-2X3Ysz7VqVfaaThUKNGkbndeXigoGcraHgSmABSDkqfrMdAr3lNvPrubRpDapuBIf=w1600",
        "alt": "Matera · baking since 1918",
        "caption": "Matera · baking since 1918"
      }
    ],
    "facts": [
      {
        "label": "Baking since",
        "value": "1918"
      },
      {
        "label": "City",
        "value": "Matera"
      },
      {
        "label": "Breads",
        "value": "About two dozen"
      }
    ],
    "productsLabel": "From Perrone",
    "products": [
      {
        "id": "bas-perrone-pane",
        "name": "Perrone Pane di Matera IGP",
        "meta": "Loaf",
        "tag": "Since 1918",
        "tagTone": "gold",
        "origin": "Matera",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCZhnC6OD1VrmeoAkesXcV61vBh25ZoqFu3NKi1EWxScFq08esuCcNzj28MeLyPLME1eJ4rqHGka5Va1TpbBHJJjtXPwJCp0j6OcrdBzYqdqkNECgc1aIdIrdUQ-3yQ49QItc5wh4ZkdvFaJm6-EOJLmg_-fEa9Y74OCjgdx1yeFqlC35iIO1cg2THDFfbVWTTKfIfoC35P_lksCF2Ua-5Tn5iAP5Amgfwuc-v6kUOIJSkESvhpWyfq=w1600"
      }
    ]
  },
  "cook": {
    "title": "Cook Basilicata",
    "lede": "One classic from scratch and one ten-minute shortcut from Senise.",
    "recipe": {
      "id": "cruschi",
      "title": "Pasta con peperoni cruschi e mollica",
      "serves": "4",
      "time": "about 25 minutes",
      "from": "Basilicata",
      "steps": [
        {
          "title": "Fry the peppers.",
          "body": "Heat the olive oil in a wide pan. Fry the dried peppers for just a few seconds, until they darken slightly and turn crisp. Lift them out and drain on paper."
        },
        {
          "title": "Toast the crumbs.",
          "body": "In the same oil, cook the garlic briefly, then add the breadcrumbs and toast, stirring, until golden. Remove the garlic."
        },
        {
          "title": "Cook the pasta.",
          "body": "Boil the pasta in salted water until al dente and drain, keeping a little of the water."
        },
        {
          "title": "Toss and serve.",
          "body": "Toss the pasta in the pan with the crumbs and a splash of the water. Crumble the crisp peppers over the top and serve, with grated cheese if you like."
        }
      ],
      "touch": "Toast the crumbs in the same oil you used for the peppers, and don’t leave the peppers in the pan for more than a few seconds. Day-old [Pane di Matera](product:bas-pane-matera) makes the best crumbs.",
      "shoppingList": [
        "320 g short durum-wheat pasta",
        "6–8 dried [Senise peppers](product:bas-peperoni-senise)",
        "80 g stale [Matera bread](product:bas-pane-matera)",
        "5 tbsp extra-virgin olive oil",
        "1 garlic clove",
        "Salt",
        "Pecorino or cacioricotta (optional)"
      ],
      "products": [
        {
          "id": "bas-peperoni-senise",
          "name": "Peperone di Senise IGP, dried",
          "meta": "Braid or bag",
          "tag": "IGP",
          "tagTone": "red",
          "origin": "Senise",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCC3hXgtO47-HYlfWhixDmIvGeTORmhXWh-0mhqJFRiG405EoadpsWrNrhqsLIFFpDAqYH1QIdFzwMR73JQb-HxmTHFSFFnC0WNxh4tOQIEZA_nZacNem5iBUWjnfVgmUFcjBLMehUCESqr6VmxEEbhF2pMviwfwNweiWbDiMgyIPAj7_QO7izWh74iILXcxADKdMDXfSyYvtfRhhGhUHPdVyTJPDYQm_d646dur2oNjr8M78rgogJx=w1600"
        },
        {
          "id": "bas-pane-matera",
          "name": "Pane di Matera IGP",
          "meta": "Loaf",
          "tag": "IGP",
          "tagTone": "green",
          "origin": "Matera",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq=w1600"
        }
      ],
      "schema": {
        "yield": "4 servings",
        "prepTime": "PT10M",
        "cookTime": "PT15M",
        "totalTime": "PT25M",
        "ingredients": [
          "320 g short durum-wheat pasta, such as strascinati or cavatelli",
          "6–8 dried Senise peppers, stems and seeds removed",
          "80 g stale Matera bread, made into coarse crumbs",
          "5 tablespoons extra-virgin olive oil",
          "1 garlic clove, lightly crushed",
          "Salt",
          "Grated pecorino or cacioricotta (optional)"
        ]
      },
      "imageCaption": "Lucanian classic · about 25 minutes",
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl=w1600"
    },
    "shortcut": {
      "title": "Ten minutes in Senise",
      "body": "Fry a handful of dried Senise peppers in hot olive oil for a few seconds each until crisp, and salt them lightly. Serve as a snack with shards of aged cheese, slices of lucanica, and a glass of local wine.",
      "products": [
        {
          "id": "bas-peperoni-senise",
          "name": "Peperone di Senise IGP, dried",
          "meta": "Braid or bag",
          "tag": "IGP",
          "tagTone": "red",
          "origin": "Senise",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCC3hXgtO47-HYlfWhixDmIvGeTORmhXWh-0mhqJFRiG405EoadpsWrNrhqsLIFFpDAqYH1QIdFzwMR73JQb-HxmTHFSFFnC0WNxh4tOQIEZA_nZacNem5iBUWjnfVgmUFcjBLMehUCESqr6VmxEEbhF2pMviwfwNweiWbDiMgyIPAj7_QO7izWh74iILXcxADKdMDXfSyYvtfRhhGhUHPdVyTJPDYQm_d646dur2oNjr8M78rgogJx=w1600"
        },
        {
          "id": "bas-canestrato",
          "name": "Canestrato di Moliterno IGP",
          "meta": "Wedge",
          "tag": "IGP",
          "tagTone": "green",
          "origin": "Moliterno",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy=w1600"
        }
      ],
      "eyebrow": "Senise shortcut",
      "button": "Get the cruschi pair"
    },
    "eyebrow": "Terroir kitchen"
  },
  "readTheLabel": "“Crusco-style” peppers may be any dried pepper, and not every durum loaf is Pane di Matera. Check the place of production, the ingredient list, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Basilicata home",
    "body": "A Lucanian table makes a feast from very little. We’ve gathered eight ingredients from this story into one set: enough for pasta with peperoni cruschi, a pot of beans, and a board of cheese and lucanica.",
    "button": "Add the Basilicata pantry set",
    "products": [
      {
        "id": "bas-peperoni-senise",
        "name": "Peperone di Senise IGP",
        "meta": "Dried",
        "tag": "IGP",
        "tagTone": "red",
        "origin": "Senise",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCC3hXgtO47-HYlfWhixDmIvGeTORmhXWh-0mhqJFRiG405EoadpsWrNrhqsLIFFpDAqYH1QIdFzwMR73JQb-HxmTHFSFFnC0WNxh4tOQIEZA_nZacNem5iBUWjnfVgmUFcjBLMehUCESqr6VmxEEbhF2pMviwfwNweiWbDiMgyIPAj7_QO7izWh74iILXcxADKdMDXfSyYvtfRhhGhUHPdVyTJPDYQm_d646dur2oNjr8M78rgogJx=w1600"
      },
      {
        "id": "bas-perrone-pane",
        "name": "Perrone Pane di Matera IGP",
        "meta": "Loaf",
        "tag": "Since 1918",
        "tagTone": "gold",
        "origin": "Matera",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCZhnC6OD1VrmeoAkesXcV61vBh25ZoqFu3NKi1EWxScFq08esuCcNzj28MeLyPLME1eJ4rqHGka5Va1TpbBHJJjtXPwJCp0j6OcrdBzYqdqkNECgc1aIdIrdUQ-3yQ49QItc5wh4ZkdvFaJm6-EOJLmg_-fEa9Y74OCjgdx1yeFqlC35iIO1cg2THDFfbVWTTKfIfoC35P_lksCF2Ua-5Tn5iAP5Amgfwuc-v6kUOIJSkESvhpWyfq=w1600"
      },
      {
        "id": "bas-fagioli-sarconi",
        "name": "Fagiolo di Sarconi IGP",
        "meta": "500 g",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "Val d’Agri",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr=w1600"
      },
      {
        "id": "bas-canestrato",
        "name": "Canestrato di Moliterno IGP",
        "meta": "Wedge",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "Moliterno",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy=w1600"
      },
      {
        "id": "bas-melanzana-rossa",
        "name": "Melanzana Rossa di Rotonda DOP",
        "meta": "Jar",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Rotonda",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo=w1600"
      },
      {
        "id": "bas-lucanica",
        "name": "Lucanica",
        "meta": "Whole",
        "tag": "Fennel seed",
        "tagTone": "neutral",
        "origin": "Basilicata",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDMH2M-VN1-Pz9hCbkXgdgup639qKPj1bgJo2jf1PgPm9NKzrgAY_T6MZujPmHAC4Z5W83H6bgIwaOrwcCLEuI-3an8k7c44fESuTzHNkXQYSCN_pESKkZUsjfCP-01ZMORW4JuJXmElmpAAAxPwRTi5o5Crpmlu_bVRSOXjhggx377vb87iOfKRdkb1LjsaiX1pF73K7pXrg-DIruRvIfEPidPaOJoOlRNnbEwUK6fqguV0N3VVklu=w1600"
      },
      {
        "id": "bas-pasta",
        "name": "Strascinati",
        "meta": "500 g",
        "tag": "Pantry staple",
        "tagTone": "neutral",
        "origin": "Basilicata",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl=w1600"
      },
      {
        "id": "bas-olio-vulture",
        "name": "Vulture DOP olive oil",
        "meta": "Bottle",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Vulture",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBU3O0qjc03YxJyeGreRcupZwz17tHGJHD5wHNfJ0p7EiTyJysIhlTpcXRQlU_9eU7JtZ9vYmMG1QkxPwTjQ1M4HKGKnp6G_wR77H9L92h6P1WFxFkdXdSnxzj1rYtIuYOHP3y1GFX7qLppRyyiuuFh143IYV753SuLjQLV1IN1Ux5-xM3ZgRGf1d7Bb4jjk31RDCfQ-Hqhx2JvDbAWSwuRQ51e8ensDs4uGSlEgC2bmSQ1QRP27a6w=w1600"
      }
    ],
    "eyebrow": "Limited curation · Parcel N° 18"
  },
  "about": [
    "La Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "Italia.it (ENIT) on Pane di Matera and peperoni cruschi; APT Basilicata, “Basilicata enogastronomica”; Scatti di Gusto, Gambero Rosso, La Voce di New York, and Sapere Sapori on Pane di Matera; Dissapore and Agriturismo.it on Lucanian products; Eroica Fenice on Lucanian dishes; Blitz Quotidiano (ANSA) and Gambero Rosso on the Perrone family bakery."
};

export default basilicata;
