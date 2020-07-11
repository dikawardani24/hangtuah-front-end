import { Component, Input } from '@angular/core';
import { Instansi, Perwakilan } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from 'src/app/core/generator/hangtuah/data-hangtuah';

@Component({
  selector: 'kt-widget-cabang',
  templateUrl: './widget-cabang.component.html'
})
export class WidgetCabangComponent {
  @Input()
  data: DataInstansi<Instansi>
  title: string

  constructor() {

  }

  ngOnInit(): void {
    const instansi = this.data.getInstansi()

    if (instansi instanceof Perwakilan) {
      this.title = instansi.name
    } else {
      this.title = ''
    }
  }
}
