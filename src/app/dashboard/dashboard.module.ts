import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomComponent } from './dashboard-hom/dashboard-hom.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [DashboardHomComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ScrollingModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
