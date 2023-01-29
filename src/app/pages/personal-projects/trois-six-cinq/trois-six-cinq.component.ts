import { Component, OnInit } from '@angular/core';
import { ImgItem } from 'src/app/models/imgItem.model';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-trois-six-cinq',
  templateUrl: './trois-six-cinq.component.html',
  styleUrls: ['./trois-six-cinq.component.scss'],
})
export class TroisSixCinqComponent implements OnInit{

  constructor(private imagesService: ImagesService) {}

  test = document.getElementById('full-image');
  backgroundImgUrl: string = '';
  gridColumns = 2;
  daySelected: string = 'nothingSelected';
  weekItemSelected: any;
  loading: boolean = false;
  
  ngOnInit() {
    
  }

  weekItemClickAction($event: string) {
    this.loading = true;
    this.daySelected = $event.toUpperCase();
    this.imagesService.listAllImages(this.daySelected).then(() => {
      this.weekItemSelected = this.imagesService.itemsUrls;
      this.loading = false;
    });
  }

  onMouseOver(item:any) {
    this.backgroundImgUrl = item;
  }

  onMouseLeave() {
    this.backgroundImgUrl = '';
  }
}
