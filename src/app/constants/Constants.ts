import { MenuItem } from '../models/menuItem.model';

export const homepageMenuItems: MenuItem[] = [
  { label: 'PERSONAL PROJECTS', link: '/PersonalProjects' },
  { label: 'CONTACTS', link: '/Contacts' },
];

export const projectsMenuItems: MenuItem[] = [
  {
    label: 'PERSONAL PROJECTS',
    link: '/PersonalProjects',
    backgroundTitle: 'PersonalProjects',
  },
  { label: 'CONTACTS', link: '/Contacts', backgroundTitle: 'logo.png' },
  {
    label: 'CONTACTS',
    link: '/Contacts',
    backgroundTitle: 'st-loup-portfolio.png',
  },
  { label: 'CONTACTS', link: '/Contacts', backgroundTitle: '' },
  { label: 'CONTACTS', link: '/Contacts', backgroundTitle: '' },
  { label: 'CONTACTS', link: '/Contacts', backgroundTitle: '' },
  { label: 'CONTACTS', link: '/Contacts', backgroundTitle: '' },
];

export const navbarItems: MenuItem[] = [
  { label: 'LUNDI', link: '/Lundi' },
  { label: 'MARDI', link: '/Mardi' },
  { label: 'MERCREDI', link: '/Mercredi' },
  { label: 'JEUDI', link: '/Jeudi' },
  { label: 'VENDREDI', link: '/Vendredi' },
];
