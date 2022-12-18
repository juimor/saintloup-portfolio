import { Component } from '@angular/core';
import { navbarItems } from 'src/app/constants/Constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  items = navbarItems;
}
