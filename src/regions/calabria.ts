import type { RegionStory } from './types';

// Photos are stand-ins from elsewhere on the site, to be replaced.
// Content from the Calabria story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const calabria: RegionStory = {
  "slug": "calabria",
  "name": "Calabria",
  "seoTitle": "Calabrian Food and Pantry Ingredients | Italy Region by Region | La Taglia",
  "seoDescription": "Cook Calabria from its pantry: ’nduja, Tropea red onions, Calabrian chili, Caciocavallo Silano, licorice and bergamot, with a recipe for pasta con la ’nduja.",
  "kicker": "Region twelve: the toe of the boot",
  "subtitle": "Chili, red onions, and a coastline of citrus.",
  "hero": {
    "color": "#A8321F",
    "colorDeep": "#7A2216",
    "dossier": "Terroir archive · Dossier N° 12",
    "badge": "Kitchen of preserving",
    "metrics": [
      {
        "icon": "waves",
        "label": "Seas",
        "value": "Tyrrhenian and Ionian"
      },
      {
        "icon": "terrain",
        "label": "Mountains",
        "value": "Sila and Aspromonte"
      },
      {
        "icon": "history_edu",
        "label": "Founders",
        "value": "Greek colonists"
      },
      {
        "icon": "local_dining",
        "label": "Signature",
        "value": "’Nduja di Spilinga"
      }
    ],
    "heritage": "Chili-cured heritage",
    "imageCaption": {
      "title": "The Sila plateau",
      "body": "The Sila range runs down Calabria’s mountainous spine, home of Caciocavallo Silano."
    },
    "imageTag": "Sila plateau, Calabria",
    "heritageNote": "the toe of the boot",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCNrs681gN72nFEfp-6phdUsxZxTsiO1DTw_3yZcdEFNU98YNQPmUajjE04nmVN4-RJ7ArH45kzIjCheTeGHKsXZHHgSSeEPDs7vfU5J_YuLcXOVSmZuug76j9ZbGqjBE_2ilQ5fAfc2ZvCHtvPSUCQEzJSserRsRDgiw68pBqtx51V5y462K-rzBplOBNLsun6-9Fc1x4JRjWVZCL3MJkFaRLkPaT0iI34d0ItYlP6TjUThtVOv54S=w1600",
    "imageAlt": "The Sila range runs down Calabria’s mountainous spine, home of Caciocavallo Silano."
  },
  "intro": [
    "Calabria is the toe of Italy’s boot, a long, mountainous peninsula between the Tyrrhenian Sea to the west and the Ionian Sea to the east, with the Sila and Aspromonte ranges running down its spine. Greek colonists founded cities along its coasts in antiquity, and Normans and, much later, the French were among those who ruled here. For most Calabrians, though, life was rural and hard, and the kitchen was built on preserving: pork salted and cured for the year, and chili, which by the early 1800s was already being used across the region to preserve meat and fish. Along the coasts grow sweet red onions, citrus, and the bergamot that perfumes Earl Grey tea; on the Ionian shore, licorice grows wild. The result is bold, fiery, generous food that makes the most of every ingredient.",
    "Calabria is having a moment, and its flavors deserve it. Start with the ingredients that define the region, learn the dishes they make possible, and meet a family that has been making licorice since 1731."
  ],
  "pantry": {
    "lede": "Six ingredients behind Calabria’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "’Nduja",
        "place": "Spilinga, on the Poro plateau near Tropea",
        "body": "A soft, spreadable pork salami made from fatty cuts of pork, salt, and a large share of Calabrian chili, which colors it deep red and long served as its preservative. It melts into sauces or spreads on warm bread.",
        "lookFor": "’nduja made in Spilinga, with pork, chili, and salt as the only main ingredients.",
        "products": [
          {
            "id": "cal-nduja",
            "name": "’Nduja di Spilinga",
            "meta": "Jar",
            "tag": "Chili-cured",
            "tagTone": "red",
            "origin": "Spilinga",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCC3hXgtO47-HYlfWhixDmIvGeTORmhXWh-0mhqJFRiG405EoadpsWrNrhqsLIFFpDAqYH1QIdFzwMR73JQb-HxmTHFSFFnC0WNxh4tOQIEZA_nZacNem5iBUWjnfVgmUFcjBLMehUCESqr6VmxEEbhF2pMviwfwNweiWbDiMgyIPAj7_QO7izWh74iILXcxADKdMDXfSyYvtfRhhGhUHPdVyTJPDYQm_d646dur2oNjr8M78rgogJx=w1600"
          }
        ]
      },
      {
        "title": "Red onions",
        "place": "The Tyrrhenian coast around Tropea",
        "body": "Deep purple and remarkably sweet, grown on sandy soils along the coast and traditionally braided to hang and keep for months. Sweet enough to eat raw.",
        "lookFor": "Cipolla Rossa di Tropea Calabria IGP.",
        "products": [
          {
            "id": "cal-cipolla-tropea",
            "name": "Cipolla Rossa di Tropea IGP",
            "meta": "Braid",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Tropea",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq=w1600"
          }
        ]
      },
      {
        "title": "Chili",
        "place": "Across the region",
        "body": "Peperoncino is everywhere in Calabria, dried, crushed, ground, or kept in oil. The town of Diamante, home of the Italian Chili Academy, holds a chili festival every September.",
        "lookFor": "peperoncino grown and dried in Calabria.",
        "products": [
          {
            "id": "cal-peperoncino",
            "name": "Calabrian dried chili",
            "meta": "Jar",
            "tag": "Chili",
            "tagTone": "red",
            "origin": "Across the region",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDUkq6TgfKOwjF2ahABZJgDKtC894gDZY8GKNiQPJ_MoIkulL3tvTpZl1ouHlSnOUIzStVyQn1gA36A68G7N7dOBGYe_Prtvhk5490gOHHUtwKMidPAvub6mNTxg1jTXprEtNacMowXVRBQqPgeiij-358JiScZ_OjUDH94BnwD-CZSGmZ1ztElrosH9nHqweXxYn7-z8jRTnONLS2ZON9OLtS_uR_CVysQEzR404aqkOMi79NEqmAN=w1600"
          }
        ]
      },
      {
        "title": "Caciocavallo Silano",
        "place": "The Sila plateau and the southern Apennines",
        "body": "A stretched-curd cow’s-milk cheese, mild and sweet when young and sharper with age. Its name comes from the way pairs of cheeses are tied together and hung “on horseback” over a pole to ripen.",
        "lookFor": "Caciocavallo Silano DOP. “Extra” means aged at least four months.",
        "products": [
          {
            "id": "cal-caciocavallo",
            "name": "Caciocavallo Silano DOP",
            "meta": "Whole",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Sila plateau",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy=w1600"
          }
        ]
      },
      {
        "title": "Licorice",
        "place": "The Ionian coast",
        "body": "Licorice grows wild along Calabria’s Ionian shore, and its deep roots are boiled down into pure, glossy black licorice, a trade the region has exported for centuries.",
        "lookFor": "Liquirizia di Calabria DOP.",
        "products": [
          {
            "id": "cal-liquirizia",
            "name": "Liquirizia di Calabria DOP",
            "meta": "Tin",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Ionian coast",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCMFgCdqzLvdJxYGaDAFlEDMYMT857D05ZZADK6F6LJbmst8APC4Nl4JYWyknq_CXy-wFoodx0MUTgMC0CntsIT7QemPR1DFgTLpY8U5WaTySi2AMxuyA04SwrYM2r3qDPPxCLOcyksMQ7bLZwM15ouLGkJeE9C1OWinZ6B7mwQYAmW_rezg2MqBTu7ntbCcLZlJzaaNWjiRvS33b7WJEC_xWcEO70o30NIuOjdMNQabBFxLaWU-Jhc=w1600"
          }
        ]
      },
      {
        "title": "Bergamot",
        "place": "The coast of Reggio Calabria, from Scilla to Monasterace",
        "body": "A green-to-yellow citrus whose peel yields a fragrant essential oil, the scent of Earl Grey tea. Calabria is the world’s leading producer, and a few drops of the oil can lift sweet or savory dishes. The fruit also flavors a popular local liqueur.",
        "lookFor": "Bergamotto di Reggio Calabria DOP on essential oil.",
        "products": [
          {
            "id": "cal-bergamotto",
            "name": "Bergamot marmalade",
            "meta": "Jar",
            "tag": "Bergamot",
            "tagTone": "neutral",
            "origin": "Reggio Calabria",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuC66Qz_O1vxGNBZSyhKBG7E11V9J_ynfSiGuUL5GLDjS-pp7xx0eqw_gmnVIRMXOEiaJ2wLNz9eDe-dRv1HJffGFDGWKIH-9TlU0UBDIw940qDCkUbeXjZjdsjLtKuD3B7Gg0GWHngYfm0d0u9xYun-FrttGnejAkzJLWV7HyuC_ZCA_QHWryHtkt4PkqDJFzQjJqtsSDMMGOLlU2E8sTTNiKXafW91SYmjA9P72M1cR5KetKzCi5cq=w1600"
          }
        ]
      }
    ],
    "eyebrow": "Fiery terroir goods"
  },
  "dishes": {
    "lede": "Four dishes Calabria makes its own.",
    "items": [
      {
        "title": "Pasta con la ’nduja",
        "where": "Vibo Valentia",
        "body": "Tropea onion softened in olive oil, ’nduja melted into it, and pasta finished in the pan until glossy and fiery. The region’s best-known pasta.",
        "tip": "[Cook it below](#nduja)",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl=w1600"
      },
      {
        "title": "Stroncatura",
        "where": "Reggio Calabria",
        "body": "A pasta dressed simply with garlic, olive oil, chili, olives, and fennel seeds, served in Reggio Calabria’s traditional trattorias.",
        "note": "Reggio’s trattoria pasta",
        "image": "https://lh3.googleusercontent.com/aida/AEtjO1XH3ztoRKkRdH9fjeZ7zGSvG7Z5lVtTJVcPxnxpnLlAyQgVptrChhD3aGe8eyAqVjd0t1vRNzKDPEjlQjVZ-Eo-tmswH65MCECJXC1QT7I-lJ124iYZKFjt2HHrSOK_zqbBcVos3Jg8CZW5bSAW6GQ8NC2GTMPbtiRRx9g9oxW6L3gS7A49QEWznJIYITZoOmWrGC6LiYi1Idw4k1vthGnlg7ZvP6f6Il5_lhaoAml5HXicCLGHPJRAbg=w1600"
      },
      {
        "title": "Caciocavallo alla piastra",
        "where": "The Sila",
        "body": "Thick slices of caciocavallo cooked in a hot pan until golden outside and soft within. Simple, quick, and very Calabrian.",
        "tip": "[Make it below](#shortcut)",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy=w1600"
      },
      {
        "title": "Torrone di Bagnara",
        "where": "Bagnara Calabra",
        "body": "The nougat of Bagnara Calabra is one of the region’s protected specialties, and a fine way to end a Calabrian meal.",
        "tip": "Look for Torrone di Bagnara IGP.",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuC66Qz_O1vxGNBZSyhKBG7E11V9J_ynfSiGuUL5GLDjS-pp7xx0eqw_gmnVIRMXOEiaJ2wLNz9eDe-dRv1HJffGFDGWKIH-9TlU0UBDIw940qDCkUbeXjZjdsjLtKuD3B7Gg0GWHngYfm0d0u9xYun-FrttGnejAkzJLWV7HyuC_ZCA_QHWryHtkt4PkqDJFzQjJqtsSDMMGOLlU2E8sTTNiKXafW91SYmjA9P72M1cR5KetKzCi5cq=w1600"
      }
    ],
    "eyebrow": "Culinary canon"
  },
  "maker": {
    "name": "Amarelli",
    "place": "Rossano",
    "paragraphs": [
      "In Rossano, on Calabria’s Ionian coast, the Amarelli family has been in the licorice business for centuries. Records show them trading licorice root around 1500, from plants growing wild on their land, and in 1731 they built a concio, an early factory for boiling the roots down into pure licorice.",
      "The company is still family-run, led today by Fortunato Amarelli, and is known for pure licorice sold in small decorated metal tins. The original concio now houses the Giorgio Amarelli Licorice Museum, opened in 2001, which won the Guggenheim Business & Culture Award that same year."
    ],
    "photos": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCMFgCdqzLvdJxYGaDAFlEDMYMT857D05ZZADK6F6LJbmst8APC4Nl4JYWyknq_CXy-wFoodx0MUTgMC0CntsIT7QemPR1DFgTLpY8U5WaTySi2AMxuyA04SwrYM2r3qDPPxCLOcyksMQ7bLZwM15ouLGkJeE9C1OWinZ6B7mwQYAmW_rezg2MqBTu7ntbCcLZlJzaaNWjiRvS33b7WJEC_xWcEO70o30NIuOjdMNQabBFxLaWU-Jhc=w1600",
        "alt": "The 1731 concio · Rossano",
        "caption": "The 1731 concio · Rossano"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuBuOw47CyMWHDfy1LAq7y8_6mlfUhX3sEaCTYRv4qpRLnga9lWW5hwNQ9w_AIrmxk8_0R1H04C8RAhLH9XB9fzSkV-dgKgfS7nbEGJGJK3EuhcwEfgN3tsOD2UPXJNmrmMv9_Wlqx5Tnx0Dg7F_cEC1I3aWKH9xxJQ_SoJsdPaPxfUek-WKbQYSjxR-TxPYHcipLGuNzwiE99IH2fubNMCWvOQYLzXSDW8GSn74soI-lVOr7-Azy12C=w1600",
        "alt": "Licorice roots · Ionian coast",
        "caption": "Licorice roots · Ionian coast"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuA4EH7PBxM5mkGtU_hUOJIWGkBVxZJn4EFpJjF38EOKBU7wo_ddyMCFm271EacOGO5w4Xv6DGSB-7_saGCFJU5iM16suJDjSS0a_VzFQbhUmwPL8egJ5XILWwdPmz-_POZdud-1IbUhFmWHh2snwuV7-TAFb5uKZfOhuCAAC57-6VjgZFhqO7vaYO8y1vEORke8lGfQXTjEtIhhnE1cknP388wuircWvsS4xPwHGOMZ7oIWF5WLtCf7=w1600",
        "alt": "Pure licorice in metal tins",
        "caption": "Pure licorice in metal tins"
      }
    ],
    "facts": [
      {
        "label": "Concio built",
        "value": "1731"
      },
      {
        "label": "Based in",
        "value": "Rossano"
      },
      {
        "label": "Museum",
        "value": "Since 2001"
      }
    ],
    "productsLabel": "From Amarelli",
    "products": [
      {
        "id": "cal-amarelli",
        "name": "Amarelli pure licorice",
        "meta": "Tin",
        "tag": "Since 1731",
        "tagTone": "gold",
        "origin": "Rossano",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBuOw47CyMWHDfy1LAq7y8_6mlfUhX3sEaCTYRv4qpRLnga9lWW5hwNQ9w_AIrmxk8_0R1H04C8RAhLH9XB9fzSkV-dgKgfS7nbEGJGJK3EuhcwEfgN3tsOD2UPXJNmrmMv9_Wlqx5Tnx0Dg7F_cEC1I3aWKH9xxJQ_SoJsdPaPxfUek-WKbQYSjxR-TxPYHcipLGuNzwiE99IH2fubNMCWvOQYLzXSDW8GSn74soI-lVOr7-Azy12C=w1600"
      }
    ]
  },
  "cook": {
    "title": "Cook Calabria",
    "lede": "One classic from scratch and one ten-minute shortcut from the Sila.",
    "recipe": {
      "id": "nduja",
      "title": "Pasta con la ’nduja e cipolla di Tropea",
      "serves": "4",
      "time": "about 30 minutes",
      "from": "Vibo Valentia",
      "steps": [
        {
          "title": "Soften the onion.",
          "body": "In a wide pan, cook the onion gently in the olive oil over low heat until soft and glossy. Don’t let it brown."
        },
        {
          "title": "Melt the ’nduja.",
          "body": "Add the ’nduja and stir until it melts into the oil."
        },
        {
          "title": "Cook the pasta.",
          "body": "Boil the pasta in salted water and drain it about 2 minutes before the package time, keeping a ladle of the cooking water."
        },
        {
          "title": "Finish in the pan.",
          "body": "Add the pasta to the pan with a splash of the reserved water and toss over the heat until it is glossy and coated."
        }
      ],
      "touch": "About 80–100 g of [’nduja](product:cal-nduja) is plenty for four; it is very hot, so start with less if you’re unsure. The sweetness of a true [Tropea onion](product:cal-cipolla-tropea) is what balances it.",
      "shoppingList": [
        "320 g [fileja](product:cal-fileja) or rigatoni",
        "1 [red Tropea onion](product:cal-cipolla-tropea)",
        "80–100 g [’nduja](product:cal-nduja)",
        "2 tbsp extra-virgin olive oil",
        "Salt"
      ],
      "products": [
        {
          "id": "cal-nduja",
          "name": "’Nduja di Spilinga",
          "meta": "Jar",
          "tag": "Chili-cured",
          "tagTone": "red",
          "origin": "Spilinga",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCC3hXgtO47-HYlfWhixDmIvGeTORmhXWh-0mhqJFRiG405EoadpsWrNrhqsLIFFpDAqYH1QIdFzwMR73JQb-HxmTHFSFFnC0WNxh4tOQIEZA_nZacNem5iBUWjnfVgmUFcjBLMehUCESqr6VmxEEbhF2pMviwfwNweiWbDiMgyIPAj7_QO7izWh74iILXcxADKdMDXfSyYvtfRhhGhUHPdVyTJPDYQm_d646dur2oNjr8M78rgogJx=w1600"
        },
        {
          "id": "cal-fileja",
          "name": "Fileja",
          "meta": "500 g",
          "tag": "Pantry staple",
          "tagTone": "neutral",
          "origin": "Calabria",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr=w1600"
        }
      ],
      "schema": {
        "yield": "4 servings",
        "prepTime": "PT10M",
        "cookTime": "PT20M",
        "totalTime": "PT30M",
        "ingredients": [
          "320 g short pasta, such as fileja or rigatoni",
          "1 red Tropea onion, finely chopped",
          "80–100 g ’nduja",
          "2 tablespoons extra-virgin olive oil",
          "Salt"
        ]
      },
      "imageCaption": "Vibo Valentia classic · about 30 minutes",
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl=w1600"
    },
    "shortcut": {
      "title": "Ten minutes in the Sila",
      "body": "Cut Caciocavallo Silano into slices about 2 cm thick. Heat a heavy pan until evenly hot, then cook the slices for a minute or two on each side, until golden outside and soft within. Serve straight away with crusty bread and a few slices of raw Tropea onion.",
      "products": [
        {
          "id": "cal-caciocavallo",
          "name": "Caciocavallo Silano DOP",
          "meta": "Whole",
          "tag": "DOP",
          "tagTone": "green",
          "origin": "Sila plateau",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy=w1600"
        },
        {
          "id": "cal-cipolla-tropea",
          "name": "Cipolla Rossa di Tropea IGP",
          "meta": "Braid",
          "tag": "IGP",
          "tagTone": "green",
          "origin": "Tropea",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq=w1600"
        }
      ],
      "eyebrow": "Ten minutes in the Sila",
      "button": "Get the Sila pair"
    },
    "eyebrow": "Terroir kitchen"
  },
  "readTheLabel": "“Calabrian-style” chili or ’nduja can be made anywhere, and “red onion” is not Cipolla Rossa di Tropea IGP. Check the place of production, the ingredient list, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Calabria home",
    "body": "A Calabrian table is generous, fiery, and built on what keeps. We’ve gathered eight ingredients from this story into one set: enough for pasta con la ’nduja, a pan of caciocavallo, and licorice to finish.",
    "button": "Add the Calabria pantry set",
    "products": [
      {
        "id": "cal-nduja",
        "name": "’Nduja di Spilinga",
        "meta": "Jar",
        "tag": "Chili-cured",
        "tagTone": "red",
        "origin": "Spilinga",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCC3hXgtO47-HYlfWhixDmIvGeTORmhXWh-0mhqJFRiG405EoadpsWrNrhqsLIFFpDAqYH1QIdFzwMR73JQb-HxmTHFSFFnC0WNxh4tOQIEZA_nZacNem5iBUWjnfVgmUFcjBLMehUCESqr6VmxEEbhF2pMviwfwNweiWbDiMgyIPAj7_QO7izWh74iILXcxADKdMDXfSyYvtfRhhGhUHPdVyTJPDYQm_d646dur2oNjr8M78rgogJx=w1600"
      },
      {
        "id": "cal-cipolla-tropea",
        "name": "Tropea onions IGP",
        "meta": "Braid",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "Tropea",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq=w1600"
      },
      {
        "id": "cal-peperoncino",
        "name": "Calabrian dried chili",
        "meta": "Jar",
        "tag": "Chili",
        "tagTone": "red",
        "origin": "Across the region",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDUkq6TgfKOwjF2ahABZJgDKtC894gDZY8GKNiQPJ_MoIkulL3tvTpZl1ouHlSnOUIzStVyQn1gA36A68G7N7dOBGYe_Prtvhk5490gOHHUtwKMidPAvub6mNTxg1jTXprEtNacMowXVRBQqPgeiij-358JiScZ_OjUDH94BnwD-CZSGmZ1ztElrosH9nHqweXxYn7-z8jRTnONLS2ZON9OLtS_uR_CVysQEzR404aqkOMi79NEqmAN=w1600"
      },
      {
        "id": "cal-fileja",
        "name": "Fileja",
        "meta": "500 g",
        "tag": "Pantry staple",
        "tagTone": "neutral",
        "origin": "Calabria",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr=w1600"
      },
      {
        "id": "cal-caciocavallo",
        "name": "Caciocavallo Silano DOP",
        "meta": "Whole",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Sila plateau",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy=w1600"
      },
      {
        "id": "cal-soppressata",
        "name": "Soppressata di Calabria DOP",
        "meta": "Whole",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Calabria",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo=w1600"
      },
      {
        "id": "cal-bergamotto",
        "name": "Bergamot marmalade",
        "meta": "Jar",
        "tag": "Bergamot",
        "tagTone": "neutral",
        "origin": "Reggio Calabria",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuC66Qz_O1vxGNBZSyhKBG7E11V9J_ynfSiGuUL5GLDjS-pp7xx0eqw_gmnVIRMXOEiaJ2wLNz9eDe-dRv1HJffGFDGWKIH-9TlU0UBDIw940qDCkUbeXjZjdsjLtKuD3B7Gg0GWHngYfm0d0u9xYun-FrttGnejAkzJLWV7HyuC_ZCA_QHWryHtkt4PkqDJFzQjJqtsSDMMGOLlU2E8sTTNiKXafW91SYmjA9P72M1cR5KetKzCi5cq=w1600"
      },
      {
        "id": "cal-amarelli",
        "name": "Amarelli pure licorice",
        "meta": "Tin",
        "tag": "Since 1731",
        "tagTone": "gold",
        "origin": "Rossano",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBuOw47CyMWHDfy1LAq7y8_6mlfUhX3sEaCTYRv4qpRLnga9lWW5hwNQ9w_AIrmxk8_0R1H04C8RAhLH9XB9fzSkV-dgKgfS7nbEGJGJK3EuhcwEfgN3tsOD2UPXJNmrmMv9_Wlqx5Tnx0Dg7F_cEC1I3aWKH9xxJQ_SoJsdPaPxfUek-WKbQYSjxR-TxPYHcipLGuNzwiE99IH2fubNMCWvOQYLzXSDW8GSn74soI-lVOr7-Azy12C=w1600"
      }
    ],
    "eyebrow": "Limited curation · Parcel N° 12"
  },
  "about": [
    "La Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "ARSAC (Regione Calabria) guide to Calabrian DOP and IGP products; Italia.it on bergamot and Calabrian products; Caciocavallo Silano DOP production specification and ONAF product sheet; Italy Segreta on Caciocavallo Silano; GreenMe on Cipolla Rossa di Tropea IGP; I Calabresi, Gambero Rosso, Vice, and ICE on ’nduja and Calabrian chili; Dissapore on pasta con la ’nduja and on Diamante and stroncatura; Fortune Italia, We Wealth, Il Fatto Alimentare, Gazzetta del Gusto, and Artribune on Amarelli."
};

export default calabria;
