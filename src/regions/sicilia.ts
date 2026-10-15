import type { RegionStory } from './types';

// Photos are stand-ins from elsewhere on the site, to be replaced.
// Content from the Sicilia story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const sicilia: RegionStory = {
  "slug": "sicilia",
  "name": "Sicilia",
  "seoTitle": "Sicilian Food and Pantry Ingredients | Italy Region by Region | La Taglia",
  "seoDescription": "Cook Sicily from its pantry: Bronte pistachios, Pantelleria capers, Avola almonds, Modica chocolate and the dishes they make, with a recipe for pasta alla Norma.",
  "kicker": "Region one: the island",
  "subtitle": "A table shaped by the sea, the sun and centuries of exchange.",
  "hero": {
    "color": "#1B3C8C",
    "colorDeep": "#132B66",
    "dossier": "Terroir archive · Dossier N° 01",
    "badge": "Mediterranean crossroads",
    "metrics": [
      {
        "icon": "volcano",
        "label": "Landmark",
        "value": "Mount Etna"
      },
      {
        "icon": "waves",
        "label": "Coastline",
        "value": "Ringed by sea"
      },
      {
        "icon": "sailing",
        "label": "Strait",
        "value": "Strait of Messina"
      },
      {
        "icon": "restaurant",
        "label": "Signature",
        "value": "Pasta alla Norma"
      }
    ],
    "heritage": "Centuries of exchange",
    "imageCaption": {
      "title": "Mount Etna",
      "body": "Europe’s tallest active volcano rises over the east, above volcanic slopes and sunbaked plains."
    },
    "imageTag": "Mount Etna · eastern Sicily",
    "heritageNote": "agrodolce",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDGGoAAQMTy7Z0xxOurJ9rSdAn_aIXBpPyaZT4-pJobqKZFx0YwSHOXzJYeVtpoZK7Eix3hQtLG8HmHvhY7RP99IsWjPqkcqcg4G6Y2E8mA5UiDPKkzgvfKMpIu8oiUPtxDKKyeKnXGREk-g3sc6DyXERzE4g_XviNtq_nR3_DvtVOFcZ4NWGpYZ07vymz4nwD_yhs_3TbzMRJGZE2JbANG9q65hDdbQvemjniv9VbFsPNawHKXsC05",
    "imageAlt": "Europe’s tallest active volcano rises over the east, above volcanic slopes and sunbaked plains."
  },
  "intro": [
    "Sicily sits at the toe of Italy’s boot, separated from Calabria by the narrow Strait of Messina and closer to the coast of Tunisia than to Naples. It is the largest island in the Mediterranean: hot, dry, and ringed by sea, with Mount Etna, Europe’s tallest active volcano, rising over the east. That position made it a crossroads. Greeks planted olives and vines, Arabs brought citrus, sugar cane, and saffron, and Spanish rule carried tomatoes and cacao from the Americas. Sicilians absorbed all of it, farming volcanic slopes and sunbaked plains and fishing the waters on every side. The result is a cuisine of sea and sun, thrifty and festive at once, where North African couscous and Spanish-era chocolate sit comfortably beside the pasta.",
    "Sicily tastes of many things at once: bright citrus and tomato, toasted almonds, sea salt, wild fennel, and the surprise of raisins folded into savory dishes. The simplest ingredients here carry a remarkable amount of history.",
    "The best way to know a region is to cook from its pantry. Start with the ingredients that define Sicily, learn the dishes they make possible, and meet one of the families putting the island into jars."
  ],
  "pantry": {
    "lede": "Six ingredients behind Sicily’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Pistachio",
        "place": "Bronte, on the slopes of Etna",
        "body": "Grown in volcanic soil, Bronte pistachios are vivid green with a concentrated, almost resinous flavor. They go into savory pestos as readily as pastries and spoonable creams.",
        "lookFor": "Pistacchio Verde di Bronte DOP. “Sicilian pistachio” alone guarantees nothing.",
        "products": [
          {
            "id": "sic-pistachios-bronte",
            "name": "Bronte pistachios",
            "meta": "Shelled",
            "tag": "Volcanic soil",
            "tagTone": "gold",
            "origin": "Bronte",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuA50Y5nKfTahqDmQf6hgNWCLr7xZfxXGLEW3FD8w3BDW2gRLb_IiV_nyWmxu4U106llOMKtCYFK1PawL1oLPwA4ttUc2Ss1nU_NtWixdonqSg4uaTh0syy92HCx4spmsfNjNgTIfZoX66c-zy9WapcF4Jf7FkV1OXPm27VfjqMfLWKox5YDawHhKeorL_LFcRqb5CueBUMSM-XK8mj20hs5Q-lb47vTDEbKxW1Wh7H_wZK1UrDiogAI"
          },
          {
            "id": "sic-pistachio-cream",
            "name": "Sicilian pistachio cream",
            "meta": "Jar",
            "tag": "Sweet cream",
            "tagTone": "neutral",
            "origin": "Sicily",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDszTSe7WpUNoo8zbA72r8hbr_jQcjEikm1pi8jJTxXjwG3mDZ6lXA9Zr5GWeOwlqGj4EohsChEsPyZjaf_3rlzl-SLsygOJOK-qSrJOz5JkOLVTmWfmLKhoHtD25TeCHHySTfUtj75J-GQWOknJUJZJ-Te7qYQii7dmYNu2rMcU9hD7YwkvNNDwM1I2VcCmVyWMkreZr9Pf5B_FqECmszFxT1EmS1ezyL1li1DGxIubbTT6Gh0tTmU"
          }
        ]
      },
      {
        "title": "Tomato",
        "place": "Pachino and the southeast",
        "body": "Small, sun-ripened tomatoes with high sugar and lively acidity. A good passata, a jar of datterini, or a few sun-dried tomatoes can carry a whole plate of pasta.",
        "lookFor": "Pomodoro di Pachino IGP.",
        "products": [
          {
            "id": "sic-sundried-tomatoes",
            "name": "Sun-dried cherry tomatoes",
            "meta": "Jar, in oil",
            "tag": "In oil",
            "tagTone": "neutral",
            "origin": "Sciacca",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBRbfN3ec2j13IDm1PE1_z3XTGyEgtwGUUYTjZPOlr_XSHYQdySu4eni5eOXqrKG29Cl-GM6BIwsg8jt21ndJ7dF_v2T_t34PpNXh1wUwoN-V5yhIMZncJmE1BWFeStFpQRFpjHHXybHWqPAayZearG1M3sELhCkVAU7iqwesHOgc4x6uRnjfY8lqlAzgNDJ36Qk1zYHDXFvRI-S0rfWP25ciszdOMP1PMUS7ci3vjNMzI863KvNVVu"
          },
          {
            "id": "sic-datterino-sauce",
            "name": "Datterino tomato sauce",
            "meta": "Jar",
            "tag": "Pantry staple",
            "tagTone": "neutral",
            "origin": "Southeast Sicily",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCFjvRWa-DBPlxV_S8Ks7GNA5P4X6i1CFTAJ7C4mSoGwQ00mOour74TvAfHythsLwS0k-LIo1djI_mqXWWAg5aclBYTgdd_6u4WlUbPsC_rx5ZsFnUG_PsDzsy4gdpU9znzPs83DjfI9VlpJwwTuHEUxq_WAU3pQ-XsuL72Bk4zcV7x_Ef_q01OARW3aAl4aiqgIARwJWA0Z8KD1qj5MQHPM_2gtt-Lh7igH3xqg1EWe7RYSMeb9efu"
          }
        ]
      },
      {
        "title": "Capers",
        "place": "Pantelleria",
        "body": "Cured in sea salt rather than brine, which keeps their floral character. Soak, rinse, and add to caponata, tomato sauces, or fish. A little goes a long way.",
        "lookFor": "Cappero di Pantelleria IGP, packed in salt.",
        "products": [
          {
            "id": "sic-capers-pantelleria",
            "name": "Pantelleria IGP capers",
            "meta": "Salt-packed",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Pantelleria",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
          },
          {
            "id": "sic-castelvetrano-olives",
            "name": "Castelvetrano olives",
            "meta": "Jar",
            "tag": "Nocellara",
            "tagTone": "neutral",
            "origin": "Valle del Belice",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr"
          }
        ]
      },
      {
        "title": "Almond",
        "place": "Avola, near Siracusa",
        "body": "The flat Pizzuta d’Avola is the backbone of Sicilian sweets, from marzipan to almond granita, and the base of Trapani’s raw tomato-and-almond pesto.",
        "lookFor": "the Avola name on the ingredient list, not just “Sicilian almonds.”",
        "products": [
          {
            "id": "sic-pesto-trapanese",
            "name": "Pesto alla trapanese",
            "meta": "With Avola almonds",
            "tag": "Avola almonds",
            "tagTone": "neutral",
            "origin": "Sciacca",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo"
          }
        ]
      },
      {
        "title": "Olive oil",
        "place": "Across the island",
        "body": "Where Sicilian cooking starts. Styles run from gently fruity Biancolilla to grassy, peppery Nocellara del Belice, the same variety sold as Castelvetrano olives.",
        "lookFor": "Val di Mazara, Monti Iblei, or Valle del Belice DOP, with a recent harvest date.",
        "products": [
          {
            "id": "sic-evoo-dop",
            "name": "Sicilian DOP extra-virgin olive oil",
            "meta": "Bottle",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Across the island",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBU3O0qjc03YxJyeGreRcupZwz17tHGJHD5wHNfJ0p7EiTyJysIhlTpcXRQlU_9eU7JtZ9vYmMG1QkxPwTjQ1M4HKGKnp6G_wR77H9L92h6P1WFxFkdXdSnxzj1rYtIuYOHP3y1GFX7qLppRyyiuuFh143IYV753SuLjQLV1IN1Ux5-xM3ZgRGf1d7Bb4jjk31RDCfQ-Hqhx2JvDbAWSwuRQ51e8ensDs4uGSlEgC2bmSQ1QRP27a6w"
          }
        ]
      },
      {
        "title": "Chocolate",
        "place": "Modica, in the Ragusa hills",
        "body": "Worked at low temperature so the sugar never fully melts, Modica chocolate keeps a crystalline, sandy snap. Often flavored simply, with cinnamon, vanilla, or orange.",
        "lookFor": "Cioccolato di Modica IGP.",
        "products": [
          {
            "id": "sic-modica-chocolate",
            "name": "Cioccolato di Modica IGP",
            "meta": "Bar",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Modica",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuC66Qz_O1vxGNBZSyhKBG7E11V9J_ynfSiGuUL5GLDjS-pp7xx0eqw_gmnVIRMXOEiaJ2wLNz9eDe-dRv1HJffGFDGWKIH-9TlU0UBDIw940qDCkUbeXjZjdsjLtKuD3B7Gg0GWHngYfm0d0u9xYun-FrttGnejAkzJLWV7HyuC_ZCA_QHWryHtkt4PkqDJFzQjJqtsSDMMGOLlU2E8sTTNiKXafW91SYmjA9P72M1cR5KetKzCi5cq"
          }
        ]
      }
    ],
    "eyebrow": "Essential island goods"
  },
  "dishes": {
    "lede": "Four dishes Sicily makes its own.",
    "items": [
      {
        "title": "Pasta alla Norma",
        "where": "Catania",
        "body": "Tomato, fried eggplant, basil, and salty ricotta salata. Generous and restrained at once, and the best first dish for anyone new to Sicilian cooking.",
        "tip": "[Cook it below](#norma)",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
      },
      {
        "title": "Caponata",
        "where": "Across the island",
        "body": "Eggplant, celery, tomato, olives, and capers in a sweet-and-sour agrodolce. Serve at room temperature as an antipasto, beside grilled fish, or on toasted bread. In Palermo, many cooks add raisins and pine nuts.",
        "tip": "Skip the hour at the stove with [a ready-made jar](product:sic-caponata).",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuC66Qz_O1vxGNBZSyhKBG7E11V9J_ynfSiGuUL5GLDjS-pp7xx0eqw_gmnVIRMXOEiaJ2wLNz9eDe-dRv1HJffGFDGWKIH-9TlU0UBDIw940qDCkUbeXjZjdsjLtKuD3B7Gg0GWHngYfm0d0u9xYun-FrttGnejAkzJLWV7HyuC_ZCA_QHWryHtkt4PkqDJFzQjJqtsSDMMGOLlU2E8sTTNiKXafW91SYmjA9P72M1cR5KetKzCi5cq"
      },
      {
        "title": "Pasta con le sarde",
        "where": "Palermo",
        "body": "Sardines, wild fennel, raisins, pine nuts, saffron, and toasted breadcrumbs. The raisins, pine nuts, and saffron arrived with Arab rule in the ninth century and never left Palermo’s kitchens.",
        "tip": "Can’t find wild fennel? Use cultivated fennel fronds plus a pinch of [wild fennel seed](product:sic-wild-fennel).",
        "image": "https://lh3.googleusercontent.com/aida/AEtjO1XH3ztoRKkRdH9fjeZ7zGSvG7Z5lVtTJVcPxnxpnLlAyQgVptrChhD3aGe8eyAqVjd0t1vRNzKDPEjlQjVZ-Eo-tmswH65MCECJXC1QT7I-lJ124iYZKFjt2HHrSOK_zqbBcVos3Jg8CZW5bSAW6GQ8NC2GTMPbtiRRx9g9oxW6L3gS7A49QEWznJIYITZoOmWrGC6LiYi1Idw4k1vthGnlg7ZvP6f6Il5_lhaoAml5HXicCLGHPJRAbg"
      },
      {
        "title": "Cannoli and granita",
        "where": "Sweet Sicily",
        "body": "Crisp fried shells with sweetened sheep’s-milk ricotta; icy granita of coffee, almond, or lemon. Both are built on contrast.",
        "tip": "For the table: [pistachio-filled cannoli](product:sic-cannoli).",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDjU6UvYZUkSS18t8CQRRZnaNRc0VACKEjhPlfVfFdQ5pc54Xgy2GXOEcxNifnA64xYFhIvY_BUqA0MS-JHhIaxXG7ywJwi-c-2MoMLZQYjN7ECQUWQ30CTSnJyq3Tm7zn-7BkZHvprZQ0C9r6FYA64tnvr49FJHlvmY9kt2p8vCcOUoVi5fnGJfnDaU2kugnGZmTBxsCTHRKgMprbhUPLgw98lDHWUqoVhS2_XltgdYBMo8Wdajv2i"
      }
    ],
    "eyebrow": "Culinary canon"
  },
  "maker": {
    "name": "Campo D’Oro",
    "place": "Sciacca",
    "paragraphs": [
      "On Sicily’s southwest coast, about 50 kilometers from the Valley of the Temples, Paolo Licata founded Campo D’Oro more than three decades ago. Today it is a second-generation family business making preserves, pestos, sauces, and sweet creams from Sicilian recipes.",
      "Most of the vegetables come from the family’s own organic farm: eggplant, tomatoes, basil, garlic, and onions, processed within a day of harvest and without artificial additives or colorings. The facility runs on solar and wind power. Several recipes build on protected Sicilian ingredients, including Pantelleria IGP capers in the caponata and Avola almonds in the pesto alla trapanese."
    ],
    "photos": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuBRbfN3ec2j13IDm1PE1_z3XTGyEgtwGUUYTjZPOlr_XSHYQdySu4eni5eOXqrKG29Cl-GM6BIwsg8jt21ndJ7dF_v2T_t34PpNXh1wUwoN-V5yhIMZncJmE1BWFeStFpQRFpjHHXybHWqPAayZearG1M3sELhCkVAU7iqwesHOgc4x6uRnjfY8lqlAzgNDJ36Qk1zYHDXFvRI-S0rfWP25ciszdOMP1PMUS7ci3vjNMzI863KvNVVu",
        "alt": "Organic family farm · Sciacca",
        "caption": "Organic family farm · Sciacca"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq",
        "alt": "Family kitchen · Campo D’Oro",
        "caption": "Family kitchen · Campo D’Oro"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuAnmv_x6pp8pedaJCwB3KpOyHiwoux-_Zw7UEg-8tHQA_WJGaPfnDtGodkrZjSiPXFoiIM0lbvgYcoOUCfJSy5AbEl111xwfxRWxfyGgSnyKAinmiguDsYDuxWCvIiDR15Qwm2ZKdjCzGHWmTjzYB1abwN7YqA65e_DwIc2qf_h09V0xMNEdJKbcLMYZFXc3RN2UXvi9uOgM0JYY1X1L5Wl1aUwDP0dBBQfz6uOjhWBl1K0MoFePgpE",
        "alt": "Campo D’Oro jars · Sciacca",
        "caption": "Campo D’Oro jars · Sciacca"
      }
    ],
    "facts": [
      {
        "label": "Based in",
        "value": "Sciacca, Agrigento"
      },
      {
        "label": "Family farm",
        "value": "130 hectares, organic"
      },
      {
        "label": "Range",
        "value": "120+ specialties"
      }
    ],
    "productsLabel": "From Campo D’Oro",
    "products": [
      {
        "id": "sic-caponata",
        "name": "Campo D’Oro caponata",
        "meta": "Jar",
        "tag": "Family recipe",
        "tagTone": "neutral",
        "origin": "Sciacca",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDMH2M-VN1-Pz9hCbkXgdgup639qKPj1bgJo2jf1PgPm9NKzrgAY_T6MZujPmHAC4Z5W83H6bgIwaOrwcCLEuI-3an8k7c44fESuTzHNkXQYSCN_pESKkZUsjfCP-01ZMORW4JuJXmElmpAAAxPwRTi5o5Crpmlu_bVRSOXjhggx377vb87iOfKRdkb1LjsaiX1pF73K7pXrg-DIruRvIfEPidPaOJoOlRNnbEwUK6fqguV0N3VVklu"
      },
      {
        "id": "sic-pesto-trapanese",
        "name": "Campo D’Oro pesto alla trapanese",
        "meta": "With Avola almonds",
        "tag": "Avola almonds",
        "tagTone": "neutral",
        "origin": "Sciacca",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo"
      },
      {
        "id": "sic-sundried-tomatoes",
        "name": "Campo D’Oro sun-dried cherry tomatoes",
        "meta": "Jar, in oil",
        "tag": "In oil",
        "tagTone": "neutral",
        "origin": "Sciacca",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBRbfN3ec2j13IDm1PE1_z3XTGyEgtwGUUYTjZPOlr_XSHYQdySu4eni5eOXqrKG29Cl-GM6BIwsg8jt21ndJ7dF_v2T_t34PpNXh1wUwoN-V5yhIMZncJmE1BWFeStFpQRFpjHHXybHWqPAayZearG1M3sELhCkVAU7iqwesHOgc4x6uRnjfY8lqlAzgNDJ36Qk1zYHDXFvRI-S0rfWP25ciszdOMP1PMUS7ci3vjNMzI863KvNVVu"
      },
      {
        "id": "sic-blood-orange-marmalade",
        "name": "Campo D’Oro blood orange marmalade",
        "meta": "Jar",
        "tag": "Marmalade",
        "tagTone": "neutral",
        "origin": "Sciacca",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDjU6UvYZUkSS18t8CQRRZnaNRc0VACKEjhPlfVfFdQ5pc54Xgy2GXOEcxNifnA64xYFhIvY_BUqA0MS-JHhIaxXG7ywJwi-c-2MoMLZQYjN7ECQUWQ30CTSnJyq3Tm7zn-7BkZHvprZQ0C9r6FYA64tnvr49FJHlvmY9kt2p8vCcOUoVi5fnGJfnDaU2kugnGZmTBxsCTHRKgMprbhUPLgw98lDHWUqoVhS2_XltgdYBMo8Wdajv2i"
      }
    ]
  },
  "cook": {
    "title": "Cook Sicily",
    "lede": "One classic from scratch and one ten-minute shortcut from Trapani.",
    "recipe": {
      "id": "norma",
      "title": "Pasta alla Norma",
      "serves": "4",
      "time": "about 50 minutes",
      "from": "Catania",
      "steps": [
        {
          "title": "Prepare the eggplant.",
          "body": "Cut the eggplant into 2 cm cubes. Salt lightly and rest for 15 minutes if you like, then pat thoroughly dry."
        },
        {
          "title": "Make the sauce.",
          "body": "Warm 2 tablespoons olive oil in a saucepan and cook the crushed garlic until fragrant. Add the passata and a pinch of salt, and simmer uncovered for 20–25 minutes, until slightly thickened. Tear in a few basil leaves."
        },
        {
          "title": "Fry the eggplant.",
          "body": "Heat a 3 mm layer of olive oil in a wide skillet over medium-high heat. Fry the eggplant in batches, turning, until deeply golden and tender, adding a little oil between batches. Don’t crowd the pan. Drain on paper towels."
        },
        {
          "title": "Cook the pasta.",
          "body": "Boil the pasta in well-salted water until just short of al dente. Reserve a mug of pasta water, then drain."
        },
        {
          "title": "Bring it together.",
          "body": "Toss the pasta with the sauce and a splash of pasta water. Fold in most of the eggplant. Divide among warm bowls and top with the remaining eggplant, torn basil, and coarsely grated or shaved ricotta salata."
        }
      ],
      "touch": "Finish with ricotta salata, never fresh ricotta. Its firm texture and salty edge are what make this dish Norma. A final pinch of [Trapani sea salt](product:sic-trapani-salt) on the eggplant just before serving keeps it crisp-edged.",
      "shoppingList": [
        "400 g rigatoni or maccheroni",
        "650–700 g passata (two jars of [fine tomato pulp](product:sic-passata))",
        "About 120 ml [extra-virgin olive oil](product:sic-evoo-dop)",
        "2 medium eggplants",
        "2 garlic cloves",
        "Fresh basil",
        "80 g ricotta salata",
        "Sea salt and black pepper"
      ],
      "products": [
        {
          "id": "sic-passata",
          "name": "Tomato passata",
          "meta": "Jar",
          "tag": "Pantry staple",
          "tagTone": "neutral",
          "origin": "Sicily",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBY4455DEX1zjjpdq7-_mNILuWUJRUYyvMxMXx4jMQYd55DK_wV9oy-PIMx-rP1tMRkt8iwhkFiYgazb05uFnI6rs1jFuEPynANvN6XO5Q_mSnHWHJH7MXg9cvrDWA3798HSfMlbXyd0ju2P_NXo2Qv8uEjZgBuH4jKkJLmoPYvIgiiMvli6aTlEQ3pQ0aD3-aKYdw8BfdknHP3ri2lylIohY914kchXuH9Q7icchs3wAuR2FxKDpvCKg"
        },
        {
          "id": "sic-trapani-salt",
          "name": "Trapani sea salt",
          "meta": "Hand-harvested",
          "tag": "Hand-harvested",
          "tagTone": "neutral",
          "origin": "Trapani",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCZhnC6OD1VrmeoAkesXcV61vBh25ZoqFu3NKi1EWxScFq08esuCcNzj28MeLyPLME1eJ4rqHGka5Va1TpbBHJJjtXPwJCp0j6OcrdBzYqdqkNECgc1aIdIrdUQ-3yQ49QItc5wh4ZkdvFaJm6-EOJLmg_-fEa9Y74OCjgdx1yeFqlC35iIO1cg2THDFfbVWTTKfIfoC35P_lksCF2Ua-5Tn5iAP5Amgfwuc-v6kUOIJSkESvhpWyfq"
        }
      ],
      "schema": {
        "yield": "4 servings",
        "prepTime": "PT20M",
        "cookTime": "PT30M",
        "totalTime": "PT50M",
        "ingredients": [
          "400 g short pasta, such as rigatoni or maccheroni",
          "650–700 g tomato passata or fine tomato pulp",
          "2 medium eggplants (about 700 g)",
          "About 120 ml extra-virgin olive oil, divided",
          "2 garlic cloves, crushed",
          "A handful of fresh basil",
          "80 g ricotta salata",
          "Fine sea salt and black pepper"
        ]
      },
      "imageCaption": "Catania classic · about 50 minutes",
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
    },
    "shortcut": {
      "title": "Ten minutes in Trapani",
      "body": "Busiate are hand-rolled spirals from western Sicily, made to grab hold of pesto alla trapanese, a raw sauce of tomato, basil, garlic, and almonds. Cook the busiate, loosen the pesto with a spoonful of pasta water, toss, and finish with olive oil and a few chopped almonds or pistachios.",
      "products": [
        {
          "id": "sic-busiate",
          "name": "Busiate pasta",
          "meta": "Durum wheat",
          "tag": "Durum wheat",
          "tagTone": "neutral",
          "origin": "Western Sicily",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
        },
        {
          "id": "sic-pesto-trapanese",
          "name": "Pesto alla trapanese",
          "meta": "With Avola almonds",
          "tag": "Avola almonds",
          "tagTone": "neutral",
          "origin": "Sciacca",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo"
        }
      ],
      "eyebrow": "Trapani shortcut",
      "button": "Get the busiate pair"
    },
    "eyebrow": "Island kitchen"
  },
  "readTheLabel": "“Sicilian-style” is not the same as made in Sicily. Check the place of production, the ingredient list, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Sicily home",
    "body": "A Sicilian table starts with a few excellent ingredients allowed to speak clearly. We’ve gathered eight from this story into one set: enough for pasta, an antipasto board, and something sweet to finish.",
    "button": "Add the Sicilian pantry set",
    "products": [
      {
        "id": "sic-pistachios-bronte",
        "name": "Bronte pistachios",
        "meta": "Shelled",
        "tag": "Volcanic soil",
        "tagTone": "gold",
        "origin": "Bronte",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuA50Y5nKfTahqDmQf6hgNWCLr7xZfxXGLEW3FD8w3BDW2gRLb_IiV_nyWmxu4U106llOMKtCYFK1PawL1oLPwA4ttUc2Ss1nU_NtWixdonqSg4uaTh0syy92HCx4spmsfNjNgTIfZoX66c-zy9WapcF4Jf7FkV1OXPm27VfjqMfLWKox5YDawHhKeorL_LFcRqb5CueBUMSM-XK8mj20hs5Q-lb47vTDEbKxW1Wh7H_wZK1UrDiogAI"
      },
      {
        "id": "sic-pesto-trapanese",
        "name": "Pesto alla trapanese",
        "meta": "With Avola almonds",
        "tag": "Avola almonds",
        "tagTone": "neutral",
        "origin": "Sciacca",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo"
      },
      {
        "id": "sic-caponata",
        "name": "Caponata",
        "meta": "Jar",
        "tag": "Family recipe",
        "tagTone": "neutral",
        "origin": "Sciacca",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDMH2M-VN1-Pz9hCbkXgdgup639qKPj1bgJo2jf1PgPm9NKzrgAY_T6MZujPmHAC4Z5W83H6bgIwaOrwcCLEuI-3an8k7c44fESuTzHNkXQYSCN_pESKkZUsjfCP-01ZMORW4JuJXmElmpAAAxPwRTi5o5Crpmlu_bVRSOXjhggx377vb87iOfKRdkb1LjsaiX1pF73K7pXrg-DIruRvIfEPidPaOJoOlRNnbEwUK6fqguV0N3VVklu"
      },
      {
        "id": "sic-castelvetrano-olives",
        "name": "Castelvetrano olives",
        "meta": "Jar",
        "tag": "Nocellara",
        "tagTone": "neutral",
        "origin": "Valle del Belice",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr"
      },
      {
        "id": "sic-busiate",
        "name": "Busiate pasta",
        "meta": "Durum wheat",
        "tag": "Durum wheat",
        "tagTone": "neutral",
        "origin": "Western Sicily",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
      },
      {
        "id": "sic-trapani-salt",
        "name": "Trapani sea salt",
        "meta": "Hand-harvested",
        "tag": "Hand-harvested",
        "tagTone": "neutral",
        "origin": "Trapani",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCZhnC6OD1VrmeoAkesXcV61vBh25ZoqFu3NKi1EWxScFq08esuCcNzj28MeLyPLME1eJ4rqHGka5Va1TpbBHJJjtXPwJCp0j6OcrdBzYqdqkNECgc1aIdIrdUQ-3yQ49QItc5wh4ZkdvFaJm6-EOJLmg_-fEa9Y74OCjgdx1yeFqlC35iIO1cg2THDFfbVWTTKfIfoC35P_lksCF2Ua-5Tn5iAP5Amgfwuc-v6kUOIJSkESvhpWyfq"
      },
      {
        "id": "sic-oregano",
        "name": "Sicilian oregano",
        "meta": "On the stem",
        "tag": "On the stem",
        "tagTone": "neutral",
        "origin": "Sicily",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuAVGYQ04rZ-nKR0Oz5lhG8ivLp6cW06G3MC69sYYbwZJs2pqjQrdmZo7GAMNt3U-WCjFmmx3uy9XT2Yx-9gh8tZO3EqFRsZUkPQmYsYt8-Uyx8O7ojZ-JUvRro8eR6r34iv4LETSR7WsPUnhlxtF8trSRL7T5VcCPBar3UfqjOT1RKVlbvzIAzIcArvfdgViGqDu8HffvvgRjxkKj-0D1p64LmHiXZDq9r4px6GXqS2NLFf_mbKHECS"
      },
      {
        "id": "sic-blood-orange-marmalade",
        "name": "Blood orange marmalade",
        "meta": "Jar",
        "tag": "Marmalade",
        "tagTone": "neutral",
        "origin": "Sciacca",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDjU6UvYZUkSS18t8CQRRZnaNRc0VACKEjhPlfVfFdQ5pc54Xgy2GXOEcxNifnA64xYFhIvY_BUqA0MS-JHhIaxXG7ywJwi-c-2MoMLZQYjN7ECQUWQ30CTSnJyq3Tm7zn-7BkZHvprZQ0C9r6FYA64tnvr49FJHlvmY9kt2p8vCcOUoVi5fnGJfnDaU2kugnGZmTBxsCTHRKgMprbhUPLgw98lDHWUqoVhS2_XltgdYBMo8Wdajv2i"
      }
    ],
    "eyebrow": "Limited curation · Parcel N° 01"
  },
  "about": [
    "La Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "Italia.it, “Typical Sicilian Products and Dishes”; Visit Sicily, “Sicily Flavours Not to Be Missed”; European Commission eAmbrosia register (Pistacchio Verde di Bronte DOP, Pomodoro di Pachino IGP, Cappero di Pantelleria IGP, Cioccolato di Modica IGP); Forbes Italia, “100 Eccellenze 2024: Campo d’Oro”; Italian Trade Agency and Pitti Taste exhibitor profiles for Campo d’Oro."
};

export default sicilia;
