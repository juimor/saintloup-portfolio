import { Component, EventEmitter, Output } from '@angular/core';
import { navbarItems } from 'src/app/constants/Constants';
import { MenuItem } from 'src/app/models/menuItem.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  items = navbarItems;

  @Output() weekItemClickEvent = new EventEmitter<string>();

  onMouseOver(item: MenuItem) {
    this.weekItemClickEvent.emit(item.label);
  }
}
