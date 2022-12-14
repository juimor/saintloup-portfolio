import { Component } from '@angular/core';
import Constants from 'src/app/constants/Constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  projectsMenuItems = Constants.projectsMenuItems;

}
