import { Component, Input } from '@angular/core';
import { InstansiPengelola, Perwakilan } from 'src/app/core/_base/crud/models/data';

@Component({
  selector: 'kt-widget-cabang',
  templateUrl: './widget-cabang.component.html'
})
export class WidgetCabangComponent {
  @Input()
  schoolGroup: InstansiPengelola
  cabang: string

  constructor() {

  }

  ngOnInit(): void {
    if (this.schoolGroup instanceof Perwakilan) {
      this.cabang = this.schoolGroup.instansiCabang.name
    } else {
      this.cabang = ''
    }
  }
}
