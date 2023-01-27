import { Component, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { navbar365Items } from 'src/app/constants/Constants';
import { ImgItem } from 'src/app/models/imgItem.model';

@Component({
  selector: 'app-trois-six-cinq',
  templateUrl: './trois-six-cinq.component.html',
  styleUrls: ['./trois-six-cinq.component.scss'],
})
export class TroisSixCinqComponent {
  //@ViewChild('imgOverview') imgOverview: ElementRef;

  constructor() {}

  // winWidth = window.innerWidth;
  // winHeight = window.innerHeight;

  test = document.getElementById('full-image');
  navbar365Items = navbar365Items;
  backgroundImgUrl: string = '';
  Style: string;
  gridColumns = 2;
  daySelected: string = 'nothingSelected';
  weekItemSelected: any;

  ngOnInit() {
  }

  displayImg(url: string) {
    this.backgroundImgUrl = '/assets/' + url;
  }

  weekItemClickAction($event: string) {
    this.daySelected = $event.toLowerCase();
    this.weekItemSelected = navbar365Items.find(
      (item) => item.label === this.daySelected.toUpperCase()
    );
  }

  // setRandomPosition(){
  //   let randomTop = this.getRandomNumber(0, this.winHeight);
  //   let randomLeft = this.getRandomNumber(0, this.winWidth);
    
  //   this.imgOverview.nativeElement.style.top = randomTop +"px";
  //   this.imgOverview.nativeElement.style.left = randomLeft +"px";
    
  //   console.log(this.imgOverview)
  // }

  // getRandomNumber(min: number, max: number) {
  //   return Math.random() * (max - min) + min;
  // }

  onMouseOver(item: ImgItem) {
    this.displayImg(item.url);
    //this.setRandomPosition();
  }

  onMouseLeave() {
    this.backgroundImgUrl = '';
  }
}
