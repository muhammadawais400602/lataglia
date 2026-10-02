import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Shop from './pages/Shop';
import Region from './pages/Region';
import './index.css';

const path = window.location.pathname.replace(/\/+$/, '');
const routes: Record<string, () => JSX.Element> = {
  '/shop': Shop,
  '/regions': Region,
  '/regions/sicilia': Region,
};
const Page = routes[path] ?? App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
