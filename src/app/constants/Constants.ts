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
  { label: 'SAMEDI', link: '', backgroundTitle: 'samedi.gif' },
  {
    label: 'PORSHE',
    link: '',
    backgroundTitle: 'porshe.jpg',
  },
  { label: 'CEBE', link: '', backgroundTitle: 'CEBE.jpg' },
  { label: 'الظلال والأضواء', link: '', backgroundTitle: '' },
  { label: 'PORTRAITS', link: '', backgroundTitle: 'portraits.jpg' },
];

//synthetiser navbarItems et weekItems
export const navbar365Items: MenuItem[] = [
  {
    label: 'LUNDI',
    link: '/Lundi',
    items: [
      { name: 'paysage.jpg', type: 'paysage' },
      { name: 'paysage.jpg', type: 'paysage' },
    ],
  },
  {
    label: 'MARDI',
    link: '/Mardi',
    items: [
      { name: 'paysage.jpg', type: 'paysage' },
      { name: 'paysage.jpg', type: 'paysage' },
      { name: '344.gif', type: 'portrait' },
      { name: 'paysage.jpg', type: 'paysage' },
    ],
  },
  {
    label: 'MERCREDI',
    link: '/Mercredi',
    items: [
      { name: '344.gif', type: 'portrait' },
      { name: 'paysage.jpg', type: 'paysage' },
      { name: '344.gif', type: 'portrait' },
    ],
  },
  {
    label: 'JEUDI',
    link: '/Jeudi',
    items: [
      { name: '344.gif', type: 'portrait' },
      { name: '344.gif', type: 'portrait' },
      { name: '344.gif', type: 'portrait' },
      { name: '344.gif', type: 'portrait' },
    ],
  },
  {
    label: 'VENDREDI',
    link: '/Vendredi',
    items: [
      { name: 'logo.png', type: 'paysage' },
      { name: 'logo.png', type: 'paysage' },
      { name: 'logo.png', type: 'paysage' },
      { name: 'logo.png', type: 'paysage' },
    ],
  },
];
