import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewFormsModule } from './view-forms.module';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {
    path:'',
    component: FormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewFormsRoutingModule { }
