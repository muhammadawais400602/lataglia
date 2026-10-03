const img = 'https://lh3.googleusercontent.com/aida-public';

export type HamperKind = 'terroir' | 'ingredient' | 'cellar';

export type Hamper = {
  id: string;
  name: string;
  price: number;
  kind: HamperKind;
  eyebrow: string;
  badge: string;
  badgeClass?: string;
  blurb: string;
  items: string[];
  img: string;
};

export const crestImg = `${img}/AB6AXuDdfUxLXOcRh8j8Tf8msbbFgqTDQOyozGZvx4e9s20W7uZUYqTCpY9Yxgq-3Varv4m_9McHAvy4f6Z0UaULSKQGkEWT3xCkN8WhTQg_Nb6EfxYijYlM3qlEUj62jDUvDNctZR2pPnzqNCX0cPepR_5Z4D2h9Gl5ayZwAz_AG2rFpCXkWIVzDMzAyLucIgFh2OaQ5TIeunj8LZp-0stosdVGUAyrDHkfCkkpAu9VyGVXhcxRTfnUg9cwZNEUgvBqKYiqTw`;

export const featured: Hamper = {
  id: 'grand-tour', name: 'La Taglia Grand Tour Cellar Hamper', price: 399, kind: 'cellar',
  eyebrow: '6-Region Curated Masterwork', badge: 'Grand Luxury',
  blurb: 'Our magnum opus cellar hamper. An archival expedition across Campania, Emilia-Romagna, Sicilia, and Piemonte presented in an heirloom reclaimed chestnut crate with stamped brass clasps.',
  items: [
    'Il Borgo del Balsamico DOP Reggio Emilia (12+ Year Aged)',
    'Basso 1904 Monocultivar Extra Virgin Olive Oil Cru (500ml)',
    'Pastificio Marulo Bronze-Extruded Paccheri & Vesuvio (2kg)',
    'Gusto Etna Stone-Milled Bronte Pistachio Paste & Pesto',
    'Artisanal Torrone Piemontese & Hand-Numbered Cellar Card',
  ],
  img: `${img}/AB6AXuCzoiY_PbATXMfY1mnz5jOL0IBn1HMArAne7I7zNxjEEuPe3_bBSnSIrWUD8rLBOge1WxNRLC4WLoO5h3B_4izy2UyK37r3BIgyS7hfWNydJTozOLPdKPZh0H_TRLzKp9_a3t5Rxym2DVO8nO5vwdcsos81ypYQldFRJykdsRrebCBDqgt8dDGY7lzt9_rxDJOY7jqDGHh7BoADPjHw1plrAfu9x7Sm5ANsaklc7vq4Udj2Csws3Fwq`,
};

