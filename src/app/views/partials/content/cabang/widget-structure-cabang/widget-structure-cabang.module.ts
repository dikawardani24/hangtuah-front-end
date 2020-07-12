import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WidgetStructureCabangComponent } from './widget-structure-cabang.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { OrgChartModule } from '@mondal/org-chart';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MatTreeModule,
    MatIconModule,
    MatCardModule,
    NgxOrgChartModule,
    OrgChartModule
  ],
  exports: [
    WidgetStructureCabangComponent
  ],
  declarations: [
    WidgetStructureCabangComponent
  ]
})
export class WidgetStructureCabangModule {

  constructor() { }
}
