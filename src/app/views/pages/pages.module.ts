// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { UserManagementModule } from './user-management/user-management.module';
import { SchoolListPageModule } from './school-list/school-list.module';
import { PusatPageModule } from './pusat/pusat.module';
import { PerwakilanPageModule } from './perwakilan/perwakilan.module';
import { CabangModule } from './cabang/cabang.module';

@NgModule({
  exports: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    PartialsModule,
    UserManagementModule,
    CabangModule,
    PusatPageModule,
    PerwakilanPageModule,
    SchoolListPageModule,
  ],
  providers: []
})
export class PagesModule {
}
