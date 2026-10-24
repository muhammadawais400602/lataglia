import type { RegionStory } from './types';

// Photos are stand-ins from elsewhere on the site, to be replaced.
// Content from the Lazio story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const lazio: RegionStory = {
  "slug": "lazio",
  "name": "Lazio",
  "seoTitle": "Roman and Lazio Food and Pantry Ingredients | Italy Region by Region | Casa Taglia",
  "seoDescription": "Cook Lazio from its pantry: Pecorino Romano, guanciale, Romanesco artichokes, Porchetta di Ariccia, Ricotta Romana and Sabina olive oil, with a recipe for spaghetti all’amatriciana.",
  "kicker": "Region eight: the eternal city",
  "subtitle": "Shepherds’ cheese, pork cheek, and the cooking of Rome.",
  "hero": {
    "color": "#B5531E",
    "colorDeep": "#7E3712",
    "dossier": "Terroir archive · Dossier N° 08",
    "badge": "Roman shepherds’ kitchen",
    "metrics": [
      {
        "icon": "location_city",
        "label": "Capital",
        "value": "Rome"
      },
      {
        "icon": "water",
        "label": "River",
        "value": "The Tiber"
      },
      {
        "icon": "landscape",
        "label": "Countryside",
        "value": "The Agro Romano"
      },
      {
        "icon": "local_dining",
        "label": "Signature",
        "value": "Amatriciana"
      }
    ],
    "heritage": "Pastoral Roman heritage",
    "imageCaption": {
      "title": "The Agro Romano",
      "body": "The open countryside around Rome, where shepherds grazed their flocks for millennia."
    },
    "imageTag": "Agro Romano · Rome",
    "heritageNote": "quinto quarto",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDKuapGvtz1m4yEiJmh5vBcthnNoV0P2Se0tF21T9_V_CDVx4pCFbczusX8ypWXZHV1BMlJ0i8sIWb4Z4uEm_A6mQL2mRBARioc6crU1N5rMrXju_nLvqzTJUTIXUY5O6L9zJ0BNDqG3aOp0yPR7VXOtZMd6nJRMXGZKqoKjLXRDwsPQcG9ORNxWV47lsd_1MXkzl4btNUmDZ_yzpVmLL4icT7pv6P8U_xZMrozfeBedIsWkhJCs9r6",
    "imageAlt": "The open countryside around Rome, where shepherds grazed their flocks for millennia."
  },
  "intro": [
    "Lazio lies on Italy’s Tyrrhenian coast, halfway down the peninsula, with Rome and the Tiber at its heart. Around the city spreads the Agro Romano, the open countryside where shepherds grazed their flocks for millennia; to the north lie volcanic lakes and hills, to the south the Castelli Romani, and inland the olive hills of the Sabina and the mountains around Amatrice, which only became part of Lazio in 1927. For centuries Rome was ruled by the popes, and its cooking was shaped less by courts than by working people. Shepherds gave it pecorino and guanciale. Rome’s Jewish community, confined to a walled ghetto from 1555 to 1870, gave it fried artichokes and a whole kitchen of its own. Workers at the Testaccio slaughterhouse, paid partly in offal, gave it the “fifth quarter” dishes that still fill Roman menus. The result is direct, salty, deeply satisfying food, built on a handful of ingredients used with confidence.",
    "Roman cooking proves how much a few pantry staples can do. Start with the ingredients that define Lazio, learn the dishes they make possible, and meet one of the last dairies still making Pecorino Romano near Rome."
  ],
  "pantry": {
    "lede": "Six ingredients behind Lazio’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Pecorino Romano",
        "place": "The Agro Romano, around Rome",
        "body": "A hard, cooked cheese made from whole sheep’s milk, salty and sharp, eaten at the table after five months and grated over almost everything after that. Its protected zone covers Lazio, Sardinia, and the province of Grosseto, but more than 90 percent is now made in Sardinia.",
        "lookFor": "the sheep’s-head mark and dairy code on the rind. A code beginning with a Lazio province, such as RM for Rome, means it was made in Lazio.",
        "products": [
          {
            "id": "laz-pecorino",
            "name": "Pecorino Romano DOP made in Lazio",
            "meta": "Wedge",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Lazio",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
          }
        ]
      },
      {
        "title": "Guanciale",
        "place": "Amatrice and the Lazio mountains",
        "body": "Cured pork cheek, fattier than pancetta, with fat that melts into a sauce and turns crisp at the edges. It is the backbone of amatriciana, gricia, and carbonara.",
        "lookFor": "guanciale, not pancetta or bacon, which change the dish entirely.",
        "products": [
          {
            "id": "laz-guanciale",
            "name": "Guanciale",
            "meta": "Whole piece",
            "tag": "Cured cheek",
            "tagTone": "neutral",
            "origin": "Amatrice",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
          }
        ]
      },
      {
        "title": "Romanesco artichokes",
        "place": "The Lazio countryside",
        "body": "Round, tender artichokes, called mammole or cimaroli, without thorns and almost without a choke, so the whole flower can be cooked and eaten. Their season is short, roughly February to April.",
        "lookFor": "Carciofo Romanesco del Lazio IGP.",
        "products": [
          {
            "id": "laz-carciofi",
            "name": "Carciofo Romanesco del Lazio IGP",
            "meta": "Spring only",
            "tag": "Spring only",
            "tagTone": "green",
            "origin": "Lazio countryside",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr"
          }
        ],
        "shelfLabel": "In season"
      },
      {
        "title": "Porchetta",
        "place": "Ariccia, in the Castelli Romani",
        "body": "A whole boned pig seasoned with rosemary, garlic, and black pepper, rolled, and roasted until the skin turns into a crisp, salty crust that stays crunchy for days. Ariccia has held a porchetta festival every year since 1950.",
        "lookFor": "Porchetta di Ariccia IGP.",
        "products": [
          {
            "id": "laz-porchetta",
            "name": "Porchetta di Ariccia IGP",
            "meta": "Sliced",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Ariccia",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuAPcC0a36PdQKRFN67N9n4iWBfhvVaOYD4lAqKygnUjTrscttDOYLVoI8x1mJHXJybsSr0etHTwY4pU0A01kN4o1IfpMOvEBAXOIrB8eZ11ou4LrSyCjELVvYNkcTxy0DtPWugtK_maKrpF1S29ogN-YzCyzhDGWnfH4HdQ3jXFuv8h73Z3GNxqFxYhHzG5euOwWXNcUn83KLa8hc2NC2nQFY3TdtlSPgMj0otF-z9Yn-C7fprrBLWX"
          }
        ]
      },
      {
        "title": "Ricotta Romana",
        "place": "Across Lazio",
        "body": "Made from the whey left over from making pecorino, heated until soft curds rise. Fine, white, and sweet with the taste of sheep’s milk, it fills ravioli, tarts, and Roman pastries.",
        "lookFor": "Ricotta Romana DOP, made from the whey of Lazio sheep’s milk.",
        "products": [
          {
            "id": "laz-ricotta",
            "name": "Ricotta Romana DOP",
            "meta": "Fresh",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Lazio",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDqmbMaaWotLnqd7h746aY6nsFALWzvjqbkrArYOxWH0YaS3R83fCAwa_zPopqfTC19b2rndKbS0X7Nj0tC5mW1iAtX3KmPVZsS3ZsFiP0HIvHEAkj179Jhwx4pyyijMtfmbJUWOuzPdOd5gogteAa_cNezVDsRpXU2pkT0vo_nXW3O0JbzNZUqjoeSjms0C0zSftPsOjvMIjrOBbhGg700irDxZk2EN0lXZPe4eI9aZMgxn7bkIl7z"
          }
        ]
      },
      {
        "title": "Olive oil",
        "place": "The Sabina hills, between Rome and Rieti",
        "body": "Olives have grown in the Sabina since antiquity, on calcareous hills where small, sloping plots rule out intensive farming. The oil is fruity, smooth, and lightly peppery, made from local varieties such as Carboncella, Leccino, Frantoio, and Raja.",
        "lookFor": "Sabina DOP, one of Italy’s first protected olive oils, registered in 1996. Each bottle carries a numbered label traceable to its producer and mill.",
        "products": [
          {
            "id": "laz-olio-sabina",
            "name": "Sabina DOP extra-virgin olive oil",
            "meta": "Bottle",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Sabina hills",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBU3O0qjc03YxJyeGreRcupZwz17tHGJHD5wHNfJ0p7EiTyJysIhlTpcXRQlU_9eU7JtZ9vYmMG1QkxPwTjQ1M4HKGKnp6G_wR77H9L92h6P1WFxFkdXdSnxzj1rYtIuYOHP3y1GFX7qLppRyyiuuFh143IYV753SuLjQLV1IN1Ux5-xM3ZgRGf1d7Bb4jjk31RDCfQ-Hqhx2JvDbAWSwuRQ51e8ensDs4uGSlEgC2bmSQ1QRP27a6w"
          }
        ]
      }
    ],
    "eyebrow": "Essential terroir goods"
  },
  "dishes": {
    "lede": "Four dishes Lazio makes its own.",
    "items": [
      {
        "title": "All’amatriciana",
        "where": "Amatrice and Rome",
        "body": "Guanciale, white wine, tomato, and pecorino. It grew from gricia, the same dish without tomato, and in 2020 “Amatriciana tradizionale” became a protected Traditional Speciality Guaranteed. In Amatrice it is made with spaghetti; in Rome, often with bucatini.",
        "tip": "[Cook it below](#amatriciana)",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
      },
      {
        "title": "Carbonara",
        "where": "Rome",
        "body": "Crisp guanciale, egg yolks, Pecorino Romano, and plenty of black pepper, tossed with hot pasta until creamy. Roman carbonara uses no cream.",
        "tip": "The same [guanciale](product:laz-guanciale) and [Pecorino Romano](product:laz-pecorino) you need for amatriciana.",
        "image": "https://lh3.googleusercontent.com/aida/AEtjO1XH3ztoRKkRdH9fjeZ7zGSvG7Z5lVtTJVcPxnxpnLlAyQgVptrChhD3aGe8eyAqVjd0t1vRNzKDPEjlQjVZ-Eo-tmswH65MCECJXC1QT7I-lJ124iYZKFjt2HHrSOK_zqbBcVos3Jg8CZW5bSAW6GQ8NC2GTMPbtiRRx9g9oxW6L3gS7A49QEWznJIYITZoOmWrGC6LiYi1Idw4k1vthGnlg7ZvP6f6Il5_lhaoAml5HXicCLGHPJRAbg"
      },
      {
        "title": "Carciofi alla giudia",
        "where": "The Jewish ghetto",
        "body": "Whole Romanesco artichokes fried in olive oil until the leaves open like a crisp golden flower, then salted. Born in Rome’s Jewish ghetto in the sixteenth century. Carciofi alla romana, braised with mint, parsley, and garlic, are the gentler cousin.",
        "tip": "A spring dish, February to April.",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAPcC0a36PdQKRFN67N9n4iWBfhvVaOYD4lAqKygnUjTrscttDOYLVoI8x1mJHXJybsSr0etHTwY4pU0A01kN4o1IfpMOvEBAXOIrB8eZ11ou4LrSyCjELVvYNkcTxy0DtPWugtK_maKrpF1S29ogN-YzCyzhDGWnfH4HdQ3jXFuv8h73Z3GNxqFxYhHzG5euOwWXNcUn83KLa8hc2NC2nQFY3TdtlSPgMj0otF-z9Yn-C7fprrBLWX"
      },
      {
        "title": "Coda alla vaccinara",
        "where": "Testaccio",
        "body": "Oxtail braised for hours in tomato, often finished with raisins, pine nuts, and sometimes bitter cocoa. The signature of the quinto quarto, the offal and lesser cuts that fed Testaccio’s slaughterhouse workers from 1890.",
        "note": "The quinto quarto signature",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuD3DyLWjHZNnUahIXVRqFuwGgYJBdyZm09UGDnl9cXdl6H6UU-Pl1gDXv1bLWsXseTdwuiujzAsWyj9bvxPR1CAJQ04u9iac5o5XBSAm-OHuk41AFvTp3mgciUZ6LQJZxFGgmgutgDDoQfkKMXnfg2UjCCYPPf06y4eK5F08c5c7bX4ZeqGT2I0gLJcVPbnyHaJ73geG9GreqIzaSTdWVO5L5D7fWpS3je3wDAORcXER6iiX2rkYkQn"
      }
    ],
    "eyebrow": "Roman canon"
  },
  "maker": {
    "name": "Casearia Agri In",
    "place": "Torrita Tiberina",
    "paragraphs": [
      "Pecorino Romano is named for Rome, but almost all of it is now made in Sardinia. Production began moving there in the late 1800s, after Rome banned the salting of pecorino in the city’s shops. Casearia Agri In is one of the few dairies still making it near the city, in the Tiber valley north of Rome, inside the Nazzano Tevere-Farfa nature reserve.",
      "Its Deroma pecorino, named for the owner, is made from the milk of Lazio sheep farms, one of them run by the family, with nothing added but rennet and salt. The rind carries the dairy code RM7, marking it as made in the province of Rome. In a Gambero Rosso tasting of Pecorino Romano, it took first place for its powerful, distinctly Roman character."
    ],
    "photos": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy",
        "alt": "Lazio sheep · Tiber valley",
        "caption": "Lazio sheep · Tiber valley"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuAl_5nHHJIzoS-WsCluRQYcsvFaCEJgLpMKhF74uchwSFZaiasRvF2QgOGb8yQIioI-Tl012aRJqnvzUfYVXVIN42AtBrqz67jqjAH3CbxmYm6uEHRkYdah0q_WAQSgW93YHOemOcCRZN921JwihtDRxkKHN7PzTEk88hPG_P2AV7Y_dSVKxmfxeIubOnR3JAqjFS_dXGAzG2xxfQE3VDOGzRjZcEhJ1T-LSazL8n3fCCvhoP3Kr76d",
        "alt": "Pecorino aging room",
        "caption": "Pecorino aging room"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida/AEtjO1XWLjABkN9JNdg2bMlYH0fIp3xRDXJYWo5LVly80wovSC1tTyvX-HHS1Z91q401b7ynxsVkhS-vyRNVTzYxLLT2ewPKyZ1N57DPMd9UpCRVoUk_lHtsprvCectHtmhxNOyZDy6MYysvgWyJSSTLw7Yw1UPq9h1QL-MIHwdcpwKXYxlGNp_XW673nd9VsUbx3Cs0zt7NLyEcNI4GNFIhU0lMAgUvh5IIl2qctPoY_gs89gr5IUNqpbhokFY",
        "alt": "Deroma Pecorino Romano",
        "caption": "Deroma Pecorino Romano"
      }
    ],
    "facts": [
      {
        "label": "Dairy",
        "value": "Tiber valley"
      },
      {
        "label": "Rind code",
        "value": "RM7"
      },
      {
        "label": "Ingredients",
        "value": "Milk, rennet, salt"
      }
    ],
    "productsLabel": "From Casearia Agri In",
    "products": [
      {
        "id": "laz-deroma",
        "name": "Deroma Pecorino Romano DOP",
        "meta": "Wedge",
        "tag": "Rind code RM7",
        "tagTone": "gold",
        "origin": "Torrita Tiberina",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuAl_5nHHJIzoS-WsCluRQYcsvFaCEJgLpMKhF74uchwSFZaiasRvF2QgOGb8yQIioI-Tl012aRJqnvzUfYVXVIN42AtBrqz67jqjAH3CbxmYm6uEHRkYdah0q_WAQSgW93YHOemOcCRZN921JwihtDRxkKHN7PzTEk88hPG_P2AV7Y_dSVKxmfxeIubOnR3JAqjFS_dXGAzG2xxfQE3VDOGzRjZcEhJ1T-LSazL8n3fCCvhoP3Kr76d"
      }
    ]
  },
  "cook": {
    "title": "Cook Lazio",
    "lede": "One classic from scratch and one ten-minute shortcut from Rome.",
    "recipe": {
      "id": "amatriciana",
      "title": "Spaghetti all’amatriciana",
      "serves": "4",
      "time": "about 35 minutes",
      "from": "Amatrice",
      "steps": [
        {
          "title": "Render the guanciale.",
          "body": "Cook the guanciale in the olive oil with the chili in a wide pan over medium heat until the fat runs and the strips turn golden."
        },
        {
          "title": "Add the wine.",
          "body": "Pour in the wine and let it evaporate. Lift out the guanciale and set it aside so it stays crisp."
        },
        {
          "title": "Cook the tomatoes.",
          "body": "Add the tomatoes and a pinch of salt to the pan and simmer for about 10 minutes, until slightly thickened. Return the guanciale to the sauce."
        },
        {
          "title": "Toss and serve.",
          "body": "Cook the spaghetti in salted water until al dente, then drain. Off the heat, toss with the sauce and most of the Pecorino, and serve with the rest on top."
        }
      ],
      "touch": "Taking the guanciale out before the tomatoes go in is the Amatrice way: left in the sauce, it boils instead of staying crisp. Finish with [Pecorino Romano](product:laz-pecorino), never Parmigiano.",
      "shoppingList": [
        "400 g [spaghetti](product:laz-spaghetti) or bucatini",
        "125 g [guanciale](product:laz-guanciale)",
        "1 tbsp [extra-virgin olive oil](product:laz-olio-sabina)",
        "A small dried chili",
        "A splash of dry white wine",
        "400 g [peeled San Marzano tomatoes](product:laz-pelati)",
        "80 g [Pecorino Romano DOP](product:laz-pecorino)",
        "Salt"
      ],
      "products": [
        {
          "id": "laz-guanciale",
          "name": "Guanciale",
          "meta": "Whole piece",
          "tag": "Cured cheek",
          "tagTone": "neutral",
          "origin": "Amatrice",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
        },
        {
          "id": "laz-pecorino",
          "name": "Pecorino Romano DOP made in Lazio",
          "meta": "Wedge",
          "tag": "DOP",
          "tagTone": "green",
          "origin": "Lazio",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
        }
      ],
      "schema": {
        "yield": "4 servings",
        "prepTime": "PT10M",
        "cookTime": "PT25M",
        "totalTime": "PT35M",
        "ingredients": [
          "400 g spaghetti (bucatini in Rome)",
          "125 g guanciale, cut into short strips",
          "1 tablespoon extra-virgin olive oil",
          "A small dried chili",
          "A splash of dry white wine",
          "400 g peeled San Marzano tomatoes, crushed by hand",
          "80 g Pecorino Romano DOP, finely grated, plus more to serve",
          "Salt"
        ]
      },
      "imageCaption": "Amatrice classic · about 35 minutes",
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
    },
    "shortcut": {
      "title": "Ten minutes in Rome",
      "body": "Cacio e pepe needs only pasta, Pecorino Romano, and black pepper. Cook tonnarelli or spaghetti in a little barely salted water, since the cheese brings plenty of salt. Toast plenty of cracked pepper in a dry pan. Stir finely grated pecorino with a ladle of slightly cooled pasta water into a smooth cream, then toss with the drained pasta and pepper off the heat.",
      "products": [
        {
          "id": "laz-pecorino",
          "name": "Pecorino Romano DOP made in Lazio",
          "meta": "Wedge",
          "tag": "DOP",
          "tagTone": "green",
          "origin": "Lazio",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
        },
        {
          "id": "laz-spaghetti",
          "name": "Spaghetti",
          "meta": "500 g",
          "tag": "Pantry staple",
          "tagTone": "neutral",
          "origin": "For cacio e pepe",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
        }
      ],
      "eyebrow": "Cacio e pepe shortcut",
      "button": "Get the cacio e pepe pair"
    },
    "eyebrow": "Terroir kitchen"
  },
  "readTheLabel": "“Romano” on its own is not Pecorino Romano DOP, and porchetta or ricotta sold without Ariccia IGP or Romana DOP can be made anywhere. Check the place of production, the ingredient list, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Lazio home",
    "body": "A Roman table runs on a few staples used with confidence. We’ve gathered eight ingredients from this story into one set: enough for amatriciana, cacio e pepe, carbonara, and a porchetta sandwich.",
    "button": "Add the Lazio pantry set",
    "products": [
      {
        "id": "laz-pecorino",
        "name": "Pecorino Romano DOP",
        "meta": "Made in Lazio",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Lazio",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
      },
      {
        "id": "laz-guanciale",
        "name": "Guanciale",
        "meta": "Whole piece",
        "tag": "Cured cheek",
        "tagTone": "neutral",
        "origin": "Amatrice",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
      },
      {
        "id": "laz-olio-sabina",
        "name": "Sabina DOP olive oil",
        "meta": "Bottle",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Sabina hills",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBU3O0qjc03YxJyeGreRcupZwz17tHGJHD5wHNfJ0p7EiTyJysIhlTpcXRQlU_9eU7JtZ9vYmMG1QkxPwTjQ1M4HKGKnp6G_wR77H9L92h6P1WFxFkdXdSnxzj1rYtIuYOHP3y1GFX7qLppRyyiuuFh143IYV753SuLjQLV1IN1Ux5-xM3ZgRGf1d7Bb4jjk31RDCfQ-Hqhx2JvDbAWSwuRQ51e8ensDs4uGSlEgC2bmSQ1QRP27a6w"
      },
      {
        "id": "laz-spaghetti",
        "name": "Spaghetti",
        "meta": "500 g",
        "tag": "Pantry staple",
        "tagTone": "neutral",
        "origin": "For cacio e pepe",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
      },
      {
        "id": "laz-bucatini",
        "name": "Bucatini",
        "meta": "500 g",
        "tag": "Pantry staple",
        "tagTone": "neutral",
        "origin": "For amatriciana",
        "img": "https://lh3.googleusercontent.com/aida/AEtjO1XH3ztoRKkRdH9fjeZ7zGSvG7Z5lVtTJVcPxnxpnLlAyQgVptrChhD3aGe8eyAqVjd0t1vRNzKDPEjlQjVZ-Eo-tmswH65MCECJXC1QT7I-lJ124iYZKFjt2HHrSOK_zqbBcVos3Jg8CZW5bSAW6GQ8NC2GTMPbtiRRx9g9oxW6L3gS7A49QEWznJIYITZoOmWrGC6LiYi1Idw4k1vthGnlg7ZvP6f6Il5_lhaoAml5HXicCLGHPJRAbg"
      },
      {
        "id": "laz-pelati",
        "name": "Peeled San Marzano tomatoes",
        "meta": "Can",
        "tag": "San Marzano",
        "tagTone": "neutral",
        "origin": "For amatriciana",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBRbfN3ec2j13IDm1PE1_z3XTGyEgtwGUUYTjZPOlr_XSHYQdySu4eni5eOXqrKG29Cl-GM6BIwsg8jt21ndJ7dF_v2T_t34PpNXh1wUwoN-V5yhIMZncJmE1BWFeStFpQRFpjHHXybHWqPAayZearG1M3sELhCkVAU7iqwesHOgc4x6uRnjfY8lqlAzgNDJ36Qk1zYHDXFvRI-S0rfWP25ciszdOMP1PMUS7ci3vjNMzI863KvNVVu"
      },
      {
        "id": "laz-porchetta",
        "name": "Porchetta di Ariccia IGP",
        "meta": "Sliced",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "Ariccia",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuAPcC0a36PdQKRFN67N9n4iWBfhvVaOYD4lAqKygnUjTrscttDOYLVoI8x1mJHXJybsSr0etHTwY4pU0A01kN4o1IfpMOvEBAXOIrB8eZ11ou4LrSyCjELVvYNkcTxy0DtPWugtK_maKrpF1S29ogN-YzCyzhDGWnfH4HdQ3jXFuv8h73Z3GNxqFxYhHzG5euOwWXNcUn83KLa8hc2NC2nQFY3TdtlSPgMj0otF-z9Yn-C7fprrBLWX"
      },
      {
        "id": "laz-ricotta",
        "name": "Ricotta Romana DOP",
        "meta": "Fresh",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Lazio",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDqmbMaaWotLnqd7h746aY6nsFALWzvjqbkrArYOxWH0YaS3R83fCAwa_zPopqfTC19b2rndKbS0X7Nj0tC5mW1iAtX3KmPVZsS3ZsFiP0HIvHEAkj179Jhwx4pyyijMtfmbJUWOuzPdOd5gogteAa_cNezVDsRpXU2pkT0vo_nXW3O0JbzNZUqjoeSjms0C0zSftPsOjvMIjrOBbhGg700irDxZk2EN0lXZPe4eI9aZMgxn7bkIl7z"
      }
    ],
    "eyebrow": "Limited curation · Parcel N° 08"
  },
  "about": [
    "Casa Taglia explores Italy through its food, traditions, and places. Protected designations (DOP, IGP, and STG) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "ARSIAL (Regione Lazio) product sheets for Pecorino Romano DOP, Porchetta di Ariccia IGP, and Sabina DOP oil, and the Amatriciana Tradizionale STG specification; Ricotta Romana DOP production specification (European Commission); Turismo Roma on Pecorino Romano and coda alla vaccinara; Gambero Rosso on Pecorino Romano producers, Casearia Agri In, and Ricotta Romana; Michelin Guide on Roman artichokes; Wikipedia on amatriciana and Pecorino Romano."
};

export default lazio;
