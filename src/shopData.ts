const img = 'https://lh3.googleusercontent.com/aida-public';

export type Category = 'pasta' | 'balsamics' | 'oils' | 'pistachio' | 'rice' | 'sweets' | 'gifts';
export type Region = 'sicilia' | 'campania' | 'emilia' | 'calabria' | 'lombardia' | 'piemonte';
export type Cert = 'dop' | 'igp' | 'organic' | 'estate';

export type ShopProduct = {
  producer: string;
  place: string;
  name: string;
  unit: string;
  price: number;
  badge: { label: string; className: string };
  img: string;
  category: Category;
  region: Region;
  cert: Cert;
  gift: boolean;
  rare: boolean;
  inStock: boolean;
};

export const shopCategories: { value: Category | 'all'; label: string }[] = [
  { value: 'all', label: 'All Provisions (29)' },
  { value: 'pasta', label: 'Bronze-Die Pasta (3)' },
  { value: 'balsamics', label: 'Aged Balsamics & Saba (4)' },
  { value: 'oils', label: "Estate Olive Oils & 'Nduja (5)" },
  { value: 'pistachio', label: 'Bronte Pistachio Edit (8)' },
  { value: 'rice', label: 'Heirloom Rice (3)' },
  { value: 'sweets', label: 'Artisanal Sweets (3)' },
  { value: 'gifts', label: 'Gift Hampers (7)' },
];

