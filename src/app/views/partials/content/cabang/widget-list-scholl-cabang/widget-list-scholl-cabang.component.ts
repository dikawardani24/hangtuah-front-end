import { Component, OnInit, Inject } from '@angular/core';
import { Instansi } from '../../../../../core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../../../../../core/generator/hangtuah/data-hangtuah';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SchoolType, Sekolah } from 'src/app/core/_base/crud/models/school-organization';
import { SchoolData } from 'src/app/core/generator/school-org-generator';

export interface DataFilter {
  type: SchoolType,
  dataInstansi: DataInstansi<Instansi>
}

@Component({
  selector: 'kt-widget-list-scholl-cabang',
  templateUrl: './widget-list-scholl-cabang.component.html',
  styleUrls: ['./widget-list-scholl-cabang.component.scss']
})
export class WidgetListSchollCabangComponent implements OnInit {
  listSekolah: SchoolData[] = []

  constructor(
    @Inject(MAT_DIALOG_DATA) public datafilter: DataFilter,
     private dialogRef: MatDialogRef<WidgetListSchollCabangComponent>,
  ) { }

  close() {
    this.dialogRef.close()
  }

  viewDetailSekolah(selected: SchoolData) {
    console.log(selected);
  }

  ngOnInit(): void {
    this.datafilter.dataInstansi.getListSchoolData().forEach(data => {
      if (data.getSekolah().type === this.datafilter.type) {
        this.listSekolah.push(data)
      }
    })

  }

}
