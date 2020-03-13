import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  }, 
  {
    path: 'input-output',
    component: ParentCompComponent
  },
  {//lazy loading
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// loadChildren
// forRoot

// The loadChildren parameter is how we tell Angular to lazy load that section.
//  Remember that we don't have to load the DashboardModule into the main AppModule.