import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { ProvisionsListComponent } from './provisions-list/provisions-list.component';



@NgModule({
  declarations: [
    ProvisionsListComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [
    ProvisionsListComponent
  ]
})
export class MyProvisionsModule { }
