import { Component, Input } from '@angular/core';
import { Instansi, Perwakilan, InstansiType, Cabang } from 'src/app/core/_base/crud/models/hangtuah-organization';
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

    console.log(instansi);
    console.log(instansi.constructor.toString());

    if (instansi.type === InstansiType.PERWAKILAN) {
      this.title = (instansi as Perwakilan).cabang.name
    } else if(instansi.type === InstansiType.CABANG) {
      this.title = (instansi as Cabang).pusat.name
    } else {
      this.title = ''
    }
  }
}