export const hampers: Hamper[] = [
  {
    id: 'taste-of-sicily', name: 'Taste of Sicily', price: 89, kind: 'terroir', eyebrow: 'Sicilia Terroir', badge: 'Terroir Bestseller',
    blurb: 'Volcanic riches of Mount Etna and the sun-soaked Mediterranean coast in an archival embossed gift box.',
    items: ['Gusto Etna Pistachio Cream (35%) & Savory Pesto', 'Trapanese Busiata Pasta & Sun-dried Pachino Tomatoes', 'Crisp Sicilian Pistachio Brittle + Regional Dining Guide'],
    img: `${img}/AB6AXuBdDg5cA20fe1YrMRIOdkt6cKmZ3mhM5ZsIwkFdxlhp0rm81M-AnjTsAmYgyOJcQHbj89qegZOZXh4BG1hhU056oG3vRn6GxrLJAtulKgsCGxM1gX6Nj4u7-S2Re8qPHXkggsorCr7oagYxgNkLuAfe1VubSnTR8fWM8obiHqO2hBVMdzph7UeNF7lhtVpuvIv9bv8AUY1FRxcnY7cdWI4juwMBmq8Tm7TyQL5eAm_waBnms0jkCCsr`,
  },
  {
    id: 'dinner-in-naples', name: 'Dinner in Naples', price: 79, kind: 'terroir', eyebrow: 'Campania Heritage', badge: 'Pasta Lovers',
    blurb: 'The legendary pasta heritage of Gragnano paired with sweet volcanic datterini tomatoes.',
    items: ['Pastificio Marulo Organic Paccheri di Gragnano (1kg)', 'Così Com’è Whole Red & Yellow Datterino Preserves', 'Basso 1904 Unfiltered EVOO & Bronze-Die Recipe Folio'],
    img: `${img}/AB6AXuBbpfoED5G8sYb-izcprhxTWelGxb0qkCPAO2PUKDyLcE5solcFvSGPpiUmbxz5rdBagZLsld4gYQX9sNQlVCIQtrVb2OwdBlR5eIbscRt2hMuqqWHdW81U0TjvRP7paEhyDy0ZRK7XjuWCQhQLO8w7NjgFhoUWEJteDTbF7-2Rf_wcKvLFL-yTwnXIXLx-0WSnzDMezFAAJs50rrRDQ15AfSstfg1aAQVAwGzBEzJpE0c8WEImGYNo`,
  },
  {
    id: 'balsamic-collection', name: 'The Balsamic Collection', price: 149, kind: 'ingredient', eyebrow: 'Emilia-Romagna Tradition', badge: 'Rare Cask',
    blurb: 'Centuries of cask-aged mastery from Reggio Emilia. Unmatched depth of wood sugars and acidity.',
    items: ['Il Borgo del Balsamico Tradizionale DOP (12+ Year)', 'Trio of Aged Oak, Juniper & Chestnut Cask Condiments', 'Il Tinello Saba Cooked Must + Hand-blown Tasting Pipette'],
    img: `${img}/AB6AXuDMH2M-VN1-Pz9hCbkXgdgup639qKPj1bgJo2jf1PgPm9NKzrgAY_T6MZujPmHAC4Z5W83H6bgIwaOrwcCLEuI-3an8k7c44fESuTzHNkXQYSCN_pESKkZUsjfCP-01ZMORW4JuJXmElmpAAAxPwRTi5o5Crpmlu_bVRSOXjhggx377vb87iOfKRdkb1LjsaiX1pF73K7pXrg-DIruRvIfEPidPaOJoOlRNnbEwUK6fqguV0N3VVklu`,
  },
  {
    id: 'pistachio-edit', name: 'The Pistachio Edit', price: 119, kind: 'ingredient', eyebrow: 'Bronte DOP Monograph', badge: 'Connoisseur',
    blurb: "The 'Green Gold' of Sicily harvested from the volcanic crags of Etna, spanning savory to confection.",
    items: ['Roasted Pistacchio Verde di Bronte DOP (250g Jar)', '100% Pure Stone-Milled Bronte Paste & 35% Crema', 'Cold-Pressed Bronte Pistachio Finishing Oil & Croccante'],
    img: `${img}/AB6AXuCZhnC6OD1VrmeoAkesXcV61vBh25ZoqFu3NKi1EWxScFq08esuCcNzj28MeLyPLME1eJ4rqHGka5Va1TpbBHJJjtXPwJCp0j6OcrdBzYqdqkNECgc1aIdIrdUQ-3yQ49QItc5wh4ZkdvFaJm6-EOJLmg_-fEa9Y74OCjgdx1yeFqlC35iIO1cg2THDFfbVWTTKfIfoC35P_lksCF2Ua-5Tn5iAP5Amgfwuc-v6kUOIJSkESvhpWyfq`,
  },
  {
    id: 'heat-of-calabria', name: 'The Heat of Calabria', price: 59, kind: 'terroir', eyebrow: 'Calabrian Sun', badge: 'Spicy Pantry', badgeClass: 'text-status-red',
    blurb: 'Fierce pepper aromatics, slow-simmered pork fat spreads, and vibrant infused oils from the southern coast.',
    items: ["Tutto Calabria Artisanal Spilinga 'Nduja Oil", 'Whole Calabrian Chili Peppers preserved in EVOO', 'Spicy Balsamic Finishing Glaze + Gragnano Spaghettoni'],
    img: `${img}/AB6AXuAVGYQ04rZ-nKR0Oz5lhG8ivLp6cW06G3MC69sYYbwZJs2pqjQrdmZo7GAMNt3U-WCjFmmx3uy9XT2Yx-9gh8tZO3EqFRsZUkPQmYsYt8-Uyx8O7ojZ-JUvRro8eR6r34iv4LETSR7WsPUnhlxtF8trSRL7T5VcCPBar3UfqjOT1RKVlbvzIAzIcArvfdgViGqDu8HffvvgRjxkKj-0D1p64LmHiXZDq9r4px6GXqS2NLFf_mbKHECS`,
  },
  {
    id: 'risotto-table', name: 'The Risotto Table', price: 69, kind: 'terroir', eyebrow: 'Northern Plains', badge: 'Po Valley',
    blurb: 'Superfine grains from the historic flooded plains of Lombardy and Piemonte for velvety mantecatura.',
    items: ['Riso Scotti Carnaroli & Vialone Nano Heritage Strains', 'Aromatic Riso Venere Black Grain Reserve', 'Monogram Balsamic of Modena IGP & Carved Olive Wood Ladle'],
    img: `${img}/AB6AXuA4EH7PBxM5mkGtU_hUOJIWGkBVxZJn4EFpJjF38EOKBU7wo_ddyMCFm271EacOGO5w4Xv6DGSB-7_saGCFJU5iM16suJDjSS0a_VzFQbhUmwPL8egJ5XILWwdPmz-_POZdud-1IbUhFmWHh2snwuV7-TAFb5uKZfOhuCAAC57-6VjgZFhqO7vaYO8y1vEORke8lGfQXTjEtIhhnE1cknP388wuircWvsS4xPwHGOMZ7oIWF5WLtCf7`,
  },
];

