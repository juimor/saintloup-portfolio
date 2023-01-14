import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { PersonalProjectsComponent } from './pages/personal-projects/personal-projects.component';
import { TroisSixCinqComponent } from './pages/trois-six-cinq/trois-six-cinq.component';

const routes: Routes = [
  {
    path: 'work',
    title: 'work',
    component: PersonalProjectsComponent,
  },
  {
    path: 'work/365',
    title: '365',
    component: TroisSixCinqComponent,
  },
  {
    path: 'work/samedi',
    title: 'samedi',
    component: PersonalProjectsComponent,
  },
  {
    path: 'work/porsche',
    title: 'porsche',
    component: PersonalProjectsComponent,
  },
  {
    path: 'work/CEBE',
    title: 'CEBE',
    component: PersonalProjectsComponent,
  },
  {
    path: 'work/ombre-et-lumieres',
    title: 'ombre-et-lumieres',
    component: PersonalProjectsComponent,
  },
  {
    path: 'work/portraits',
    title: 'portraits',
    component: PersonalProjectsComponent,
  },
  {
    path: '',
    title: 'by 4mbianss',
    component: HomepageComponent,
  },
  { path: '**', component: PersonalProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
