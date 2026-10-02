import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <section className="container-x py-20 max-w-3xl">
        <p className="uppercase tracking-widest text-xs text-brand-700 mb-4">Our story</p>
        <h1 className="text-5xl mb-8">Nonna's rolling pin, still in service.</h1>
        <div className="prose prose-lg text-brand-900 space-y-6 text-lg leading-relaxed">
          <p>
            La Taglia opened in 2019 in a side street off Campo de' Fiori — twelve seats, a wood counter,
            and a pasta board older than any of us. The name means "the cut": a nod to the sfoglia we roll
            every morning and the hand that cuts it.
          </p>
          <p>
            Chef Elena Marino grew up in her grandmother's kitchen in Bologna, then cooked at Osteria
            Francescana and Pujol before coming home to Italy. Everything on the menu starts with her
            weekly walk through the Testaccio market — the fish, the greens and the wine list all shift
            with what's in season.
          </p>
          <p>
            We're a small team. We don't take walk-ins after seven, we don't rush dessert, and we won't
            make a cacio e pepe without the right pecorino. Thank you for letting us feed you.
          </p>
        </div>
      </section>
    </Layout>
  );
}