export type GiftFilter = 'all' | HamperKind | 'under-100' | 'heirloom';

export const giftFilters: { value: GiftFilter; label: string }[] = [
  { value: 'all', label: 'All Gift Hampers (7)' },
  { value: 'terroir', label: 'Regional Terroir Boxes' },
  { value: 'ingredient', label: 'Single-Ingredient Edits' },
  { value: 'cellar', label: 'Corporate Cellar Crates' },
  { value: 'under-100', label: 'Under $100' },
  { value: 'heirloom', label: 'Heirloom Luxury ($150+)' },
];

export function matches(h: Hamper, f: GiftFilter) {
  if (f === 'all') return true;
  if (f === 'under-100') return h.price < 100;
  if (f === 'heirloom') return h.price >= 150;
  return h.kind === f;
}

export const tiersCorporate = [
  ['15 – 49 Units', 'Custom foil note cards + direct recipient courier tracking'],
  ['50 – 199 Units', 'Hot-stamped brand seal wax + curated pantry substitutions'],
  ['200+ Units', 'Bespoke timber crate burning & dedicated freight liaison'],
];

export const protocols = [
  { icon: 'history_edu', title: 'Hand-Lettered Calligraphy', body: 'Never a generic receipt slip. Every hamper includes heavy Florentine deckle-edge cardstock inscribed by in-house calligraphers with your private sentiment.', tag: 'Complimentary' },
  { icon: 'ac_unit', title: 'Thermal Cold-Chain', body: 'Perishable oils, fresh sheep ricottas, and cured salumi transit within custom insulated biodegradable liners paired with recycled chilling gel packs.', tag: 'Climate Protected' },
  { icon: 'visibility_off', title: 'Discreet Pricing', body: 'Absolute gifting discretion. No financial totals, packing slips, or cost disclosures ever enter the recipient parcel. Detailed invoices deliver digitally to the purchaser.', tag: 'Secure Protocol' },
  { icon: 'table_chart', title: 'Multi-Ship Excel Import', body: 'Sending to 25 remote team members or 150 clients? Drop our standardized CSV spreadsheet to our concierge and we distribute automatically to every individual doorstep.', tag: 'Self-Serve or Assisted' },
];
