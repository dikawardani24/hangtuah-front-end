import { NgModule } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { DialogDetailComponent } from './dialog-detail.component';
import { NgbootstrapModule } from 'src/app/views/pages/ngbootstrap/ngbootstrap.module';

@NgModule({
  imports: [
    NgbootstrapModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    DialogDetailComponent
  ],
  declarations: [
    DialogDetailComponent
  ]
})
export class DialogDetailModule {

  constructor() { }
}
