import { Component } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-trois-six-cinq',
  templateUrl: './trois-six-cinq.component.html',
  styleUrls: ['./trois-six-cinq.component.scss'],
})
export class TroisSixCinqComponent{

  constructor(public imagesService: ImagesService) {}

  test = document.getElementById('full-image');
  backgroundImgUrl: string = '';
  gridColumns = 2;
  daySelected: string = 'nothingSelected';
  weekItemSelected: any;


  weekItemClickAction($event: string) {
    this.daySelected = $event.toUpperCase();
    this.imagesService.listAllImages(this.daySelected).then(() => {
      this.weekItemSelected = this.imagesService.itemsUrls;
    });
  }

  onMouseOver(item:any) {
    this.backgroundImgUrl = item;
  }

  onMouseLeave() {
    this.backgroundImgUrl = '';
  }
}
