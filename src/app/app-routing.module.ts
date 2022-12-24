import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { PersonalProjectsComponent } from './pages/personal-projects/personal-projects.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { TroisSixCinqComponent } from './pages/trois-six-cinq/trois-six-cinq.component';
import { RouteErrorComponent } from './pages/route-error/route-error.component';

const routes: Routes = [
  {
    path: 'Work',
    component: PersonalProjectsComponent,
  },
  {
    path: 'Contacts',
    component: ContactsComponent,
  },
  {
    path: '365',
    component: TroisSixCinqComponent,
  },
  {
    path: '',
    component: HomepageComponent,
  },
  { path: '**', component: RouteErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
