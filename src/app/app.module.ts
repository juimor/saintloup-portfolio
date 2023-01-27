import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { MenuComponent } from './components/menu/menu.component';
import { PersonalProjectsComponent } from './pages/personal-projects/personal-projects.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TroisSixCinqComponent } from './pages/trois-six-cinq/trois-six-cinq.component';
import { SamediComponent } from './pages/personal-projects/samedi/samedi.component';
import { CheironComponent } from './pages/personal-projects/cheiron/cheiron.component';
import { CebeComponent } from './pages/personal-projects/cebe/cebe.component';
import { OmbresEtLumieresComponent } from './pages/personal-projects/ombres-et-lumieres/ombres-et-lumieres.component';
import { PortraitsComponent } from './pages/personal-projects/portraits/portraits.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuComponent,
    PersonalProjectsComponent,
    NavbarComponent,
    TroisSixCinqComponent,
    SamediComponent,
    CheironComponent,
    CebeComponent,
    OmbresEtLumieresComponent,
    PortraitsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatGridListModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
