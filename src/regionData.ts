const img = 'https://lh3.googleusercontent.com/aida-public';

export type SicilyFilter = 'bronte' | 'pachino' | 'sweets';

export const sicilyHeroImg = `${img}/AB6AXuCzWdgn7XRuIBv9xnNw8IanQzyHOoXkhmlnmxYj-FKH5NkJFtkMMLelVNt74kaj5bhj0WHX4BGi05OE3A6hHdkWRJE1ijlrHUvKN5Y23PL6LKdJ2z280ncdeib-db4woUIX9s2UH96JAqv-SkcKELfvwlQkf1uwMxc7iQL9gyFoqwcEbtlDmPLE1LX62GwIxooACXf9iEiAVD2uvzAWDZGdWlQw97XSHrQp80t3fLiZSHC2qUUuYZ1S`;

export const sicilyStats = [
  { label: 'Curation', value: '9 SKUs', note: 'Strict single-origin batches' },
  { label: 'Estates', value: '2 Families', note: "Gusto Etna & Campo D'Oro" },
  { label: 'Microclimates', value: '3 Biomes', note: 'Etna Basalt, Pachino & Trapani' },
  { label: 'Harvest Style', value: 'Ancestral', note: 'Biennial non-irrigated hand-pick' },
];

export const sicilyFilters: { value: SicilyFilter | 'all'; label: string }[] = [
  { value: 'all', label: 'All Sicilian Provisions (9)' },
  { value: 'bronte', label: 'Bronte (Pistachios & Creams)' },
  { value: 'pachino', label: 'Pachino & Trapani (Pantry)' },
  { value: 'sweets', label: 'Island Sweets & Panettone' },
];

export type SicilyProduct = {
  origin: string;
  size: string;
  name: string;
  desc: string;
  price: number;
  perUnit: string;
  badge?: { label: string; className: string };
  img: string;
  tags: SicilyFilter[];
  href?: string;
};

const plain = 'bg-surface-container-lowest text-badge-ink';

