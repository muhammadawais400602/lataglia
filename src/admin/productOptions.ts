import type { Product } from '../shared/types';

export const CATEGORIES: [Product['category'], string][] = [['pasta', 'Pasta & pantry'], ['balsamics', 'Balsamics & saba'], ['oils', "Olive oils & 'nduja"], ['pistachio', 'Pistachio'], ['rice', 'Rice'], ['sweets', 'Sweets'], ['gifts', 'Gift hampers']];
export const REGIONS: [Product['region'], string][] = [['sicilia', 'Sicilia'], ['campania', 'Campania'], ['emilia', 'Emilia-Romagna'], ['calabria', 'Calabria'], ['lombardia', 'Lombardia'], ['piemonte', 'Piemonte']];
export const CERTS: [Product['cert'], string][] = [['dop', 'DOP'], ['igp', 'IGP'], ['organic', 'Organic'], ['estate', 'Single-estate']];
export const BADGE_STYLES: [string, string][] = [
  ['bg-surface-container-lowest text-badge-ink', 'Gold on white'],
  ['bg-wine-dark text-on-primary', 'Wine'],
  ['bg-tertiary-fixed text-tertiary', 'Pistachio green'],
  ['bg-secondary-fixed text-on-secondary-fixed', 'Soft gold'],
  ['bg-error-container text-status-red', 'Chili red'],
  ['bg-surface-container-lowest text-coastal-blue', 'Coastal blue'],
];

export const slug = (s: string) => s.toLowerCase().normalize('NFD').replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-').slice(0, 70);
