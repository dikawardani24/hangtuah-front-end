import { Component, Input } from '@angular/core';
import { KepalaInstansi, Instansi, Cabang } from '../../../../../core/_base/crud/models/hangtuah-organization';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { DataInstansi } from 'src/app/core/generator/hangtuah/data-hangtuah';
import { WidgetStructureCabangComponent } from '../widget-structure-cabang/widget-structure-cabang.component';
import { WidgetDetailEmployeeCabangComponent } from '../widget-detail-employee-cabang/widget-detail-employee-cabang.component';

@Component({
  selector: 'kt-widget-pengurus',
  templateUrl: './widget-pengurus.component.html'
})
export class WidgetPengurusComponent {
  @Input()
  kepalaInstansi: KepalaInstansi
  @Input()
  data: DataInstansi<Instansi>

  constructor(private dialog: MatDialog) {

  }

  viewDetail() {
    const config: MatDialogConfig = {
      disableClose: false,
      autoFocus: true,
      data: this.kepalaInstansi,
      maxHeight: '90vh'
    }
    this.dialog.open(WidgetDetailEmployeeCabangComponent, config)
  }

  viewStructureOrganization() {
    const config: MatDialogConfig = {
      disableClose: false,
      autoFocus: true,
      data: this.data,
      maxHeight: '90vh'
    }

    this.dialog.open(WidgetStructureCabangComponent, config)
  }
}
