import { Component } from '@angular/core';
import { homepageMenuItems } from 'src/app/constants/Constants';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor(public footerService : FooterService){}

  homepageMenuItems = homepageMenuItems;

}
