import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Shop from './pages/Shop';
import Region from './pages/Region';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Gifts from './pages/Gifts';
import Signup from './pages/Signup';
import Login from './pages/Login';
const AdminApp = lazy(() => import('./admin/AdminApp'));
import './index.css';

const path = window.location.pathname.replace(/\/+$/, '');
const routes: Record<string, React.ComponentType> = {
  '/shop': Shop,
  '/regions': Region,
  '/regions/sicilia': Region,
  '/product/sicilian-pistachio-cream': Product,
  '/cart': Cart,
  '/checkout': Checkout,
  '/gifts': Gifts,
  '/signup': Signup,
  '/login': Login,
  '/admin': AdminApp,
};
const Page = routes[path] ?? App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  </StrictMode>,
);
