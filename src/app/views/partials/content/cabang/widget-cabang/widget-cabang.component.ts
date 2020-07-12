import { Component, Input } from '@angular/core';
import { Instansi, Perwakilan, InstansiType, Cabang } from '../../../../../core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../../../../../core/generator/hangtuah/data-hangtuah';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { WidgetDetailCabangComponent } from '../widget-detail-cabang/widget-detail-cabang.component';

@Component({
  selector: 'kt-widget-cabang',
  templateUrl: './widget-cabang.component.html'
})
export class WidgetCabangComponent {
  @Input()
  data: DataInstansi<Instansi>
  title: string

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
    const instansi = this.data.getInstansi()

    if (instansi.type === InstansiType.PERWAKILAN) {
      this.title = (instansi as Perwakilan).cabang.name
    } else if(instansi.type === InstansiType.CABANG) {
      this.title = (instansi as Cabang).pusat.name
    } else {
      this.title = ''
    }
  }

  viewDetailCabang() {
    const config: MatDialogConfig = {
      disableClose: false,
      autoFocus: true,
      data: this.data.getInstansi() as Cabang,
      maxHeight: '90vh'
    }

    this.dialog.open(WidgetDetailCabangComponent, config)
  }
}
