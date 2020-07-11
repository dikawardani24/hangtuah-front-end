import { NgModule } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { SchoolItemComponent } from './school-item.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MatTreeModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    SchoolItemComponent
  ],
  declarations: [
    SchoolItemComponent
  ]
})
export class SchoolItemModule {

  constructor() { }
}
