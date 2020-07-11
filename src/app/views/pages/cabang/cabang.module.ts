import { NgModule } from '@angular/core';
import { PartialsModule } from '../../partials/partials.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CabangComponent } from './cabang.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    FlexLayoutModule,
    RouterModule.forChild([
      {
        path: '',
        component: CabangComponent
      },
    ]),
  ],
  declarations: [
    CabangComponent
  ]
})
export class CabangModule {

}
