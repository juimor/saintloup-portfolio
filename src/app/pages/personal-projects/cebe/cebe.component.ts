import { Component} from '@angular/core';

@Component({
  selector: 'app-cebe',
  templateUrl: './cebe.component.html',
  styleUrls: ['./cebe.component.scss']
})
export class CebeComponent {

  credit1: boolean = false;
  credit2: boolean = false;
  credit3: boolean = false;

  reveal(credit: number) {
    switch(credit) { 
      case 1: { 
        this.credit1 = true
        break; 
      } 
      case 2: { 
        this.credit2 = true
        break; 
      }
      case 3: { 
        this.credit3 = true
        break; 
     } 
      default: { 
         break; 
      } 
    }
  }
  hide(credit: number) {
    switch(credit) { 
      case 1: { 
        this.credit1 = false
        break; 
      } 
      case 2: { 
        this.credit2 = false
        break; 
      }
      case 3: { 
        this.credit3 = false
        break; 
     } 
      default: { 
         break; 
      } 
    }
  }
}