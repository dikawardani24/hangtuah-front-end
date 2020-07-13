import { NgModule } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { DialogDetailComponent } from './dialog-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
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
