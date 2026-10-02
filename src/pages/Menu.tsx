import Layout from '../components/Layout';

type Dish = { name: string; desc: string; price: string };

const sections: { title: string; items: Dish[] }[] = [
  {
    title: 'Antipasti',
    items: [
      { name: 'Burrata, blood orange', desc: 'Puglian burrata, Sicilian blood orange, pink pepper.', price: '€14' },
      { name: 'Vitello tonnato', desc: 'Slow-cooked veal, tuna-caper mayonnaise.', price: '€16' },
      { name: 'Carciofi fritti', desc: 'Twice-fried Roman artichokes, lemon salt.', price: '€12' },
    ],
  },
  {
    title: 'Pasta',
    items: [
      { name: 'Tagliatelle al ragù', desc: '36-hour pork and beef ragù, Parmigiano 24m.', price: '€18' },
      { name: 'Cacio e pepe', desc: 'Tonnarelli, Pecorino Romano, Sarawak pepper.', price: '€16' },
      { name: 'Pappardelle, cinghiale', desc: 'Wild boar stewed in Montepulciano.', price: '€22' },
    ],
  },
  {
    title: 'Secondi',
    items: [
      { name: 'Saltimbocca', desc: 'Veal, prosciutto di Parma, sage, Marsala.', price: '€24' },
      { name: 'Branzino al sale', desc: 'Whole sea bass in salt crust, two to share.', price: '€48' },
    ],
  },
  {
    title: 'Dolci',
    items: [
      { name: 'Tiramisù', desc: 'Mascarpone, espresso, Marsala, cocoa.', price: '€9' },
      { name: 'Panna cotta, amarene', desc: 'Vanilla cream, sour cherries in syrup.', price: '€8' },
    ],
  },
];

export default function Menu() {
  return (
    <Layout>
      <section className="container-x py-20">
        <p className="uppercase tracking-widest text-xs text-brand-700 mb-4">Autumn 2026</p>
        <h1 className="text-5xl mb-4">The menu</h1>
        <p className="text-brand-700 max-w-prose mb-12">
          Changes with the season. Please tell us about allergies — the kitchen can adapt most dishes.
        </p>

        <div className="grid gap-14">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-3xl mb-6 border-b border-brand-200 pb-2">{s.title}</h2>
              <ul className="divide-y divide-brand-200">
                {s.items.map((d) => (
                  <li key={d.name} className="py-5 flex justify-between gap-6">
                    <div>
                      <h3 className="text-xl mb-1">{d.name}</h3>
                      <p className="text-brand-700">{d.desc}</p>
                    </div>
                    <div className="text-brand-700 whitespace-nowrap font-medium">{d.price}</div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </Layout>
  );
}
