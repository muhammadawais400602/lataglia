import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Shop from './pages/Shop';
import Region from './pages/Region';
import Product from './pages/Product';
import './index.css';

const path = window.location.pathname.replace(/\/+$/, '');
const routes: Record<string, () => JSX.Element> = {
  '/shop': Shop,
  '/regions': Region,
  '/regions/sicilia': Region,
  '/product/sicilian-pistachio-cream': Product,
};
const Page = routes[path] ?? App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
