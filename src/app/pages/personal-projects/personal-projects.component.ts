import { Component } from '@angular/core';
import { projectsMenuItems } from 'src/app/constants/Constants';
import { MenuItem } from 'src/app/models/menuItem.model';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.scss'],
})
export class PersonalProjectsComponent {

  constructor(){}

  projectsMenuItems = projectsMenuItems;
  gridColoumns = 2;
  fullscreenStyle: string;
  divStyle: string;

  setBackgroundStyle(item: MenuItem) {
    if (!!item.style && !!item.style.css) {
      item.style.fullscreen ? this.fullscreenStyle = item.style.css : this.divStyle = item.style.css
    }
  }

  resetBackgroundStyle() {
    this.fullscreenStyle = '';
    this.divStyle = '';
  }
}
