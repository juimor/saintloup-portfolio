import { Component } from '@angular/core';
import Constants from 'src/app/constants/Constants';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  homepageMenuItems = Constants.homepageMenuItems;

}