export const sicilyProducts: SicilyProduct[] = [
  {
    origin: 'Gusto Etna · Bronte', size: '8.8 oz (250g)', name: 'Bronte Pistachios, Roasted & Lightly Salted',
    desc: 'Hand-harvested from the rugged basalt slopes of Mount Etna. Deep purple skins with an unmistakable electric emerald heart.',
    price: 42, perUnit: '$4.77 / oz', badge: { label: 'Bronte D.O.P.', className: plain }, tags: ['bronte'],
    img: `${img}/AB6AXuBHcyydhdOjvPqGaDJWKVgGN6K-0TIBNFHfe_-ELz3blgOLLdf4ENqrPqnlhGJjjVdt7e0gjiRoKq5bdDDBudXpcW4JinrL2yr3F-jrmTEiJ6MUwGK0fO1-BxDJHa57fFMom86lQl76QE1d_4a_Agp1cpm5gOaoKOA4Tfp5jflnkrbvdiFJNzWUXeqzc8kLcri0hsiCrWD8HFFMob13P14VZbNvcCIoB-W7Cr1zf-C6hmm5SSmHJnRC`,
  },
  {
    origin: 'Gusto Etna · Bronte', size: '6.7 oz (190g)', name: 'Sicilian Pistachio Cream, 35%',
    desc: 'Conched slowly with high natural butterfat. Luscious, silken, and naturally fragrant without hydrogenated oils or artificial dyes.',
    price: 16, perUnit: '$2.38 / oz', badge: { label: 'Best Seller', className: 'bg-secondary-container text-button-ink font-bold' }, tags: ['bronte', 'sweets'], href: '/product/sicilian-pistachio-cream',
    img: `${img}/AB6AXuDOVPSOhGq7Qu3r97jKAyoMSFiNvkfozbmhist1xoGVXS9f4R2tOU08KejLqvftT9YmdahMBYDTJAvwikyhSOMdf9PkELNhmhn64lyINQPnvXfZa3h460Sxza1ou9ix7iDCgVoFCQitGC4dwyO61u3en5fWGzs-7ucfhvVl0yovt-qjGF6yRoH8zzVR5dWcj_XBba4WOZ6MzStJuZrT7R0XwD1CC3npH-ECQ1oI0rkuz7Yd6aZBuSc2`,
  },
  {
    origin: 'Gusto Etna · Bronte', size: '7.0 oz (200g)', name: '100% Pure Pistachio Paste (Zero Sugar)',
    desc: 'Single-ingredient pure stone-ground Bronte pistachios. Master ingredient for artisanal gelato, savory marinades, and pastry.',
    price: 24, perUnit: '$3.42 / oz', badge: { label: 'Pure Single-Origin', className: plain }, tags: ['bronte'],
    img: `${img}/AB6AXuCBuzUo00UntQbbWCaZRsuTqGGJnftUHm3LTZOXLTZGJrrb1MY1uXwE0v0Lkg9ZHIEbcGvr2sYot1ZoYElZOJWsvzKHRpHyWCFDH3mzepKD6hAV0kvOy5LstiHpDKnJs8HJtv-H1XDWFUZbWg7Y5MH0ZxnwAm10WA3BTr3PMLVJILuZgIk-0xa-CrVtlVRORcl9-zY5LbUXmnc3BIRRrB6Wz4K5amFOqc0Ztm_StTZYwqDDUBHR5gaQ`,
  },
  {
    origin: 'Gusto Etna · Bronte', size: '6.7 oz (190g)', name: 'Sicilian Pistachio Savory Pesto',
    desc: 'Coarsely crushed pistachios steeped in cold-pressed Sicilian Nocellara del Belice olive oil, black pepper, and Trapani sea salt.',
    price: 15, perUnit: '$2.23 / oz', tags: ['bronte', 'pachino'],
    img: `${img}/AB6AXuAmrXU6ukeiOIs_U8XkBKTi2-f-Tm-KgWylxgvJ0p51rNoV7Z1M7mgD5H3xyEC5wo0t3-Jw5SOVbZa8XeqlJMZk_OYgG8fqumwPT1S6D-BzK8wKYySADZ1CgRn-Im-J7yU3QciD0et816BWauVWGMXcm25JguoGlGmlYmz6mqE6gmkJGS9FlzK3D6yBKI3JtS1LNIY_zM2CIgG_sIgfzi44k8ngxYkZFFCXW1fIWT-djJB6SBnqKrTu`,
  },
  {
    origin: "Campo D'Oro · Trapani", size: '17.6 oz (500g)', name: 'Busiata Trapanese, Ancient Durum Wheat',
    desc: 'Slow-dried for 48 hours at low temperatures. Traditional spiral corkscrew morphology sculpted specifically to clutch robust pistacchio pesto.',
    price: 10, perUnit: '$0.56 / oz', badge: { label: 'Trafilata al Bronzo', className: plain }, tags: ['pachino'],
    img: `${img}/AB6AXuAHPB9NY-s-XV6QBpyCW-XuUdeMeWhV6btGvzSTfJa25vP2DwUZmsXKJgCXhSsKn_P-L8HrJE9g0EKJISVd3FIzwd3Mo6jmOpGhSrYTDar9PtFUjFuuLtG6YuFbFT-IsWGDyPN5pVYg6XMNsPAr22W2FjEZ_SPXD1pGBtcHIkwiwyAlrQvDsNmRWRMPtFSHsdK4jlzB8Dm3EOucUzCbmiom7pkiwLgIkKjKkS8AqJkRDn8HbLu6D0Va`,
  },
  {
    origin: 'Gusto Etna · Bronte', size: '5.3 oz (150g)', name: 'Croccante di Pistacchio (Pistachio Brittle)',
    desc: 'Cooked copper kettle style using 60% roasted Bronte pistachios bound solely with caramelized Sicilian orange blossom honey.',
    price: 14, perUnit: '$2.64 / oz', tags: ['bronte', 'sweets'],
    img: `${img}/AB6AXuCojBnfDmZMnZb8CQ61UuuhviR3-wjTl8aK1n6oYb_ciQORtYZknwSPTTPwvTdu5uzkQF_JooNXQ04yQgXxd30b84PZLgRIvHc9Lch03ojPrhDWwK1fzUvdBqnuAAOCF5eRzGH-TiWDT1ihLhGg1-r88ua7je9qn1gykkT7sX46Ej59W8YH9YRA2F4l3Fhe1ZyKEU78LtwemcezrKiC3B2K-kBp59vJrFUozu2oI7_q9NZGdsbnDaYf`,
  },
  {
    origin: "Campo D'Oro · Sciacca", size: '8 Miniature Shells', name: 'Crisp Cannoli with Pistachio Cream, Box of 8',
    desc: 'Hand-rolled wine-infused pastry bubbles fried in pure olive oil, paired with separate velvety pistachio piping sachets for crisp freshness.',
    price: 22, perUnit: '$2.75 / piece', badge: { label: 'Gift Box', className: 'bg-primary text-on-primary' }, tags: ['sweets'],
    img: `${img}/AB6AXuB9KdsnwGCpWvNRlpZyOzLEYTXEAFdyIVWr1UpOd7i95C2r61j2yffgRazUo0rWyrSOvSQQER-84ujoZB30P978QV8pntkOSXklx_Q6f5_wjxCijHumQN3adhVSauWJO3DjrWwjXP0pgnt2EnW6DHhoFNLVu9DToYt4qMGpCxqu-wGP3hytKi_8EYo_pRFcFZHhsT94JDwSfttZG_eLT1i1yO5v6qbCQu26nHAEOCYaVVhFIqv4dqsB`,
  },
  {
    origin: 'Gusto Etna · Bronte', size: '2.2 lbs (1000g)', name: 'Sicilian Panettone with Pistachio Glaze & Cream',
    desc: 'Naturally leavened with 60-year mother starter, triple butter fold, accompanied by a dedicated jar of spreadable pistachio cream.',
    price: 49, perUnit: '$1.39 / oz', badge: { label: 'Seasonal Batch', className: 'bg-status-red text-white font-bold' }, tags: ['sweets'],
    img: `${img}/AB6AXuC5ph1pgv9XIK0fegBqobyCKuDiqJMaMZ0fcirBJMClQuhQOkL_YfaGU1TGcvv2yYrsPwGjw9Uu4QTG4Az-troexaz5UZSurTd1ypuL80ANu9FmRsgsyF82fGk2odvFoir8BIXHbzfkJ7XoA61KwIaoA9d12xiB-y5lHRASy0bg41qUiSPO9f0yfbEjXWSgmrpGeCQpY6DxfGT9YWA4eSQZFL_T1Xj_XygSTZ5FLlXTM0AbEM-7kRB-`,
  },
  {
    origin: "Campo D'Oro · Sciacca", size: '10.2 oz (290g)', name: 'Sun-Dried Pachino Cherry Tomatoes in EVOO',
    desc: 'Naturally dehydrated on bamboo screens beneath the Sicilian August sun, macerated with hand-picked wild oregano and sea salt.',
    price: 12, perUnit: '$1.17 / oz', badge: { label: 'IGP Pachino', className: plain }, tags: ['pachino'],
    img: `${img}/AB6AXuCep6g7yvzDq4v5mdqK_xhSHGgVzJILINEHheoItB3D2koh9B8bUQT5QoMk6azlks4mS8RNTo5ENoteCEjNG7syj4wem6nWBL5ylkuC4R1FF38eFMgJzoMwE5HSDd26yibLczofutKUXy4q9If29t7eVly1BWgC5T6SzZ1d0PE7tpKMXpnn7Pg2IEwebmQ2nZPiJ0EWeZxEkUQ15f00rsRIxXIIt4cABWJ6VdY9nouP6jVsFDpVUonu`,
  },
];

