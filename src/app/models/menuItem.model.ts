import { ImgItem } from '../models/imgItem.model';
export interface MenuItem {
  label: string;
  link: string;
  title?: string;
  items?: ImgItem[];
  style?: {
    fullscreen: boolean,
    css:string
  };
  blocked?: boolean
}
