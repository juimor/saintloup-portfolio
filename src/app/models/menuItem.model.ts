import { ImgItem } from '../models/imgItem.model';
export interface MenuItem {
  label: string;
  link: string;
  backgroundTitle?: string;
  items?: ImgItem[];
}
