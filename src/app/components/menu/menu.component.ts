import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/models/menuItem.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  @Input() reverse: boolean = false;
  @Input() items: MenuItem[] = [];
  @Input() gap: number = 24;
  @Input() hasHover: boolean = false;

  

  OnInit() {

  }
}
