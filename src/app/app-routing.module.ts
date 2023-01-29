import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { CebeComponent } from './pages/personal-projects/cebe/cebe.component';
import { CheironComponent } from './pages/personal-projects/cheiron/cheiron.component';
import { OmbresEtLumieresComponent } from './pages/personal-projects/ombres-et-lumieres/ombres-et-lumieres.component';
import { PersonalProjectsComponent } from './pages/personal-projects/personal-projects.component';
import { PortraitsComponent } from './pages/personal-projects/portraits/portraits.component';
import { SamediComponent } from './pages/personal-projects/samedi/samedi.component';
import { TroisSixCinqComponent } from './pages/personal-projects/trois-six-cinq/trois-six-cinq.component';

const routes: Routes = [
  {
    path: 'work',
    title: 'Work',
    component: PersonalProjectsComponent,
  },
  {
    path: 'work/365',
    title: '365',
    component: TroisSixCinqComponent,
  },
  {
    path: 'work/samedi',
    title: 'Samedi',
    component: SamediComponent,
  },
  {
    path: 'work/cheiron',
    title: 'Cheiron',
    component: CheironComponent,
  },
  {
    path: 'work/CEBE',
    title: 'CEBE',
    component: CebeComponent,
  },
  {
    path: 'work/ombres-et-lumieres',
    title: 'الظلال والأضواء',
    component: OmbresEtLumieresComponent,
  },
  {
    path: 'work/portraits',
    title: 'Portraits',
    component: PortraitsComponent,
  },
  {
    path: '',
    title: 'Ambiance - Work',
    component: HomepageComponent,
  },
  { path: '**', component: PersonalProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