export const shopProducts: ShopProduct[] = [
  {
    producer: 'Gusto Etna', place: 'Bronte, Sicilia', name: 'Bronte Pistachio Cream DOP', unit: '190g • $2.38 / oz', price: 16,
    badge: { label: 'Best Seller', className: 'bg-surface-container-lowest text-badge-ink' },
    img: `${img}/AB6AXuA50Y5nKfTahqDmQf6hgNWCLr7xZfxXGLEW3FD8w3BDW2gRLb_IiV_nyWmxu4U106llOMKtCYFK1PawL1oLPwA4ttUc2Ss1nU_NtWixdonqSg4uaTh0syy92HCx4spmsfNjNgTIfZoX66c-zy9WapcF4Jf7FkV1OXPm27VfjqMfLWKox5YDawHhKeorL_LFcRqb5CueBUMSM-XK8mj20hs5Q-lb47vTDEbKxW1Wh7H_wZK1UrDiogAI`,
    category: 'pistachio', region: 'sicilia', cert: 'dop', gift: false, rare: false, inStock: true,
  },
  {
    producer: 'Il Borgo del Balsamico', place: 'Reggio Emilia', name: 'Traditional Balsamic DOP 12+ Yrs', unit: '100ml • $26.17 / oz', price: 89,
    badge: { label: 'Rare Cask', className: 'bg-wine-dark text-on-primary' },
    img: `${img}/AB6AXuB8fNZqrw7_TeLPRVEEG_27bLhKOX_XNqCdzPhwWHZ5bLTyo7JBuBG7nuLUONxaWfTWjzKpwLufbGDQGMZpw9aC92xt7ZAcbhTPrMmYlaCy6jdyFMiwErNuyU4WWyzRPIVkvjpNhXaLksOXB9Cu3ZN-VdxwvM8OPNbVZGzjbI-INRp9b-ATgVayuCc_lE_QPClNYuWawfQf4JMKOJJU235NCk7vRde5n1RHDnQvA4n98iandjWQZQvd`,
    category: 'balsamics', region: 'emilia', cert: 'dop', gift: true, rare: true, inStock: true,
  },
  {
    producer: 'Pastificio Marulo', place: 'Torre Annunziata', name: 'Organic Bronze-Die Paccheri', unit: '500g • $0.68 / oz', price: 12,
    badge: { label: 'Organic', className: 'bg-tertiary-fixed text-tertiary' },
    img: `${img}/AB6AXuCrmH1O59xmE1Y77HZpjEBj-SfPVSMI9QI2fReWIfLlVNEUybRQbrmraXSxPdj_0TZ6CjRPClwypuyIngcZSdQWF4weTNTdt-l-5RO3ibWgN6HH8xkThDZsvE7bz7UiaPReDRpXaMUqNJH1oaFLo_S-GTC0lKEf3yFp0zpZx38Kiu2jCKbD9HzJ_dxxPK_L-qOMvLjTWVxK06o0_MKQKpEWnqHA6Go1bsRugfGn5xEMf7bDWgo5inpz`,
    category: 'pasta', region: 'campania', cert: 'organic', gift: false, rare: false, inStock: true,
  },
  {
    producer: 'Olio Basso 1904', place: 'San Michele di Serino', name: 'Unfiltered Extra Virgin Olive Oil', unit: '750ml • $1.14 / oz', price: 29,
    badge: { label: 'Campania Estate', className: 'bg-surface-container-lowest text-coastal-blue' },
    img: `${img}/AB6AXuDP-7sxBYaC6Y3JS4eLOFviAOiIBkbJTgeYhkREFeqP4nVKVP5bJIyVCgNpgLJR1LlPsYVptY6TC0EQz5C5ErUadQ9ttsgwKGwy8UdqBbZZuJ9Q5j832-j27Xi7aE4Ka5LGkeIJIv5cuYHGFFrX4uVfr4cA9sBngUOM8WDFnVkWWdZcSIpcSi0lva_CyaeD1gTcvI3feknb79GvBbmrzMts6tOL2gI3l9pVbfFUJZn4ow0b0MogyqLa`,
    category: 'oils', region: 'campania', cert: 'estate', gift: true, rare: false, inStock: true,
  },
  {
    producer: 'Riso Scotti', place: 'Pavia, Lombardia', name: 'Carnaroli Risotto Rice Riserva', unit: '1000g • $0.40 / oz', price: 14,
    badge: { label: "Chef's Choice", className: 'bg-surface-container-lowest text-badge-ink' },
    img: `${img}/AB6AXuCMFgCdqzLvdJxYGaDAFlEDMYMT857D05ZZADK6F6LJbmst8APC4Nl4JYWyknq_CXy-wFoodx0MUTgMC0CntsIT7QemPR1DFgTLpY8U5WaTySi2AMxuyA04SwrYM2r3qDPPxCLOcyksMQ7bLZwM15ouLGkJeE9C1OWinZ6B7mwQYAmW_rezg2MqBTu7ntbCcLZlJzaaNWjiRvS33b7WJEC_xWcEO70o30NIuOjdMNQabBFxLaWU-Jhc`,
    category: 'rice', region: 'lombardia', cert: 'estate', gift: false, rare: false, inStock: true,
  },
  {
    producer: 'Tutto Calabria', place: 'Marcellinara, Calabria', name: "Fiery Spilinga 'Nduja Oil", unit: '250ml • $1.65 / oz', price: 14,
    badge: { label: 'Calabrian Heat', className: 'bg-error-container text-status-red' },
    img: `${img}/AB6AXuCC3hXgtO47-HYlfWhixDmIvGeTORmhXWh-0mhqJFRiG405EoadpsWrNrhqsLIFFpDAqYH1QIdFzwMR73JQb-HxmTHFSFFnC0WNxh4tOQIEZA_nZacNem5iBUWjnfVgmUFcjBLMehUCESqr6VmxEEbhF2pMviwfwNweiWbDiMgyIPAj7_QO7izWh74iILXcxADKdMDXfSyYvtfRhhGhUHPdVyTJPDYQm_d646dur2oNjr8M78rgogJx`,
    category: 'oils', region: 'calabria', cert: 'estate', gift: false, rare: false, inStock: true,
  },
  {
    producer: "Così Com'è", place: 'Piana del Sele, Campania', name: 'Yellow Datterino Tomatoes in Juice', unit: '350g • $0.65 / oz', price: 8,
    badge: { label: 'Discovery', className: 'bg-surface-container-lowest text-secondary' },
    img: `${img}/AB6AXuBRbfN3ec2j13IDm1PE1_z3XTGyEgtwGUUYTjZPOlr_XSHYQdySu4eni5eOXqrKG29Cl-GM6BIwsg8jt21ndJ7dF_v2T_t34PpNXh1wUwoN-V5yhIMZncJmE1BWFeStFpQRFpjHHXybHWqPAayZearG1M3sELhCkVAU7iqwesHOgc4x6uRnjfY8lqlAzgNDJ36Qk1zYHDXFvRI-S0rfWP25ciszdOMP1PMUS7ci3vjNMzI863KvNVVu`,
    category: 'pasta', region: 'campania', cert: 'dop', gift: false, rare: false, inStock: true,
  },
  {
    producer: 'Gusto Etna', place: 'Bronte, Sicilia', name: 'Handmade Cannoli Pastry Box', unit: 'Box of 8 • $2.75 / unit', price: 22,
    badge: { label: 'Gift Ready', className: 'bg-secondary-fixed text-on-secondary-fixed' },
    img: `${img}/AB6AXuC66Qz_O1vxGNBZSyhKBG7E11V9J_ynfSiGuUL5GLDjS-pp7xx0eqw_gmnVIRMXOEiaJ2wLNz9eDe-dRv1HJffGFDGWKIH-9TlU0UBDIw940qDCkUbeXjZjdsjLtKuD3B7Gg0GWHngYfm0d0u9xYun-FrttGnejAkzJLWV7HyuC_ZCA_QHWryHtkt4PkqDJFzQjJqtsSDMMGOLlU2E8sTTNiKXafW91SYmjA9P72M1cR5KetKzCi5cq`,
    category: 'sweets', region: 'sicilia', cert: 'estate', gift: true, rare: false, inStock: true,
  },
  {
    producer: 'Pastificio Marulo', place: 'Torre Annunziata', name: 'Organic Bronze-Die Spaghettoni', unit: '500g • $0.45 / oz', price: 8,
    badge: { label: 'Organic', className: 'bg-tertiary-fixed text-tertiary' },
    img: `${img}/AB6AXuCKGNMKnw-D1ZK_Ug_RKV4Fxmy4s5ZTELECDXA8LO9y5p3-IsuawSvQt6iy70Q755dV-4fC-34i_gZOdFRJ6ogB45Is2Id7om670aTj0rwdIIcWbK9k4OpbfcpBqnGeLaClFdhBqdgmHSPU0A4o-YTmNdSNHHzalQIPDRd_yKhI8YinNY_U4nPcP10ABbOdi2YRwD58rMC9UsaDegHlySm0TWHVt1KMmkVFyNGarOPDMG75Kuf1GDKb`,
    category: 'pasta', region: 'campania', cert: 'organic', gift: false, rare: false, inStock: true,
  },
  {
    producer: 'Il Borgo del Balsamico', place: 'Reggio Emilia', name: 'Monogram Balsamic Vinegar IGP', unit: '250ml • $2.60 / oz', price: 22,
    badge: { label: 'IGP Certified', className: 'bg-surface-container-lowest text-badge-ink' },
    img: `${img}/AB6AXuCZyhmRoysTXxSEjhPdYG3L2aauy8GnQG3COaak_T-rq-gH0MIvgRD3YWT8DVg0xncJfT9Kgi264v_koaWGZjr_BkDt--tchO0yaeRu0s9IcA7WGyoAaHkLeWpFkEILzTxRXam4m8uLZSE7fiXX19cOXPaRPT-yW44Vb6evFBHXb5blW8ZnWNV6MyWl056-YbSwFVE6h2MvAJ_x7TRAz-3ObJcmaI9tSjyRZxE_cP8UAfBGYcoCxPH_`,
    category: 'balsamics', region: 'emilia', cert: 'igp', gift: true, rare: false, inStock: true,
  },
  {
    producer: 'Olio Basso 1904', place: 'San Michele di Serino', name: '100% Cold-Pressed Pistachio Oil', unit: '250ml • $3.31 / oz', price: 28,
    badge: { label: 'Rare Pressing', className: 'bg-wine-dark text-on-primary' },
    img: `${img}/AB6AXuB2DLQcxIyYpkalcwJ7Vouiq-N7kqMK42kIEC1VL8Ph8FrH1ea-6lMtrLKCcGU6OEBjRf5fwJe4vtyIl0X-Oyr_u1375ZIGFd0d9w8i4lp7ASjBazP3Tq37U1RL3kAmmtCTxc4AWw2v1EICwjs2AJOt4YtEKf3IGV0sPaL2oWKHJY6WCkKjwP9SomNJa6DwRCeoshlIBpxd1pHqluHfGtjxLRgmdsjlvZHTUwlv2olzRXY_RBjCdMK0`,
    category: 'pistachio', region: 'campania', cert: 'estate', gift: false, rare: true, inStock: true,
  },
  {
    producer: 'Tutto Calabria', place: 'Marcellinara, Calabria', name: 'Infused Peperoncino EVOO', unit: '250ml • $1.53 / oz', price: 13,
    badge: { label: 'Peperoncino', className: 'bg-surface-container-lowest text-status-red' },
    img: `${img}/AB6AXuDUkq6TgfKOwjF2ahABZJgDKtC894gDZY8GKNiQPJ_MoIkulL3tvTpZl1ouHlSnOUIzStVyQn1gA36A68G7N7dOBGYe_Prtvhk5490gOHHUtwKMidPAvub6mNTxg1jTXprEtNacMowXVRBQqPgeiij-358JiScZ_OjUDH94BnwD-CZSGmZ1ztElrosH9nHqweXxYn7-z8jRTnONLS2ZON9OLtS_uR_CVysQEzR404aqkOMi79NEqmAN`,
    category: 'oils', region: 'calabria', cert: 'estate', gift: false, rare: false, inStock: true,
  },
];
