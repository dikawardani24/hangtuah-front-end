import { Component, Input } from '@angular/core';
import { KepalaInstansi } from 'src/app/core/_base/crud/models/hangtuah-organization';

@Component({
  selector: 'kt-widget-pengurus',
  templateUrl: './widget-pengurus.component.html'
})
export class WidgetPengurusComponent {
  @Input()
  kepalaInstansi: KepalaInstansi

  constructor() {

  }
}
