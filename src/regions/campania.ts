import type { RegionStory } from './types';

// Photos are stand-ins from elsewhere on the site, to be replaced.
// Content from the Campania story. Product ids are the story's product slots:
// set a product's Page address in Admin → Products to the same id to connect it.
const campania: RegionStory = {
  "slug": "campania",
  "name": "Campania",
  "seoTitle": "Campania Food and Pantry Ingredients | Italy Region by Region | La Taglia",
  "seoDescription": "Cook Campania from its pantry: San Marzano tomatoes, mozzarella di bufala, Gragnano pasta, Amalfi lemons and colatura, with a recipe for Neapolitan pasta e patate.",
  "kicker": "Region three: the bay",
  "subtitle": "Volcanic soil, a turquoise bay, and the genius of Naples.",
  "hero": {
    "color": "#0F5E63",
    "colorDeep": "#0A4246",
    "dossier": "Terroir archive · Dossier N° 03",
    "badge": "Kitchen of the bay",
    "metrics": [
      {
        "icon": "waves",
        "label": "Coast",
        "value": "Bay of Naples and Amalfi"
      },
      {
        "icon": "volcano",
        "label": "Volcano",
        "value": "Vesuvius"
      },
      {
        "icon": "history_edu",
        "label": "Founders",
        "value": "Greek settlers of Neapolis"
      },
      {
        "icon": "local_pizza",
        "label": "Signature",
        "value": "Pizza napoletana"
      }
    ],
    "heritage": "Neapolitan heritage",
    "heritageNote": "the bay of Naples",
    "imageCaption": {
      "title": "The Bay of Naples",
      "body": "Vesuvius rises above the bay, and its volcanic soil feeds San Marzano and Piennolo tomatoes."
    },
    "imageTag": "Bay of Naples, Campania",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCancaWcvr--MM2tr0GDdQuPcAOwypF6zphNOVp4xeYR089Myw4zQfintCrigDfvqHJ4Orccyq3Y9fadY4lV-yTcHvjEqrOpX2YRq7zenTQxLHuOuOei5EIU7sI26-3Up0_WpBmjSD_4qnBTgAZSH05ehZdTGt0ibXvB8CsFPOAePS-m5wjL6kn31Yufdvk8n0wef8jlqS_n0bMAO_TPxPy7AXH_fsXx66ChBs244ezrmGIJ-gV5iF0",
    "imageAlt": "The Campanian coast on the Bay of Naples."
  },
  "intro": [
    "Campania curves around the Bay of Naples on Italy’s southwest coast, from the volcanic plain beneath Vesuvius to the cliffs of the Amalfi Coast and the green hills of Cilento. Greek settlers founded Naples as Neapolis, the “new city,” and for centuries it was the capital of a southern kingdom whose kings made Gragnano their official pasta supplier. Vesuvius left volcanic soil where tomatoes thrive, water buffalo graze the lowland plains of Caserta and Salerno, and in Gragnano, spring water from the Lattari mountains and breezes running down to the sea made perfect conditions for drying pasta. Neapolitans, famously resourceful, turned that bounty into an everyday cuisine of genius: pizza, pasta with a handful of tomatoes, a Sunday ragù that simmers for hours. It is cooking built on few ingredients, each of extraordinary quality.",
    "Naples gave the world pizza and made dried pasta a global staple. Start with the ingredients that define Campania, learn the dishes they make possible, and meet a pasta family that has worked on Gragnano’s main square since 1907."
  ],
  "pantry": {
    "eyebrow": "Volcanic terroir goods",
    "lede": "Six ingredients behind Campania’s best-known dishes, where each comes from, and the label that proves it.",
    "items": [
      {
        "title": "San Marzano tomatoes",
        "place": "The Agro Sarnese-Nocerino, between Naples and Salerno",
        "body": "Long, bright red tomatoes with firm, flavorful flesh, grown on the deep, soft soils of the Agro Sarnese-Nocerino between Naples and Salerno. Protected since 1996, they are the classic base of Neapolitan sauce.",
        "lookFor": "the full name, Pomodoro San Marzano dell’Agro Sarnese-Nocerino DOP. The San Marzano variety can legally be grown anywhere, and some US cans print “San Marzano” in Italian on tomatoes grown in America.",
        "products": [
          {
            "id": "cam-san-marzano",
            "name": "San Marzano DOP tomatoes",
            "meta": "Whole peeled, can",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Agro Sarnese-Nocerino",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBY4455DEX1zjjpdq7-_mNILuWUJRUYyvMxMXx4jMQYd55DK_wV9oy-PIMx-rP1tMRkt8iwhkFiYgazb05uFnI6rs1jFuEPynANvN6XO5Q_mSnHWHJH7MXg9cvrDWA3798HSfMlbXyd0ju2P_NXo2Qv8uEjZgBuH4jKkJLmoPYvIgiiMvli6aTlEQ3pQ0aD3-aKYdw8BfdknHP3ri2lylIohY914kchXuH9Q7icchs3wAuR2FxKDpvCKg"
          }
        ]
      },
      {
        "title": "Piennolo tomatoes",
        "place": "The slopes of Vesuvius",
        "body": "Small cherry tomatoes grown on the volcanic slopes of Vesuvius and tied into large clusters, or piennoli, of one to five kilos. Thick skins and concentrated sugars let them keep for months without losing their qualities.",
        "lookFor": "Pomodorino del Piennolo del Vesuvio DOP.",
        "products": [
          {
            "id": "cam-piennolo",
            "name": "Piennolo del Vesuvio DOP tomatoes",
            "meta": "Jar",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Vesuvius",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCFjvRWa-DBPlxV_S8Ks7GNA5P4X6i1CFTAJ7C4mSoGwQ00mOour74TvAfHythsLwS0k-LIo1djI_mqXWWAg5aclBYTgdd_6u4WlUbPsC_rx5ZsFnUG_PsDzsy4gdpU9znzPs83DjfI9VlpJwwTuHEUxq_WAU3pQ-XsuL72Bk4zcV7x_Ef_q01OARW3aAl4aiqgIARwJWA0Z8KD1qj5MQHPM_2gtt-Lh7igH3xqg1EWe7RYSMeb9efu"
          }
        ]
      },
      {
        "title": "Mozzarella di bufala",
        "place": "The provinces of Caserta and Salerno",
        "body": "A fresh stretched-curd cheese made only from whole water-buffalo milk, mainly from the provinces of Caserta and Salerno. Monks near Capua were offering “mozza” to pilgrims as early as the twelfth century. Eat it at room temperature, never straight from the fridge.",
        "lookFor": "Mozzarella di Bufala Campana DOP and its buffalo-head logo. Plain “mozzarella di bufala” can be made anywhere in Italy.",
        "products": [
          {
            "id": "cam-mozzarella-bufala",
            "name": "Mozzarella di Bufala Campana DOP",
            "meta": "Fresh",
            "tag": "Cold ship",
            "tagTone": "neutral",
            "origin": "Caserta and Salerno",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDqmbMaaWotLnqd7h746aY6nsFALWzvjqbkrArYOxWH0YaS3R83fCAwa_zPopqfTC19b2rndKbS0X7Nj0tC5mW1iAtX3KmPVZsS3ZsFiP0HIvHEAkj179Jhwx4pyyijMtfmbJUWOuzPdOd5gogteAa_cNezVDsRpXU2pkT0vo_nXW3O0JbzNZUqjoeSjms0C0zSftPsOjvMIjrOBbhGg700irDxZk2EN0lXZPe4eI9aZMgxn7bkIl7z"
          }
        ]
      },
      {
        "title": "Gragnano pasta",
        "place": "Gragnano, in the Lattari mountains",
        "body": "Durum wheat semolina and local spring water, pushed through bronze dies for a rough surface that holds sauce, then dried slowly at low temperature. Gragnano’s pasta tradition dates back to the 1500s.",
        "lookFor": "Pasta di Gragnano IGP, and “trafilata al bronzo” (bronze-cut) on the bag.",
        "products": [
          {
            "id": "cam-gragnano-spaghetti",
            "name": "Gragnano IGP spaghetti",
            "meta": "500 g",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Gragnano",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCKGNMKnw-D1ZK_Ug_RKV4Fxmy4s5ZTELECDXA8LO9y5p3-IsuawSvQt6iy70Q755dV-4fC-34i_gZOdFRJ6ogB45Is2Id7om670aTj0rwdIIcWbK9k4OpbfcpBqnGeLaClFdhBqdgmHSPU0A4o-YTmNdSNHHzalQIPDRd_yKhI8YinNY_U4nPcP10ABbOdi2YRwD58rMC9UsaDegHlySm0TWHVt1KMmkVFyNGarOPDMG75Kuf1GDKb"
          },
          {
            "id": "cam-gragnano-mista",
            "name": "Gragnano IGP pasta mista",
            "meta": "500 g",
            "tag": "IGP",
            "tagTone": "green",
            "origin": "Gragnano",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBuu-55MbiPe-szWTH9E1hG3CcnVy6to8ZunZKOjIg61w2peM2Vn6ZISQaaH88xpMxtSbDGApSqNZ-OLPhN3mg9K8KULfFusDjfdPqTjPlisxyugwq-e9xqbSDGZ0dai_yPLwmYmP0cz-Fu44oStBWA75QNFXDqida20AXkmaLVYzS7kXJHLN-QEkKqnjEbfJLOMY6x7HMI6inDZ3W03-1wHElpjUxinenBCFsTnNtSq_EVFpyULClr"
          }
        ]
      },
      {
        "title": "Amalfi lemons",
        "place": "The Amalfi Coast",
        "body": "The sfusato amalfitano grows on steep terraces above the sea, under pergolas of chestnut poles. It is long and pointed, with a thick peel rich in essential oils and an intense perfume. It is the lemon behind limoncello and delizia al limone.",
        "lookFor": "Limone Costa d’Amalfi IGP, protected since 2001, or Limone di Sorrento IGP.",
        "products": [
          {
            "id": "cam-amalfi-lemon",
            "name": "Amalfi lemon marmalade",
            "meta": "Jar",
            "tag": "IGP lemons",
            "tagTone": "gold",
            "origin": "Amalfi Coast",
            "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDn_rWoQOHRNzDNeDoMv-rFzGJPGl1Wd9FVbVn5rEhaanOXPSVUFZi_3uQJ4FPBKBPNcKlAHg-_n3jY8d-pgbP7eMVBH0nw9gWCNDSyBZTRtbCD2LysPAGzUyRDNmWleKxTmCYoj-RpaZJ_1jnnG0bv5pLZZTCk2SB_CwHJ9uT91WL4dLADqqn1_7eZUxTlC1SCLiXfb1izxdN_9Hcu-J_LF29XKSvokz2qw7Vlc6b3nlKIELwkAegl"
          }
        ]
      },
      {
        "title": "Colatura di alici",
        "place": "Cetara, on the Amalfi Coast",
        "body": "An amber liquid drawn from anchovies fished between late March and July, layered with salt in small chestnut or oak barrels called terzigni. It is considered the heir of the Romans’ garum, and a little goes a long way.",
        "lookFor": "Colatura di Alici di Cetara DOP.",
        "products": [
          {
            "id": "cam-colatura",
            "name": "Colatura di Alici di Cetara DOP",
            "meta": "Small bottle",
            "tag": "DOP",
            "tagTone": "green",
            "origin": "Cetara",
            "img": "https://lh3.googleusercontent.com/aida/AEtjO1UGaqDggIi3G7sIgIf0_eKWQUrjTiO4829HFnphdKotI21OyoXWY9wGL1lcZ-1iBcFoPdpPECFdmXrBsBYb7fpBdfU-sLxaW72c8eMu0iRXFRRqoXxvR77zKCvV2K6bSVrXK10C38pYILAkf3WAKGmFac2FHIpLMWlYBI-9SyO3Owz0ICJ76DPk5KQk40HBt7c5EK4d5zbSPxmji-wqP2WomT2fZUxTbiME8vrMcqmxae7ChNI8PqHqALA"
          }
        ]
      }
    ]
  },
  "dishes": {
    "eyebrow": "Culinary canon",
    "lede": "Four dishes Campania makes its own.",
    "items": [
      {
        "title": "Pasta e patate",
        "where": "Naples",
        "body": "Pasta and potatoes cooked together in one pot until creamy, then made stringy with smoked provola. In Naples it is a point of pride to make it thick enough that the plate can be turned over.",
        "tip": "[Cook it below](#pastaepatate)",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCDO2dHEd2gKCpo_yr9KgEF0Tgbqr9F7FlQZxOGwJHyIkfAdtlOgvZNCBIhM3Zn6HZBzp7pcSx3_RjhWX24YDP0p4LzHMNJvLV2XwoUy5dewJqPdUpQghD21Ou3Rjq9cATfIyUmn5qo6WytT82URkho-8Jjl_dynP6pxmSqYVXUn0SFd1tP2CT0vAHgYei0bOd8uTW5co7AHHS8gUL8TI0WSvapJmGqCjgq6dB4rV63LznGuf5irNj5"
      },
      {
        "title": "Pizza napoletana",
        "where": "Naples",
        "body": "A soft crust with a puffy rim, baked in a wood-fired oven at about 485°C for 60 to 90 seconds. Pizza Napoletana is a protected Traditional Speciality Guaranteed, and in 2017 UNESCO recognized the art of the Neapolitan pizzaiuolo as intangible cultural heritage.",
        "tip": "At home, start with [San Marzano DOP tomatoes](product:cam-san-marzano).",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBRbfN3ec2j13IDm1PE1_z3XTGyEgtwGUUYTjZPOlr_XSHYQdySu4eni5eOXqrKG29Cl-GM6BIwsg8jt21ndJ7dF_v2T_t34PpNXh1wUwoN-V5yhIMZncJmE1BWFeStFpQRFpjHHXybHWqPAayZearG1M3sELhCkVAU7iqwesHOgc4x6uRnjfY8lqlAzgNDJ36Qk1zYHDXFvRI-S0rfWP25ciszdOMP1PMUS7ci3vjNMzI863KvNVVu"
      },
      {
        "title": "Ragù napoletano",
        "where": "Naples, on Sundays",
        "body": "Large whole cuts of beef and pork, never minced, simmered in tomato for at least six hours until the sauce is dark and dense. Neapolitans call its slow bubbling pippiare, the sound of Sunday at home.",
        "tip": "Serve with [Gragnano pasta](product:cam-gragnano-spaghetti) such as ziti or rigatoni.",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCrmH1O59xmE1Y77HZpjEBj-SfPVSMI9QI2fReWIfLlVNEUybRQbrmraXSxPdj_0TZ6CjRPClwypuyIngcZSdQWF4weTNTdt-l-5RO3ibWgN6HH8xkThDZsvE7bz7UiaPReDRpXaMUqNJH1oaFLo_S-GTC0lKEf3yFp0zpZx38Kiu2jCKbD9HzJ_dxxPK_L-qOMvLjTWVxK06o0_MKQKpEWnqHA6Go1bsRugfGn5xEMf7bDWgo5inpz"
      },
      {
        "title": "Sfogliatella and babà",
        "where": "Sweet Naples",
        "body": "Sfogliatella comes riccia, a crisp shell of countless thin layers, or frolla, in smooth short pastry; both are filled with semolina, ricotta, and candied citrus. Babà is a soft yeast cake soaked in rum syrup, first brought to Naples by French cooks.",
        "note": "Naples’ pastry counter",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDn_rWoQOHRNzDNeDoMv-rFzGJPGl1Wd9FVbVn5rEhaanOXPSVUFZi_3uQJ4FPBKBPNcKlAHg-_n3jY8d-pgbP7eMVBH0nw9gWCNDSyBZTRtbCD2LysPAGzUyRDNmWleKxTmCYoj-RpaZJ_1jnnG0bv5pLZZTCk2SB_CwHJ9uT91WL4dLADqqn1_7eZUxTlC1SCLiXfb1izxdN_9Hcu-J_LF29XKSvokz2qw7Vlc6b3nlKIELwkAegl"
      }
    ]
  },
  "maker": {
    "name": "Pastificio Faella",
    "place": "Gragnano",
    "paragraphs": [
      "In 1907, Gaetano Faella set up his pasta factory on Gragnano’s main square, now Piazza Marconi; some accounts trace the family’s pasta-making in the town back to 1870. His son Mario, a Cavaliere del Lavoro, ran it until his death in 2012 at 98, and today Mario’s grandson Sergio Cinque leads the business with his own children.",
      "The method has barely changed. Faella blends 100 percent Italian durum wheat semolina with spring water from the Lattari mountains, kneads it slowly, extrudes it through bronze dies, and dries it at no more than 48°C, for up to 60 hours for some shapes. The pasta has a rough surface that holds sauce, is still wrapped by hand, and carries the Pasta di Gragnano IGP designation."
    ],
    "photos": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuBNLulfCNOqIJkwnyUIIoCPTqTY7LEzdTe377AN2rqSLoV4tSIEv_p2xY9BamnnPcgwsbsctoAkCcIAel3LYYgIN9nDCvwCVYBP-VKsMHhCYGsfnwwZ-IiebitE4Woj_3gJgsMimtbfAuuS1eKncJ1cDjLLGE4Nm0fD1WPphwQ2pQehVfn83csjapgIuIL02aYSUM0anZGi_KH7UTGOBbx0Ao-OTdTVgK78XeoXrTmQ03SNA5diF3J_",
        "alt": "A Gragnano pasta workshop",
        "caption": "The pastificio · Gragnano"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCDO2dHEd2gKCpo_yr9KgEF0Tgbqr9F7FlQZxOGwJHyIkfAdtlOgvZNCBIhM3Zn6HZBzp7pcSx3_RjhWX24YDP0p4LzHMNJvLV2XwoUy5dewJqPdUpQghD21Ou3Rjq9cATfIyUmn5qo6WytT82URkho-8Jjl_dynP6pxmSqYVXUn0SFd1tP2CT0vAHgYei0bOd8uTW5co7AHHS8gUL8TI0WSvapJmGqCjgq6dB4rV63LznGuf5irNj5",
        "alt": "Bronze-die pasta drying",
        "caption": "Slow drying, max 48°C"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuBttmXPJCBW9_ZLNcfZFuvjeUSSELY3ckrx_31Vhe-fib1ZLyiZh_1HJQTSGujX63yBX_wWHxFk5gWPlVmHvcu5JMJ096nvBB6XFjFv723OXXh51gZEsncp7fyRja6vKksjuPMdd0sEoDItrgzrDmsJzvhhjCycL1DC6JI1F6ja3O11VoiEgZtydMWferBHxwtLMl1kY0IIShRuLvQ_m_SzyI5jLkH4d8XsBMflTXiHS8SmA9CSnPEk3g",
        "alt": "Gragnano IGP paccheri",
        "caption": "Pasta di Gragnano IGP"
      }
    ],
    "facts": [
      {
        "label": "On the square",
        "value": "Since 1907"
      },
      {
        "label": "Family",
        "value": "Third generation"
      },
      {
        "label": "Drying",
        "value": "Max 48°C"
      }
    ],
    "productsLabel": "From Pastificio Faella",
    "products": [
      {
        "id": "cam-faella-spaghetti",
        "name": "Faella spaghetti, Pasta di Gragnano IGP",
        "meta": "500 g",
        "tag": "Since 1907",
        "tagTone": "gold",
        "origin": "Gragnano",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDHIngNXqXC8tcH8ODgpxoOHTYHckQGXn-xfVr6KD5LHNFEKft3VnuYCLLZPvGlxkonCP2clRkP7zRPCikVtFoaoSXxpIQqRh5VAEkRfqsefnukBu8lvQup8712nVVRyrn6GqUzhY4KCE0UjJlE4-ABJnvdYz0aPau9_MStrxSUyeBfCLFvA8Gf9i4mRYqHPqqsIu8EP1p24FKSDIxdWvAIrVrXx2gHbefim2QGENH5Q6D9SLlBL6CE"
      },
      {
        "id": "cam-faella-paccheri",
        "name": "Faella paccheri, Pasta di Gragnano IGP",
        "meta": "500 g",
        "tag": "Since 1907",
        "tagTone": "gold",
        "origin": "Gragnano",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBttmXPJCBW9_ZLNcfZFuvjeUSSELY3ckrx_31Vhe-fib1ZLyiZh_1HJQTSGujX63yBX_wWHxFk5gWPlVmHvcu5JMJ096nvBB6XFjFv723OXXh51gZEsncp7fyRja6vKksjuPMdd0sEoDItrgzrDmsJzvhhjCycL1DC6JI1F6ja3O11VoiEgZtydMWferBHxwtLMl1kY0IIShRuLvQ_m_SzyI5jLkH4d8XsBMflTXiHS8SmA9CSnPEk3g"
      }
    ]
  },
  "cook": {
    "title": "Cook Campania",
    "eyebrow": "Terroir kitchen",
    "lede": "One classic from scratch and one ten-minute shortcut from Cetara.",
    "recipe": {
      "id": "pastaepatate",
      "title": "Pasta e patate con la provola",
      "serves": "4",
      "time": "about 50 minutes",
      "from": "Naples",
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBuu-55MbiPe-szWTH9E1hG3CcnVy6to8ZunZKOjIg61w2peM2Vn6ZISQaaH88xpMxtSbDGApSqNZ-OLPhN3mg9K8KULfFusDjfdPqTjPlisxyugwq-e9xqbSDGZ0dai_yPLwmYmP0cz-Fu44oStBWA75QNFXDqida20AXkmaLVYzS7kXJHLN-QEkKqnjEbfJLOMY6x7HMI6inDZ3W03-1wHElpjUxinenBCFsTnNtSq_EVFpyULClr",
      "imageCaption": "Neapolitan classic · about 50 minutes",
      "steps": [
        {
          "title": "Make the base.",
          "body": "In a wide, heavy pot, gently cook the onion, carrot, and celery in the olive oil for 8 minutes, until soft. Add the potatoes and stir for 2 minutes."
        },
        {
          "title": "Cook the potatoes.",
          "body": "Add the crushed tomatoes, the cheese rind if using, and enough hot water to just cover. Simmer for 15 minutes, until the potatoes begin to break down at the edges."
        },
        {
          "title": "Cook the pasta in the pot.",
          "body": "Add the pasta directly to the pot. Cook, stirring often and adding hot water a ladle at a time as for risotto, until the pasta is tender and the starch from the potatoes has made everything creamy."
        },
        {
          "title": "Add the cheese.",
          "body": "Off the heat, remove the rind and stir in the provola and grated cheese until stringy. Rest for 2 minutes, then serve with torn basil and black pepper."
        }
      ],
      "touch": "Use a good [Gragnano pasta mista](product:cam-gragnano-mista): the mix of shapes cooks unevenly, and that variety of textures is the point. Keep it thick: in Naples, the test is whether the plate can be tipped over without the pasta sliding off.",
      "shoppingList": [
        "320 g [pasta mista](product:cam-gragnano-mista), or broken spaghetti",
        "600 g floury potatoes",
        "1 small onion, 1 carrot, 1 celery stalk",
        "3–4 [San Marzano tomatoes](product:cam-san-marzano)",
        "3 tbsp extra-virgin olive oil",
        "About 1 L hot water or light broth",
        "150 g [smoked provola](product:cam-provola)",
        "30 g Parmigiano Reggiano or Pecorino",
        "Optional: a Parmigiano rind",
        "Fresh basil, salt, and pepper"
      ],
      "products": [
        {
          "id": "cam-gragnano-mista",
          "name": "Gragnano IGP pasta mista",
          "meta": "500 g",
          "tag": "IGP",
          "tagTone": "green",
          "origin": "Gragnano",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBuu-55MbiPe-szWTH9E1hG3CcnVy6to8ZunZKOjIg61w2peM2Vn6ZISQaaH88xpMxtSbDGApSqNZ-OLPhN3mg9K8KULfFusDjfdPqTjPlisxyugwq-e9xqbSDGZ0dai_yPLwmYmP0cz-Fu44oStBWA75QNFXDqida20AXkmaLVYzS7kXJHLN-QEkKqnjEbfJLOMY6x7HMI6inDZ3W03-1wHElpjUxinenBCFsTnNtSq_EVFpyULClr"
        },
        {
          "id": "cam-provola",
          "name": "Smoked provola",
          "meta": "Whole",
          "tag": "Smoked",
          "tagTone": "red",
          "origin": "Campania",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBGGA07_nVlJTgYjeOzddTmBAt_mQvF0cv95LcrTGPEO6-6raIvXpZgg-koQ4qOVeP1jiLYGlAdSTfXDKHZZWDT6aGHcJ0jevd6i9a6ibtaO2yKbgKXDNucq_e-bUd67XQTaVuy4bc9lK3eqgnHo7vM_sQTXfS2tdPJY5iAokx4CnvlgV3u63v0o_PkIci80Zan3yKGMrXJwxvFGqC8U06n6d_GubZWR3pz1EFI_56pkgqTCAM9iPf6"
        }
      ],
      "schema": {
        "yield": "4 servings",
        "prepTime": "PT15M",
        "cookTime": "PT35M",
        "totalTime": "PT50M",
        "ingredients": [
          "320 g pasta mista (mixed short pasta), or broken spaghetti",
          "600 g floury potatoes, peeled and cut into 1.5 cm cubes",
          "1 small onion, 1 carrot, and 1 celery stalk, finely chopped",
          "3 tablespoons extra-virgin olive oil",
          "3–4 San Marzano tomatoes, crushed",
          "About 1 L hot water or light broth",
          "A piece of Parmigiano rind (optional)",
          "150 g smoked provola, diced",
          "30 g grated Parmigiano Reggiano or Pecorino",
          "Fresh basil, salt, and black pepper"
        ]
      }
    },
    "shortcut": {
      "eyebrow": "Ten minutes in Cetara",
      "title": "Ten minutes in Cetara",
      "body": "Cook spaghetti in water with only a little salt. Meanwhile, warm olive oil with a sliced garlic clove and a pinch of chili. Toss the drained pasta in the pan, then add a couple of tablespoons of colatura off the heat, with chopped parsley and a little grated lemon zest. It is Cetara’s signature dish.",
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCKGNMKnw-D1ZK_Ug_RKV4Fxmy4s5ZTELECDXA8LO9y5p3-IsuawSvQt6iy70Q755dV-4fC-34i_gZOdFRJ6ogB45Is2Id7om670aTj0rwdIIcWbK9k4OpbfcpBqnGeLaClFdhBqdgmHSPU0A4o-YTmNdSNHHzalQIPDRd_yKhI8YinNY_U4nPcP10ABbOdi2YRwD58rMC9UsaDegHlySm0TWHVt1KMmkVFyNGarOPDMG75Kuf1GDKb",
      "button": "Get the Cetara pair",
      "products": [
        {
          "id": "cam-colatura",
          "name": "Colatura di Alici di Cetara DOP",
          "meta": "Small bottle",
          "tag": "DOP",
          "tagTone": "green",
          "origin": "Cetara",
          "img": "https://lh3.googleusercontent.com/aida/AEtjO1UGaqDggIi3G7sIgIf0_eKWQUrjTiO4829HFnphdKotI21OyoXWY9wGL1lcZ-1iBcFoPdpPECFdmXrBsBYb7fpBdfU-sLxaW72c8eMu0iRXFRRqoXxvR77zKCvV2K6bSVrXK10C38pYILAkf3WAKGmFac2FHIpLMWlYBI-9SyO3Owz0ICJ76DPk5KQk40HBt7c5EK4d5zbSPxmji-wqP2WomT2fZUxTbiME8vrMcqmxae7ChNI8PqHqALA"
        },
        {
          "id": "cam-gragnano-spaghetti",
          "name": "Gragnano IGP spaghetti",
          "meta": "500 g",
          "tag": "IGP",
          "tagTone": "green",
          "origin": "Gragnano",
          "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCKGNMKnw-D1ZK_Ug_RKV4Fxmy4s5ZTELECDXA8LO9y5p3-IsuawSvQt6iy70Q755dV-4fC-34i_gZOdFRJ6ogB45Is2Id7om670aTj0rwdIIcWbK9k4OpbfcpBqnGeLaClFdhBqdgmHSPU0A4o-YTmNdSNHHzalQIPDRd_yKhI8YinNY_U4nPcP10ABbOdi2YRwD58rMC9UsaDegHlySm0TWHVt1KMmkVFyNGarOPDMG75Kuf1GDKb"
        }
      ]
    }
  },
  "readTheLabel": "“San Marzano” on its own, plain “mozzarella di bufala,” and “Amalfi-style lemon” are not San Marzano DOP, Mozzarella di Bufala Campana DOP, or Limone Costa d’Amalfi IGP. Check the place of production, the ingredient list, and any DOP or IGP seal. Every product we carry states where it is made.",
  "set": {
    "eyebrow": "Limited curation · Parcel N° 03",
    "title": "Bring Campania home",
    "body": "A Neapolitan table needs very little, as long as every piece is right. We’ve gathered eight ingredients from this story into one set: enough for a pot of pasta e patate, a tomato sauce worth the name, and a plate of spaghetti from Cetara.",
    "button": "Add the Campania pantry set",
    "products": [
      {
        "id": "cam-san-marzano",
        "name": "San Marzano DOP tomatoes",
        "meta": "Whole peeled",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Agro Sarnese-Nocerino",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBY4455DEX1zjjpdq7-_mNILuWUJRUYyvMxMXx4jMQYd55DK_wV9oy-PIMx-rP1tMRkt8iwhkFiYgazb05uFnI6rs1jFuEPynANvN6XO5Q_mSnHWHJH7MXg9cvrDWA3798HSfMlbXyd0ju2P_NXo2Qv8uEjZgBuH4jKkJLmoPYvIgiiMvli6aTlEQ3pQ0aD3-aKYdw8BfdknHP3ri2lylIohY914kchXuH9Q7icchs3wAuR2FxKDpvCKg"
      },
      {
        "id": "cam-piennolo",
        "name": "Piennolo del Vesuvio DOP",
        "meta": "Jar",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Vesuvius",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCFjvRWa-DBPlxV_S8Ks7GNA5P4X6i1CFTAJ7C4mSoGwQ00mOour74TvAfHythsLwS0k-LIo1djI_mqXWWAg5aclBYTgdd_6u4WlUbPsC_rx5ZsFnUG_PsDzsy4gdpU9znzPs83DjfI9VlpJwwTuHEUxq_WAU3pQ-XsuL72Bk4zcV7x_Ef_q01OARW3aAl4aiqgIARwJWA0Z8KD1qj5MQHPM_2gtt-Lh7igH3xqg1EWe7RYSMeb9efu"
      },
      {
        "id": "cam-gragnano-spaghetti",
        "name": "Gragnano IGP spaghetti",
        "meta": "500 g",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "Gragnano",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCKGNMKnw-D1ZK_Ug_RKV4Fxmy4s5ZTELECDXA8LO9y5p3-IsuawSvQt6iy70Q755dV-4fC-34i_gZOdFRJ6ogB45Is2Id7om670aTj0rwdIIcWbK9k4OpbfcpBqnGeLaClFdhBqdgmHSPU0A4o-YTmNdSNHHzalQIPDRd_yKhI8YinNY_U4nPcP10ABbOdi2YRwD58rMC9UsaDegHlySm0TWHVt1KMmkVFyNGarOPDMG75Kuf1GDKb"
      },
      {
        "id": "cam-gragnano-mista",
        "name": "Gragnano IGP pasta mista",
        "meta": "500 g",
        "tag": "IGP",
        "tagTone": "green",
        "origin": "Gragnano",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBuu-55MbiPe-szWTH9E1hG3CcnVy6to8ZunZKOjIg61w2peM2Vn6ZISQaaH88xpMxtSbDGApSqNZ-OLPhN3mg9K8KULfFusDjfdPqTjPlisxyugwq-e9xqbSDGZ0dai_yPLwmYmP0cz-Fu44oStBWA75QNFXDqida20AXkmaLVYzS7kXJHLN-QEkKqnjEbfJLOMY6x7HMI6inDZ3W03-1wHElpjUxinenBCFsTnNtSq_EVFpyULClr"
      },
      {
        "id": "cam-colatura",
        "name": "Colatura di Alici di Cetara DOP",
        "meta": "Small bottle",
        "tag": "DOP",
        "tagTone": "green",
        "origin": "Cetara",
        "img": "https://lh3.googleusercontent.com/aida/AEtjO1UGaqDggIi3G7sIgIf0_eKWQUrjTiO4829HFnphdKotI21OyoXWY9wGL1lcZ-1iBcFoPdpPECFdmXrBsBYb7fpBdfU-sLxaW72c8eMu0iRXFRRqoXxvR77zKCvV2K6bSVrXK10C38pYILAkf3WAKGmFac2FHIpLMWlYBI-9SyO3Owz0ICJ76DPk5KQk40HBt7c5EK4d5zbSPxmji-wqP2WomT2fZUxTbiME8vrMcqmxae7ChNI8PqHqALA"
      },
      {
        "id": "cam-mozzarella-bufala",
        "name": "Mozzarella di Bufala Campana DOP",
        "meta": "Fresh",
        "tag": "Cold ship",
        "tagTone": "neutral",
        "origin": "Caserta and Salerno",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDqmbMaaWotLnqd7h746aY6nsFALWzvjqbkrArYOxWH0YaS3R83fCAwa_zPopqfTC19b2rndKbS0X7Nj0tC5mW1iAtX3KmPVZsS3ZsFiP0HIvHEAkj179Jhwx4pyyijMtfmbJUWOuzPdOd5gogteAa_cNezVDsRpXU2pkT0vo_nXW3O0JbzNZUqjoeSjms0C0zSftPsOjvMIjrOBbhGg700irDxZk2EN0lXZPe4eI9aZMgxn7bkIl7z"
      },
      {
        "id": "cam-provola",
        "name": "Smoked provola",
        "meta": "Whole",
        "tag": "Smoked",
        "tagTone": "red",
        "origin": "Campania",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuBGGA07_nVlJTgYjeOzddTmBAt_mQvF0cv95LcrTGPEO6-6raIvXpZgg-koQ4qOVeP1jiLYGlAdSTfXDKHZZWDT6aGHcJ0jevd6i9a6ibtaO2yKbgKXDNucq_e-bUd67XQTaVuy4bc9lK3eqgnHo7vM_sQTXfS2tdPJY5iAokx4CnvlgV3u63v0o_PkIci80Zan3yKGMrXJwxvFGqC8U06n6d_GubZWR3pz1EFI_56pkgqTCAM9iPf6"
      },
      {
        "id": "cam-amalfi-lemon",
        "name": "Amalfi lemon marmalade",
        "meta": "Jar",
        "tag": "IGP lemons",
        "tagTone": "gold",
        "origin": "Amalfi Coast",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDn_rWoQOHRNzDNeDoMv-rFzGJPGl1Wd9FVbVn5rEhaanOXPSVUFZi_3uQJ4FPBKBPNcKlAHg-_n3jY8d-pgbP7eMVBH0nw9gWCNDSyBZTRtbCD2LysPAGzUyRDNmWleKxTmCYoj-RpaZJ_1jnnG0bv5pLZZTCk2SB_CwHJ9uT91WL4dLADqqn1_7eZUxTlC1SCLiXfb1izxdN_9Hcu-J_LF29XKSvokz2qw7Vlc6b3nlKIELwkAegl"
      }
    ]
  },
  "about": [
    "La Taglia explores Italy through its food, traditions, and places. Protected designations (DOP and IGP) are named as guides to what to look for; a product carries one only when its own label says so. Producer profiles are introductions written from public sources."
  ],
  "sources": "Il Fatto Alimentare, Taste Cooking, and the Italian Senate on San Marzano DOP; Pomodorino del Piennolo del Vesuvio DOP production specification; ONAF and Consorzio Mozzarella di Bufala Campana materials, and the EU product summary; Meer and Gustiamo on Gragnano pasta; Visit Italy, Positano.com, Gazzetta del Gusto, and Touring Club Italiano on Amalfi lemons and Cetara colatura; Pizza Napoletana STG specification, Sky TG24, and Gazzetta del Gusto on Neapolitan pizza; Dissapore, Do Eat Better, ADR, and Travel365 on Neapolitan dishes; Culinary Backstreets, Pitti Taste, and Gambero Rosso on Pastificio Faella."
};

export default campania;
