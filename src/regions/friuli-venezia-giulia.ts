import type { RegionStory } from './types';

// Photos are stand-ins from elsewhere on the site, to be replaced.
// Content from the Friuli-Venezia Giulia story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const friuliVeneziaGiulia: RegionStory = {
  "slug": "friuli-venezia-giulia",
  "name": "Friuli-Venezia Giulia",
  "seoTitle": "Friulian Food and Pantry Ingredients | Italy Region by Region | Casa Taglia",
  "seoDescription": "Cook Friuli-Venezia Giulia from its pantry: Prosciutto di San Daniele, Montasio, Prosciutto di Sauris, brovada, smoked ricotta and gubana, with a recipe for frico con patate.",
  "kicker": "Region sixteen: where three cultures meet",
  "subtitle": "Prosciutto, mountain cheese, and the coffeehouses of Trieste.",
  "hero": {
    "color": "#4A3428",
    "colorDeep": "#32231B",
    "dossier": "Terroir archive · Dossier N° 16",
    "badge": "Three-culture crossroads",
    "metrics": [
      {
        "icon": "map",
        "label": "Borders",
        "value": "Austria & Slovenia"
      },
      {
        "icon": "terrain",
        "label": "Mountains",
        "value": "Carnic & Julian Alps"
      },
      {
        "icon": "sailing",
        "label": "Port",
        "value": "Trieste"
      },
      {
        "icon": "restaurant",
        "label": "Signature",
        "value": "San Daniele prosciutto"
      }
    ],
    "heritage": "Habsburg port kitchen",
    "imageCaption": {
      "title": "Sauris, Carnic Alps",
      "body": "An isolated Alpine village 1,200 meters up, where people still speak a dialect of German origin."
    },
    "imageTag": "Carnic Alps · Sauris",
    "heritageNote": "half alpine, half adriatic",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuB2slSQexHb65wGxM1BmjHsv2HDR0JxYkp1_797_5C6hQ-VssXWRFXHGsZiRVvDRJ0lW5kiMqWb7ov4nVwaBRFu0QudIz8yPk8oDGI5RgetbxYgswJcvlkXDqk43z4jfCzXyDPRCogKAsIQDHpqeJDPnzcWcFVAsff-q-mKrLKbL8xT13RBt-1OfRR1ZjSUkSqLt-E6vZKzMGuvf-bwUBkgICI_iH38dHy50W4tAcvFAoBESck6EwyC",
    "imageAlt": "An isolated Alpine village 1,200 meters up, where people still speak a dialect of German origin."
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
            "meta": "Sliced",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "San Daniele",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
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
            "meta": "Wedge",
            "tag": "DOP · fresco",
            "tagTone": "green",
            "origin": "Friulian Alps",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
          },
          {
            "id": "fvg-montasio-stagionato",
            "name": "Montasio DOP Stagionato",
            "meta": "Wedge",
            "tag": "Aged 10 mos",
            "tagTone": "gold",
            "origin": "Friulian Alps",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuAl_5nHHJIzoS-WsCluRQYcsvFaCEJgLpMKhF74uchwSFZaiasRvF2QgOGb8yQIioI-Tl012aRJqnvzUfYVXVIN42AtBrqz67jqjAH3CbxmYm6uEHRkYdah0q_WAQSgW93YHOemOcCRZN921JwihtDRxkKHN7PzTEk88hPG_P2AV7Y_dSVKxmfxeIubOnR3JAqjFS_dXGAzG2xxfQE3VDOGzRjZcEhJ1T-LSazL8n3fCCvhoP3Kr76d"
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
            "meta": "Sliced",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Sauris",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr"
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
            "meta": "Pack",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Friulian plain",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo"
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
            "meta": "Piece",
            "tag": "Smoked",
            "tagTone": "neutral",
            "origin": "Carnia",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDqmbMaaWotLnqd7h746aY6nsFALWzvjqbkrArYOxWH0YaS3R83fCAwa_zPopqfTC19b2rndKbS0X7Nj0tC5mW1iAtX3KmPVZsS3ZsFiP0HIvHEAkj179Jhwx4pyyijMtfmbJUWOuzPdOd5gogteAa_cNezVDsRpXU2pkT0vo_nXW3O0JbzNZUqjoeSjms0C0zSftPsOjvMIjrOBbhGg700irDxZk2EN0lXZPe4eI9aZMgxn7bkIl7z"
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
            "meta": "Whole",
            "tag": "Holiday cake",
            "tagTone": "neutral",
            "origin": "Natisone valleys",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDMH2M-VN1-Pz9hCbkXgdgup639qKPj1bgJo2jf1PgPm9NKzrgAY_T6MZujPmHAC4Z5W83H6bgIwaOrwcCLEuI-3an8k7c44fESuTzHNkXQYSCN_pESKkZUsjfCP-01ZMORW4JuJXmElmpAAAxPwRTi5o5Crpmlu_bVRSOXjhggx377vb87iOfKRdkb1LjsaiX1pF73K7pXrg-DIruRvIfEPidPaOJoOlRNnbEwUK6fqguV0N3VVklu"
          }
        ]
      }
    ],
    "eyebrow": "Essential terroir goods"
  },
  "dishes": {
    "lede": "Four dishes Friuli-Venezia Giulia makes its own.",
    "items": [
      {
        "title": "Frico con patate",
        "where": "Across Friuli",
        "body": "A potato and Montasio cake, crisp outside and molten within. There is also a thin, crunchy frico of cheese alone.",
        "tip": "[Cook it below](#frico)",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuC66Qz_O1vxGNBZSyhKBG7E11V9J_ynfSiGuUL5GLDjS-pp7xx0eqw_gmnVIRMXOEiaJ2wLNz9eDe-dRv1HJffGFDGWKIH-9TlU0UBDIw940qDCkUbeXjZjdsjLtKuD3B7Gg0GWHngYfm0d0u9xYun-FrttGnejAkzJLWV7HyuC_ZCA_QHWryHtkt4PkqDJFzQjJqtsSDMMGOLlU2E8sTTNiKXafW91SYmjA9P72M1cR5KetKzCi5cq"
      },
      {
        "title": "Jota",
        "where": "Trieste",
        "body": "A thick soup of sauerkraut, beans, potatoes, and pork, seasoned with cumin and simmered for hours. Trieste’s signature dish, served in its informal buffet taverns.",
        "note": "Trieste’s signature dish",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg7ZeusKi1XJ_YIbUpf7bMvUDHPzrJBa0kGGcUmiEWQXn5vyYqb10N5ExBRlYr2yJ0WfsFPe7URckqO8PDwMH0UDSwVm6XQCF-NoeAM33s50RkHXH5cUKTQIls7nyQjkd8xFb7E1CVsnD4Hx0oK8so72g2UalmTdOWlUWCd2mUYhcv42IUIFm1cqLKE69xjZ96SmNApFtb-zmua5MK2Erwp7yfRDiKgHOwIebR0rdf84T1bYeSwKl"
      },
      {
        "title": "Cjarsons",
        "where": "Carnia",
        "body": "Ravioli with fillings that mix sweet and savory, from ricotta, potatoes, and spinach to raisins, cinnamon, and cocoa, served with melted butter, smoked ricotta, sugar, and cinnamon.",
        "tip": "Finish with grated [smoked ricotta](product:fvg-ricotta-affumicata).",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDjU6UvYZUkSS18t8CQRRZnaNRc0VACKEjhPlfVfFdQ5pc54Xgy2GXOEcxNifnA64xYFhIvY_BUqA0MS-JHhIaxXG7ywJwi-c-2MoMLZQYjN7ECQUWQ30CTSnJyq3Tm7zn-7BkZHvprZQ0C9r6FYA64tnvr49FJHlvmY9kt2p8vCcOUoVi5fnGJfnDaU2kugnGZmTBxsCTHRKgMprbhUPLgw98lDHWUqoVhS2_XltgdYBMo8Wdajv2i"
      },
      {
        "title": "Brovada e muset",
        "where": "The Friulian plain",
        "body": "Fermented turnips cooked with oil and garlic and served with muset, Friuli’s cotechino sausage.",
        "tip": "Start with [Brovada DOP](product:fvg-brovada).",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAPcC0a36PdQKRFN67N9n4iWBfhvVaOYD4lAqKygnUjTrscttDOYLVoI8x1mJHXJybsSr0etHTwY4pU0A01kN4o1IfpMOvEBAXOIrB8eZ11ou4LrSyCjELVvYNkcTxy0DtPWugtK_maKrpF1S29ogN-YzCyzhDGWnfH4HdQ3jXFuv8h73Z3GNxqFxYhHzG5euOwWXNcUn83KLa8hc2NC2nQFY3TdtlSPgMj0otF-z9Yn-C7fprrBLWX"
      }
    ],
    "eyebrow": "Alpine-Adriatic canon"
  },
  "maker": {
    "name": "Prosciuttificio Wolf",
    "place": "Sauris",
    "paragraphs": [
      "Pietro Schneider, known as “Wolf,” was born in Sauris in 1862 and became a skilled curer of hams and salumi in this isolated Alpine village. His grandson Giuseppe Petris learned the craft and, in the 1960s, founded the prosciuttificio that bears his nickname. It is still run by the Petris family.",
      "Wolf makes Prosciutto di Sauris IGP and speck, smoked the traditional way in real chimneys burning only beech wood, then aged in the cool mountain air at 1,200 meters. The ham’s growth helped bring new life to the village itself."
    ],
    "photos": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq",
        "alt": "Sauris village · 1,200 meters",
        "caption": "Sauris village · 1,200 meters"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuAnmv_x6pp8pedaJCwB3KpOyHiwoux-_Zw7UEg-8tHQA_WJGaPfnDtGodkrZjSiPXFoiIM0lbvgYcoOUCfJSy5AbEl111xwfxRWxfyGgSnyKAinmiguDsYDuxWCvIiDR15Qwm2ZKdjCzGHWmTjzYB1abwN7YqA65e_DwIc2qf_h09V0xMNEdJKbcLMYZFXc3RN2UXvi9uOgM0JYY1X1L5Wl1aUwDP0dBBQfz6uOjhWBl1K0MoFePgpE",
        "alt": "Beech-wood smoking room",
        "caption": "Beech-wood smoking room"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuAup5gyH9Bp1XqQHaEiiC2B1SMPipV2xRwTcLm3TOGA0GNCv09xIIXehf9soQONqLtE55IpSKVV2vHbgUGmJpQGnLTCLLBiSDB4BzU5aSlKcLM_PDsskj_fEE8ltBLZQZhyrs-dYKsuNKchbMwpLJMYSI2vVUylZTp-dsa3zyy3uTSMiK0wnx-2X3Ysz7VqVfaaThUKNGkbndeXigoGcraHgSmABSDkqfrMdAr3lNvPrubRpDapuBIf",
        "alt": "Wolf Prosciutto di Sauris",
        "caption": "Wolf Prosciutto di Sauris"
      }
    ],
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
        "meta": "Sliced",
        "tag": "Beech smoked",
        "tagTone": "gold",
        "origin": "Sauris",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCZhnC6OD1VrmeoAkesXcV61vBh25ZoqFu3NKi1EWxScFq08esuCcNzj28MeLyPLME1eJ4rqHGka5Va1TpbBHJJjtXPwJCp0j6OcrdBzYqdqkNECgc1aIdIrdUQ-3yQ49QItc5wh4ZkdvFaJm6-EOJLmg_-fEa9Y74OCjgdx1yeFqlC35iIO1cg2THDFfbVWTTKfIfoC35P_lksCF2Ua-5Tn5iAP5Amgfwuc-v6kUOIJSkESvhpWyfq"
      },
      {
        "id": "fvg-wolf-speck",
        "name": "Wolf Sauris speck",
        "meta": "Piece",
        "tag": "Beech smoked",
        "tagTone": "gold",
        "origin": "Sauris",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuAVGYQ04rZ-nKR0Oz5lhG8ivLp6cW06G3MC69sYYbwZJs2pqjQrdmZo7GAMNt3U-WCjFmmx3uy9XT2Yx-9gh8tZO3EqFRsZUkPQmYsYt8-Uyx8O7ojZ-JUvRro8eR6r34iv4LETSR7WsPUnhlxtF8trSRL7T5VcCPBar3UfqjOT1RKVlbvzIAzIcArvfdgViGqDu8HffvvgRjxkKj-0D1p64LmHiXZDq9r4px6GXqS2NLFf_mbKHECS"
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
          "meta": "Wedge",
          "tag": "DOP · fresco",
          "tagTone": "green",
          "origin": "Friulian Alps",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
        },
        {
          "id": "fvg-montasio-stagionato",
          "name": "Montasio DOP Stagionato",
          "meta": "Wedge",
          "tag": "Aged 10 mos",
          "tagTone": "gold",
          "origin": "Friulian Alps",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuAl_5nHHJIzoS-WsCluRQYcsvFaCEJgLpMKhF74uchwSFZaiasRvF2QgOGb8yQIioI-Tl012aRJqnvzUfYVXVIN42AtBrqz67jqjAH3CbxmYm6uEHRkYdah0q_WAQSgW93YHOemOcCRZN921JwihtDRxkKHN7PzTEk88hPG_P2AV7Y_dSVKxmfxeIubOnR3JAqjFS_dXGAzG2xxfQE3VDOGzRjZcEhJ1T-LSazL8n3fCCvhoP3Kr76d"
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
      },
      "imageCaption": "Friulian classic · about 55 minutes",
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuC66Qz_O1vxGNBZSyhKBG7E11V9J_ynfSiGuUL5GLDjS-pp7xx0eqw_gmnVIRMXOEiaJ2wLNz9eDe-dRv1HJffGFDGWKIH-9TlU0UBDIw940qDCkUbeXjZjdsjLtKuD3B7Gg0GWHngYfm0d0u9xYun-FrttGnejAkzJLWV7HyuC_ZCA_QHWryHtkt4PkqDJFzQjJqtsSDMMGOLlU2E8sTTNiKXafW91SYmjA9P72M1cR5KetKzCi5cq"
    },
    "shortcut": {
      "title": "Ten minutes in Carnia",
      "body": "For the crisp frico, grate aged Montasio and scatter it in thin rounds in a hot nonstick pan. Cook until the cheese melts, bubbles, and turns golden, then lift each round out to cool and crisp. Serve with thin slices of San Daniele or Sauris ham.",
      "products": [
        {
          "id": "fvg-montasio-stagionato",
          "name": "Montasio DOP Stagionato",
          "meta": "Wedge",
          "tag": "Aged 10 mos",
          "tagTone": "gold",
          "origin": "Friulian Alps",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuAl_5nHHJIzoS-WsCluRQYcsvFaCEJgLpMKhF74uchwSFZaiasRvF2QgOGb8yQIioI-Tl012aRJqnvzUfYVXVIN42AtBrqz67jqjAH3CbxmYm6uEHRkYdah0q_WAQSgW93YHOemOcCRZN921JwihtDRxkKHN7PzTEk88hPG_P2AV7Y_dSVKxmfxeIubOnR3JAqjFS_dXGAzG2xxfQE3VDOGzRjZcEhJ1T-LSazL8n3fCCvhoP3Kr76d"
        },
        {
          "id": "fvg-san-daniele",
          "name": "Prosciutto di San Daniele DOP",
          "meta": "Sliced",
          "tag": "DOP",
          "tagTone": "green",
          "origin": "San Daniele",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
        }
      ],
      "eyebrow": "Carnia shortcut",
      "button": "Get the frico pair"
    },
    "eyebrow": "Terroir kitchen"
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
        "meta": "Sliced",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "San Daniele",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
      },
      {
        "id": "fvg-wolf-sauris",
        "name": "Wolf Prosciutto di Sauris IGP",
        "meta": "Sliced",
        "tag": "Beech smoked",
        "tagTone": "gold",
        "origin": "Sauris",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCZhnC6OD1VrmeoAkesXcV61vBh25ZoqFu3NKi1EWxScFq08esuCcNzj28MeLyPLME1eJ4rqHGka5Va1TpbBHJJjtXPwJCp0j6OcrdBzYqdqkNECgc1aIdIrdUQ-3yQ49QItc5wh4ZkdvFaJm6-EOJLmg_-fEa9Y74OCjgdx1yeFqlC35iIO1cg2THDFfbVWTTKfIfoC35P_lksCF2Ua-5Tn5iAP5Amgfwuc-v6kUOIJSkESvhpWyfq"
      },
      {
        "id": "fvg-montasio-fresco",
        "name": "Montasio DOP Fresco",
        "meta": "Wedge",
        "tag": "DOP · fresco",
        "tagTone": "green",
        "origin": "Friulian Alps",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
      },
      {
        "id": "fvg-montasio-stagionato",
        "name": "Montasio DOP Stagionato",
        "meta": "Wedge",
        "tag": "Aged 10 mos",
        "tagTone": "gold",
        "origin": "Friulian Alps",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuAl_5nHHJIzoS-WsCluRQYcsvFaCEJgLpMKhF74uchwSFZaiasRvF2QgOGb8yQIioI-Tl012aRJqnvzUfYVXVIN42AtBrqz67jqjAH3CbxmYm6uEHRkYdah0q_WAQSgW93YHOemOcCRZN921JwihtDRxkKHN7PzTEk88hPG_P2AV7Y_dSVKxmfxeIubOnR3JAqjFS_dXGAzG2xxfQE3VDOGzRjZcEhJ1T-LSazL8n3fCCvhoP3Kr76d"
      },
      {
        "id": "fvg-ricotta-affumicata",
        "name": "Smoked ricotta",
        "meta": "Piece",
        "tag": "Smoked",
        "tagTone": "neutral",
        "origin": "Carnia",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDqmbMaaWotLnqd7h746aY6nsFALWzvjqbkrArYOxWH0YaS3R83fCAwa_zPopqfTC19b2rndKbS0X7Nj0tC5mW1iAtX3KmPVZsS3ZsFiP0HIvHEAkj179Jhwx4pyyijMtfmbJUWOuzPdOd5gogteAa_cNezVDsRpXU2pkT0vo_nXW3O0JbzNZUqjoeSjms0C0zSftPsOjvMIjrOBbhGg700irDxZk2EN0lXZPe4eI9aZMgxn7bkIl7z"
      },
      {
        "id": "fvg-brovada",
        "name": "Brovada DOP",
        "meta": "Pack",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Friulian plain",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo"
      },
      {
        "id": "fvg-gubana",
        "name": "Gubana",
        "meta": "Whole",
        "tag": "Holiday cake",
        "tagTone": "neutral",
        "origin": "Natisone valleys",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDMH2M-VN1-Pz9hCbkXgdgup639qKPj1bgJo2jf1PgPm9NKzrgAY_T6MZujPmHAC4Z5W83H6bgIwaOrwcCLEuI-3an8k7c44fESuTzHNkXQYSCN_pESKkZUsjfCP-01ZMORW4JuJXmElmpAAAxPwRTi5o5Crpmlu_bVRSOXjhggx377vb87iOfKRdkb1LjsaiX1pF73K7pXrg-DIruRvIfEPidPaOJoOlRNnbEwUK6fqguV0N3VVklu"
      },
      {
        "id": "fvg-caffe-trieste",
        "name": "Trieste coffee",
        "meta": "Bag",
        "tag": "Coffeehouse",
        "tagTone": "neutral",
        "origin": "Trieste",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuA4EH7PBxM5mkGtU_hUOJIWGkBVxZJn4EFpJjF38EOKBU7wo_ddyMCFm271EacOGO5w4Xv6DGSB-7_saGCFJU5iM16suJDjSS0a_VzFQbhUmwPL8egJ5XILWwdPmz-_POZdud-1IbUhFmWHh2snwuV7-TAFb5uKZfOhuCAAC57-6VjgZFhqO7vaYO8y1vEORke8lGfQXTjEtIhhnE1cknP388wuircWvsS4xPwHGOMZ7oIWF5WLtCf7"
      }
    ],
    "eyebrow": "Limited curation · Parcel N° 16"
  },
  "about": [
    "Casa Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "Regione Friuli Venezia Giulia and Consorzio del Prosciutto di San Daniele on San Daniele DOP; Italia.it (ENIT) on San Daniele; ONAF on Montasio DOP; University of Trieste course notes on regional DOP and IGP products; Turismo FVG on regional cuisine; Eroica Fenice, Travel365, Italy Segreta, Volagratis, GoNOMAD, and Linkiesta on Friulian and Triestine dishes; Trieste in Cucina (Guido Tommasi) on jota; Decanter on Trieste; Il Nordest, Sauris.org, Cibus, and Gambero Rosso on Prosciuttificio Wolf."
};

export default friuliVeneziaGiulia;
