import { Component } from '@angular/core';
import { navbar365Items } from 'src/app/constants/Constants';

@Component({
  selector: 'app-trois-six-cinq',
  templateUrl: './trois-six-cinq.component.html',
  styleUrls: ['./trois-six-cinq.component.scss'],
})
export class TroisSixCinqComponent {
  constructor() {}

  navbar365Items = navbar365Items;
  backgroundTitle: string;
  gridColumns = 2;
  daySelected: string = 'nothingSelected';
  weekItemSelected: any;

  ngOnInit() {
    console.log(this.navbar365Items);
  }
  changeBackgroundTitle(title: string) {
    this.backgroundTitle = title;
  }

  weekItemClickAction($event: string) {
    this.daySelected = $event.toLowerCase();
    this.weekItemSelected = navbar365Items.find(
      (item) => item.label === this.daySelected.toUpperCase()
    );
  }
}
