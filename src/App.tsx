import { Link } from 'react-router-dom';
import Layout from './components/Layout';

const highlights = [
  { title: 'Hand-cut pasta', body: 'Rolled, cut and plated the day you taste it.' },
  { title: 'Seasonal menu', body: 'Dishes change with the market, not the calendar.' },
  { title: 'Natural wine', body: 'A short list of growers we actually know.' },
];

export default function App() {
  return (
    <Layout>
      <section className="container-x pt-20 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-widest text-xs text-brand-700 mb-4">Trattoria · Est. 2019</p>
          <h1 className="text-5xl md:text-6xl leading-tight mb-6">
            Pasta cut by hand, <span className="text-brand-700">served by candlelight.</span>
          </h1>
          <p className="text-lg text-brand-700 mb-8 max-w-prose">
            A small kitchen in the heart of Rome, serving the dishes we grew up with.
            Short menu. Long dinners. No shortcuts.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link to="/menu" className="btn-primary">See the menu</Link>
            <Link to="/contact" className="btn-ghost">Book a table</Link>
          </div>
        </div>
        <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-brand-200 via-brand-100 to-brand-50 border border-brand-200 shadow-xl flex items-end p-8">
          <blockquote className="font-display text-2xl text-brand-900">
            "The tagliatelle alone is worth the flight."
            <footer className="mt-3 text-sm text-brand-700 not-italic">— Gambero Rosso, 2024</footer>
          </blockquote>
        </div>
      </section>

      <section className="container-x py-20 border-t border-brand-200">
        <h2 className="text-3xl mb-10">What we care about</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <article key={h.title} className="p-6 rounded-2xl bg-white border border-brand-200">
              <h3 className="text-xl mb-2">{h.title}</h3>
              <p className="text-brand-700">{h.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x py-20">
        <div className="rounded-3xl bg-brand-900 text-brand-50 p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl mb-2 text-brand-50">Dinner, this Friday?</h2>
            <p className="text-brand-100">Tables fill a week ahead. Reserve yours now.</p>
          </div>
          <Link to="/contact" className="bg-brand-50 text-brand-900 px-6 py-3 rounded-full font-medium hover:bg-brand-100 transition-colors">
            Reserve a table
          </Link>
        </div>
      </section>
    </Layout>
  );
}
