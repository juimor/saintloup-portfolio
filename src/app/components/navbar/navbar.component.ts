import { Component, EventEmitter, Output } from '@angular/core';
import { navbar365Items } from 'src/app/constants/Constants';
import { MenuItem } from 'src/app/models/menuItem.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  items = navbar365Items;

  @Output() weekItemClickEvent = new EventEmitter<string>();

  onMouseOver(item: MenuItem) {
    this.weekItemClickEvent.emit(item.label);
  }
}
