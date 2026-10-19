import type { RegionStory } from './types';

// Photos are stand-ins from elsewhere on the site, to be replaced.
// Content from the Sardegna story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const sardegna: RegionStory = {
  "slug": "sardegna",
  "name": "Sardegna",
  "seoTitle": "Sardinian Food and Pantry Ingredients | Italy Region by Region | La Taglia",
  "seoDescription": "Cook Sardinia from its pantry: Fiore Sardo, pane carasau, malloreddus, fregola, Cabras bottarga and Sardinian saffron, with a recipe for malloreddus alla campidanese.",
  "kicker": "Region eleven: the island of shepherds",
  "subtitle": "Sheep’s cheese, saffron, and the salt of the lagoons.",
  "hero": {
    "color": "#5C5248",
    "colorDeep": "#3F3832",
    "dossier": "Terroir archive · Dossier N° 11",
    "badge": "Island of shepherds",
    "metrics": [
      {
        "icon": "castle",
        "label": "Landmark",
        "value": "Some 7,000 nuraghi"
      },
      {
        "icon": "waves",
        "label": "Sea",
        "value": "Tyrrhenian Sea"
      },
      {
        "icon": "agriculture",
        "label": "Oldest farming",
        "value": "Shepherding"
      },
      {
        "icon": "location_city",
        "label": "Dialect",
        "value": "Catalan in Alghero"
      }
    ],
    "heritage": "Shepherding heritage",
    "imageCaption": {
      "title": "Lagoon of Cabras",
      "body": "In the Sinis peninsula on the west coast, one of the island’s great fishing waters."
    },
    "imageTag": "Cabras lagoon, Sinis peninsula",
    "heritageNote": "carta da musica",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDGGoAAQMTy7Z0xxOurJ9rSdAn_aIXBpPyaZT4-pJobqKZFx0YwSHOXzJYeVtpoZK7Eix3hQtLG8HmHvhY7RP99IsWjPqkcqcg4G6Y2E8mA5UiDPKkzgvfKMpIu8oiUPtxDKKyeKnXGREk-g3sc6DyXERzE4g_XviNtq_nR3_DvtVOFcZ4NWGpYZ07vymz4nwD_yhs_3TbzMRJGZE2JbANG9q65hDdbQvemjniv9VbFsPNawHKXsC05=w1600",
    "imageAlt": "In the Sinis peninsula on the west coast, one of the island’s great fishing waters."
  },
  "intro": [
    "Sardinia sits alone in the Tyrrhenian Sea, west of the Italian mainland, an island that geologically and culturally evolved apart from the peninsula. Some 7,000 stone towers called nuraghi still stand across its hills, left by a Bronze Age civilization that flourished here from the second millennium BC. Phoenicians, Romans, Genoese, Catalans, and Spanish all came and went, and a Catalan dialect has been spoken in the town of Alghero for nearly 700 years. Through all of it, the heart of island life was the flock: shepherding is Sardinia’s oldest form of farming, and shepherds on the move with their sheep needed bread that kept for weeks and cheese that could survive the journey. The result is a cuisine of sheep’s cheese and thin, crisp bread, hand-shaped pastas, spit-roasted pork, and, along the coast, lagoon fish and their cured roe.",
    "Sardinian food is like nothing else in Italy, and much of it is still made by hand. Start with the ingredients that define the island, learn the dishes they make possible, and meet the lagoon fishermen of Cabras."
  ],
  "pantry": {
    "lede": "Six ingredients behind Sardinia’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Fiore Sardo",
        "place": "Across the island",
        "body": "The shepherds’ cheese of Sardinia, made from whole, raw milk of Sardinian sheep and lightly smoked, a habit from the stone huts where shepherds once dried their cheeses over the fire. It is the only one of the island’s three protected cheeses that must be made from untreated milk.",
        "lookFor": "Fiore Sardo DOP. Sardinia also makes Pecorino Sardo DOP and most of the world’s Pecorino Romano.",
        "products": [
          {
            "id": "sar-fiore-sardo",
            "name": "Fiore Sardo DOP",
            "meta": "Wedge",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Across the island",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy=w1600"
          }
        ]
      },
      {
        "title": "Pane carasau",
        "place": "The island’s interior",
        "body": "Paper-thin discs of bread baked twice until dry and crisp, nicknamed carta da musica, “sheet music.” Shepherds carried it for weeks during the seasonal moves with their flocks. Brushed with oil and salt it becomes pane guttiau; softened in broth and layered with tomato, pecorino, and an egg, pane frattau.",
        "lookFor": "carasau made in Sardinia, with durum wheat semolina.",
        "products": [
          {
            "id": "sar-carasau",
            "name": "Pane carasau",
            "meta": "Pack",
            "tag": "Twice baked",
            "tagTone": "neutral",
            "origin": "Island interior",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq=w1600"
          }
        ]
      },
      {
        "title": "Malloreddus",
        "place": "The Campidano plain",
        "body": "Small ridged shells of durum wheat semolina and water, sometimes tinted with saffron. Sold on the mainland as gnocchetti sardi, they go by different names across the island.",
        "lookFor": "malloreddus made in Sardinia from durum wheat semolina.",
        "products": [
          {
            "id": "sar-malloreddus",
            "name": "Malloreddus",
            "meta": "500 g",
            "tag": "Durum semolina",
            "tagTone": "neutral",
            "origin": "Campidano plain",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl=w1600"
          }
        ]
      },
      {
        "title": "Fregola",
        "place": "Across the island",
        "body": "Tiny, irregular pearls of durum semolina and water, toasted so they take on a nutty flavor. Fregola is eaten all over Sardinia, cooked with clams in summer or made rich with pecorino.",
        "lookFor": "fregola made in Sardinia, ideally hand-rolled.",
        "products": [
          {
            "id": "sar-fregola",
            "name": "Fregola",
            "meta": "500 g",
            "tag": "Toasted",
            "tagTone": "neutral",
            "origin": "Across the island",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr=w1600"
          }
        ]
      },
      {
        "title": "Bottarga",
        "place": "The lagoon of Cabras",
        "body": "The roe of gray mullet, salted and air-dried into firm, amber slabs. Shaved thin with olive oil or grated over pasta, it tastes of the sea with a sweet, almond finish.",
        "lookFor": "“pescato nella laguna di Cabras.” Most bottarga sold as “di Cabras” is processed there from imported mullet roe.",
        "products": [
          {
            "id": "sar-bottarga",
            "name": "Bottarga di muggine",
            "meta": "Whole",
            "tag": "Cured roe",
            "tagTone": "gold",
            "origin": "Cabras",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg7ZeusKi1XJ_YIbUpf7bMvUDHPzrJBa0kGGcUmiEWQXn5vyYqb10N5ExBRlYr2yJ0WfsFPe7URckqO8PDwMH0UDSwVm6XQCF-NoeAM33s50RkHXH5cUKTQIls7nyQjkd8xFb7E1CVsnD4Hx0oK8so72g2UalmTdOWlUWCd2mUYhcv42IUIFm1cqLKE69xjZ96SmNApFtb-zmua5MK2Erwp7yfRDiKgHOwIebR0rdf84T1bYeSwKl=w1600"
          }
        ]
      },
      {
        "title": "Saffron",
        "place": "San Gavino Monreale, Turri, and Villanovafranca",
        "body": "Hand-picked crocus threads from the plains of southern Sardinia, used to color and perfume malloreddus and sauces. San Gavino, Turri, and Villanovafranca each celebrate the harvest with a festival in November.",
        "lookFor": "Zafferano di Sardegna DOP, sold as whole threads.",
        "products": [
          {
            "id": "sar-zafferano",
            "name": "Zafferano di Sardegna DOP",
            "meta": "Threads",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Southern plains",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo=w1600"
          }
        ]
      }
    ],
    "eyebrow": "Shepherds’ pantry"
  },
  "dishes": {
    "lede": "Four dishes Sardinia makes its own.",
    "items": [
      {
        "title": "Malloreddus alla campidanese",
        "where": "The Campidano",
        "body": "Malloreddus in a sauce of crumbled pork sausage with fennel, tomato, onion, and saffron, finished with plenty of grated pecorino. The island’s best-known pasta dish.",
        "tip": "[Cook it below](#malloreddus)",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl=w1600"
      },
      {
        "title": "Culurgiones",
        "where": "Ogliastra",
        "body": "Plump pasta parcels filled with potato, pecorino, and mint, sealed with a braided edge that looks like an ear of wheat. The braid was once believed to bring a good harvest.",
        "tip": "Protected as Culurgiones d’Ogliastra IGP.",
        "image": "https://lh3.googleusercontent.com/aida/AEtjO1XH3ztoRKkRdH9fjeZ7zGSvG7Z5lVtTJVcPxnxpnLlAyQgVptrChhD3aGe8eyAqVjd0t1vRNzKDPEjlQjVZ-Eo-tmswH65MCECJXC1QT7I-lJ124iYZKFjt2HHrSOK_zqbBcVos3Jg8CZW5bSAW6GQ8NC2GTMPbtiRRx9g9oxW6L3gS7A49QEWznJIYITZoOmWrGC6LiYi1Idw4k1vthGnlg7ZvP6f6Il5_lhaoAml5HXicCLGHPJRAbg=w1600"
      },
      {
        "title": "Porceddu",
        "where": "Across the island",
        "body": "Suckling pig roasted slowly on a spit beside an open fire until the skin crackles, then served on cork boards over myrtle leaves.",
        "note": "Served over myrtle leaves",
        "image": "https://lh3.googleusercontent.com/aida/AEtjO1XjupcvBWdrJsFC9HLFt2bdjFwhoJ85whWBzKtrr1ef014BXL3EQAm_fmOb1fEB4RPsDq4Be4nT7lB8EyN-Khw50pKABjDapJE9fn8rLum3xOvn8C4k1mpU8BKJEteQfChNcf7S1gRth5ff-RiJNJxhKE3rngOcXbv19QhXGmTmUz8syhx060Tq7rgu7KGJzEIagxQhAupMukHw7SSmaGtyD187PnpqzGV4I58EtbbYLpzQ9N1KAwcXeQ=w1600"
      },
      {
        "title": "Seadas",
        "where": "Across the island",
        "body": "A round pastry filled with sheep’s cheese, fried until golden and drizzled with honey. Sweet, salty, and served hot.",
        "note": "Sweet, salty, served hot",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuC66Qz_O1vxGNBZSyhKBG7E11V9J_ynfSiGuUL5GLDjS-pp7xx0eqw_gmnVIRMXOEiaJ2wLNz9eDe-dRv1HJffGFDGWKIH-9TlU0UBDIw940qDCkUbeXjZjdsjLtKuD3B7Gg0GWHngYfm0d0u9xYun-FrttGnejAkzJLWV7HyuC_ZCA_QHWryHtkt4PkqDJFzQjJqtsSDMMGOLlU2E8sTTNiKXafW91SYmjA9P72M1cR5KetKzCi5cq=w1600"
      }
    ],
    "eyebrow": "Island canon"
  },
  "maker": {
    "name": "Consorzio Pontis",
    "place": "Cabras",
    "paragraphs": [
      "On Sardinia’s west coast, in the Sinis peninsula, the lagoon of Cabras has long been one of the island’s great fishing waters. Its fishermen work together as the Nuovo Consorzio Cooperative Pontis, formed in 1993 when eleven fishing cooperatives joined forces to manage the Mar’e Pontis lagoon. Around 130 fishermen belong to it today.",
      "Their bottarga is made from the roe of mullet caught in the lagoon itself, salted and air-dried into amber slabs. That sets it apart: almost all bottarga sold as “di Cabras” is made in town from imported mullet. In 2025 the lagoon’s bottarga and traditional fishing became a Slow Food Presidium, recognition reserved for mullet fished in these waters."
    ],
    "photos": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg7ZeusKi1XJ_YIbUpf7bMvUDHPzrJBa0kGGcUmiEWQXn5vyYqb10N5ExBRlYr2yJ0WfsFPe7URckqO8PDwMH0UDSwVm6XQCF-NoeAM33s50RkHXH5cUKTQIls7nyQjkd8xFb7E1CVsnD4Hx0oK8so72g2UalmTdOWlUWCd2mUYhcv42IUIFm1cqLKE69xjZ96SmNApFtb-zmua5MK2Erwp7yfRDiKgHOwIebR0rdf84T1bYeSwKl=w1600",
        "alt": "Mar’e Pontis lagoon · Cabras",
        "caption": "Mar’e Pontis lagoon · Cabras"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg7ZeusKi1XJ_YIbUpf7bMvUDHPzrJBa0kGGcUmiEWQXn5vyYqb10N5ExBRlYr2yJ0WfsFPe7URckqO8PDwMH0UDSwVm6XQCF-NoeAM33s50RkHXH5cUKTQIls7nyQjkd8xFb7E1CVsnD4Hx0oK8so72g2UalmTdOWlUWCd2mUYhcv42IUIFm1cqLKE69xjZ96SmNApFtb-zmua5MK2Erwp7yfRDiKgHOwIebR0rdf84T1bYeSwKl=w1600",
        "alt": "Pontis fishermen · Sinis",
        "caption": "Pontis fishermen · Sinis"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg7ZeusKi1XJ_YIbUpf7bMvUDHPzrJBa0kGGcUmiEWQXn5vyYqb10N5ExBRlYr2yJ0WfsFPe7URckqO8PDwMH0UDSwVm6XQCF-NoeAM33s50RkHXH5cUKTQIls7nyQjkd8xFb7E1CVsnD4Hx0oK8so72g2UalmTdOWlUWCd2mUYhcv42IUIFm1cqLKE69xjZ96SmNApFtb-zmua5MK2Erwp7yfRDiKgHOwIebR0rdf84T1bYeSwKl=w1600",
        "alt": "Lagoon bottarga · amber slabs",
        "caption": "Lagoon bottarga · amber slabs"
      }
    ],
    "facts": [
      {
        "label": "Formed",
        "value": "1993"
      },
      {
        "label": "Fishermen",
        "value": "About 130"
      },
      {
        "label": "Recognition",
        "value": "Slow Food Presidium"
      }
    ],
    "productsLabel": "From Consorzio Pontis",
    "products": [
      {
        "id": "sar-pontis-bottarga",
        "name": "Pontis bottarga, Cabras lagoon",
        "meta": "Whole",
        "tag": "Slow Food",
        "tagTone": "gold",
        "origin": "Cabras lagoon",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg7ZeusKi1XJ_YIbUpf7bMvUDHPzrJBa0kGGcUmiEWQXn5vyYqb10N5ExBRlYr2yJ0WfsFPe7URckqO8PDwMH0UDSwVm6XQCF-NoeAM33s50RkHXH5cUKTQIls7nyQjkd8xFb7E1CVsnD4Hx0oK8so72g2UalmTdOWlUWCd2mUYhcv42IUIFm1cqLKE69xjZ96SmNApFtb-zmua5MK2Erwp7yfRDiKgHOwIebR0rdf84T1bYeSwKl=w1600"
      },
      {
        "id": "sar-pontis-grattugiata",
        "name": "Pontis bottarga, grated",
        "meta": "Jar",
        "tag": "Lagoon mullet",
        "tagTone": "gold",
        "origin": "Cabras lagoon",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg7ZeusKi1XJ_YIbUpf7bMvUDHPzrJBa0kGGcUmiEWQXn5vyYqb10N5ExBRlYr2yJ0WfsFPe7URckqO8PDwMH0UDSwVm6XQCF-NoeAM33s50RkHXH5cUKTQIls7nyQjkd8xFb7E1CVsnD4Hx0oK8so72g2UalmTdOWlUWCd2mUYhcv42IUIFm1cqLKE69xjZ96SmNApFtb-zmua5MK2Erwp7yfRDiKgHOwIebR0rdf84T1bYeSwKl=w1600"
      }
    ]
  },
  "cook": {
    "title": "Cook Sardegna",
    "lede": "One classic from scratch and one ten-minute shortcut from Cabras.",
    "recipe": {
      "id": "malloreddus",
      "title": "Malloreddus alla campidanese",
      "serves": "4",
      "time": "about 55 minutes",
      "from": "the Campidano",
      "steps": [
        {
          "title": "Brown the sausage.",
          "body": "In a wide pan, soften the onion in the olive oil. Add the crumbled sausage and cook gently for about 10 minutes, until browned."
        },
        {
          "title": "Simmer the sauce.",
          "body": "Add the passata and a pinch of salt and simmer over moderate heat for about 30 minutes. Stir in the basil and the saffron with its soaking water."
        },
        {
          "title": "Cook the pasta.",
          "body": "Boil the malloreddus in salted water until al dente, then drain."
        },
        {
          "title": "Toss and serve.",
          "body": "Toss the pasta in the sauce with a generous handful of grated pecorino, and serve with more on top."
        }
      ],
      "touch": "Use a sausage seasoned with fennel seed, as Sardinians do, and steep real [saffron threads](product:sar-zafferano) before adding them, so their color and perfume spread through the sauce.",
      "shoppingList": [
        "400 g [malloreddus](product:sar-malloreddus)",
        "250 g fresh pork sausage with fennel",
        "1 small onion",
        "2 tbsp extra-virgin olive oil",
        "500 g tomato passata",
        "[Saffron threads](product:sar-zafferano)",
        "A few basil leaves",
        "60 g [Fiore Sardo](product:sar-fiore-sardo) or Pecorino Sardo",
        "Salt"
      ],
      "products": [
        {
          "id": "sar-malloreddus",
          "name": "Malloreddus",
          "meta": "500 g",
          "tag": "Durum semolina",
          "tagTone": "neutral",
          "origin": "Campidano plain",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl=w1600"
        },
        {
          "id": "sar-zafferano",
          "name": "Zafferano di Sardegna DOP",
          "meta": "Threads",
          "tag": "DOP",
          "tagTone": "green",
          "origin": "Southern plains",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo=w1600"
        }
      ],
      "schema": {
        "yield": "4 servings",
        "prepTime": "PT10M",
        "cookTime": "PT45M",
        "totalTime": "PT55M",
        "ingredients": [
          "400 g malloreddus (gnocchetti sardi)",
          "250 g fresh Sardinian pork sausage with fennel, casing removed",
          "1 small onion, finely chopped",
          "2 tablespoons extra-virgin olive oil",
          "500 g tomato passata",
          "A pinch of saffron threads or 1 sachet, steeped in a little warm water",
          "A few basil leaves",
          "60 g Pecorino Sardo or Fiore Sardo, grated",
          "Salt"
        ]
      },
      "imageCaption": "Campidano classic · about 55 minutes",
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl=w1600"
    },
    "shortcut": {
      "title": "Ten minutes in Cabras",
      "body": "Cook spaghetti until al dente. Meanwhile, warm olive oil with a sliced garlic clove. Toss the drained pasta in the oil with a splash of pasta water, then, off the heat, grate over bottarga and add chopped parsley. Go easy: bottarga is intense, and a little goes a long way.",
      "products": [
        {
          "id": "sar-pontis-grattugiata",
          "name": "Pontis bottarga, grated",
          "meta": "Jar",
          "tag": "Lagoon mullet",
          "tagTone": "gold",
          "origin": "Cabras lagoon",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg7ZeusKi1XJ_YIbUpf7bMvUDHPzrJBa0kGGcUmiEWQXn5vyYqb10N5ExBRlYr2yJ0WfsFPe7URckqO8PDwMH0UDSwVm6XQCF-NoeAM33s50RkHXH5cUKTQIls7nyQjkd8xFb7E1CVsnD4Hx0oK8so72g2UalmTdOWlUWCd2mUYhcv42IUIFm1cqLKE69xjZ96SmNApFtb-zmua5MK2Erwp7yfRDiKgHOwIebR0rdf84T1bYeSwKl=w1600"
        },
        {
          "id": "sar-bottarga",
          "name": "Bottarga di muggine",
          "meta": "Whole",
          "tag": "Cured roe",
          "tagTone": "gold",
          "origin": "Cabras",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg7ZeusKi1XJ_YIbUpf7bMvUDHPzrJBa0kGGcUmiEWQXn5vyYqb10N5ExBRlYr2yJ0WfsFPe7URckqO8PDwMH0UDSwVm6XQCF-NoeAM33s50RkHXH5cUKTQIls7nyQjkd8xFb7E1CVsnD4Hx0oK8so72g2UalmTdOWlUWCd2mUYhcv42IUIFm1cqLKE69xjZ96SmNApFtb-zmua5MK2Erwp7yfRDiKgHOwIebR0rdf84T1bYeSwKl=w1600"
        }
      ],
      "eyebrow": "Ten minutes in Cabras",
      "button": "Get the bottarga pair"
    },
    "eyebrow": "Island kitchen"
  },
  "readTheLabel": "“Bottarga di Cabras” usually means made in Cabras, not caught there, and “Sardinian-style” pasta can be made anywhere. Check the place of production, the ingredient list, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Sardegna home",
    "body": "A Sardinian table starts with sheep’s cheese and crisp bread and ends with something hand-shaped. We’ve gathered eight ingredients from this story into one set: enough for malloreddus, spaghetti with bottarga, a pot of fregola, and a board of Fiore Sardo with carasau.",
    "button": "Add the Sardegna pantry set",
    "products": [
      {
        "id": "sar-fiore-sardo",
        "name": "Fiore Sardo DOP",
        "meta": "Wedge",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Across the island",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy=w1600"
      },
      {
        "id": "sar-pecorino-sardo",
        "name": "Pecorino Sardo DOP",
        "meta": "Wedge",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Sardinia",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuAl_5nHHJIzoS-WsCluRQYcsvFaCEJgLpMKhF74uchwSFZaiasRvF2QgOGb8yQIioI-Tl012aRJqnvzUfYVXVIN42AtBrqz67jqjAH3CbxmYm6uEHRkYdah0q_WAQSgW93YHOemOcCRZN921JwihtDRxkKHN7PzTEk88hPG_P2AV7Y_dSVKxmfxeIubOnR3JAqjFS_dXGAzG2xxfQE3VDOGzRjZcEhJ1T-LSazL8n3fCCvhoP3Kr76d=w1600"
      },
      {
        "id": "sar-carasau",
        "name": "Pane carasau",
        "meta": "Pack",
        "tag": "Twice baked",
        "tagTone": "neutral",
        "origin": "Island interior",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq=w1600"
      },
      {
        "id": "sar-malloreddus",
        "name": "Malloreddus",
        "meta": "500 g",
        "tag": "Durum semolina",
        "tagTone": "neutral",
        "origin": "Campidano plain",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl=w1600"
      },
      {
        "id": "sar-fregola",
        "name": "Fregola",
        "meta": "500 g",
        "tag": "Toasted",
        "tagTone": "neutral",
        "origin": "Across the island",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr=w1600"
      },
      {
        "id": "sar-zafferano",
        "name": "Zafferano di Sardegna DOP",
        "meta": "Threads",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Southern plains",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo=w1600"
      },
      {
        "id": "sar-pontis-bottarga",
        "name": "Pontis bottarga",
        "meta": "Whole",
        "tag": "Slow Food",
        "tagTone": "gold",
        "origin": "Cabras lagoon",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg7ZeusKi1XJ_YIbUpf7bMvUDHPzrJBa0kGGcUmiEWQXn5vyYqb10N5ExBRlYr2yJ0WfsFPe7URckqO8PDwMH0UDSwVm6XQCF-NoeAM33s50RkHXH5cUKTQIls7nyQjkd8xFb7E1CVsnD4Hx0oK8so72g2UalmTdOWlUWCd2mUYhcv42IUIFm1cqLKE69xjZ96SmNApFtb-zmua5MK2Erwp7yfRDiKgHOwIebR0rdf84T1bYeSwKl=w1600"
      },
      {
        "id": "sar-miele",
        "name": "Sardinian honey",
        "meta": "Jar",
        "tag": "Pantry staple",
        "tagTone": "neutral",
        "origin": "Sardinia",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuC66Qz_O1vxGNBZSyhKBG7E11V9J_ynfSiGuUL5GLDjS-pp7xx0eqw_gmnVIRMXOEiaJ2wLNz9eDe-dRv1HJffGFDGWKIH-9TlU0UBDIw940qDCkUbeXjZjdsjLtKuD3B7Gg0GWHngYfm0d0u9xYun-FrttGnejAkzJLWV7HyuC_ZCA_QHWryHtkt4PkqDJFzQjJqtsSDMMGOLlU2E8sTTNiKXafW91SYmjA9P72M1cR5KetKzCi5cq=w1600"
      }
    ],
    "eyebrow": "Limited curation · Parcel N° 11"
  },
  "about": [
    "La Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "Sardegna Turismo on Sardinian saffron; Geopop on the nuraghi and on Catalan in Alghero; Dissapore on Fiore Sardo DOP and Cabras bottarga; Slow Food Foundation on Fiore Sardo dei pastori; Ilisso on Sardinian DOP cheeses; Sardegna Turismo (Regione Sardegna) on Sardinian pasta; Moby, Grimaldi Lines, Lonely Planet, Italy Segreta, and WeRoad on Sardinian dishes; Charming Sardinia on malloreddus alla campidanese; Gambero Rosso and L’Unione Sarda on the Consorzio Pontis, the Cabras lagoon, and its Slow Food Presidium."
};

export default sardegna;
