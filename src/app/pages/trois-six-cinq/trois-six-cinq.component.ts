import { Component } from '@angular/core';
import { projectsMenuItems, weekItems } from 'src/app/constants/Constants';

@Component({
  selector: 'app-trois-six-cinq',
  templateUrl: './trois-six-cinq.component.html',
  styleUrls: ['./trois-six-cinq.component.scss']
})
export class TroisSixCinqComponent {
  projectsMenuItems = projectsMenuItems;
  weekItems = weekItems;
  backgroundTitle: string;
  gridColumns = 4;
  weekItemSelected: string = 'nothingSelected';

  ngOnInit () {
    console.log(this.weekItems)
  }
  changeBackgroundTitle(title: string) {
    this.backgroundTitle = title;
  }

  weekItemClickAction($event: string) {
    this.weekItemSelected = $event.toLowerCase()
    console.log(this.weekItemSelected)
  }
}