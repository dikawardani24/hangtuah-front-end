import { NgModule } from '@angular/core';
import { PartialsModule } from '../../partials/partials.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SchoolListComponent } from './school-list.component';
import { SchoolItemModule } from '../../partials/content/schooll-list/school-item/school-item.module';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    SchoolItemModule,
    FlexLayoutModule,
    MatTreeModule,
    RouterModule.forChild([
      {
        path: '',
        component: SchoolListComponent
      },
    ]),
  ],
  declarations: [
    SchoolListComponent
  ]
})
export class SchoolListPageModule {

}
