import { MenuItem } from '../models/menuItem.model';

export const homepageMenuItems: MenuItem[] = [
  { label: 'PERSONAL PROJECTS', link: '/work' },
  { label: 'CONTACTS', link: '' },
];

export const projectsMenuItems: MenuItem[] = [
  {
    label: '365',
    link: '/365',
    title: '365',
    style: {
      fullscreen: true,
      css: 'background: url(/assets/menu/365.jpg); background-repeat: no-repeat; background-position: center; background-size: cover;'
    },
    blocked: true
  },
  { 
    label: 'SAMEDI',
    link: '/samedi',
    title: 'samedi',
    style: {
      fullscreen: false,
      css: 'background: url(/assets/menu/samedi.gif); background-repeat: no-repeat; background-position: center; background-size: 100%;'
    }  
  },
  {
    label: 'CHEIRON',
    link: '/cheiron',
    title: 'cheiron',
    style: {
      fullscreen: false,
      css: 'background: url(/assets/menu/cheiron.webp); background-repeat: no-repeat; background-position: center; background-size: cover;'
    }
  },
  { 
    label: 'CEBE',
    link: '/CEBE',
    title: 'cebe',
    style: {
      fullscreen: true,
      css: 'background: url(/assets/menu/cebe.jpg); background-repeat: no-repeat; background-position: center; background-size: cover;'
    }
  },
  {
    label: 'الظلال والأضواء',
    link: '/ombres-et-lumieres',
    title: 'ombres-et-lumieres',
    style: {
      fullscreen: false,
      css: 'background: url(/assets/menu/ombres-et-lumieres.png); background-repeat: no-repeat; background-position: center; background-size: 100%;'
    }
  },
  { 
    label: 'PORTRAITS',
    link: '/portraits',
    title: 'portraits',
    style: {
      fullscreen: false,
      css: 'background: url(/assets/menu/portraits.jpg); background-repeat: no-repeat; background-position: center; background-size: 100%;'
    }
  },
];

export const firebaseFolders: any = [{
  LUNDI: {
    folderName:'LUNDI',
    numberToFetch: 57
  },
  MARDI: {
    folderName:'MARDI',
    numberToFetch: 29
  },
  MERCREDI: {
    folderName:'MERCREDI',
    numberToFetch: 38
  },
  JEUDI: {
    folderName:'JEUDI',
    numberToFetch: 22
  },
  VENDREDI: {
    folderName:'VENDREDI',
    numberToFetch: 32
  }}];

