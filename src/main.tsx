import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Shop from './pages/Shop';
import Regions from './pages/Regions';
import { hasStory, loadStory } from './regions';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Gifts from './pages/Gifts';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
const AdminApp = lazy(() => import('./admin/AdminApp'));
import './index.css';

const path = window.location.pathname.replace(/\/+$/, '');
const routes: Record<string, React.ComponentType> = {
  '/shop': Shop,
  '/regions': Regions,
  '/product/sicilian-pistachio-cream': Product,
  '/cart': Cart,
  '/checkout': Checkout,
  '/gifts': Gifts,
  '/signup': Signup,
  '/login': Login,
  '/admin': AdminApp,
};
const productId = !routes[path] && path.startsWith('/product/') ? decodeURIComponent(path.slice('/product/'.length)) : '';
const regionSlug = path.startsWith('/regions/') ? path.slice('/regions/'.length) : '';
// Each region story is its own download, fetched only when its page opens.
const StoryPage = hasStory(regionSlug)
  ? lazy(async () => {
      const [story, { default: RegionStory }] = await Promise.all([loadStory(regionSlug), import('./pages/RegionStory')]);
      return { default: () => <RegionStory story={story!} /> };
    })
  : null;
const Page = routes[path] ?? (productId ? () => <ProductDetail id={productId} /> : StoryPage ?? (regionSlug ? Regions : App));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  </StrictMode>,
);
