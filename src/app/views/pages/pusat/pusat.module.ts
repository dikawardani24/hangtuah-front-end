import { NgModule } from '@angular/core';
import { PartialsModule } from '../../partials/partials.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PusatComponent } from './pusat.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    FlexLayoutModule,
    RouterModule.forChild([
      {
        path: '',
        component: PusatComponent
      },
    ]),
  ],
  declarations: [
    PusatComponent
  ]
})
export class PusatPageModule {

}

