import { NgModule } from '@angular/core';
import { PartialsModule } from '../../partials/partials.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerwakilanComponent } from './perwakilan.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    FlexLayoutModule,
    RouterModule.forChild([
      {
        path: '',
        component: PerwakilanComponent
      },
    ]),
  ],
  declarations: [
    PerwakilanComponent
  ]
})
export class PerwakilanPageModule {

}