export const sicilyBox = {
  img: `${img}/AB6AXuCboJ8ySuW6bDrpWRYWMqOeqdoGRXbQ_LQvZBQ2MAxQ88a8LXojCcj3Avt6Woxg9tAwZ82fOika0oXC05ISiIY0KiBxjysqmPbYUX9xj6Dtk8-soSZuJtVva3t3Yhamdy2zZzx3s9VYq_WLm9dL5Qsx5b8Cc-4neDjfrrFmIFNMad011Tq4kyNCFKwI1tXWxuexPyavjEF0YtSwTqdUbAXnAJJtrki70Q-ADZV28Ipi1xyE00lqwKMi`,
  items: [
    ['Bronte Pistachios Roasted & Salted', '(8.8 oz) — Gusto Etna'],
    ['Sicilian Pistachio Cream 35%', '(6.7 oz) — Gusto Etna'],
    ['Busiata Trapanese Bronze-Die Durum Wheat', "(17.6 oz) — Campo D'Oro"],
    ['Crushed Pistachio Savory Pesto', '(6.7 oz) — Gusto Etna'],
    ['Sun-Dried Pachino Cherry Tomatoes in EVOO', "(10.2 oz) — Campo D'Oro"],
  ],
};

export const sicilyMakers = [
  {
    name: 'Gusto Etna', family: 'Pietro & Rosa Spina', tag: 'Bronte · Estate 01', tagClass: 'left-4 bg-primary text-on-primary',
    quote: '"Our trees take root in cold black basalt where no tractor can tread. We pick each cluster by hand every two years so the lava branch may sleep and recharge its marrow."',
    body: 'In Bronte, on the western flank of Mount Etna, pistachio harvesting is back-breaking biennial physical labor. The volcanic ground is too steep and fractured for machinery. Pietro Spina’s family has tended the same 14 hectares of volcanic terraces since 1954, hulling and slow-drying the nuts immediately after collection to lock in their emerald resin.',
    facts: [['Estate Location', 'Bronte, Catania (780m Alt.)'], ['Primary Cultivar', 'Pistacia Vera (Napoletana)'], ['Harvest Window', 'Late September (Odd Years Only)']],
    img: `${img}/AB6AXuAmUwID-y8ZYOdwZhyg38CBBs4BiKz78lLpTku5LB3S2o2l3eFWdX8iPIEuM1fW_JIaXsCSMsu9_351Kz4LPB9CA8ftinGYiSsX0dEX4xPDSLRaBA8n42fBq_4NYaJytSZQBBeGOfpx25_Twvqsi-_71PtBgBE7NCk39CeNIPAC1rDeW2OCkQzuAa2SJfZzLr8Y8SWYIJ1obeUZ-OHHmVtoztBtY3I0Tw2B_6RebPmiyH8SH_Ve8OJv`,
    imageRight: false,
  },
  {
    name: "Campo D'Oro", family: 'The Licata Family', tag: 'Sciacca · Estate 02', tagClass: 'right-4 bg-secondary-container text-button-ink font-bold',
    quote: '"When you dehydrate Pachino pomodori under the open Mediterranean sky, the maritime salt and the fruit sugar fuse into pure culinary nectar."',
    body: "Founded over thirty years ago along the southern coastal cliffs of Sciacca, Campo D'Oro preserves the ancient Sicilian tradition of sun-curing heirloom produce. Their busiata pasta is extruded strictly through hand-milled bronze dies using historic Sicilian wheat strains (Timilia and Russello) that yield rough porous textures engineered to grip sauces.",
    facts: [['Estate Location', 'Sciacca & Trapani Valley'], ['Specialty Grains', 'Ancient Russello & Timilia'], ['Drying Technique', '48h Static Air Drying (38°C)']],
    img: `${img}/AB6AXuB9oFdl6Q03A061pBYzjtsAgRXH-cWIQQDiw9d6yW6CpynbOSBHZ-zVv8ssyMWIvZ4E_RFsgEaamGRQm77BoJ7jS6seMoOCFcx6qBNdl-6MqpjjRqgDvtx944AmM1OMogJ3SSeotBIQy0ELdLw6TqRv86dYz140XWXrS0huYviwqbgLzkTFHqfGouraz_xrFe-AAQ6qicofy9ekWPXN23N0HjN2ShIOnqjlTA3bGaeP2zFkIbXJDEGy`,
    imageRight: true,
  },
];

