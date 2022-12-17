import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PersonalProjectsComponent } from './pages/personal-projects/personal-projects.component';

const routes: Routes = [ 
  { 
    path: '', 
    component: HomepageComponent 
  }, {
    path: 'PersonalProjects',
    component: PersonalProjectsComponent
  }, {
    path: 'Contacts',
    component: ContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
