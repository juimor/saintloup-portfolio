import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PersonalProjectsComponent } from './pages/personal-projects/personal-projects.component';
import { TroisSixCinqComponent } from './pages/trois-six-cinq/trois-six-cinq.component';

const routes: Routes = [ 
  { 
    path: '', 
    component: HomepageComponent 
  }, {
    path: 'Work',
    component: PersonalProjectsComponent
  }, {
    path: 'Contacts',
    component: ContactsComponent
  }, {
    path: '365',
    component: TroisSixCinqComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
