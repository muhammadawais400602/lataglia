import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Shop from './pages/Shop';
import './index.css';

const path = window.location.pathname.replace(/\/+$/, '');
const Page = path === '/shop' ? Shop : App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
