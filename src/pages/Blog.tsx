import { useEffect } from 'react';
import Layout from '../components/Layout';
import { posts, type Post } from '../blog/posts';
import { addProduct, useBasket } from '../cartStore';
import { Toast, useToast } from '../components/Toast';
import { useCatalog } from '../storeApi';

const label = 'font-label-caps text-label-caps uppercase tracking-widest';
const Icon = ({ name, className = '' }: { name: string; className?: string }) => <span aria-hidden="true" className={`material-symbols-outlined ${className}`}>{name}</span>;
const money = (n: number) => (Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`);

function useTitle(title: string) {
  useEffect(() => {
    const prev = document.title;
    document.title = title;
    return () => {
      document.title = prev;
    };
  }, [title]);
}

export function PostCard({ p }: { p: Post }) {
  return (
    <a href={`/blog/${p.slug}`} className="group bg-surface-container-lowest border border-border-line rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
      <div className="aspect-[16/10] overflow-hidden bg-surface-container">
        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={p.img} alt="" loading="lazy" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs uppercase tracking-wider text-secondary font-bold">{p.tag}</span>
        <h3 className="font-headline-sm text-xl text-on-surface mt-1 mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
        <p className="text-sm text-ink-secondary line-clamp-3 mb-5 flex-1">{p.excerpt}</p>
        <span className="flex items-center justify-between text-xs text-ink-tertiary">
          {p.read}
          <span className="text-primary font-bold text-sm inline-flex items-center gap-1">Read <Icon name="arrow_forward" className="text-sm" /></span>
        </span>
      </div>
    </a>
  );
}

export default function Blog() {
  useTitle('Blog | La Taglia');
  return (
    <Layout>
      <section className="w-full bg-surface-parchment py-10 lg:py-14">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-caption text-ink-secondary mb-6">
            <a className="hover:text-primary transition-colors" href="/">Home</a>
            <span className="text-outline-variant">/</span>
            <span className="text-primary font-semibold">Blog</span>
          </nav>
          <span className={`${label} text-secondary`}>The La Taglia blog</span>
          <h1 className="font-display-hero text-[40px] leading-[46px] lg:text-[56px] lg:leading-[64px] text-primary tracking-tight mt-2 mb-4">Notes from the Italian pantry</h1>
          <p className="text-body-lg text-ink-secondary max-w-2xl">What we learn on the road: how the foods we love are made, how to read their labels, and how to cook with them.</p>
        </div>
      </section>
      <section className="max-w-[1280px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => <PostCard key={p.slug} p={p} />)}
        </div>
      </section>
    </Layout>
  );
}

export function BlogPost({ post }: { post: Post }) {
  useTitle(`${post.title} | La Taglia`);
  const { products } = useCatalog();
  const [, setBasket] = useBasket();
  const toast = useToast();
  const related = post.shop ? products.filter((p) => p.category === post.shop && p.stock > 0).slice(0, 4) : [];
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <Layout>
      <Toast message={toast.message} />
      <article>
        <header className="w-full bg-surface-parchment pt-8 pb-10">
          <div className="max-w-[860px] mx-auto px-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-caption text-ink-secondary mb-6">
              <a className="hover:text-primary transition-colors" href="/">Home</a>
              <span className="text-outline-variant">/</span>
              <a className="hover:text-primary transition-colors" href="/blog">Blog</a>
            </nav>
            <span className={`${label} text-secondary`}>{post.tag}</span>
            <h1 className="font-display-hero text-[36px] leading-[42px] lg:text-[52px] lg:leading-[60px] text-primary tracking-tight mt-2 mb-4 [text-wrap:balance]">{post.title}</h1>
            <p className="text-body-lg text-ink-secondary">{post.excerpt}</p>
            <p className="mt-4 text-xs text-ink-tertiary flex items-center gap-1"><Icon name="schedule" className="text-sm" /> {post.read}</p>
          </div>
        </header>
        <div className="max-w-[1080px] mx-auto px-6 -mb-4">
          <img src={post.img} alt="" className="w-full aspect-[16/8] object-cover rounded-xl shadow-lg -mt-2" />
        </div>
        <div className="max-w-[720px] mx-auto px-6 py-12 lg:py-16 space-y-8">
          {post.sections.map((s, i) => (
            <section key={i} className="space-y-4">
              {s.heading && <h2 className="font-headline-md text-2xl lg:text-3xl text-on-surface">{s.heading}</h2>}
              {s.paragraphs.map((t, j) => (
                <p key={j} className={`text-body-lg text-ink-secondary leading-relaxed ${i === 0 && j === 0 ? 'first-letter:float-left first-letter:text-6xl first-letter:pr-3 first-letter:font-headline-lg first-letter:text-primary first-letter:leading-none' : ''}`}>{t}</p>
              ))}
            </section>
          ))}
        </div>
      </article>

      {related.length > 0 && (
        <section className="w-full bg-surface-parchment py-12 lg:py-16">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <h2 className="font-headline-md text-2xl lg:text-3xl text-on-surface">From the pantry</h2>
              <a href={`/shop?category=${post.shop}`} className="text-sm font-bold text-primary hover:underline">See them all →</a>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {related.map((p) => (
                <div key={p.id} className="bg-surface-container-lowest rounded-lg p-4 shadow-sm flex flex-col">
                  <a href={p.href ?? `/product/${p.id}`} className="aspect-square bg-surface-soft rounded mb-3 p-3 flex items-center justify-center">
                    <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-contain" />
                  </a>
                  <span className="text-caption text-ink-tertiary truncate">{p.producer}</span>
                  <a href={p.href ?? `/product/${p.id}`} className="font-headline-sm text-base text-on-surface hover:text-primary line-clamp-2 flex-1">{p.name}</a>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-bold text-primary">{money(p.price)}</span>
                    <button
                      onClick={() => {
                        setBasket((b) => addProduct(b, p));
                        toast.show(`${p.name} added to your bag`);
                      }}
                      className="px-3 py-1.5 rounded-full bg-secondary-container hover:bg-gold-hover text-button-ink text-xs font-bold"
                    >
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {more.length > 0 && (
        <section className="max-w-[1280px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <h2 className="font-headline-md text-2xl lg:text-3xl text-on-surface mb-8">Keep reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {more.map((p) => <PostCard key={p.slug} p={p} />)}
          </div>
        </section>
      )}
    </Layout>
  );
}
