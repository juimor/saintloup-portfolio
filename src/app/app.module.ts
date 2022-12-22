import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatGridListModule} from '@angular/material/grid-list';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { PersonalProjectsComponent } from './pages/personal-projects/personal-projects.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TroisSixCinqComponent } from './pages/trois-six-cinq/trois-six-cinq.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuComponent,
    ContactsComponent,
    PersonalProjectsComponent,
    NavbarComponent,
    TroisSixCinqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
