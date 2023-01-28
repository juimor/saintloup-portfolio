import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-cheiron',
  templateUrl: './cheiron.component.html',
  styleUrls: ['./cheiron.component.scss']
})
export class CheironComponent implements AfterViewInit {
  firstImgSelected: string = '/assets/pages/cheiron/9.1.jpeg';
  secondImgSelected: string = '/assets/pages/cheiron/10.1.jpeg';
  firstImgBool: boolean = false;
  secondIndex: number = 0;

  ngAfterViewInit() {
   this.findAProperName();
  }

  nextImage(image: string) {
    switch (image) {
      case 'first':
        this.firstImgBool ? this.firstImgBool = false : this.firstImgBool = true;
        console.log(this.firstImgBool)
        if (this.firstImgSelected.includes('9.1')) this.firstImgSelected = '/assets/pages/cheiron/9.2.jpeg';
        else this.firstImgSelected = '/assets/pages/cheiron/9.1.jpeg'
        break;
      case 'second':
        if (this.secondImgSelected.includes('10.1')) this.secondImgSelected = '/assets/pages/cheiron/10.2.jpeg';
        else this.secondImgSelected = '/assets/pages/cheiron/10.1.jpeg'
        break;
      default:
        break;
    }
  }

  findAProperName() {
    setTimeout(() => {
      this.nextImage('first');
      this.findAProperName();
    }, 3000);
  }
}
