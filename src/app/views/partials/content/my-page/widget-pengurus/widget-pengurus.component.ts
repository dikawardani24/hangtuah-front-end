import { Component, Input } from '@angular/core';
import { Dirut } from 'src/app/core/_base/crud/models/data';

@Component({
  selector: 'kt-widget-pengurus',
  templateUrl: './widget-pengurus.component.html'
})
export class WidgetPengurusComponent {
  @Input()
  pengurus: Dirut

  constructor() {

  }
}
