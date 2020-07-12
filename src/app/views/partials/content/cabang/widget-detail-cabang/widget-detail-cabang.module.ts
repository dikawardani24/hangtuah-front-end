import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WidgetDetailCabangComponent } from './widget-detail-cabang.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    WidgetDetailCabangComponent
  ],
  declarations: [
    WidgetDetailCabangComponent
  ]
})
export class WidgetDetailCabangModule {

  constructor() { }
}
