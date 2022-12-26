import { Component, EventEmitter, Output } from '@angular/core';
import { navbar365Items } from 'src/app/constants/Constants';
import { ImgItem } from 'src/app/models/imgItem.model';

@Component({
  selector: 'app-trois-six-cinq',
  templateUrl: './trois-six-cinq.component.html',
  styleUrls: ['./trois-six-cinq.component.scss'],
})
export class TroisSixCinqComponent {
  constructor() {}

  navbar365Items = navbar365Items;
  backgroundImgUrl: string;
  Style: string;
  gridColumns = 2;
  daySelected: string = 'nothingSelected';
  weekItemSelected: any;

  ngOnInit() {
    console.log(this.navbar365Items);
  }

  setBackgroundStyle(url: string) {
    this.backgroundImgUrl = url;
    if (this.backgroundImgUrl != undefined || this.Style === '') {
      this.Style =
        'background: url(../../../assets/' +
        this.backgroundImgUrl +
        ' ); background-repeat: no-repeat; background-position: center; background-size: 30%; ';
    }
    console.log(this.Style);
  }

  weekItemClickAction($event: string) {
    this.daySelected = $event.toLowerCase();
    this.weekItemSelected = navbar365Items.find(
      (item) => item.label === this.daySelected.toUpperCase()
    );
  }

  onMouseOver(item: ImgItem) {
    this.setBackgroundStyle(item.url);
  }

  onMouseLeave() {
    this.Style = '';
  }
}
