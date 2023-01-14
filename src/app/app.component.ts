import { Component } from '@angular/core';
import { firebaseApp } from './services/firebase.service';
import { FooterService } from './services/footer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public footerService : FooterService){}
}
