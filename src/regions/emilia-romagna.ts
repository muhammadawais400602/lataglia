import type { RegionStory } from './types';

// Photos are stand-ins from elsewhere on the site, to be replaced.
// Content from the Emilia-Romagna story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const emiliaRomagna: RegionStory = {
  "slug": "emilia-romagna",
  "name": "Emilia-Romagna",
  "seoTitle": "Emilia-Romagna Food and Pantry Ingredients | Italy Region by Region | Casa Taglia",
  "seoDescription": "Cook Emilia-Romagna from its pantry: Parmigiano Reggiano, Prosciutto di Parma, balsamic vinegar of Modena, mortadella and egg pasta, with a recipe for tagliatelle al ragù.",
  "kicker": "Region two: the food valley",
  "subtitle": "Patience, pork, and the richest plain in Italy.",
  "hero": {
    "color": "#8C2A1C",
    "colorDeep": "#5F1C13",
    "dossier": "Terroir archive · Dossier N° 02",
    "badge": "Italy’s food valley",
    "metrics": [
      {
        "icon": "history_edu",
        "label": "Roman road",
        "value": "Via Emilia, 187 BC"
      },
      {
        "icon": "landscape",
        "label": "Plain",
        "value": "Po Valley"
      },
      {
        "icon": "waves",
        "label": "Coastline",
        "value": "Adriatic"
      },
      {
        "icon": "location_city",
        "label": "Nickname",
        "value": "Bologna la grassa"
      }
    ],
    "heritage": "Ducal court kitchens",
    "imageCaption": {
      "title": "Po Valley",
      "body": "A broad, flat plain between the Apennines and the Adriatic, some of the most fertile land in Europe."
    },
    "imageTag": "The Po Valley plain",
    "heritageNote": "la grassa",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuD5Lecz0AdqyBGC2Wq3i1tMYZSsTXZU7rnRZwMIRu30HPom7D4g_MfUW37DkKRblH2w8dWakWoHWyqr8ENG84u6u-6r3rZ5sFwy5-3pgKuhaBtRfx1xXZ31MJFmE3Ztyu_6QMYQgorMv4YPjTiOy8VN_nAPK9T04AYFaZUpz-BBzEi6AsIq4gz8Tz0trhIDutSJ6LvYImgTcxiN81LaVqnYvJT-8z_9n2Qh5WTzL5ehPd45ZbZ8PNie",
    "imageAlt": "A broad, flat plain between the Apennines and the Adriatic, some of the most fertile land in Europe."
  },
  "intro": [
    "Emilia-Romagna stretches across northern Italy from the Apennine ridge to the Adriatic, with the broad, flat Po Valley at its heart. It is two old lands joined by one road: the Via Emilia, laid by the Romans in 187 BC, still runs straight from Piacenza to Rimini, stringing together Parma, Reggio Emilia, Modena, and Bologna. The plain is some of the most fertile land in Europe, and its farmers built a cuisine around what it does best: dairy cattle, wheat, and pigs, with the whey left from cheesemaking traditionally fed to the pigs that become prosciutto. The ducal courts of Parma and Modena refined that abundance, Bologna earned the nickname la grassa, “the fat one,” and Romagna, toward the sea, kept a simpler table of flatbreads, fish, and grilled meat. The result is a cuisine of patience: cheese aged for years, ham for more than a year, vinegar for decades.",
    "Few places anywhere can claim as many protected-origin foods, which is why it is often called Italy’s food valley. Start with the ingredients that define it, learn the dishes they make possible, and meet a family that has been perfecting one of them for four centuries."
  ],
  "pantry": {
    "lede": "Six ingredients behind Emilia-Romagna’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Parmigiano Reggiano",
        "place": "Parma, Reggio Emilia, Modena, and parts of Bologna and Mantua",
        "body": "Made from just raw cow’s milk, salt, and rennet, and aged at least 12 months. At 24 to 36 months it develops the crunchy crystals and deep, nutty flavor most cooks prize.",
        "lookFor": "the pin-dot “Parmigiano Reggiano” lettering on the rind and the DOP seal. In the US, “parmesan” can be made anywhere.",
        "products": [
          {
            "id": "er-parmigiano-24",
            "name": "Parmigiano Reggiano DOP, 24 months",
            "meta": "Wedge, cut to order",
            "tag": "Aged 24 mos",
            "tagTone": "gold",
            "origin": "Parma, Reggio",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
          }
        ]
      },
      {
        "title": "Prosciutto di Parma",
        "place": "The hills south of Parma",
        "body": "Only pork legs and sea salt, cured for at least 14 months in the dry hill air around Langhirano. Sweet and delicate, best sliced paper-thin and eaten soon after cutting.",
        "lookFor": "the five-pointed Ducal Crown branded on the skin or printed on the package.",
        "products": [
          {
            "id": "er-prosciutto-parma",
            "name": "Prosciutto di Parma DOP",
            "meta": "Sliced, aged 14+ months",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Langhirano",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
          }
        ]
      },
      {
        "title": "Balsamic vinegar",
        "place": "Modena and Reggio Emilia",
        "body": "Two different products share the name. Aceto Balsamico Tradizionale is cooked grape must aged at least 12 years through ever-smaller wooden casks and used by the drop. Aceto Balsamico di Modena IGP blends must with wine vinegar for everyday dressing and cooking.",
        "lookFor": "Tradizionale DOP is sold only in 100 ml bottles. On IGP labels, “invecchiato” means aged at least three years.",
        "products": [
          {
            "id": "er-balsamico-tradizionale",
            "name": "Aceto Balsamico Tradizionale di Modena DOP",
            "meta": "100 ml, aged 12+ years",
            "tag": "Aged 12+ yrs",
            "tagTone": "gold",
            "origin": "Modena",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuB8fNZqrw7_TeLPRVEEG_27bLhKOX_XNqCdzPhwWHZ5bLTyo7JBuBG7nuLUONxaWfTWjzKpwLufbGDQGMZpw9aC92xt7ZAcbhTPrMmYlaCy6jdyFMiwErNuyU4WWyzRPIVkvjpNhXaLksOXB9Cu3ZN-VdxwvM8OPNbVZGzjbI-INRp9b-ATgVayuCc_lE_QPClNYuWawfQf4JMKOJJU235NCk7vRde5n1RHDnQvA4n98iandjWQZQvd"
          },
          {
            "id": "er-balsamico-igp",
            "name": "Aceto Balsamico di Modena IGP",
            "meta": "250 ml",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Modena",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCZyhmRoysTXxSEjhPdYG3L2aauy8GnQG3COaak_T-rq-gH0MIvgRD3YWT8DVg0xncJfT9Kgi264v_koaWGZjr_BkDt--tchO0yaeRu0s9IcA7WGyoAaHkLeWpFkEILzTxRXam4m8uLZSE7fiXX19cOXPaRPT-yW44Vb6evFBHXb5blW8ZnWNV6MyWl056-YbSwFVE6h2MvAJ_x7TRAz-3ObJcmaI9tSjyRZxE_cP8UAfBGYcoCxPH_"
          }
        ]
      },
      {
        "title": "Mortadella",
        "place": "Bologna",
        "body": "Finely ground pork studded with cubes of fat and slowly cooked. The best is silky, fragrant, and only lightly spiced, with or without pistachios.",
        "lookFor": "Mortadella Bologna IGP. American “bologna” is a distant cousin.",
        "products": [
          {
            "id": "er-mortadella",
            "name": "Mortadella Bologna IGP",
            "meta": "Sliced",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Bologna",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr"
          }
        ]
      },
      {
        "title": "Culatello",
        "place": "Zibello and the Po riverbanks",
        "body": "The prized heart of the pork leg, tied by hand and aged in the damp, foggy cellars of the Bassa Parmense. Richer and more aromatic than prosciutto, and far rarer.",
        "lookFor": "Culatello di Zibello DOP.",
        "products": [
          {
            "id": "er-culatello",
            "name": "Culatello di Zibello DOP",
            "meta": "Sliced",
            "tag": "Rare · DOP",
            "tagTone": "gold",
            "origin": "Zibello",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo"
          }
        ]
      },
      {
        "title": "Egg pasta",
        "place": "Bologna and across Emilia",
        "body": "Tagliatelle, tortellini, and lasagne are made from soft wheat flour and eggs, rolled paper-thin with a long wooden pin. Bologna’s pasta makers, the sfogline, still do it by hand.",
        "lookFor": "“pasta all’uovo,” which by Italian law means at least four eggs per kilo of flour. The best use more.",
        "products": [
          {
            "id": "er-tagliatelle",
            "name": "Egg tagliatelle",
            "meta": "Dried nests",
            "tag": "Egg pasta",
            "tagTone": "neutral",
            "origin": "Bologna",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
          },
          {
            "id": "er-tortellini",
            "name": "Tortellini",
            "meta": "Pork and Parmigiano filling",
            "tag": "Filled pasta",
            "tagTone": "neutral",
            "origin": "Bologna, Modena",
            "img": "https://lh3.googleusercontent.com/aida/AEtjO1XH3ztoRKkRdH9fjeZ7zGSvG7Z5lVtTJVcPxnxpnLlAyQgVptrChhD3aGe8eyAqVjd0t1vRNzKDPEjlQjVZ-Eo-tmswH65MCECJXC1QT7I-lJ124iYZKFjt2HHrSOK_zqbBcVos3Jg8CZW5bSAW6GQ8NC2GTMPbtiRRx9g9oxW6L3gS7A49QEWznJIYITZoOmWrGC6LiYi1Idw4k1vthGnlg7ZvP6f6Il5_lhaoAml5HXicCLGHPJRAbg"
          }
        ]
      }
    ],
    "eyebrow": "Essential terroir goods"
  },
  "dishes": {
    "lede": "Four dishes Emilia-Romagna makes its own.",
    "items": [
      {
        "title": "Tagliatelle al ragù",
        "where": "Bologna",
        "body": "A slow ragù of beef, pancetta, a little tomato, wine, and milk, tossed with wide ribbons of egg pasta. This is the real dish behind “spaghetti bolognese,” which you won’t find in Bologna.",
        "tip": "[Cook it below](#ragu)",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
      },
      {
        "title": "Tortellini in brodo",
        "where": "Bologna and Modena",
        "body": "Tiny folded pasta filled with pork loin, prosciutto, mortadella, and Parmigiano, served in a clear capon or beef broth. The Christmas dish across Emilia.",
        "tip": "Buy [good tortellini](product:er-tortellini) and put your effort into the broth.",
        "image": "https://lh3.googleusercontent.com/aida/AEtjO1XH3ztoRKkRdH9fjeZ7zGSvG7Z5lVtTJVcPxnxpnLlAyQgVptrChhD3aGe8eyAqVjd0t1vRNzKDPEjlQjVZ-Eo-tmswH65MCECJXC1QT7I-lJ124iYZKFjt2HHrSOK_zqbBcVos3Jg8CZW5bSAW6GQ8NC2GTMPbtiRRx9g9oxW6L3gS7A49QEWznJIYITZoOmWrGC6LiYi1Idw4k1vthGnlg7ZvP6f6Il5_lhaoAml5HXicCLGHPJRAbg"
      },
      {
        "title": "Lasagne verdi",
        "where": "Bologna",
        "body": "Spinach-green egg pasta layered with ragù, béchamel, and Parmigiano, baked until the edges crisp. Lighter than the American version and better for it.",
        "tip": "Make a double batch of ragù on Saturday; this is Sunday lunch.",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCrmH1O59xmE1Y77HZpjEBj-SfPVSMI9QI2fReWIfLlVNEUybRQbrmraXSxPdj_0TZ6CjRPClwypuyIngcZSdQWF4weTNTdt-l-5RO3ibWgN6HH8xkThDZsvE7bz7UiaPReDRpXaMUqNJH1oaFLo_S-GTC0lKEf3yFp0zpZx38Kiu2jCKbD9HzJ_dxxPK_L-qOMvLjTWVxK06o0_MKQKpEWnqHA6Go1bsRugfGn5xEMf7bDWgo5inpz"
      },
      {
        "title": "Piadina",
        "where": "Romagna",
        "body": "A thin flatbread cooked on a griddle and folded around prosciutto, soft squacquerone cheese, and arugula. Romagna’s beach-kiosk street food.",
        "tip": "Look for Piadina Romagnola IGP, or [ready-made piadine](product:er-piadina) to warm at home.",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDqmbMaaWotLnqd7h746aY6nsFALWzvjqbkrArYOxWH0YaS3R83fCAwa_zPopqfTC19b2rndKbS0X7Nj0tC5mW1iAtX3KmPVZsS3ZsFiP0HIvHEAkj179Jhwx4pyyijMtfmbJUWOuzPdOd5gogteAa_cNezVDsRpXU2pkT0vo_nXW3O0JbzNZUqjoeSjms0C0zSftPsOjvMIjrOBbhGg700irDxZk2EN0lXZPe4eI9aZMgxn7bkIl7z"
      }
    ],
    "eyebrow": "Culinary canon"
  },
  "maker": {
    "name": "Acetaia Giusti",
    "place": "Modena",
    "paragraphs": [
      "Just outside Modena, the Giusti family has been making balsamic vinegar for more than four centuries. Their records go back to 1605, when Giuseppe and Francesco Maria Giusti were registered in the city as sausage and lard makers under the Este dukes. The business has passed through 17 generations since and is led today by Claudio Stefani Giusti.",
      "The vinegar ages in a collection of thousands of wooden casks, some centuries old, made from oak, chestnut, cherry, mulberry, and juniper, each leaving its own mark on the flavor. In the late 1800s, Giusti balsamic won a run of gold medals at European exhibitions and a royal warrant from the King of Italy, both still shown on the label. The acetaia also runs a museum where visitors can see how balsamic is made."
    ],
    "photos": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuB8fNZqrw7_TeLPRVEEG_27bLhKOX_XNqCdzPhwWHZ5bLTyo7JBuBG7nuLUONxaWfTWjzKpwLufbGDQGMZpw9aC92xt7ZAcbhTPrMmYlaCy6jdyFMiwErNuyU4WWyzRPIVkvjpNhXaLksOXB9Cu3ZN-VdxwvM8OPNbVZGzjbI-INRp9b-ATgVayuCc_lE_QPClNYuWawfQf4JMKOJJU235NCk7vRde5n1RHDnQvA4n98iandjWQZQvd",
        "alt": "Barrel room · Modena",
        "caption": "Barrel room · Modena"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCZyhmRoysTXxSEjhPdYG3L2aauy8GnQG3COaak_T-rq-gH0MIvgRD3YWT8DVg0xncJfT9Kgi264v_koaWGZjr_BkDt--tchO0yaeRu0s9IcA7WGyoAaHkLeWpFkEILzTxRXam4m8uLZSE7fiXX19cOXPaRPT-yW44Vb6evFBHXb5blW8ZnWNV6MyWl056-YbSwFVE6h2MvAJ_x7TRAz-3ObJcmaI9tSjyRZxE_cP8UAfBGYcoCxPH_",
        "alt": "Family cellar · Acetaia Giusti",
        "caption": "Family cellar · Acetaia Giusti"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuBp68m5lSU6-8ZN67UTUCN5BKNv5QSKDC5KizaTIowwYF5M2EkGtvLJaKDKIsQmF41ZNcJsl0T0Znglr7jklxtT-w22t7njnnntvShori47D3GwKrBVh6T3bUeXq2gEQgCFrtLRh0jucqR1Sm-6qrvqHFqckmsOeZaFDwLq5f77THglUO2sMHowN1KTpK-qNejEDxMSlQdVLQF4BEYjm8mECLtCPBUQwoIi2VJf_UMrLqVcvy2eTRfW",
        "alt": "Giusti balsamic · Modena",
        "caption": "Giusti balsamic · Modena"
      }
    ],
    "facts": [
      {
        "label": "Founded",
        "value": "1605"
      },
      {
        "label": "Family",
        "value": "17 generations"
      },
      {
        "label": "Sold in",
        "value": "50+ countries"
      }
    ],
    "productsLabel": "From Acetaia Giusti",
    "products": [
      {
        "id": "er-giusti-igp",
        "name": "Giusti Aceto Balsamico di Modena IGP",
        "meta": "250 ml",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "Modena",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBp68m5lSU6-8ZN67UTUCN5BKNv5QSKDC5KizaTIowwYF5M2EkGtvLJaKDKIsQmF41ZNcJsl0T0Znglr7jklxtT-w22t7njnnntvShori47D3GwKrBVh6T3bUeXq2gEQgCFrtLRh0jucqR1Sm-6qrvqHFqckmsOeZaFDwLq5f77THglUO2sMHowN1KTpK-qNejEDxMSlQdVLQF4BEYjm8mECLtCPBUQwoIi2VJf_UMrLqVcvy2eTRfW"
      },
      {
        "id": "er-giusti-tradizionale",
        "name": "Giusti Aceto Balsamico Tradizionale DOP",
        "meta": "100 ml",
        "tag": "DOP · 100 ml",
        "tagTone": "gold",
        "origin": "Modena",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuADppUJd9LWAsZ00PeDJAgOzH1vvUIaXbMMSWISu9mdyUJK162Zg7gdzcknUAi3CVTNMQWHZWZQToMZgmy3j8F5DbRW32wuGj4UXpsVdEJ5DsBAAFNcaat_J7X0b_Jnq4khHowo02MPWIZ5IjPXbRduzDgjwHgNujKIGsZxaDGl9RwY2807JFgGd0y6QugTckwiJ8gI_a-zmrn2rA7dCUyrP7a3O7URtlL6uZyrAA41iSvDq71BgOmd"
      }
    ]
  },
  "cook": {
    "title": "Cook Emilia-Romagna",
    "lede": "One classic from scratch and one ten-minute shortcut from Modena.",
    "recipe": {
      "id": "ragu",
      "title": "Tagliatelle al ragù",
      "serves": "4–6",
      "time": "about 3½ hours, mostly simmering",
      "from": "Bologna",
      "steps": [
        {
          "title": "Soften the base.",
          "body": "In a heavy pot, gently cook the pancetta in the olive oil until the fat melts. Add the carrot, celery, and onion and cook over low heat for 10 minutes, until soft."
        },
        {
          "title": "Brown the meat.",
          "body": "Add the beef, raise the heat, and stir until it loses its raw color and begins to sizzle, about 10 minutes."
        },
        {
          "title": "Add the wine.",
          "body": "Pour in the wine and simmer until it has evaporated."
        },
        {
          "title": "Simmer slowly.",
          "body": "Stir in the passata and a ladle of broth. Cook at the barest simmer, partly covered, for 2½–3 hours, adding broth whenever it looks dry. Stir in the milk for the last 30 minutes and season with salt and pepper."
        },
        {
          "title": "Toss and serve.",
          "body": "Cook the tagliatelle in well-salted water until just tender. Toss with the ragù and a splash of pasta water, and serve with grated Parmigiano Reggiano."
        }
      ],
      "touch": "Leave out the garlic and herbs. Bologna’s ragù is about meat, time, and a little milk for softness. Finish with [24-month Parmigiano Reggiano](product:er-parmigiano-24), grated just before serving.",
      "shoppingList": [
        "500 g fresh [egg tagliatelle](product:er-tagliatelle), or 400 g dried",
        "300 g coarsely ground beef",
        "150 g pancetta",
        "50 g each carrot, celery, and onion",
        "125 ml dry white wine",
        "300 g tomato passata",
        "125 ml whole milk",
        "About 250 ml light meat broth",
        "Extra-virgin olive oil, salt, and pepper",
        "[Parmigiano Reggiano](product:er-parmigiano-24), to serve"
      ],
      "products": [
        {
          "id": "er-tagliatelle",
          "name": "Egg tagliatelle",
          "meta": "Dried nests",
          "tag": "Egg pasta",
          "tagTone": "neutral",
          "origin": "Bologna",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
        },
        {
          "id": "er-parmigiano-24",
          "name": "Parmigiano Reggiano DOP, 24 months",
          "meta": "Wedge, cut to order",
          "tag": "Aged 24 mos",
          "tagTone": "gold",
          "origin": "Parma, Reggio",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
        }
      ],
      "schema": {
        "yield": "4–6 servings",
        "prepTime": "PT20M",
        "cookTime": "PT3H",
        "totalTime": "PT3H20M",
        "ingredients": [
          "300 g coarsely ground beef",
          "150 g pancetta, finely chopped",
          "50 g carrot, finely chopped",
          "50 g celery, finely chopped",
          "50 g onion, finely chopped",
          "2 tablespoons extra-virgin olive oil",
          "125 ml dry white wine",
          "300 g tomato passata",
          "125 ml whole milk",
          "About 250 ml light meat broth",
          "Salt and black pepper",
          "500 g fresh egg tagliatelle, or 400 g dried",
          "Parmigiano Reggiano, to serve"
        ]
      },
      "imageCaption": "Bologna classic · simmered about 3½ hours",
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
    },
    "shortcut": {
      "title": "Ten minutes in Modena",
      "body": "Break a wedge of aged Parmigiano Reggiano into rough chunks with a short almond-shaped knife rather than slicing it. Add a few drops of aged balsamic to each piece, and set it out with folded prosciutto, cubes of mortadella, and a glass of chilled Lambrusco. It’s how much of Emilia starts a meal.",
      "products": [
        {
          "id": "er-parmigiano-24",
          "name": "Parmigiano Reggiano DOP, 24 months",
          "meta": "Wedge, cut to order",
          "tag": "Aged 24 mos",
          "tagTone": "gold",
          "origin": "Parma, Reggio",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
        },
        {
          "id": "er-balsamico-igp",
          "name": "Aceto Balsamico di Modena IGP",
          "meta": "250 ml",
          "tag": "IGP",
          "tagTone": "green",
          "origin": "Modena",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCZyhmRoysTXxSEjhPdYG3L2aauy8GnQG3COaak_T-rq-gH0MIvgRD3YWT8DVg0xncJfT9Kgi264v_koaWGZjr_BkDt--tchO0yaeRu0s9IcA7WGyoAaHkLeWpFkEILzTxRXam4m8uLZSE7fiXX19cOXPaRPT-yW44Vb6evFBHXb5blW8ZnWNV6MyWl056-YbSwFVE6h2MvAJ_x7TRAz-3ObJcmaI9tSjyRZxE_cP8UAfBGYcoCxPH_"
        }
      ],
      "eyebrow": "Modena shortcut",
      "button": "Get the tasting pair"
    },
    "eyebrow": "Food valley kitchen"
  },
  "readTheLabel": "“Parmesan,” “bologna,” and “balsamic glaze” are not Parmigiano Reggiano, Mortadella Bologna, or Aceto Balsamico Tradizionale. Check the place of production, the ingredient list, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Emilia-Romagna home",
    "body": "A table in Emilia starts with a board of cheese and cured meat and ends with a pot of something that took all afternoon. We’ve gathered eight ingredients from this story into one set: enough for a tasting board, a pot of ragù, and Sunday lasagne.",
    "button": "Add the Emilia-Romagna pantry set",
    "products": [
      {
        "id": "er-parmigiano-24",
        "name": "Parmigiano Reggiano DOP",
        "meta": "24 months",
        "tag": "Aged 24 mos",
        "tagTone": "gold",
        "origin": "Parma, Reggio",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy"
      },
      {
        "id": "er-prosciutto-parma",
        "name": "Prosciutto di Parma DOP",
        "meta": "Sliced",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Langhirano",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq"
      },
      {
        "id": "er-mortadella",
        "name": "Mortadella Bologna IGP",
        "meta": "Sliced",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "Bologna",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr"
      },
      {
        "id": "er-culatello",
        "name": "Culatello di Zibello DOP",
        "meta": "Sliced",
        "tag": "Rare · DOP",
        "tagTone": "gold",
        "origin": "Zibello",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo"
      },
      {
        "id": "er-balsamico-igp",
        "name": "Aceto Balsamico di Modena IGP",
        "meta": "250 ml",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "Modena",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCZyhmRoysTXxSEjhPdYG3L2aauy8GnQG3COaak_T-rq-gH0MIvgRD3YWT8DVg0xncJfT9Kgi264v_koaWGZjr_BkDt--tchO0yaeRu0s9IcA7WGyoAaHkLeWpFkEILzTxRXam4m8uLZSE7fiXX19cOXPaRPT-yW44Vb6evFBHXb5blW8ZnWNV6MyWl056-YbSwFVE6h2MvAJ_x7TRAz-3ObJcmaI9tSjyRZxE_cP8UAfBGYcoCxPH_"
      },
      {
        "id": "er-tagliatelle",
        "name": "Egg tagliatelle",
        "meta": "Dried nests",
        "tag": "Egg pasta",
        "tagTone": "neutral",
        "origin": "Bologna",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl"
      },
      {
        "id": "er-tortellini",
        "name": "Tortellini",
        "meta": "Pork and Parmigiano",
        "tag": "Filled pasta",
        "tagTone": "neutral",
        "origin": "Bologna, Modena",
        "img": "https://lh3.googleusercontent.com/aida/AEtjO1XH3ztoRKkRdH9fjeZ7zGSvG7Z5lVtTJVcPxnxpnLlAyQgVptrChhD3aGe8eyAqVjd0t1vRNzKDPEjlQjVZ-Eo-tmswH65MCECJXC1QT7I-lJ124iYZKFjt2HHrSOK_zqbBcVos3Jg8CZW5bSAW6GQ8NC2GTMPbtiRRx9g9oxW6L3gS7A49QEWznJIYITZoOmWrGC6LiYi1Idw4k1vthGnlg7ZvP6f6Il5_lhaoAml5HXicCLGHPJRAbg"
      },
      {
        "id": "er-piadina",
        "name": "Piadina Romagnola IGP",
        "meta": "Pack of flatbreads",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "Romagna",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDMH2M-VN1-Pz9hCbkXgdgup639qKPj1bgJo2jf1PgPm9NKzrgAY_T6MZujPmHAC4Z5W83H6bgIwaOrwcCLEuI-3an8k7c44fESuTzHNkXQYSCN_pESKkZUsjfCP-01ZMORW4JuJXmElmpAAAxPwRTi5o5Crpmlu_bVRSOXjhggx377vb87iOfKRdkb1LjsaiX1pF73K7pXrg-DIruRvIfEPidPaOJoOlRNnbEwUK6fqguV0N3VVklu"
      }
    ],
    "eyebrow": "Limited curation · Parcel N° 02"
  },
  "about": [
    "Casa Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "Consorzio del Formaggio Parmigiano Reggiano; Consorzio del Prosciutto di Parma, “New Production Rules” (2023); Consorzio Tutela Aceto Balsamico Tradizionale di Modena; European Commission eAmbrosia register; Accademia Italiana della Cucina, registered recipe for ragù alla bolognese; Gambero Rosso (2024), Scatti di Gusto, and Pitti Taste exhibitor profile for Acetaia Giusti."
};

export default emiliaRomagna;
