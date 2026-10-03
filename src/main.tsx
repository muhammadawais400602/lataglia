import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Shop from './pages/Shop';
import Region from './pages/Region';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import './index.css';

const path = window.location.pathname.replace(/\/+$/, '');
const routes: Record<string, () => JSX.Element> = {
  '/shop': Shop,
  '/regions': Region,
  '/regions/sicilia': Region,
  '/product/sicilian-pistachio-cream': Product,
  '/cart': Cart,
  '/checkout': Checkout,
};
const Page = routes[path] ?? App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
