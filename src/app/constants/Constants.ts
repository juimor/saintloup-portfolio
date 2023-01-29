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
      fullscreen: false,
      css: 'background: url(/assets/menu/365.gif); background-repeat: no-repeat; background-position: center; background-size: 70%;'
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
  MARDI : {
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
export const navbarItems: MenuItem[] = [
  {
    label: 'LUNDI',
    link: '/Lundi',
  },
  {
    label: 'MARDI',
    link: '/Mardi',
  },
  {
    label: 'MERCREDI',
    link: '/Mercredi',
  },
  {
    label: 'JEUDI',
    link: '/Jeudi',
  },
  {
    label: 'VENDREDI',
    link: '/Vendredi',
  },
];
