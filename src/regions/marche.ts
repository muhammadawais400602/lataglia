import type { RegionStory } from './types';

// Photos are stand-ins from elsewhere on the site, to be replaced.
// Content from the Marche story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const marche: RegionStory = {
  "slug": "marche",
  "name": "Marche",
  "seoTitle": "Food and Pantry Ingredients of the Marche | Italy Region by Region | Casa Taglia",
  "seoDescription": "Cook the Marche from their pantry: Ascolana olives, ciauscolo, Maccheroncini di Campofilone, Casciotta d’Urbino, Prosciutto di Carpegna and Cartoceto olive oil, with a recipe for maccheroncini al ragù.",
  "kicker": "Region fourteen: between the mountains and the Adriatic",
  "subtitle": "Stuffed olives, fine egg pasta, and fish soup by the sea.",
  "hero": {
    "color": "#8A3B4A",
    "colorDeep": "#5E2833",
    "dossier": "Terroir archive · Dossier N° 14",
    "badge": "Mountains to the Adriatic",
    "metrics": [
      {
        "icon": "terrain",
        "label": "Peak",
        "value": "Monte Vettore, 2,476 m"
      },
      {
        "icon": "waves",
        "label": "Sea",
        "value": "Adriatic coast"
      },
      {
        "icon": "castle",
        "label": "Court",
        "value": "Urbino Renaissance"
      },
      {
        "icon": "agriculture",
        "label": "Wheat",
        "value": "Once grown for export"
      }
    ],
    "heritage": "Renaissance court table",
    "imageCaption": {
      "title": "The Sibillini mountains",
      "body": "Past fishing ports and rolling hills rise the Sibillini, where Monte Vettore reaches 2,476 meters."
    },
    "imageTag": "Sibillini mountains, Marche",
    "heritageNote": "michelangelo’s favorite",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDM3HpPPNBxXbPDc0sP8_npr_sZLlloM_We1KuwEvKftHq7OhCf-K_Ry7b7XdS7DCRHJWlnqegbA3gvRYJ7QC-m9uy0SIS-vtSpHpnMn_lmAeD6XDSAkY_IeK3EbfEs8RG99-XMzxKVfKYRLVBMKgRLOOFJodvjNeL2jAW-S-t4Z7sg_jppMI5-IQD7dM-ZwgCxH2NzY3YZ3ZpOF5Y_YEMefJ1rK3ySALbPiMovvMBi_xiDESl4Jemr",
    "imageAlt": "Past fishing ports and rolling hills rise the Sibillini, where Monte Vettore reaches 2,476 meters."
  },
  "intro": [
    "The Marche lie on Italy’s Adriatic side, between the Apennines and the sea, with Emilia-Romagna to the north and Abruzzo to the south. The land climbs from a long coastline of fishing ports through rolling hills to the Sibillini mountains, where Monte Vettore rises to 2,476 meters. Urbino’s Renaissance court left its mark at the table, and the region once grew and exported so much wheat that wealthy families invested in it. The cooking changes as you travel: in the north around Pesaro, Emilian-style cappelletti; in the south around Ascoli, stuffed fried olives; inland, farmhouse dishes like rabbit roasted with wild fennel, rich pork salumi, and generous meat sauces; and along the coast, a different fish soup in nearly every port. The result is a cuisine of real variety, at once hearty and refined.",
    "The Marche reward anyone willing to explore beyond their famous neighbors. Start with the ingredients that define the region, learn the dishes they make possible, and meet a pasta family from Campofilone."
  ],
  "pantry": {
    "lede": "Six ingredients behind the Marche’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Ascolana olives",
        "place": "Ascoli Piceno and the Piceno hills",
        "body": "Green, tender olives of the Ascolana Tenera variety, cured in brine or pitted, stuffed with a mix of beef and pork, egg, aged cheese, and nutmeg, then breaded and fried.",
        "lookFor": "Oliva Ascolana del Piceno DOP, which covers both the brined olives and the stuffed ones.",
        "products": [
          {
            "id": "mar-olive-ripiene",
            "name": "Oliva Ascolana del Piceno DOP, stuffed",
            "meta": "Ready to fry",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Ascoli Piceno",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
          },
          {
            "id": "mar-olive-salamoia",
            "name": "Oliva Ascolana del Piceno DOP",
            "meta": "Jar, in brine",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Piceno hills",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr"
          }
        ]
      },
      {
        "title": "Ciauscolo",
        "place": "Visso and the Macerata hinterland",
        "body": "A soft, rosy pork salami seasoned with garlic, white wine, pepper, and often wild fennel, aged only briefly so it stays smooth enough to spread on bread.",
        "lookFor": "Ciauscolo IGP.",
        "products": [
          {
            "id": "mar-ciauscolo",
            "name": "Ciauscolo IGP",
            "meta": "Whole",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Visso",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo"
          }
        ]
      },
      {
        "title": "Maccheroncini",
        "place": "Campofilone",
        "body": "Egg pasta cut into very fine strands from sheets rolled extremely thin, made with only eggs and flour, no water, and dried on folded paper. The recipe is mentioned in writings from the 1400s. So thin, they cook in just a few minutes.",
        "lookFor": "Maccheroncini di Campofilone IGP, which can only be made in the town of Campofilone.",
        "products": [
          {
            "id": "mar-maccheroncini",
            "name": "Maccheroncini di Campofilone IGP",
            "meta": "250 g",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Campofilone",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
          }
        ]
      },
      {
        "title": "Casciotta d’Urbino",
        "place": "The Metauro valley around Urbino",
        "body": "A soft, mild cheese made largely from sheep’s milk, with the taste of fresh milk and an aromatic scent. Tradition says it was Michelangelo’s favorite, sent to him as a gift from the Metauro valley.",
        "lookFor": "Casciotta d’Urbino DOP.",
        "products": [
          {
            "id": "mar-casciotta",
            "name": "Casciotta d’Urbino DOP",
            "meta": "Whole",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Urbino",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDMH2M-VN1-Pz9hCbkXgdgup639qKPj1bgJo2jf1PgPm9NKzrgAY_T6MZujPmHAC4Z5W83H6bgIwaOrwcCLEuI-3an8k7c44fESuTzHNkXQYSCN_pESKkZUsjfCP-01ZMORW4JuJXmElmpAAAxPwRTi5o5Crpmlu_bVRSOXjhggx377vb87iOfKRdkb1LjsaiX1pF73K7pXrg-DIruRvIfEPidPaOJoOlRNnbEwUK6fqguV0N3VVklu"
          }
        ]
      },
      {
        "title": "Prosciutto di Carpegna",
        "place": "Carpegna, province of Pesaro and Urbino",
        "body": "The prized cured ham of the northern Marche, the classic filling for Urbino’s flaky crescia sfogliata.",
        "lookFor": "Prosciutto di Carpegna DOP.",
        "products": [
          {
            "id": "mar-carpegna",
            "name": "Prosciutto di Carpegna DOP",
            "meta": "Sliced",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Carpegna",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCZhnC6OD1VrmeoAkesXcV61vBh25ZoqFu3NKi1EWxScFq08esuCcNzj28MeLyPLME1eJ4rqHGka5Va1TpbBHJJjtXPwJCp0j6OcrdBzYqdqkNECgc1aIdIrdUQ-3yQ49QItc5wh4ZkdvFaJm6-EOJLmg_-fEa9Y74OCjgdx1yeFqlC35iIO1cg2THDFfbVWTTKfIfoC35P_lksCF2Ua-5Tn5iAP5Amgfwuc-v6kUOIJSkESvhpWyfq"
          }
        ]
      },
      {
        "title": "Olive oil",
        "place": "Cartoceto and the Piceno",
        "body": "Cartoceto, near Pesaro, is known as a cradle of high-quality oil, and in the south, monovarietal oil from the Ascolana olive is intense and fruity.",
        "lookFor": "Cartoceto DOP.",
        "products": [
          {
            "id": "mar-olio-cartoceto",
            "name": "Cartoceto DOP extra-virgin olive oil",
            "meta": "Bottle",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Cartoceto",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBU3O0qjc03YxJyeGreRcupZwz17tHGJHD5wHNfJ0p7EiTyJysIhlTpcXRQlU_9eU7JtZ9vYmMG1QkxPwTjQ1M4HKGKnp6G_wR77H9L92h6P1WFxFkdXdSnxzj1rYtIuYOHP3y1GFX7qLppRyyiuuFh143IYV753SuLjQLV1IN1Ux5-xM3ZgRGf1d7Bb4jjk31RDCfQ-Hqhx2JvDbAWSwuRQ51e8ensDs4uGSlEgC2bmSQ1QRP27a6w"
          }
        ]
      }
    ],
    "eyebrow": "Essential terroir goods"
  },
  "dishes": {
    "lede": "Four dishes the Marche make their own.",
    "items": [
      {
        "title": "Maccheroncini al ragù",
        "where": "Campofilone",
        "body": "Fine egg maccheroncini with the Marche’s meat ragù, made from beef and pork cut in pieces rather than minced, spiced with clove and nutmeg.",
        "tip": "[Cook it below](#ragu)",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
      },
      {
        "title": "Olive all’ascolana",
        "where": "Ascoli Piceno",
        "body": "Stuffed, breaded, and fried olives, served hot as an antipasto or as part of the fritto misto all’ascolana with fried custard cubes and lamb chops.",
        "tip": "[Make them below](#shortcut)",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAPcC0a36PdQKRFN67N9n4iWBfhvVaOYD4lAqKygnUjTrscttDOYLVoI8x1mJHXJybsSr0etHTwY4pU0A01kN4o1IfpMOvEBAXOIrB8eZ11ou4LrSyCjELVvYNkcTxy0DtPWugtK_maKrpF1S29ogN-YzCyzhDGWnfH4HdQ3jXFuv8h73Z3GNxqFxYhHzG5euOwWXNcUn83KLa8hc2NC2nQFY3TdtlSPgMj0otF-z9Yn-C7fprrBLWX"
      },
      {
        "title": "Vincisgrassi",
        "where": "Macerata",
        "body": "The Marche’s answer to lasagna, dating from the 1700s: at least seven layers of egg pasta with béchamel and a ragù of mixed meats and chicken giblets.",
        "note": "Layered since the 1700s",
        "image": "https://lh3.googleusercontent.com/aida/AEtjO1XH3ztoRKkRdH9fjeZ7zGSvG7Z5lVtTJVcPxnxpnLlAyQgVptrChhD3aGe8eyAqVjd0t1vRNzKDPEjlQjVZ-Eo-tmswH65MCECJXC1QT7I-lJ124iYZKFjt2HHrSOK_zqbBcVos3Jg8CZW5bSAW6GQ8NC2GTMPbtiRRx9g9oxW6L3gS7A49QEWznJIYITZoOmWrGC6LiYi1Idw4k1vthGnlg7ZvP6f6Il5_lhaoAml5HXicCLGHPJRAbg"
      },
      {
        "title": "Brodetto",
        "where": "The Adriatic coast",
        "body": "Fish soup, made differently in every port: with tomato and vinegar in Fano, without tomato but with wild saffron in Porto Recanati, with green peppers and green tomatoes in San Benedetto del Tronto.",
        "note": "Different in every port",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg7ZeusKi1XJ_YIbUpf7bMvUDHPzrJBa0kGGcUmiEWQXn5vyYqb10N5ExBRlYr2yJ0WfsFPe7URckqO8PDwMH0UDSwVm6XQCF-NoeAM33s50RkHXH5cUKTQIls7nyQjkd8xFb7E1CVsnD4Hx0oK8so72g2UalmTdOWlUWCd2mUYhcv42IUIFm1cqLKE69xjZ96SmNApFtb-zmua5MK2Erwp7yfRDiKgHOwIebR0rdf84T1bYeSwKl"
      }
    ],
    "eyebrow": "Culinary canon"
  },
  "maker": {
    "name": "Spinosi",
    "place": "Campofilone",
    "paragraphs": [
      "Campofilone, a small medieval town in the province of Fermo, has been making maccheroncini for centuries. The Spinosi story began in 1933, when Nello Spinosi took his wife’s homemade maccheroncini to Rome as a gift and found people wanting more. In 1960 his son Vincenzo opened the family’s first artisan workshop in Campofilone.",
      "The method follows the old way: fresh eggs broken by hand, no water in the dough, the fine strands combed over the back of a knife, laid by hand on folded sheets of white paper, and dried slowly at low temperature for at least 24 hours. Vincenzo has done much to carry Campofilone’s pasta to Europe, the United States, and Asia, and has chaired the association of its producers."
    ],
    "photos": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl",
        "alt": "Spinosi workshop · Campofilone",
        "caption": "Spinosi workshop · Campofilone"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq",
        "alt": "Strands on folded white paper",
        "caption": "Strands on folded white paper"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida/AEtjO1XH3ztoRKkRdH9fjeZ7zGSvG7Z5lVtTJVcPxnxpnLlAyQgVptrChhD3aGe8eyAqVjd0t1vRNzKDPEjlQjVZ-Eo-tmswH65MCECJXC1QT7I-lJ124iYZKFjt2HHrSOK_zqbBcVos3Jg8CZW5bSAW6GQ8NC2GTMPbtiRRx9g9oxW6L3gS7A49QEWznJIYITZoOmWrGC6LiYi1Idw4k1vthGnlg7ZvP6f6Il5_lhaoAml5HXicCLGHPJRAbg",
        "alt": "Spinosi maccheroncini IGP",
        "caption": "Spinosi maccheroncini IGP"
      }
    ],
    "facts": [
      {
        "label": "Since",
        "value": "1933"
      },
      {
        "label": "First workshop",
        "value": "1960"
      },
      {
        "label": "Drying",
        "value": "24+ hours"
      }
    ],
    "productsLabel": "From Spinosi",
    "products": [
      {
        "id": "mar-spinosi-maccheroncini",
        "name": "Spinosi Maccheroncini di Campofilone IGP",
        "meta": "250 g",
        "tag": "Dried 24+ hrs",
        "tagTone": "gold",
        "origin": "Campofilone",
        "img": "https://lh3.googleusercontent.com/aida/AEtjO1XH3ztoRKkRdH9fjeZ7zGSvG7Z5lVtTJVcPxnxpnLlAyQgVptrChhD3aGe8eyAqVjd0t1vRNzKDPEjlQjVZ-Eo-tmswH65MCECJXC1QT7I-lJ124iYZKFjt2HHrSOK_zqbBcVos3Jg8CZW5bSAW6GQ8NC2GTMPbtiRRx9g9oxW6L3gS7A49QEWznJIYITZoOmWrGC6LiYi1Idw4k1vthGnlg7ZvP6f6Il5_lhaoAml5HXicCLGHPJRAbg"
      },
      {
        "id": "mar-spinosi-spinosini",
        "name": "Spinosi Spinosini",
        "meta": "250 g",
        "tag": "Since 1933",
        "tagTone": "gold",
        "origin": "Campofilone",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuAVGYQ04rZ-nKR0Oz5lhG8ivLp6cW06G3MC69sYYbwZJs2pqjQrdmZo7GAMNt3U-WCjFmmx3uy9XT2Yx-9gh8tZO3EqFRsZUkPQmYsYt8-Uyx8O7ojZ-JUvRro8eR6r34iv4LETSR7WsPUnhlxtF8trSRL7T5VcCPBar3UfqjOT1RKVlbvzIAzIcArvfdgViGqDu8HffvvgRjxkKj-0D1p64LmHiXZDq9r4px6GXqS2NLFf_mbKHECS"
      }
    ]
  },
  "cook": {
    "title": "Cook Marche",
    "lede": "One classic from scratch and one ten-minute shortcut from Ascoli.",
    "recipe": {
      "id": "ragu",
      "title": "Maccheroncini di Campofilone al ragù marchigiano",
      "serves": "4",
      "time": "about 2¼ hours, mostly simmering",
      "from": "Campofilone",
      "steps": [
        {
          "title": "Brown the meat.",
          "body": "In a heavy pot, soften the onion, carrot, and celery in the olive oil. Add the beef and pork and brown them well on all sides."
        },
        {
          "title": "Add wine and tomato.",
          "body": "Pour in the wine and let it evaporate. Add the passata, the clove, a grating of nutmeg, and a splash of water. Simmer gently, partly covered, for about 2 hours, adding the chicken livers, if using, for the last 20 minutes. Season."
        },
        {
          "title": "Cook the pasta.",
          "body": "Bring a large pot of salted water to the boil and cook the maccheroncini for just a few minutes, following the package and tasting early. Drain gently; they are very delicate."
        },
        {
          "title": "Serve.",
          "body": "Toss the pasta with the ragù and serve with grated Parmigiano Reggiano."
        }
      ],
      "touch": "Cut the meat into small pieces rather than mincing it, as the Marche tradition calls for. And watch the pot: [Campofilone maccheroncini](product:mar-maccheroncini) are rolled so thin that they cook very quickly.",
      "shoppingList": [
        "250 g [Maccheroncini di Campofilone](product:mar-maccheroncini)",
        "250 g beef chuck and 150 g pork shoulder",
        "100 g chicken livers (optional)",
        "1 onion, 1 carrot, 1 celery stalk",
        "3 tbsp [extra-virgin olive oil](product:mar-olio-cartoceto)",
        "125 ml dry white wine",
        "400 g tomato passata",
        "1 clove and nutmeg",
        "Salt, pepper, and Parmigiano Reggiano"
      ],
      "products": [
        {
          "id": "mar-maccheroncini",
          "name": "Maccheroncini di Campofilone IGP",
          "meta": "250 g",
          "tag": "IGP",
          "tagTone": "green",
          "origin": "Campofilone",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
        },
        {
          "id": "mar-olio-cartoceto",
          "name": "Cartoceto DOP extra-virgin olive oil",
          "meta": "Bottle",
          "tag": "DOP",
          "tagTone": "green",
          "origin": "Cartoceto",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBU3O0qjc03YxJyeGreRcupZwz17tHGJHD5wHNfJ0p7EiTyJysIhlTpcXRQlU_9eU7JtZ9vYmMG1QkxPwTjQ1M4HKGKnp6G_wR77H9L92h6P1WFxFkdXdSnxzj1rYtIuYOHP3y1GFX7qLppRyyiuuFh143IYV753SuLjQLV1IN1Ux5-xM3ZgRGf1d7Bb4jjk31RDCfQ-Hqhx2JvDbAWSwuRQ51e8ensDs4uGSlEgC2bmSQ1QRP27a6w"
        }
      ],
      "schema": {
        "yield": "4 servings",
        "prepTime": "PT20M",
        "cookTime": "PT2H",
        "totalTime": "PT2H20M",
        "ingredients": [
          "250 g Maccheroncini di Campofilone",
          "250 g beef chuck and 150 g pork shoulder, cut into small pieces (not minced)",
          "100 g chicken livers, chopped (optional, traditional)",
          "1 small onion, 1 carrot, and 1 celery stalk, finely chopped",
          "3 tablespoons extra-virgin olive oil",
          "125 ml dry white wine",
          "400 g tomato passata",
          "1 clove and a grating of nutmeg",
          "Salt, pepper, and grated Parmigiano Reggiano"
        ]
      },
      "imageCaption": "Campofilone classic · about 2¼ hours",
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
    },
    "shortcut": {
      "title": "Ten minutes in Ascoli",
      "body": "Heat a few centimeters of oil in a deep pan. Fry ready-stuffed, breaded Ascolana olives a few at a time, for a few minutes until deep golden. Drain on paper and serve hot, with slices of ciauscolo on bread alongside.",
      "products": [
        {
          "id": "mar-olive-ripiene",
          "name": "Oliva Ascolana del Piceno DOP, stuffed",
          "meta": "Ready to fry",
          "tag": "DOP",
          "tagTone": "green",
          "origin": "Ascoli Piceno",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
        },
        {
          "id": "mar-ciauscolo",
          "name": "Ciauscolo IGP",
          "meta": "Whole",
          "tag": "IGP",
          "tagTone": "green",
          "origin": "Visso",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo"
        }
      ],
      "eyebrow": "Ten minutes in Ascoli",
      "button": "Get the Ascoli pair"
    },
    "eyebrow": "Farmhouse kitchen"
  },
  "readTheLabel": "Stuffed olives sold as “ascolana-style” may use any olive and any filling, and egg pasta labeled “Campofilone-style” can be made anywhere. Check the place of production, the ingredient list, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Marche home",
    "body": "A table in the Marche moves from the farmhouse to the sea in a single meal. We’ve gathered eight ingredients from this story into one set: enough for maccheroncini with ragù, a platter of fried olives, and a board of ciauscolo, Carpegna ham, and casciotta.",
    "button": "Add the Marche pantry set",
    "products": [
      {
        "id": "mar-maccheroncini",
        "name": "Maccheroncini di Campofilone IGP",
        "meta": "250 g",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "Campofilone",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
      },
      {
        "id": "mar-spinosi-spinosini",
        "name": "Spinosi Spinosini",
        "meta": "250 g",
        "tag": "Since 1933",
        "tagTone": "gold",
        "origin": "Campofilone",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuAVGYQ04rZ-nKR0Oz5lhG8ivLp6cW06G3MC69sYYbwZJs2pqjQrdmZo7GAMNt3U-WCjFmmx3uy9XT2Yx-9gh8tZO3EqFRsZUkPQmYsYt8-Uyx8O7ojZ-JUvRro8eR6r34iv4LETSR7WsPUnhlxtF8trSRL7T5VcCPBar3UfqjOT1RKVlbvzIAzIcArvfdgViGqDu8HffvvgRjxkKj-0D1p64LmHiXZDq9r4px6GXqS2NLFf_mbKHECS"
      },
      {
        "id": "mar-olive-ripiene",
        "name": "Stuffed Ascolana olives DOP",
        "meta": "Ready to fry",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Ascoli Piceno",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
      },
      {
        "id": "mar-olive-salamoia",
        "name": "Ascolana olives DOP",
        "meta": "Brine",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Piceno hills",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr"
      },
      {
        "id": "mar-ciauscolo",
        "name": "Ciauscolo IGP",
        "meta": "Whole",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "Visso",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo"
      },
      {
        "id": "mar-carpegna",
        "name": "Prosciutto di Carpegna DOP",
        "meta": "Sliced",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Carpegna",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCZhnC6OD1VrmeoAkesXcV61vBh25ZoqFu3NKi1EWxScFq08esuCcNzj28MeLyPLME1eJ4rqHGka5Va1TpbBHJJjtXPwJCp0j6OcrdBzYqdqkNECgc1aIdIrdUQ-3yQ49QItc5wh4ZkdvFaJm6-EOJLmg_-fEa9Y74OCjgdx1yeFqlC35iIO1cg2THDFfbVWTTKfIfoC35P_lksCF2Ua-5Tn5iAP5Amgfwuc-v6kUOIJSkESvhpWyfq"
      },
      {
        "id": "mar-casciotta",
        "name": "Casciotta d’Urbino DOP",
        "meta": "Whole",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Urbino",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDMH2M-VN1-Pz9hCbkXgdgup639qKPj1bgJo2jf1PgPm9NKzrgAY_T6MZujPmHAC4Z5W83H6bgIwaOrwcCLEuI-3an8k7c44fESuTzHNkXQYSCN_pESKkZUsjfCP-01ZMORW4JuJXmElmpAAAxPwRTi5o5Crpmlu_bVRSOXjhggx377vb87iOfKRdkb1LjsaiX1pF73K7pXrg-DIruRvIfEPidPaOJoOlRNnbEwUK6fqguV0N3VVklu"
      },
      {
        "id": "mar-olio-cartoceto",
        "name": "Cartoceto DOP oil",
        "meta": "Bottle",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Cartoceto",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBU3O0qjc03YxJyeGreRcupZwz17tHGJHD5wHNfJ0p7EiTyJysIhlTpcXRQlU_9eU7JtZ9vYmMG1QkxPwTjQ1M4HKGKnp6G_wR77H9L92h6P1WFxFkdXdSnxzj1rYtIuYOHP3y1GFX7qLppRyyiuuFh143IYV753SuLjQLV1IN1Ux5-xM3ZgRGf1d7Bb4jjk31RDCfQ-Hqhx2JvDbAWSwuRQ51e8ensDs4uGSlEgC2bmSQ1QRP27a6w"
      }
    ],
    "eyebrow": "Limited curation · Parcel N° 14"
  },
  "about": [
    "Casa Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "Italia.it (ENIT) guides to the food of the Marche; Marche Tourism (Regione Marche) on regional dishes and cheeses; Michelin Guide, Visit Italy, Rolling Stone Italia, and Gazzetta del Gusto on Oliva Ascolana del Piceno DOP; Quotidiano Nazionale on Marche specialties; CSQA on Maccheroncini di Campofilone IGP; Gambero Rosso on vincisgrassi and on Spinosi; Eroica Fenice on brodetto; ICE company profile and catalog, and Quotidiano Nazionale, on Spinosi."
};

export default marche;
