import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvisionsListComponent } from './provisions-list/provisions-list.component';



@NgModule({
  declarations: [
    ProvisionsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProvisionsListComponent
  ]
})
export class MyProvisionsModule { }
