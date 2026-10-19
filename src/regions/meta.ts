// Light index of region stories for menus and cards. Full content loads per page from ./<file>.ts.
// Keep in sync when adding a region (slug, name, card line, banner colour, optional photo).
export type RegionMeta = { slug: string; name: string; blurb: string; color?: string; image?: string };

export const regionMeta: RegionMeta[] = [
  {"slug": "abruzzo", "name": "Abruzzo", "blurb": "Shepherds’ trails, saffron fields, and sugared almonds.", "color": "#2E3350"},
  {"slug": "basilicata", "name": "Basilicata", "blurb": "Crisp red peppers, durum-wheat bread, and the cave city of Matera.", "color": "#5A5A2E"},
  {"slug": "campania", "name": "Campania", "blurb": "Volcanic soil, a turquoise bay, and the genius of Naples.", "color": "#0F5E63"},
  {"slug": "calabria", "name": "Calabria", "blurb": "Chili, red onions, and a coastline of citrus.", "color": "#A8321F"},
  {"slug": "emilia-romagna", "name": "Emilia-Romagna", "blurb": "Patience, pork, and the richest plain in Italy.", "color": "#8C2A1C"},
  {"slug": "friuli-venezia-giulia", "name": "Friuli-Venezia Giulia", "blurb": "Prosciutto, mountain cheese, and the coffeehouses of Trieste.", "color": "#4A3428"},
  {"slug": "lazio", "name": "Lazio", "blurb": "Shepherds’ cheese, pork cheek, and the cooking of Rome.", "color": "#B5531E"},
  {"slug": "lombardia", "name": "Lombardia", "blurb": "Butter, rice, saffron, and the cheeses of the Alps.", "color": "#3C4A5C"},
  {"slug": "marche", "name": "Marche", "blurb": "Stuffed olives, fine egg pasta, and fish soup by the sea.", "color": "#8A3B4A"},
  {"slug": "molise", "name": "Molise", "blurb": "Shepherds’ roads, stretched-curd cheese, and white truffles.", "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDM3HpPPNBxXbPDc0sP8_npr_sZLlloM_We1KuwEvKftHq7OhCf-K_Ry7b7XdS7DCRHJWlnqegbA3gvRYJ7QC-m9uy0SIS-vtSpHpnMn_lmAeD6XDSAkY_IeK3EbfEs8RG99-XMzxKVfKYRLVBMKgRLOOFJodvjNeL2jAW-S-t4Z7sg_jppMI5-IQD7dM-ZwgCxH2NzY3YZ3ZpOF5Y_YEMefJ1rK3ySALbPiMovvMBi_xiDESl4Jemr=w1600"},
  {"slug": "piemonte", "name": "Piemonte", "blurb": "Truffles, hazelnuts, and a royal appetite.", "color": "#5B2A4A"},
  {"slug": "puglia", "name": "Puglia", "blurb": "Olive groves, golden wheat, and two seas.", "color": "#8A5A1F"},
  {"slug": "sardegna", "name": "Sardegna", "blurb": "Sheep’s cheese, saffron, and the salt of the lagoons.", "color": "#5C5248"},
  {"slug": "sicilia", "name": "Sicilia", "blurb": "A table shaped by the sea, the sun and centuries of exchange.", "color": "#1B3C8C"},
  {"slug": "toscana", "name": "Toscana", "blurb": "Great oil, honest bread, and nothing wasted.", "color": "#3F5A2E"},
  {"slug": "trentino-alto-adige", "name": "Trentino-Alto Adige", "blurb": "Speck, mountain cheese, and the apples of the Alps.", "color": "#1F3D2E", "image": "/img/regions/trentino-alto-adige.jpg"},
  {"slug": "umbria", "name": "Umbria", "blurb": "Black truffles, tiny lentils, and the butchers of Norcia.", "color": "#2F4F5A"},
  {"slug": "veneto", "name": "Veneto", "blurb": "Rice, polenta, radicchio, and the spice routes of Venice.", "color": "#2F5D50"},
];
