import type { RegionStory } from './types';

// Photos are stand-ins from elsewhere on the site, to be replaced.
// Content from the Trentino-Alto Adige story artifact. Product ids are the artifact's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const trentinoAltoAdige: RegionStory = {
  "slug": "trentino-alto-adige",
  "name": "Trentino-Alto Adige",
  "seoTitle": "Trentino-Alto Adige Food and Pantry Ingredients | Italy Region by Region | La Taglia",
  "seoDescription": "Cook Trentino-Alto Adige from its pantry: Speck Alto Adige, Val di Non apples, Schüttelbrot, Trentingrana, Puzzone di Moena and Stelvio, with a recipe for canederli in broth.",
  "kicker": "Region seventeen: the Dolomites",
  "subtitle": "Speck, mountain cheese, and the apples of the Alps.",
  "hero": {
    "color": "#1F3D2E",
    "colorDeep": "#142A1F",
    "dossier": "Terroir archive · Dossier N° 17",
    "badge": "Bilingual Alpine kitchen",
    "metrics": [
      {
        "icon": "terrain",
        "label": "Mountains",
        "value": "The Dolomites"
      },
      {
        "icon": "location_city",
        "label": "Provinces",
        "value": "Trento & Bolzano"
      },
      {
        "icon": "agriculture",
        "label": "Orchards",
        "value": "7,000 hectares"
      },
      {
        "icon": "restaurant",
        "label": "Signature",
        "value": "Speck Alto Adige IGP"
      }
    ],
    "heritage": "Tyrolean mountain heritage",
    "imageCaption": {
      "title": "The Dolomites",
      "body": "High valleys where orchards and vineyards cover the slopes and dairy cows graze summer pastures."
    },
    "imageTag": "Dolomites · high valleys",
    "heritageNote": "a little salt, a little smoke",
    "image": "/img/regions/trentino-alto-adige.jpg",
    "imageAlt": "Val di Funes in the Dolomites: green pastures, a village church and the jagged Odle peaks."
  },
  "intro": [
    "Trentino-Alto Adige is Italy’s northernmost region, a world of high valleys among the Dolomites made of two self-governing provinces: Italian-speaking Trentino around Trento in the south, and Alto Adige, or South Tyrol, around Bolzano in the north, where most people speak German. South Tyrol belonged to Austria until after the First World War, and its kitchen still feels Tyrolean. In the valleys, orchards and vineyards cover the slopes; higher up, dairy cows graze summer pastures that give the region its cheeses. Its signature cured meat, speck, joins two traditions: the salt-curing and air-drying of the Mediterranean and the smoking of northern Europe. The result is a cuisine of bread dumplings and rye bread, smoked ham and mountain cheese, apples and strudel, equal parts Italian and Alpine.",
    "Two languages, one mountain kitchen. Start with the ingredients that define the region, learn the dishes they make possible, and meet a South Tyrolean family that has spent three generations making speck."
  ],
  "pantry": {
    "lede": "Six ingredients behind the region’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "Speck",
        "place": "Alto Adige, South Tyrol",
        "body": "Boneless pork leg dry-cured with salt and spices such as juniper and pepper, gently smoked over low-resin wood like beech at no more than 20°C, then aged for about 22 weeks. The rule is “a little salt, a little smoke, and plenty of fresh air.”",
        "lookFor": "“Speck Alto Adige IGP” branded on the rind. Not all speck from the region carries it.",
        "products": [
          {
            "id": "taa-speck",
            "name": "Speck Alto Adige IGP",
            "meta": "Piece",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Alto Adige",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq=w1600"
          }
        ]
      },
      {
        "title": "Apples",
        "place": "Val di Non, Val di Sole, and South Tyrol",
        "body": "In the Val di Non and Val di Sole, more than 4,000 growers tend some 7,000 hectares of orchards producing Italy’s only DOP apple. South Tyrol’s apples carry their own protected name.",
        "lookFor": "Mela Val di Non DOP or Mela Alto Adige IGP.",
        "products": [
          {
            "id": "taa-mele",
            "name": "Mela Val di Non DOP",
            "meta": "Bag",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Val di Non",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr=w1600"
          }
        ]
      },
      {
        "title": "Schüttelbrot",
        "place": "South Tyrol",
        "body": "A thin, crisp rye flatbread, the traditional partner for speck and cheese on a South Tyrolean board.",
        "lookFor": "Schüttelbrot Alto Adige IGP.",
        "products": [
          {
            "id": "taa-schuttelbrot",
            "name": "Schüttelbrot Alto Adige IGP",
            "meta": "Pack",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "South Tyrol",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo=w1600"
          }
        ]
      },
      {
        "title": "Trentingrana",
        "place": "Trentino, especially the Val di Non",
        "body": "Trentino’s mountain grana, a hard cheese made once a day from milk delivered fresh each evening. It takes at least 500 liters of milk to make one wheel of about 36 kilos.",
        "lookFor": "Trentingrana by name, Trentino’s own mountain grana.",
        "products": [
          {
            "id": "taa-trentingrana",
            "name": "Trentingrana",
            "meta": "Wedge",
            "tag": "Mountain grana",
            "tagTone": "neutral",
            "origin": "Trentino",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy=w1600"
          }
        ]
      },
      {
        "title": "Puzzone di Moena",
        "place": "The Val di Fassa",
        "body": "A washed-rind mountain cheese whose powerful aroma, the source of its name, gives way to a surprisingly delicate flavor. Locally it is also called Spretz tzaorì.",
        "lookFor": "Puzzone di Moena DOP.",
        "products": [
          {
            "id": "taa-puzzone",
            "name": "Puzzone di Moena DOP",
            "meta": "Wedge",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Val di Fassa",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuAl_5nHHJIzoS-WsCluRQYcsvFaCEJgLpMKhF74uchwSFZaiasRvF2QgOGb8yQIioI-Tl012aRJqnvzUfYVXVIN42AtBrqz67jqjAH3CbxmYm6uEHRkYdah0q_WAQSgW93YHOemOcCRZN921JwihtDRxkKHN7PzTEk88hPG_P2AV7Y_dSVKxmfxeIubOnR3JAqjFS_dXGAzG2xxfQE3VDOGzRjZcEhJ1T-LSazL8n3fCCvhoP3Kr76d=w1600"
          }
        ]
      },
      {
        "title": "Stelvio",
        "place": "South Tyrol",
        "body": "South Tyrol’s mountain cheese, protected since 2007 and the province’s only DOP cheese.",
        "lookFor": "Stelvio DOP, also labeled Stilfser.",
        "products": [
          {
            "id": "taa-stelvio",
            "name": "Stelvio DOP",
            "meta": "Wedge",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "South Tyrol",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDMH2M-VN1-Pz9hCbkXgdgup639qKPj1bgJo2jf1PgPm9NKzrgAY_T6MZujPmHAC4Z5W83H6bgIwaOrwcCLEuI-3an8k7c44fESuTzHNkXQYSCN_pESKkZUsjfCP-01ZMORW4JuJXmElmpAAAxPwRTi5o5Crpmlu_bVRSOXjhggx377vb87iOfKRdkb1LjsaiX1pF73K7pXrg-DIruRvIfEPidPaOJoOlRNnbEwUK6fqguV0N3VVklu=w1600"
          }
        ]
      }
    ],
    "eyebrow": "Essential terroir goods"
  },
  "dishes": {
    "lede": "Four dishes Trentino-Alto Adige makes its own.",
    "items": [
      {
        "title": "Canederli",
        "where": "Across the region",
        "body": "Bread dumplings, Knödel in German, made with stale bread and speck and served in meat broth with chives.",
        "tip": "[Cook it below](#canederli)",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAPcC0a36PdQKRFN67N9n4iWBfhvVaOYD4lAqKygnUjTrscttDOYLVoI8x1mJHXJybsSr0etHTwY4pU0A01kN4o1IfpMOvEBAXOIrB8eZ11ou4LrSyCjELVvYNkcTxy0DtPWugtK_maKrpF1S29ogN-YzCyzhDGWnfH4HdQ3jXFuv8h73Z3GNxqFxYhHzG5euOwWXNcUn83KLa8hc2NC2nQFY3TdtlSPgMj0otF-z9Yn-C7fprrBLWX=w1600"
      },
      {
        "title": "Strangolapreti",
        "where": "Trento",
        "body": "Trentino’s green gnocchi made with spinach, whose name means “priest stranglers.”",
        "note": "“Priest stranglers”",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuByITNBX-WKPtlq_3uexb5wLBRki8n3vLslVS4T31ERWmhBQJtGElp63Cf4okDOPtV41TDLA3eKNXUvwrwT_DCCFx31iPZZCKzYNbQ1fLysHaWMF4EueHvvpV_AGTIzb3Im3BHXMvr2VRMjXiDayCfccLEC480hCMsAe4pcNhUUJ_1L4PmB2VXlMCGIn33KuplVRTAo8bjV9wChz5pdPB8rHyNqlkB27mUK8VxW3Ylqqb7U-HNKsDgl=w1600"
      },
      {
        "title": "Apple strudel",
        "where": "Across the region",
        "body": "Thin pastry rolled around apples, the dessert South Tyrol shares with Austria, made with fruit from the region’s own orchards.",
        "tip": "Bake it with [Val di Non apples](product:taa-mele).",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuC66Qz_O1vxGNBZSyhKBG7E11V9J_ynfSiGuUL5GLDjS-pp7xx0eqw_gmnVIRMXOEiaJ2wLNz9eDe-dRv1HJffGFDGWKIH-9TlU0UBDIw940qDCkUbeXjZjdsjLtKuD3B7Gg0GWHngYfm0d0u9xYun-FrttGnejAkzJLWV7HyuC_ZCA_QHWryHtkt4PkqDJFzQjJqtsSDMMGOLlU2E8sTTNiKXafW91SYmjA9P72M1cR5KetKzCi5cq=w1600"
      },
      {
        "title": "The South Tyrolean board",
        "where": "South Tyrol",
        "body": "Speck, cheese, crisp rye bread, and a glass of local wine: the classic mountain snack after a hike.",
        "tip": "[Make it below](#shortcut)",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy=w1600"
      }
    ],
    "eyebrow": "Alpine canon"
  },
  "maker": {
    "name": "Recla",
    "place": "Silandro",
    "paragraphs": [
      "Recla began as a village butcher’s shop opened by Gino Recla in the Val Venosta, in western South Tyrol. In 1985 his sons, Gino and Franz, took over and moved the business to Silandro, turning it toward export, and in 2004 it began shipping speck to the United States. Today the company is run by the third generation, the brothers Robert and Paul Recla, and is still wholly owned by the family.",
      "Recla makes Speck Alto Adige IGP in four traditional steps: careful selection of the meat, seasoning with the family’s spice mix, light smoking over beech wood, and slow natural aging of at least 22 weeks. The dry mountain air of the Val Venosta, among the glaciers of the Ortles and Palla Bianca, does the rest."
    ],
    "photos": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuAPcC0a36PdQKRFN67N9n4iWBfhvVaOYD4lAqKygnUjTrscttDOYLVoI8x1mJHXJybsSr0etHTwY4pU0A01kN4o1IfpMOvEBAXOIrB8eZ11ou4LrSyCjELVvYNkcTxy0DtPWugtK_maKrpF1S29ogN-YzCyzhDGWnfH4HdQ3jXFuv8h73Z3GNxqFxYhHzG5euOwWXNcUn83KLa8hc2NC2nQFY3TdtlSPgMj0otF-z9Yn-C7fprrBLWX=w1600",
        "alt": "Val Venosta · Silandro",
        "caption": "Val Venosta · Silandro"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq=w1600",
        "alt": "Speck aging 22+ weeks",
        "caption": "Speck aging 22+ weeks"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuAnmv_x6pp8pedaJCwB3KpOyHiwoux-_Zw7UEg-8tHQA_WJGaPfnDtGodkrZjSiPXFoiIM0lbvgYcoOUCfJSy5AbEl111xwfxRWxfyGgSnyKAinmiguDsYDuxWCvIiDR15Qwm2ZKdjCzGHWmTjzYB1abwN7YqA65e_DwIc2qf_h09V0xMNEdJKbcLMYZFXc3RN2UXvi9uOgM0JYY1X1L5Wl1aUwDP0dBBQfz6uOjhWBl1K0MoFePgpE=w1600",
        "alt": "Recla Speck Alto Adige IGP",
        "caption": "Recla Speck Alto Adige IGP"
      }
    ],
    "facts": [
      {
        "label": "Valley",
        "value": "Val Venosta"
      },
      {
        "label": "Family",
        "value": "Third generation"
      },
      {
        "label": "Aging",
        "value": "22+ weeks"
      }
    ],
    "productsLabel": "From Recla",
    "products": [
      {
        "id": "taa-recla-speck",
        "name": "Recla Speck Alto Adige IGP",
        "meta": "Piece",
        "tag": "Aged 22+ wks",
        "tagTone": "gold",
        "origin": "Val Venosta",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCZhnC6OD1VrmeoAkesXcV61vBh25ZoqFu3NKi1EWxScFq08esuCcNzj28MeLyPLME1eJ4rqHGka5Va1TpbBHJJjtXPwJCp0j6OcrdBzYqdqkNECgc1aIdIrdUQ-3yQ49QItc5wh4ZkdvFaJm6-EOJLmg_-fEa9Y74OCjgdx1yeFqlC35iIO1cg2THDFfbVWTTKfIfoC35P_lksCF2Ua-5Tn5iAP5Amgfwuc-v6kUOIJSkESvhpWyfq=w1600"
      },
      {
        "id": "taa-recla-speck-sliced",
        "name": "Recla Speck Alto Adige IGP, sliced",
        "meta": "Pack",
        "tag": "Beech smoked",
        "tagTone": "gold",
        "origin": "Val Venosta",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuAVGYQ04rZ-nKR0Oz5lhG8ivLp6cW06G3MC69sYYbwZJs2pqjQrdmZo7GAMNt3U-WCjFmmx3uy9XT2Yx-9gh8tZO3EqFRsZUkPQmYsYt8-Uyx8O7ojZ-JUvRro8eR6r34iv4LETSR7WsPUnhlxtF8trSRL7T5VcCPBar3UfqjOT1RKVlbvzIAzIcArvfdgViGqDu8HffvvgRjxkKj-0D1p64LmHiXZDq9r4px6GXqS2NLFf_mbKHECS=w1600"
      }
    ]
  },
  "cook": {
    "title": "Cook Trentino-Alto Adige",
    "lede": "One classic from scratch and one ten-minute shortcut from South Tyrol.",
    "recipe": {
      "id": "canederli",
      "title": "Canederli allo speck in brodo",
      "serves": "4",
      "time": "about 45 minutes",
      "from": "South Tyrol",
      "steps": [
        {
          "title": "Soak the bread.",
          "body": "Mix the bread cubes with the speck and the softened onion. Beat the eggs with the milk, pour over, and leave for about 15 minutes until the bread is soft."
        },
        {
          "title": "Shape the dumplings.",
          "body": "Add the herbs, a pinch of salt, and just enough flour to bind. With wet hands, shape into firm dumplings about the size of a small orange."
        },
        {
          "title": "Cook.",
          "body": "Lower the canederli into gently simmering salted water or broth and cook for about 10 minutes."
        },
        {
          "title": "Serve.",
          "body": "Lift them out with a slotted spoon and serve two per bowl in hot meat broth, topped with chopped chives."
        }
      ],
      "touch": "Use day-old bread and real [Speck Alto Adige](product:taa-speck), diced small so its smoky flavor runs through every bite. Test one dumpling first: if it falls apart, add a little more flour.",
      "shoppingList": [
        "200 g stale white bread",
        "100 g [Speck Alto Adige IGP](product:taa-speck)",
        "2 eggs",
        "About 150 ml milk",
        "1 small onion and a little butter",
        "1–2 tbsp flour",
        "Chives or parsley",
        "About 1.5 L meat broth",
        "Salt"
      ],
      "products": [
        {
          "id": "taa-speck",
          "name": "Speck Alto Adige IGP",
          "meta": "Piece",
          "tag": "IGP",
          "tagTone": "green",
          "origin": "Alto Adige",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq=w1600"
        }
      ],
      "schema": {
        "yield": "4 servings",
        "prepTime": "PT30M",
        "cookTime": "PT15M",
        "totalTime": "PT45M",
        "ingredients": [
          "200 g stale white bread, cut into small cubes",
          "100 g Speck Alto Adige IGP, finely diced",
          "2 eggs",
          "About 150 ml milk",
          "1 small onion, finely chopped and softened in a little butter",
          "1–2 tablespoons flour",
          "A small bunch of chives or parsley, chopped",
          "Salt",
          "About 1.5 L hot meat broth"
        ]
      },
      "imageCaption": "South Tyrol classic · about 45 minutes",
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg7ZeusKi1XJ_YIbUpf7bMvUDHPzrJBa0kGGcUmiEWQXn5vyYqb10N5ExBRlYr2yJ0WfsFPe7URckqO8PDwMH0UDSwVm6XQCF-NoeAM33s50RkHXH5cUKTQIls7nyQjkd8xFb7E1CVsnD4Hx0oK8so72g2UalmTdOWlUWCd2mUYhcv42IUIFm1cqLKE69xjZ96SmNApFtb-zmua5MK2Erwp7yfRDiKgHOwIebR0rdf84T1bYeSwKl=w1600"
    },
    "shortcut": {
      "title": "Ten minutes in South Tyrol",
      "body": "Cut speck into thin slices or small batons, set it on a wooden board with wedges of mountain cheese and sliced apple, and add a stack of Schüttelbrot. Pour a glass of local wine. That’s the South Tyrolean snack, ready in minutes.",
      "products": [
        {
          "id": "taa-schuttelbrot",
          "name": "Schüttelbrot Alto Adige IGP",
          "meta": "Pack",
          "tag": "IGP",
          "tagTone": "green",
          "origin": "South Tyrol",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo=w1600"
        },
        {
          "id": "taa-stelvio",
          "name": "Stelvio DOP",
          "meta": "Wedge",
          "tag": "DOP",
          "tagTone": "green",
          "origin": "South Tyrol",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDMH2M-VN1-Pz9hCbkXgdgup639qKPj1bgJo2jf1PgPm9NKzrgAY_T6MZujPmHAC4Z5W83H6bgIwaOrwcCLEuI-3an8k7c44fESuTzHNkXQYSCN_pESKkZUsjfCP-01ZMORW4JuJXmElmpAAAxPwRTi5o5Crpmlu_bVRSOXjhggx377vb87iOfKRdkb1LjsaiX1pF73K7pXrg-DIruRvIfEPidPaOJoOlRNnbEwUK6fqguV0N3VVklu=w1600"
        }
      ],
      "eyebrow": "Alpine board shortcut",
      "button": "Get the board pair"
    },
    "eyebrow": "Mountain kitchen"
  },
  "readTheLabel": "Not every speck from the region is Speck Alto Adige IGP, and plenty of “speck” sold abroad is made elsewhere. Check the place of production, the brand on the rind, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "title": "Bring Trentino-Alto Adige home",
    "body": "An Alpine table is built on smoked ham, mountain cheese, good bread, and apples. We’ve gathered eight ingredients from this story into one set: enough for canederli in broth, a South Tyrolean board, and a strudel.",
    "button": "Add the Trentino-Alto Adige pantry set",
    "products": [
      {
        "id": "taa-recla-speck",
        "name": "Recla Speck Alto Adige IGP",
        "meta": "Piece",
        "tag": "Aged 22+ wks",
        "tagTone": "gold",
        "origin": "Val Venosta",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCZhnC6OD1VrmeoAkesXcV61vBh25ZoqFu3NKi1EWxScFq08esuCcNzj28MeLyPLME1eJ4rqHGka5Va1TpbBHJJjtXPwJCp0j6OcrdBzYqdqkNECgc1aIdIrdUQ-3yQ49QItc5wh4ZkdvFaJm6-EOJLmg_-fEa9Y74OCjgdx1yeFqlC35iIO1cg2THDFfbVWTTKfIfoC35P_lksCF2Ua-5Tn5iAP5Amgfwuc-v6kUOIJSkESvhpWyfq=w1600"
      },
      {
        "id": "taa-schuttelbrot",
        "name": "Schüttelbrot Alto Adige IGP",
        "meta": "Pack",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "South Tyrol",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo=w1600"
      },
      {
        "id": "taa-trentingrana",
        "name": "Trentingrana",
        "meta": "Wedge",
        "tag": "Mountain grana",
        "tagTone": "neutral",
        "origin": "Trentino",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBZfdJEmUYgFHiabo38UHmLvwd9Y0Psx-MdVvSejnGhXz0buPdpFoOkBRLYbpfeugiIS7X2Byyk-Jl6iQ5ZV3NX8I6EBEC08wKcTlh2_x1WqptPq-EYf0Y1aKTkben9ax6x2dvx6vLRcxDI9Afkv4bxdqmV1rvrkU-p4csGegtzc0rTIvgem-1IsUcORxKDjKdjeZnkxYh9L_SIgJat8Sn5Vi7sv5rIFxSueuPkRhdJx8nHnYbzQzmy=w1600"
      },
      {
        "id": "taa-puzzone",
        "name": "Puzzone di Moena DOP",
        "meta": "Wedge",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Val di Fassa",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuAl_5nHHJIzoS-WsCluRQYcsvFaCEJgLpMKhF74uchwSFZaiasRvF2QgOGb8yQIioI-Tl012aRJqnvzUfYVXVIN42AtBrqz67jqjAH3CbxmYm6uEHRkYdah0q_WAQSgW93YHOemOcCRZN921JwihtDRxkKHN7PzTEk88hPG_P2AV7Y_dSVKxmfxeIubOnR3JAqjFS_dXGAzG2xxfQE3VDOGzRjZcEhJ1T-LSazL8n3fCCvhoP3Kr76d=w1600"
      },
      {
        "id": "taa-stelvio",
        "name": "Stelvio DOP",
        "meta": "Wedge",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "South Tyrol",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDMH2M-VN1-Pz9hCbkXgdgup639qKPj1bgJo2jf1PgPm9NKzrgAY_T6MZujPmHAC4Z5W83H6bgIwaOrwcCLEuI-3an8k7c44fESuTzHNkXQYSCN_pESKkZUsjfCP-01ZMORW4JuJXmElmpAAAxPwRTi5o5Crpmlu_bVRSOXjhggx377vb87iOfKRdkb1LjsaiX1pF73K7pXrg-DIruRvIfEPidPaOJoOlRNnbEwUK6fqguV0N3VVklu=w1600"
      },
      {
        "id": "taa-mele",
        "name": "Mela Val di Non DOP",
        "meta": "Bag",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Val di Non",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr=w1600"
      },
      {
        "id": "taa-succo-mela",
        "name": "Apple juice from the valleys",
        "meta": "Bottle",
        "tag": "Apple juice",
        "tagTone": "neutral",
        "origin": "The valleys",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuA4EH7PBxM5mkGtU_hUOJIWGkBVxZJn4EFpJjF38EOKBU7wo_ddyMCFm271EacOGO5w4Xv6DGSB-7_saGCFJU5iM16suJDjSS0a_VzFQbhUmwPL8egJ5XILWwdPmz-_POZdud-1IbUhFmWHh2snwuV7-TAFb5uKZfOhuCAAC57-6VjgZFhqO7vaYO8y1vEORke8lGfQXTjEtIhhnE1cknP388wuircWvsS4xPwHGOMZ7oIWF5WLtCf7=w1600"
      },
      {
        "id": "taa-canederli-pane",
        "name": "Bread for canederli",
        "meta": "Bag",
        "tag": "For canederli",
        "tagTone": "neutral",
        "origin": "The region",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq=w1600"
      }
    ],
    "eyebrow": "Limited curation · Parcel N° 17"
  },
  "about": [
    "La Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "Consorzio Tutela Speck Alto Adige (speck.it and Google Arts & Culture); Italia.it (ENIT) on Speck Alto Adige IGP; Linkiesta on speck; Quotidiano Nazionale on South Tyrolean products; Visit Trentino and Taste Trentino on Trentino’s apples and cheeses; Visit Val di Sole on Melinda; Scatti di Gusto on Trentingrana; Gambero Rosso on Trentino cheeses; Bartolotta’s Trentino menu notes; Forbes Italia, Speck.it, and Camera di Commercio di Bolzano on Recla."
};

export default trentinoAltoAdige;