//inutile ?
export const navbar365Items: MenuItem[] = [
  {
    label: 'LUNDI',
    link: '/Lundi',
    items: [
      { name: 'LUNDI', url: '365/LUNDI/LUNDI.jpg' },
      { name: 'LUNDI-1', url: '365/LUNDI/LUNDI-1.jpg' },
      { name: 'LUNDI-2', url: '365/LUNDI/LUNDI-2.jpg' },
      { name: 'LUNDI-2-1', url: '365/LUNDI/LUNDI-2-1.jpg' },
      { name: 'LUNDI-2-2', url: '365/LUNDI/LUNDI-2-2.jpg' },
      { name: 'LUNDI-2-3', url: '365/LUNDI/LUNDI-2-3.jpg' },
      { name: 'LUNDI-2-4', url: '365/LUNDI/LUNDI-2-4.jpg' },
      { name: 'LUNDI-2-5', url: '365/LUNDI/LUNDI-2-5.jpg' },
      { name: 'LUNDI-2-6', url: '365/LUNDI/LUNDI-2-6.jpg' },
      { name: 'LUNDI-2-7', url: '365/LUNDI/LUNDI-2-7.jpg' },
      { name: 'LUNDI-2-8', url: '365/LUNDI/LUNDI-2-8.jpg' },
      { name: 'LUNDI-2-9', url: '365/LUNDI/LUNDI-2-9.jpg' },
      { name: 'LUNDI-2-10', url: '365/LUNDI/LUNDI-2-10.jpg' },
      { name: 'LUNDI-2-11', url: '365/LUNDI/LUNDI-2-11.jpg' },
      { name: 'LUNDI-3', url: '365/LUNDI/LUNDI-3.jpg' },
      { name: 'LUNDI-3-1', url: '365/LUNDI/LUNDI-3-1.jpg' },
      { name: 'LUNDI-3-2', url: '365/LUNDI/LUNDI-3-2.jpg' },
      { name: 'LUNDI-3-3', url: '365/LUNDI/LUNDI-3-3.jpg' },
      { name: 'LUNDI-3-4', url: '365/LUNDI/LUNDI-3-4.jpg' },
      { name: 'LUNDI-3-5', url: '365/LUNDI/LUNDI-3-5.jpg' },
      { name: 'LUNDI-3-6', url: '365/LUNDI/LUNDI-3-6.jpg' },
      { name: 'LUNDI-3-7', url: '365/LUNDI/LUNDI-3-7.jpg' },
      { name: 'LUNDI-3-8', url: '365/LUNDI/LUNDI-3-8.jpg' },
      { name: 'LUNDI-3-9', url: '365/LUNDI/LUNDI-3-9.jpg' },
      { name: 'LUNDI-4', url: '365/LUNDI/LUNDI-4.jpg' },
      { name: 'LUNDI-4-1', url: '365/LUNDI/LUNDI-4-1.jpg' },
      { name: 'LUNDI-4-2', url: '365/LUNDI/LUNDI-4-2.jpg' },
      { name: 'LUNDI-4-3', url: '365/LUNDI/LUNDI-4-3.jpg' },
      { name: 'LUNDI-4-4', url: '365/LUNDI/LUNDI-4-4.jpg' },
      { name: 'LUNDI-4-5', url: '365/LUNDI/LUNDI-4-5.jpg' },
      { name: 'LUNDI-4-6', url: '365/LUNDI/LUNDI-4-6.jpg' },
      { name: 'LUNDI-4-7', url: '365/LUNDI/LUNDI-4-7.jpg' },
      { name: 'LUNDI-4-8', url: '365/LUNDI/LUNDI-4-8.jpg' },
      { name: 'LUNDI-4-9', url: '365/LUNDI/LUNDI-4-9.jpg' },
      { name: 'LUNDI-4-10', url: '365/LUNDI/LUNDI-4-10.jpg' },
      { name: 'LUNDI-4-11', url: '365/LUNDI/LUNDI-4-11.jpg' },
      { name: 'LUNDI-4-12', url: '365/LUNDI/LUNDI-4-12.jpg' },
      { name: 'LUNDI-4-13', url: '365/LUNDI/LUNDI-4-13.jpg' },
      { name: 'LUNDI-5', url: '365/LUNDI/LUNDI-5.jpg' },
      { name: 'LUNDI-5-2', url: '365/LUNDI/LUNDI-5-2.jpg' },
      { name: 'LUNDI-5-3', url: '365/LUNDI/LUNDI-5-3.jpg' },
      { name: 'LUNDI-5-4', url: '365/LUNDI/LUNDI-5-4.jpg' },
      { name: 'LUNDI-5-5', url: '365/LUNDI/LUNDI-5-5.jpg' },
      { name: 'LUNDI-5-6', url: '365/LUNDI/LUNDI-5-6.jpg' },
      { name: 'LUNDI-6', url: '365/LUNDI/LUNDI-6.jpg' },
      { name: 'LUNDI-6-1', url: '365/LUNDI/LUNDI-6-1.jpg' },
      { name: 'LUNDI-6-2', url: '365/LUNDI/LUNDI-6-2.jpg' },
      { name: 'LUNDI-6-3', url: '365/LUNDI/LUNDI-6-3.jpg' },
      { name: 'LUNDI-7', url: '365/LUNDI/LUNDI-7.jpg' },
      { name: 'LUNDI-7-1', url: '365/LUNDI/LUNDI-7-1.jpg' },
      { name: 'LUNDI-7-2', url: '365/LUNDI/LUNDI-7-2.jpg' },
      { name: 'LUNDI-7-3', url: '365/LUNDI/LUNDI-7-3.jpg' },
      { name: 'LUNDI-7-4', url: '365/LUNDI/LUNDI-7-4.jpg' },
      { name: 'LUNDI-8', url: '365/LUNDI/LUNDI-8.jpg' },
      { name: 'LUNDI-9', url: '365/LUNDI/LUNDI-9.jpg' },
      { name: 'LUNDI-10', url: '365/LUNDI/LUNDI-10.jpg' },
    ],
  },
  {
    label: 'MARDI',
    link: '/Mardi',
    items: [
      { name: 'paysage.jpg', url: 'paysage' },
      { name: 'paysage.jpg', url: 'paysage' },
      { name: '344.gif', url: 'portrait' },
      { name: 'paysage.jpg', url: 'paysage' },
    ],
  },
  {
    label: 'MERCREDI',
    link: '/Mercredi',
    items: [
      { name: '344.gif', url: 'portrait' },
      { name: 'paysage.jpg', url: 'paysage' },
      { name: '344.gif', url: 'portrait' },
    ],
  },
  {
    label: 'JEUDI',
    link: '/Jeudi',
    items: [
      { name: '344.gif', url: 'portrait' },
      { name: '344.gif', url: 'portrait' },
      { name: '344.gif', url: 'portrait' },
      { name: '344.gif', url: 'portrait' },
    ],
  },
  {
    label: 'VENDREDI',
    link: '/Vendredi',
    items: [
      { name: 'logo.png', url: 'paysage' },
      { name: 'logo.png', url: 'paysage' },
      { name: 'logo.png', url: 'paysage' },
      { name: 'logo.png', url: 'paysage' },
    ],
  },
];
