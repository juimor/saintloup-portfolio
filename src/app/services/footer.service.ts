import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor() { }

  isFooterHide: boolean = true;

  setFooterVisibility() {
    this.isFooterHide = !this.isFooterHide;
  }

  hideFooter(isFooterHide: boolean) {
    this.isFooterHide = isFooterHide;
  }

}