export const sicilyEssays = [
  {
    meta: ['Essay N° 14', 'Terroir Chemistry'],
    title: 'Why Authentic Bronte Pistachios Are Never Bright Neon Green',
    body: 'Industrial confections have trained the consumer palate to associate pistachio with artificial chlorophyllic bright green. Genuine Pistacchio Verde di Bronte D.O.P. possesses a distinctive violet-rubbed outer pellicle and a core color veering between warm khaki-olive and jewel moss. The difference lies in the volcanic iron content and absolute avoidance of chemical bluing dyes.',
    footer: '6 Min Read · Dispatch from Etna',
  },
  {
    meta: ['Essay N° 18', 'Ancestral Technique'],
    title: 'The Ancient Busiata of Trapani: Twisting Durum on Mountain Grass Stems',
    body: "Before bronze dies were cast, coastal Sicilian grandmothers fashioned pasta strips around the dry stems of ampelodesmos mauritanicus—a tough mountain grass known locally as 'busa'. This manual spiral corkscrew created hollow channels that captured pestled almonds, garlic, and fresh basil, giving birth to the quintessential Busiata Trapanese.",
    footer: '8 Min Read · Field Notes from Sciacca',
  },
];

export const adjacentRegions = [
  {
    dossier: 'Terroir Dossier N° 02', title: 'Campania: Vesuvius San Marzano & Gragnano Pasta',
    body: 'San Marzano DOP tomatoes, Colatura di Alici di Cetara & buffalo dairy traditions.',
    img: `${img}/AB6AXuDn_rWoQOHRNzDNeDoMv-rFzGJPGl1Wd9FVbVn5rEhaanOXPSVUFZi_3uQJ4FPBKBPNcKlAHg-_n3jY8d-pgbP7eMVBH0nw9gWCNDSyBZTRtbCD2LysPAGzUyRDNmWleKxTmCYoj-RpaZJ_1jnnG0bv5pLZZTCk2SB_CwHJ9uT91WL4dLADqqn1_7eZUxTlC1SCLiXfb1izxdN_9Hcu-J_LF29XKSvokz2qw7Vlc6b3nlKIELwkAegl`,
  },
  {
    dossier: 'Terroir Dossier N° 04', title: 'Calabria: Peperoncino & Bergamot Citrus',
    body: "Spicy Spilinga 'Nduja, Reggio Calabria cold-pressed bergamot, and cedar conserves.",
    img: `${img}/AB6AXuBd5PvNqXJAy-ioA7YJaxdxvIORHyoKBznTeCue9nNm62gZaKmWohdN7mBXeTUb5z-n7hBaH3hXbKxunf_Ei3TkLQ-UHjbcv8etu2pBC5f4OncqwTLHI0bsBuDt9E0XxE34_SGP6wLazFfM_QITMd3SZeZDiPjXfmdkeVK8-82-d087Zn9kmxtD9Jrm1OlA4UrvPQ_7QO8Ue5EKVP1FQRfHhec4J4_ANqvm8IYx-7C1OoyDepUG0uc8`,
  },
];
