import { Component, OnInit, Inject } from '@angular/core';
import { DataInstansi } from 'src/app/core/generator/hangtuah/data-hangtuah';
import { Cabang, JabatanInstansi } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { HangtuahOrganization } from 'src/app/core/generator/hangtuah-org-generator';
import { WidgetDetailEmployeeCabangComponent } from '../widget-detail-employee-cabang/widget-detail-employee-cabang.component';
import { PersonNode } from 'src/app/core/generator/generator';

interface TotalJabatan {
  total: number
  jabatan: JabatanInstansi
  color: string
}

@Component({
  selector: 'kt-widget-structure-cabang',
  templateUrl: './widget-structure-cabang.component.html',
  styleUrls: ['./widget-structure-cabang.component.scss']
})
export class WidgetStructureCabangComponent implements OnInit {
  nodes: any = {}
  title = ''
  subTitle = ''
  totalJabatan: TotalJabatan[] = []

  cols: {[key: string]: string} = {
    firstCol: 'row',
    firstColXs: 'column',
    firstColMd: 'column',
    firstColLg: 'invalid',
    firstColGtLg: 'column',
    secondCol: 'column'
  };

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<WidgetStructureCabangComponent>,
    @Inject(MAT_DIALOG_DATA) private dataCabang: DataInstansi<Cabang>
  ) { }

  viewDataEmployee(event: PersonNode) {
    const selected = this.dataCabang.searchByNik(event.nik)

    if (selected != null) {
      const config: MatDialogConfig = {
        disableClose: false,
        autoFocus: true,
        data: selected,
        maxHeight: '90vh'
      }
      this.dialog.open(WidgetDetailEmployeeCabangComponent, config)
    }
  }

  close() {
    this.dialogRef.close()
  }

  ngOnInit(): void {
    this.nodes = new HangtuahOrganization<Cabang>(this.dataCabang).getStructure();
    const instansi = this.dataCabang.getInstansi();
    this.title = `Struktur Organisasi ${instansi.name}`
    this.subTitle = instansi.pusat.name

    this.totalJabatan.push({
      total: 1,
      jabatan: JabatanInstansi.DIRUT,
      color: 'success'
    })

    this.totalJabatan.push({
      total: 1,
      jabatan: JabatanInstansi.WA_DIRUT,
      color: 'warning'
    })

    this.totalJabatan.push({
      total: this.dataCabang.getListManager().length,
      jabatan: JabatanInstansi.MANAGER,
      color: 'danger'
    })

    this.totalJabatan.push({
      total: this.dataCabang.getListStaff().length,
      jabatan: JabatanInstansi.STAFF,
      color: 'primary'
    })
  }

}
