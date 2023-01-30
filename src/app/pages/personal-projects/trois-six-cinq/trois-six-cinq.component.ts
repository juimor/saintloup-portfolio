import { Component } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-trois-six-cinq',
  templateUrl: './trois-six-cinq.component.html',
  styleUrls: ['./trois-six-cinq.component.scss'],
})
export class TroisSixCinqComponent{

  constructor(public imagesService: ImagesService) {}

  backgroundImgUrl: string = '';
  daySelected: string = 'nothingSelected';
  weekItemSelecteds: any[] = [];

  ngOnInit() {
    this.imagesService.itemsUrls$.subscribe(data => {this.weekItemSelecteds = data});
  }

  weekItemClickAction($event: string) {
    this.daySelected = $event.toUpperCase();
    this.imagesService.listAllImages(this.daySelected);
  }

  onMouseOver(url:string) {
    this.backgroundImgUrl = url;
  }

  onMouseLeave() {
    this.backgroundImgUrl = '';
  }
}
