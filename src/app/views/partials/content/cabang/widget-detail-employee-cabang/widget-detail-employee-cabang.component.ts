import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pengurus } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { Location } from 'src/app/core/_base/crud/models/location';
import { Karyawan } from 'src/app/core/_base/crud/models/school-models';

export interface Employee {
  nik: string
  name: string
  phoneNumber: string
  instansi: string
  location: Location
  jabatan: string
}

@Component({
  selector: 'kt-widget-detail-employee-cabang',
  templateUrl: './widget-detail-employee-cabang.component.html',
  styleUrls: ['./widget-detail-employee-cabang.component.scss']
})
export class WidgetDetailEmployeeCabangComponent implements OnInit {
  pengurus: Employee

  constructor(
    public dialogRef: MatDialogRef<WidgetDetailEmployeeCabangComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  close() {
    this.dialogRef.close()
  }

  ngOnInit(): void {
    if ((this.data as Pengurus).instansi !== undefined) {
      this.pengurus = {
        nik: this.data.nik,
        name: this.data.name,
        instansi: this.data.instansi.name,
        jabatan: this.data.jabatan,
        location: this.data.location,
        phoneNumber: this.data.phoneNumber
      }
    } else if ((this.data as Karyawan).sekolah !== undefined) {
      this.pengurus = {
        nik: this.data.nik,
        name: this.data.name,
        instansi: this.data.sekolah.name,
        jabatan: this.data.jabatan,
        location: this.data.location,
        phoneNumber: this.data.phoneNumber
      }
    }
  }

}
