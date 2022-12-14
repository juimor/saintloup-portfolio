import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [ 
  { 
    path: '', 
    component: HomepageComponent 
  }, {
    path: 'PersonalProjects',
    component: MenuComponent
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
