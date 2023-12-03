import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { ProvisionsListComponent } from './provisions-list/provisions-list.component';

@NgModule({
  declarations: [ProvisionsListComponent],
  imports: [CommonModule, MatListModule, MatButtonModule, MatCardModule, MatIconModule],
  exports: [ProvisionsListComponent],
})
export class MyProvisionsModule {}
