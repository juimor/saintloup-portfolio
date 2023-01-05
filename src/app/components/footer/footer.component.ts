import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Output() hideFooter = new EventEmitter<boolean>();
  footerEvent: boolean;

  hideFooterFcn() {
    this.hideFooter.emit(true);
  }
}
