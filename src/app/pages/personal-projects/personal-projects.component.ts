import { Component } from '@angular/core';
import {projectsMenuItems} from 'src/app/constants/Constants';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.scss']
})
export class PersonalProjectsComponent {
  projectsMenuItems = projectsMenuItems;
  backgroundTitle: string;

  changeBackgroundTitle(title: string) {
    this.backgroundTitle = title;
  }
}
