import { Component, OnInit, Input, Inject } from '@angular/core';
import { Cabang, Instansi, Pusat, Perwakilan, InstansiType } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'kt-widget-detail-cabang',
  templateUrl: './widget-detail-cabang.component.html',
  styleUrls: ['./widget-detail-cabang.component.scss']
})
export class WidgetDetailCabangComponent implements OnInit {
  title: string
  pusat: Pusat
  cabang: Cabang

  constructor(
    public dialogRef: MatDialogRef<WidgetDetailCabangComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedInstansi: Instansi
  ) {}

  close() {
    this.dialogRef.close();
  }

  isPerwakilan(): boolean {
    return this.selectedInstansi.type === InstansiType.PERWAKILAN
  }

  ngOnInit(): void {
    console.log(this.selectedInstansi);

    const type = this.selectedInstansi.type
    this.title = `Detail Data ${this.selectedInstansi.name}`

    if (type === InstansiType.CABANG) {
      this.pusat = (this.selectedInstansi as Cabang).pusat
    } else if (type === InstansiType.PERWAKILAN) {
      this.cabang = (this.selectedInstansi as Perwakilan).cabang
      this.pusat = this.cabang.pusat
    } else if(type === InstansiType.PUSAT) {
      this.pusat = this.selectedInstansi as Pusat
    }
  }

}
