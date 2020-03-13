import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomComponent } from './dashboard-hom/dashboard-hom.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardHomComponent
  }
];
// Any routes defined here will be lazy loaded!
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
