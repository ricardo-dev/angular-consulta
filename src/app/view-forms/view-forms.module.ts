import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewFormsRoutingModule } from './view-forms-routing.module';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ViewFormsRoutingModule
  ]
})
export class ViewFormsModule { }
