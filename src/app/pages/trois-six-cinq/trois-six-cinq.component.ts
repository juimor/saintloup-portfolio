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

  test = document.getElementById('full-image');
  navbar365Items = navbar365Items;
  backgroundImgUrl: string = '';
  Style: string;
  gridColumns = 2;
  daySelected: string = 'nothingSelected';
  weekItemSelected: any;

  ngOnInit() {
    console.log(this.navbar365Items);
  }

  displayImg(url: string) {
    this.backgroundImgUrl = '../../../assets/' + url;
  }

  weekItemClickAction($event: string) {
    this.daySelected = $event.toLowerCase();
    this.weekItemSelected = navbar365Items.find(
      (item) => item.label === this.daySelected.toUpperCase()
    );
  }

  onMouseOver(item: ImgItem) {
    this.displayImg(item.url);
  }

  onMouseLeave() {
    this.backgroundImgUrl = '';
  }
}
