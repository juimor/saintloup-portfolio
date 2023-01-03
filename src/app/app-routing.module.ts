import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { PersonalProjectsComponent } from './pages/personal-projects/personal-projects.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { TroisSixCinqComponent } from './pages/trois-six-cinq/trois-six-cinq.component';
import { RouteErrorComponent } from './pages/route-error/route-error.component';

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
    component: RouteErrorComponent,
  },
  {
    path: 'work/porsche',
    title: 'porsche',
    component: RouteErrorComponent,
  },
  {
    path: 'work/CEBE',
    title: 'CEBE',
    component: RouteErrorComponent,
  },
  {
    path: 'work/ombre-et-lumieres',
    title: 'ombre-et-lumieres',
    component: RouteErrorComponent,
  },
  {
    path: 'work/portraits',
    title: 'portraits',
    component: RouteErrorComponent,
  },
  {
    path: 'contacts',
    title: 'contacts',
    component: ContactsComponent,
  },
  {
    path: '',
    title: "page d'accueil",
    component: HomepageComponent,
  },
  { path: '**', component: RouteErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
