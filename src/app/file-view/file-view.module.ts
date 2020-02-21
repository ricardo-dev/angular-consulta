import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileViewRoutingModule } from './file-view-routing.module';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [ FormComponent ],
  imports: [
    CommonModule,
    FileViewRoutingModule
  ]
})
export class FileViewModule { }
