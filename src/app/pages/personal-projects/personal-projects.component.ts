import { Component } from '@angular/core';
import { projectsMenuItems } from 'src/app/constants/Constants';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.scss'],
})
export class PersonalProjectsComponent {

  constructor(public footerService : FooterService){}

  projectsMenuItems = projectsMenuItems;
  backgroundTitle: string;
  gridColoumns = 2;
  Style: string;

  changeBackgroundTitle(title: string) {
    this.backgroundTitle = title;
    this.setBackgroundStyle();
  }

  setBackgroundStyle() {
    if (this.backgroundTitle != undefined) {
      this.Style =
        'background: url(../../../assets/' +
        this.backgroundTitle +
        ' ); background-repeat: no-repeat; background-position: center; background-size: 100%;';
    } else this.Style = '';
  }
}
