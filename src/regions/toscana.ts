import type { RegionStory } from './types';

// Photos are stand-ins from elsewhere on the site, to be replaced.
// Content from the Toscana story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const toscana: RegionStory = {
  "slug": "toscana",
  "name": "Toscana",
  "seoTitle": "Tuscan Food and Pantry Ingredients | Italy Region by Region | Casa Taglia",
  "seoDescription": "Cook Tuscany from its pantry: new-harvest olive oil, Pecorino Toscano, cannellini beans, finocchiona, lardo di Colonnata and farro, with a recipe for ribollita.",
  "kicker": "Region four: the hills",
  "subtitle": "Great oil, honest bread, and nothing wasted.",
  "hero": {
    "color": "#3F5A2E",
    "colorDeep": "#2B3F1F",
    "dossier": "Terroir archive · Dossier N° 04",
    "badge": "Cradle of the Renaissance",
    "metrics": [
      {
        "icon": "landscape",
        "label": "Hills",
        "value": "Chianti, Val d’Orcia"
      },
      {
        "icon": "terrain",
        "label": "Mountains",
        "value": "Carrara marble"
      },
      {
        "icon": "waves",
        "label": "Coastline",
        "value": "Tyrrhenian"
      },
      {
        "icon": "restaurant",
        "label": "Signature",
        "value": "Ribollita"
      }
    ],
    "heritage": "Sharecropper thrift",
    "imageCaption": {
      "title": "Val d’Orcia",
      "body": "Rolling hills in the heart of central Italy, between the Apennine ridge and the Tyrrhenian coast."
    },
    "imageTag": "Chianti and the Val d’Orcia",
    "heritageNote": "mangiafagioli",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDKuapGvtz1m4yEiJmh5vBcthnNoV0P2Se0tF21T9_V_CDVx4pCFbczusX8ypWXZHV1BMlJ0i8sIWb4Z4uEm_A6mQL2mRBARioc6crU1N5rMrXju_nLvqzTJUTIXUY5O6L9zJ0BNDqG3aOp0yPR7VXOtZMd6nJRMXGZKqoKjLXRDwsPQcG9ORNxWV47lsd_1MXkzl4btNUmDZ_yzpVmLL4icT7pv6P8U_xZMrozfeBedIsWkhJCs9r6",
    "imageAlt": "Rolling hills in the heart of central Italy, between the Apennine ridge and the Tyrrhenian coast."
  },
  "intro": [
    "Tuscany fills the heart of central Italy, from the Apennine ridge in the north and east to the Tyrrhenian coast in the west, with the rolling hills of Chianti and the Val d’Orcia between, the marble mountains of Carrara above the sea, and the wild Maremma to the south. The Etruscans farmed here before Rome, and Florence later became the banking capital of Europe and the cradle of the Renaissance. But for centuries most Tuscans lived as sharecroppers, splitting each harvest with the landowner, and their cooking learned to waste nothing. Bread is traditionally baked without salt, a habit often traced to medieval quarrels over salt taxes, and yesterday’s loaf becomes today’s soup or salad. Beans are eaten so often that Tuscans are nicknamed mangiafagioli, “bean eaters.” The result is cooking of real restraint: peppery new oil, good bread, beans, grilled meat, and little else.",
    "Tuscan food proves how far a few great ingredients can go. Start with the ingredients that define it, learn the dishes they make possible, and meet a bakery that has made the original almond biscuits in the same building since 1858."
  ],
  "pantry": {
    "lede": "Six ingredients behind Tuscany’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Olive oil",
        "place": "Across the region",
        "body": "Picked early, often while the olives are still green, Tuscan oil is grassy, bitter, and peppery enough to catch the back of your throat. It is poured raw over nearly everything, and at its best in the weeks after the autumn harvest.",
        "lookFor": "Toscano IGP or Chianti Classico DOP, with a harvest date from the last year.",
        "products": [
          {
            "id": "tos-olio-igp",
            "name": "Toscano IGP extra-virgin olive oil",
            "meta": "Bottle, new harvest",
            "tag": "IGP · new oil",
            "tagTone": "green",
            "origin": "Across the region",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBU3O0qjc03YxJyeGreRcupZwz17tHGJHD5wHNfJ0p7EiTyJysIhlTpcXRQlU_9eU7JtZ9vYmMG1QkxPwTjQ1M4HKGKnp6G_wR77H9L92h6P1WFxFkdXdSnxzj1rYtIuYOHP3y1GFX7qLppRyyiuuFh143IYV753SuLjQLV1IN1Ux5-xM3ZgRGf1d7Bb4jjk31RDCfQ-Hqhx2JvDbAWSwuRQ51e8ensDs4uGSlEgC2bmSQ1QRP27a6w"
          }
        ]
      },
      {
        "title": "Pecorino Toscano",
        "place": "Across the region, especially the south",
        "body": "Sheep’s-milk cheese, sold young and soft or aged until firm and nutty. Sweeter and milder than Pecorino Romano, it is eaten on its own with honey, pears, or fresh fava beans.",
        "lookFor": "Pecorino Toscano DOP. “Stagionato” means aged at least four months.",
        "products": [
          {
            "id": "tos-pecorino",
            "name": "Pecorino Toscano DOP stagionato",
            "meta": "Wedge",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Tuscany’s south",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
          }
        ]
      },
      {
        "title": "Beans",
        "place": "Sorana, in the hills above Pescia",
        "body": "White cannellini are Tuscany’s everyday bean, simmered slowly with sage and finished with raw oil. The tiny, thin-skinned beans of Sorana are among the most prized.",
        "lookFor": "Fagiolo di Sorana IGP, or dried cannellini from a recent harvest.",
        "products": [
          {
            "id": "tos-fagioli",
            "name": "Tuscan cannellini beans",
            "meta": "Dried",
            "tag": "Pantry staple",
            "tagTone": "neutral",
            "origin": "Tuscany",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
          }
        ]
      },
      {
        "title": "Finocchiona",
        "place": "Florence and the Chianti hills",
        "body": "A soft pork salami seasoned with wild fennel seed, garlic, and black pepper. Cut it thick and eat it with unsalted bread and a glass of Chianti.",
        "lookFor": "Finocchiona IGP.",
        "products": [
          {
            "id": "tos-finocchiona",
            "name": "Finocchiona IGP",
            "meta": "Sliced",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Chianti hills",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr"
          }
        ]
      },
      {
        "title": "Lardo",
        "place": "Colonnata, in the Carrara marble quarries",
        "body": "Pork fatback cured for months in marble basins with salt, pepper, rosemary, and garlic. Sliced paper-thin over warm toast, it melts into something closer to butter than bacon.",
        "lookFor": "Lardo di Colonnata IGP.",
        "products": [
          {
            "id": "tos-lardo",
            "name": "Lardo di Colonnata IGP",
            "meta": "Sliced",
            "tag": "Marble cured",
            "tagTone": "gold",
            "origin": "Colonnata",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo"
          }
        ]
      },
      {
        "title": "Farro",
        "place": "The Garfagnana, north of Lucca",
        "body": "An ancient wheat grown in the mountains for millennia, nutty and chewy. Tuscans cook it into soups, salads, and a thick farro-and-bean minestra.",
        "lookFor": "Farro della Garfagnana IGP.",
        "products": [
          {
            "id": "tos-farro",
            "name": "Farro della Garfagnana IGP",
            "meta": "Bag",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Garfagnana",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDMH2M-VN1-Pz9hCbkXgdgup639qKPj1bgJo2jf1PgPm9NKzrgAY_T6MZujPmHAC4Z5W83H6bgIwaOrwcCLEuI-3an8k7c44fESuTzHNkXQYSCN_pESKkZUsjfCP-01ZMORW4JuJXmElmpAAAxPwRTi5o5Crpmlu_bVRSOXjhggx377vb87iOfKRdkb1LjsaiX1pF73K7pXrg-DIruRvIfEPidPaOJoOlRNnbEwUK6fqguV0N3VVklu"
          }
        ]
      }
    ],
    "eyebrow": "Essential terroir goods"
  },
  "dishes": {
    "lede": "Four dishes Tuscany makes its own.",
    "items": [
      {
        "title": "Ribollita",
        "where": "Florence",
        "body": "A thick soup of beans, cavolo nero, and stale bread, made one day and “reboiled” the next, which is what its name means. Better on the second day, and on the third.",
        "tip": "[Cook it below](#ribollita)",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg7ZeusKi1XJ_YIbUpf7bMvUDHPzrJBa0kGGcUmiEWQXn5vyYqb10N5ExBRlYr2yJ0WfsFPe7URckqO8PDwMH0UDSwVm6XQCF-NoeAM33s50RkHXH5cUKTQIls7nyQjkd8xFb7E1CVsnD4Hx0oK8so72g2UalmTdOWlUWCd2mUYhcv42IUIFm1cqLKE69xjZ96SmNApFtb-zmua5MK2Erwp7yfRDiKgHOwIebR0rdf84T1bYeSwKl"
      },
      {
        "title": "Bistecca alla fiorentina",
        "where": "Florence and the Val di Chiana",
        "body": "A T-bone at least three fingers thick, traditionally from white Chianina cattle, grilled over embers until charred outside and rare within, then finished with salt and oil.",
        "tip": "Serve with beans dressed in [new olive oil](product:tos-olio-igp) on the side.",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAPcC0a36PdQKRFN67N9n4iWBfhvVaOYD4lAqKygnUjTrscttDOYLVoI8x1mJHXJybsSr0etHTwY4pU0A01kN4o1IfpMOvEBAXOIrB8eZ11ou4LrSyCjELVvYNkcTxy0DtPWugtK_maKrpF1S29ogN-YzCyzhDGWnfH4HdQ3jXFuv8h73Z3GNxqFxYhHzG5euOwWXNcUn83KLa8hc2NC2nQFY3TdtlSPgMj0otF-z9Yn-C7fprrBLWX"
      },
      {
        "title": "Pici all’aglione",
        "where": "Siena",
        "body": "Thick, hand-rolled spaghetti in a slow tomato sauce made with aglione, the giant, mild garlic of the Val di Chiana.",
        "tip": "Look for [dried pici](product:tos-pici) from Siena if you don’t roll your own.",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
      },
      {
        "title": "Cantucci and Vin Santo",
        "where": "Prato",
        "body": "Twice-baked almond biscuits dipped in Vin Santo, Tuscany’s amber dessert wine. The traditional way to end a meal, and to linger over it.",
        "tip": "Start with [the original from Prato](product:tos-mattei-prato).",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuC66Qz_O1vxGNBZSyhKBG7E11V9J_ynfSiGuUL5GLDjS-pp7xx0eqw_gmnVIRMXOEiaJ2wLNz9eDe-dRv1HJffGFDGWKIH-9TlU0UBDIw940qDCkUbeXjZjdsjLtKuD3B7Gg0GWHngYfm0d0u9xYun-FrttGnejAkzJLWV7HyuC_ZCA_QHWryHtkt4PkqDJFzQjJqtsSDMMGOLlU2E8sTTNiKXafW91SYmjA9P72M1cR5KetKzCi5cq"
      }
    ],
    "eyebrow": "Culinary canon"
  },
  "maker": {
    "name": "Biscottificio Antonio Mattei",
    "place": "Prato",
    "paragraphs": [
      "In 1858, Antonio Mattei opened a bakery in the center of Prato, the old textile town just northwest of Florence, and began making the almond biscuits now known around the world as cantucci. The business still bears his name, but since the early 1900s it has been run by the Pandolfini family, and it still bakes every day in the same building on Via Ricasoli.",
      "The original Biscotti di Prato use just five ingredients: flour, sugar, fresh eggs, almonds, and pine nuts. The dough is baked as a loaf, sliced, and baked again until crisp. The biscuits still leave the shop in the deep-blue paper bag, tied by hand, that has become a trademark of its own."
    ],
    "photos": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuC66Qz_O1vxGNBZSyhKBG7E11V9J_ynfSiGuUL5GLDjS-pp7xx0eqw_gmnVIRMXOEiaJ2wLNz9eDe-dRv1HJffGFDGWKIH-9TlU0UBDIw940qDCkUbeXjZjdsjLtKuD3B7Gg0GWHngYfm0d0u9xYun-FrttGnejAkzJLWV7HyuC_ZCA_QHWryHtkt4PkqDJFzQjJqtsSDMMGOLlU2E8sTTNiKXafW91SYmjA9P72M1cR5KetKzCi5cq",
        "alt": "Shop on Via Ricasoli · Prato",
        "caption": "Shop on Via Ricasoli · Prato"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuDjU6UvYZUkSS18t8CQRRZnaNRc0VACKEjhPlfVfFdQ5pc54Xgy2GXOEcxNifnA64xYFhIvY_BUqA0MS-JHhIaxXG7ywJwi-c-2MoMLZQYjN7ECQUWQ30CTSnJyq3Tm7zn-7BkZHvprZQ0C9r6FYA64tnvr49FJHlvmY9kt2p8vCcOUoVi5fnGJfnDaU2kugnGZmTBxsCTHRKgMprbhUPLgw98lDHWUqoVhS2_XltgdYBMo8Wdajv2i",
        "alt": "Twice-baked biscotti · Prato",
        "caption": "Twice-baked biscotti · Prato"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq",
        "alt": "The blue paper bag · Mattei",
        "caption": "The blue paper bag · Mattei"
      }
    ],
    "facts": [
      {
        "label": "Founded",
        "value": "1858"
      },
      {
        "label": "Bakery",
        "value": "Same building"
      },
      {
        "label": "Recipe",
        "value": "Five ingredients"
      }
    ],
    "productsLabel": "From Antonio Mattei",
    "products": [
      {
        "id": "tos-mattei-prato",
        "name": "Mattei Biscotti di Prato",
        "meta": "Blue bag",
        "tag": "Since 1858",
        "tagTone": "gold",
        "origin": "Prato",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuC66Qz_O1vxGNBZSyhKBG7E11V9J_ynfSiGuUL5GLDjS-pp7xx0eqw_gmnVIRMXOEiaJ2wLNz9eDe-dRv1HJffGFDGWKIH-9TlU0UBDIw940qDCkUbeXjZjdsjLtKuD3B7Gg0GWHngYfm0d0u9xYun-FrttGnejAkzJLWV7HyuC_ZCA_QHWryHtkt4PkqDJFzQjJqtsSDMMGOLlU2E8sTTNiKXafW91SYmjA9P72M1cR5KetKzCi5cq"
      },
      {
        "id": "tos-mattei-cioccolato",
        "name": "Mattei biscotti with dark chocolate",
        "meta": "Bag",
        "tag": "Dark chocolate",
        "tagTone": "neutral",
        "origin": "Prato",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDjU6UvYZUkSS18t8CQRRZnaNRc0VACKEjhPlfVfFdQ5pc54Xgy2GXOEcxNifnA64xYFhIvY_BUqA0MS-JHhIaxXG7ywJwi-c-2MoMLZQYjN7ECQUWQ30CTSnJyq3Tm7zn-7BkZHvprZQ0C9r6FYA64tnvr49FJHlvmY9kt2p8vCcOUoVi5fnGJfnDaU2kugnGZmTBxsCTHRKgMprbhUPLgw98lDHWUqoVhS2_XltgdYBMo8Wdajv2i"
      }
    ]
  },
  "cook": {
    "title": "Cook Toscana",
    "lede": "One classic from scratch and one ten-minute shortcut from Florence.",
    "recipe": {
      "id": "ribollita",
      "title": "Ribollita",
      "serves": "6",
      "time": "about 3 hours, plus overnight",
      "from": "Florence",
      "steps": [
        {
          "title": "Cook the beans.",
          "body": "Simmer the soaked beans in fresh water with the sage for 1–1½ hours, until tender, and salt them at the end. Purée half the beans with some of their cooking liquid. If using canned beans, skip straight to puréeing."
        },
        {
          "title": "Make the base.",
          "body": "In a large pot, cook the onion, carrot, celery, and garlic gently in the olive oil for 10 minutes, until soft. Stir in the tomato paste."
        },
        {
          "title": "Add the greens.",
          "body": "Add the cavolo nero, cabbage, potato, and thyme and stir until wilted. Add the bean purée, the whole beans, and enough bean liquid or water to cover. Simmer gently for 1 hour and season."
        },
        {
          "title": "Layer with bread.",
          "body": "In a clean pot, alternate slices of stale bread with ladles of soup. Let it cool, then rest overnight in the fridge."
        },
        {
          "title": "Reboil and serve.",
          "body": "The next day, reheat slowly, stirring, until thick enough to stand a spoon in. Serve with a generous pour of raw olive oil, black pepper, and thin slices of red onion on the side."
        }
      ],
      "touch": "The oil is the seasoning here, not a garnish. Save your best [new-harvest Tuscan oil](product:tos-olio-igp) for the table and pour it raw over each bowl.",
      "shoppingList": [
        "400 g dried [cannellini beans](product:tos-fagioli)",
        "1 sage sprig and 1 thyme sprig",
        "1 onion, 1 carrot, 2 celery stalks",
        "2 garlic cloves",
        "80 ml [extra-virgin olive oil](product:tos-olio-igp), plus more",
        "2 tbsp tomato paste",
        "300 g cavolo nero",
        "¼ savoy cabbage",
        "1 potato",
        "300 g stale country bread",
        "Salt, pepper, and red onion"
      ],
      "products": [
        {
          "id": "tos-fagioli",
          "name": "Tuscan cannellini beans",
          "meta": "Dried",
          "tag": "Pantry staple",
          "tagTone": "neutral",
          "origin": "Tuscany",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
        },
        {
          "id": "tos-olio-igp",
          "name": "Toscano IGP extra-virgin olive oil",
          "meta": "Bottle, new harvest",
          "tag": "IGP · new oil",
          "tagTone": "green",
          "origin": "Across the region",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBU3O0qjc03YxJyeGreRcupZwz17tHGJHD5wHNfJ0p7EiTyJysIhlTpcXRQlU_9eU7JtZ9vYmMG1QkxPwTjQ1M4HKGKnp6G_wR77H9L92h6P1WFxFkdXdSnxzj1rYtIuYOHP3y1GFX7qLppRyyiuuFh143IYV753SuLjQLV1IN1Ux5-xM3ZgRGf1d7Bb4jjk31RDCfQ-Hqhx2JvDbAWSwuRQ51e8ensDs4uGSlEgC2bmSQ1QRP27a6w"
        }
      ],
      "schema": {
        "yield": "6 servings",
        "prepTime": "PT30M",
        "cookTime": "PT2H30M",
        "totalTime": "PT3H",
        "ingredients": [
          "400 g dried cannellini beans, soaked overnight (or three 400 g cans, drained)",
          "1 sage sprig",
          "1 onion, 1 carrot, and 2 celery stalks, finely chopped",
          "2 garlic cloves, sliced",
          "80 ml extra-virgin olive oil, plus more to serve",
          "2 tablespoons tomato paste",
          "300 g cavolo nero (lacinato kale), stems removed, sliced",
          "¼ savoy cabbage, shredded",
          "1 potato, diced",
          "1 thyme sprig",
          "300 g stale country bread, sliced",
          "Salt and black pepper",
          "Red onion, to serve (optional)"
        ]
      },
      "imageCaption": "Florence classic · 3 hours, plus overnight",
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg7ZeusKi1XJ_YIbUpf7bMvUDHPzrJBa0kGGcUmiEWQXn5vyYqb10N5ExBRlYr2yJ0WfsFPe7URckqO8PDwMH0UDSwVm6XQCF-NoeAM33s50RkHXH5cUKTQIls7nyQjkd8xFb7E1CVsnD4Hx0oK8so72g2UalmTdOWlUWCd2mUYhcv42IUIFm1cqLKE69xjZ96SmNApFtb-zmua5MK2Erwp7yfRDiKgHOwIebR0rdf84T1bYeSwKl"
    },
    "shortcut": {
      "title": "Ten minutes in Florence",
      "body": "Fettunta is how Tuscans taste the new oil each autumn. Grill or toast thick slices of country bread, rub them with a cut garlic clove, sprinkle with salt, and pour on new-harvest olive oil until the bread is soaked through. Add a few slices of finocchiona or lardo and dinner is close to done.",
      "products": [
        {
          "id": "tos-olio-igp",
          "name": "Toscano IGP extra-virgin olive oil",
          "meta": "Bottle, new harvest",
          "tag": "IGP · new oil",
          "tagTone": "green",
          "origin": "Across the region",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBU3O0qjc03YxJyeGreRcupZwz17tHGJHD5wHNfJ0p7EiTyJysIhlTpcXRQlU_9eU7JtZ9vYmMG1QkxPwTjQ1M4HKGKnp6G_wR77H9L92h6P1WFxFkdXdSnxzj1rYtIuYOHP3y1GFX7qLppRyyiuuFh143IYV753SuLjQLV1IN1Ux5-xM3ZgRGf1d7Bb4jjk31RDCfQ-Hqhx2JvDbAWSwuRQ51e8ensDs4uGSlEgC2bmSQ1QRP27a6w"
        },
        {
          "id": "tos-finocchiona",
          "name": "Finocchiona IGP",
          "meta": "Sliced",
          "tag": "IGP",
          "tagTone": "green",
          "origin": "Chianti hills",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr"
        }
      ],
      "eyebrow": "Fettunta shortcut",
      "button": "Get the fettunta pair"
    },
    "eyebrow": "Hill country kitchen"
  },
  "readTheLabel": "“Bottled in Italy” or “imported from Italy” on olive oil is not the same as oil grown in Tuscany, and “Tuscan-style” means nothing at all. Check the place of production, the harvest date, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Toscana home",
    "body": "A Tuscan table is built on a few things done properly: oil, bread, beans, and something to slice. We’ve gathered eight ingredients from this story into one set: enough for a pot of ribollita, an antipasto board, and cantucci to finish.",
    "button": "Add the Toscana pantry set",
    "products": [
      {
        "id": "tos-olio-igp",
        "name": "Toscano IGP olive oil",
        "meta": "New harvest",
        "tag": "IGP · new oil",
        "tagTone": "green",
        "origin": "Across the region",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBU3O0qjc03YxJyeGreRcupZwz17tHGJHD5wHNfJ0p7EiTyJysIhlTpcXRQlU_9eU7JtZ9vYmMG1QkxPwTjQ1M4HKGKnp6G_wR77H9L92h6P1WFxFkdXdSnxzj1rYtIuYOHP3y1GFX7qLppRyyiuuFh143IYV753SuLjQLV1IN1Ux5-xM3ZgRGf1d7Bb4jjk31RDCfQ-Hqhx2JvDbAWSwuRQ51e8ensDs4uGSlEgC2bmSQ1QRP27a6w"
      },
      {
        "id": "tos-pecorino",
        "name": "Pecorino Toscano DOP",
        "meta": "Stagionato",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Tuscany’s south",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
      },
      {
        "id": "tos-fagioli",
        "name": "Tuscan cannellini beans",
        "meta": "Dried",
        "tag": "Pantry staple",
        "tagTone": "neutral",
        "origin": "Tuscany",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
      },
      {
        "id": "tos-farro",
        "name": "Farro della Garfagnana IGP",
        "meta": "Bag",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "Garfagnana",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDMH2M-VN1-Pz9hCbkXgdgup639qKPj1bgJo2jf1PgPm9NKzrgAY_T6MZujPmHAC4Z5W83H6bgIwaOrwcCLEuI-3an8k7c44fESuTzHNkXQYSCN_pESKkZUsjfCP-01ZMORW4JuJXmElmpAAAxPwRTi5o5Crpmlu_bVRSOXjhggx377vb87iOfKRdkb1LjsaiX1pF73K7pXrg-DIruRvIfEPidPaOJoOlRNnbEwUK6fqguV0N3VVklu"
      },
      {
        "id": "tos-finocchiona",
        "name": "Finocchiona IGP",
        "meta": "Sliced",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "Chianti hills",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr"
      },
      {
        "id": "tos-lardo",
        "name": "Lardo di Colonnata IGP",
        "meta": "Sliced",
        "tag": "Marble cured",
        "tagTone": "gold",
        "origin": "Colonnata",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo"
      },
      {
        "id": "tos-pici",
        "name": "Pici from Siena",
        "meta": "Dried",
        "tag": "Dried pasta",
        "tagTone": "neutral",
        "origin": "Siena",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
      },
      {
        "id": "tos-mattei-prato",
        "name": "Mattei Biscotti di Prato",
        "meta": "Blue bag",
        "tag": "Since 1858",
        "tagTone": "gold",
        "origin": "Prato",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuC66Qz_O1vxGNBZSyhKBG7E11V9J_ynfSiGuUL5GLDjS-pp7xx0eqw_gmnVIRMXOEiaJ2wLNz9eDe-dRv1HJffGFDGWKIH-9TlU0UBDIw940qDCkUbeXjZjdsjLtKuD3B7Gg0GWHngYfm0d0u9xYun-FrttGnejAkzJLWV7HyuC_ZCA_QHWryHtkt4PkqDJFzQjJqtsSDMMGOLlU2E8sTTNiKXafW91SYmjA9P72M1cR5KetKzCi5cq"
      }
    ],
    "eyebrow": "Limited curation · Parcel N° 04"
  },
  "about": [
    "Casa Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "Consorzio per la Tutela dell’Olio Extravergine di Oliva Toscano IGP; Consorzio Tutela Pecorino Toscano DOP; Consorzio Tutela Finocchiona IGP; European Commission eAmbrosia register; Visit Tuscany; Pitti Taste exhibitor profile and Cibus company profile for Biscottificio Antonio Mattei."
};

export default toscana;
