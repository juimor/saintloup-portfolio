import { ImgItem } from '../models/imgItem.model';
import { MenuItem } from '../models/menuItem.model';

export const homepageMenuItems: MenuItem[] = [
  { label: 'PERSONAL PROJECTS', link: '/Work' },
  { label: 'CONTACTS', link: '/Contacts' },
];

export const projectsMenuItems: MenuItem[] = [
  {
    label: '365',
    link: '/365',
    backgroundTitle: '365.webp',
  },
  { label: 'SAMEDI', link: '/Contacts', backgroundTitle: 'logo.png' },
  {
    label: 'PORSHE',
    link: '/Contacts',
    backgroundTitle: 'st-loup-portfolio.png',
  },
  { label: 'CEBE', link: '/Contacts', backgroundTitle: '' },
  { label: 'CONTACTS', link: '/Contacts', backgroundTitle: '' },
  { label: 'PORTRAITS', link: '/Contacts', backgroundTitle: '' },
];

export const navbarItems: MenuItem[] = [
  { label: 'LUNDI', link: '/Lundi' },
  { label: 'MARDI', link: '/Mardi' },
  { label: 'MERCREDI', link: '/Mercredi' },
  { label: 'JEUDI', link: '/Jeudi' },
  { label: 'VENDREDI', link: '/Vendredi' },
];

export const weekItems = 
  {
    'nothingSelected': [
      { name: 'st-loup-portfolio.jpg', type: 'paysage' },
    ],
    'lundi': [
      { name: 'paysage.jpg', type: 'paysage' },
      { name: 'paysage.jpg', type: 'paysage' },
    ],
    'mardi': [
      { name: 'paysage.jpg', type: 'paysage' },
      { name: 'paysage.jpg', type: 'paysage' },
    ],
    'mercredi': [
      { name: '344.gif', type: 'portrait' },
      { name: 'paysage.jpg', type: 'paysage' },
      { name: '344.gif', type: 'portrait' },
      { name: 'logo.png', type: 'paysage' },
    ],
    'jeudi': [
      { name: '344.gif', type: 'portrait' },
      { name: '344.gif', type: 'portrait' },
      { name: '344.gif', type: 'portrait' },
      { name: '344.gif', type: 'portrait' },
    ],
    'vendredi': [
      { name: 'logo.png', type: 'paysage' },
      { name: 'logo.png', type: 'paysage' },
      { name: 'logo.png', type: 'paysage' },
      { name: 'logo.png', type: 'paysage' },
    ],
  }
;

