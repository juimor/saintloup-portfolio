import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portraits',
  templateUrl: './portraits.component.html',
  styleUrls: ['./portraits.component.scss']
})
export class PortraitsComponent implements OnInit {
  carouselItems: string[]= [];
  imageSelected: string = '';
  index: number = 0;
  imageCounter: number = 7;

  ngOnInit() {
    this.initCarouselItems();
  }

  initCarouselItems() {
    for (let i = 1; i <= this.imageCounter; i++) {
      this.carouselItems.push('/assets/pages/portraits/'+i+'.jpeg');      
    }
    this.imageSelected = this.carouselItems[this.index];
  }

  nextImage(next: boolean) {
    if(next) {
      if (this.index === this.imageCounter) {
        this.index = 0;
        this.imageSelected = this.carouselItems[this.index];
      }
      if (this.index < this.imageCounter) this.imageSelected = this.carouselItems[this.index++];
    } else {
      if (this.index === 0) {
        console.log('=== 0')
        console.log(this.index)
        this.imageSelected = this.carouselItems[this.imageCounter-1];
        this.index = this.imageCounter-1;
      } 
      if (this.index > 0) {
        console.log('> 0')
        console.log(this.index)
        this.imageSelected = this.carouselItems[this.index--];
      }
    }
  }
}
