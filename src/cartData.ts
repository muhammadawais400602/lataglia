const img = 'https://lh3.googleusercontent.com/aida-public';

export const FREE_FREIGHT_AT = 125;
export const FREIGHT = 14;
export const PROMO = { code: 'BRONTE15', rate: 0.15 };

export type CartItem = {
  id: string;
  maker: string;
  name: string;
  meta: string;
  unit: number;
  qty: number;
  wrap: boolean;
  badge: { label: string; className: string };
  img: string;
  note?: 'provenance' | 'drying' | 'stamp';
  href?: string;
};

export const initialCart: CartItem[] = [
  {
    id: 'pistachio-cream', maker: 'Gusto Etna · Bronte, Sicilia', name: 'Sicilian Pistachio Cream 35% DOP',
    meta: '200g glass jar · Harvest 2024 · $2.27/oz', unit: 16, qty: 2, wrap: true, note: 'provenance',
    badge: { label: 'DOP Bronte', className: 'text-badge-ink' }, href: '/product/sicilian-pistachio-cream',
    img: `${img}/AB6AXuBG3oke3eDpoN5QBnBcO_YVQ-mpKbvlraNWvNL4NHdg15phyYSOjnajBiStH0gNmspfivO9Sad-JTiQtp1OpiPMQnimkx1TEqPdyUjuaQKX4Aa5N5NlSg96prqMHwkmSgQD7iCGraD7nwbTxBARhGX7IiFFNAySN9o4y948QQWTx71o1mYg6dZDfjPzxo_1REDbFfZaWpJF_Vivt7AGKTphwQ17zhfvqKQciRXzTRNicHz5jRdfp-rduQ`,
  },
  {
    id: 'paccheri', maker: 'Pastificio Marulo · Campania', name: 'Artisanal Bronze-Die Paccheri di Gragnano IGP',
    meta: '500g pouch · 100% Italian Durum Semolina · $0.54/oz', unit: 9.5, qty: 2, wrap: false, note: 'drying',
    badge: { label: 'IGP Gragnano', className: 'text-coastal-blue' },
    img: `${img}/AB6AXuBttmXPJCBW9_ZLNcfZFuvjeUSSELY3ckrx_31Vhe-fib1ZLyiZh_1HJQTSGujX63yBX_wWHxFk5gWPlVmHvcu5JMJ096nvBB6XFjFv723OXXh51gZEsncp7fyRja6vKksjuPMdd0sEoDItrgzrDmsJzvhhjCycL1DC6JI1F6ja3O11VoiEgZtydMWferBHxwtLMl1kY0IIShRuLvQ_m_SzyI5jLkH4d8XsBMflTXiHS8SmA9CSnPEk3g`,
  },
  {
    id: 'balsamic', maker: 'Il Borgo del Balsamico · Emilia-Romagna', name: 'Traditional Balsamic Vinegar of Reggio Emilia DOP (Yellow Label)',
    meta: '100ml flacon in velvet-lined box · Aged 12+ years in ancestral wood batteries · $17.15/oz', unit: 58, qty: 1, wrap: true, note: 'stamp',
    badge: { label: 'Reserve DOP', className: 'text-wine-dark' },
    img: `${img}/AB6AXuAk5dq_xXapW96PQJru-FEoPufKfsvCum95omqgBkRI57YIGyJKWjOEkAqgK5JgeFKW9VzsB2tQgtNh-2j61KbVBO-KCD8_uk0YiP9UqJdZ7NIweBMMneV3ma1oIZAwnavLo8-Tsg_M3sobu7EKNzACjmvKsiDNsCyZWY58Uk-AE2_ffaxTgzGZP1wCcbIw9NiBymC_IvHoD-vS3BBeNXjdXVQAWx7oTiOYNDxMc64HmndpOGbkhTi4FA`,
  },
];

export const addOns: (Omit<CartItem, 'qty' | 'wrap' | 'meta' | 'badge'> & { region: string; detail: string; short: string })[] = [
  {
    id: 'datterino', maker: "Così Com'è", short: "Così Com'è", name: 'Yellow Datterino Tomatoes', detail: '350g in deep sea brine', unit: 8.5, region: 'Campania',
    img: `${img}/AB6AXuBY4455DEX1zjjpdq7-_mNILuWUJRUYyvMxMXx4jMQYd55DK_wV9oy-PIMx-rP1tMRkt8iwhkFiYgazb05uFnI6rs1jFuEPynANvN6XO5Q_mSnHWHJH7MXg9cvrDWA3798HSfMlbXyd0ju2P_NXo2Qv8uEjZgBuH4jKkJLmoPYvIgiiMvli6aTlEQ3pQ0aD3-aKYdw8BfdknHP3ri2lylIohY914kchXuH9Q7icchs3wAuR2FxKDpvCKg`,
  },
  {
    id: 'frantoio', maker: 'Basso 1904', short: 'Basso 1904', name: 'Monocultivar Frantoio EVOO', detail: '500ml cold extracted', unit: 24, region: 'Puglia',
    img: `${img}/AB6AXuDOfK_Hr8mZdhs9Xjpy6-1nzgKM3RnlWWohO6BzGGYvThuOgAYxr6PqbtUiHq8eAzt0U41puPkNIL9mzrp4kFZT-0Dd2naDVy5tWiqi4qYAGK-t3F9VG24x84IueezG7k7QxV4LOiFiUkzcAeqlZOz1KIDsWcvvZ5sfQix8gaAjXlPigUd0F0kjR-H7me2uORtg38Cj-DV1D2GLxQF5pO3JI7JdfjVW4kaM5krFSP_iZWPmqMjtYcS5sg`,
  },
  {
    id: 'chili', maker: 'Tutto Calabria', short: 'Tutto Calabria', name: 'Crushed Hot Chili Peppers', detail: '280g in olive oil', unit: 7.5, region: 'Calabria',
    img: `${img}/AB6AXuCpHtv60qBm1gTAx7qKkSh0JjmJ7JTczUJZIIbJ322M93fiDxYrKx4IMoD6DPFPSdwALZuS3bkwuIJ6yeN6-Dn5a479tL4cAVdhoFde3eyHtJIHGOmmZy0Gjm0YuKXbjhavp7teGwc7c-j1ty3tV_BWdGfpoCteCqhbtR0qU9i8kRxaCAa8kzqdexMVEzHHwbfnPD3jJniTKv8uxt4NSU-kZ8QmsrOcLvv3D43vKS722VbRpBM7EaQ_dQ`,
  },
];
