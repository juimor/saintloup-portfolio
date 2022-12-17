import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'src/app/models/menuItem.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {

  @Input() reverse: boolean = false;
  @Input() items: MenuItem[] = [];
  @Input() gap: number = 24;
  @Input() hasHover: boolean = false;
  @Output() backgroundTitleEvent = new EventEmitter<string>();

  onMouseOver(item: MenuItem) {
    this.backgroundTitleEvent.emit(item.backgroundTitle);
  }

  onMouseLeave() {
    this.backgroundTitleEvent.emit(undefined);
  }
}
