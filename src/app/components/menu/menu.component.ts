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
  @Output() backgroundStyleEvent = new EventEmitter<MenuItem>();
  @Output() mouseLeaveEvent = new EventEmitter<boolean>();

  onMouseOver(item: MenuItem) {
    this.backgroundStyleEvent.emit(item);
  }

  onMouseLeave() {
    this.mouseLeaveEvent.emit(true);
  }
}
