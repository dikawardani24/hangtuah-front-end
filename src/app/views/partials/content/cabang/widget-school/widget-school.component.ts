import { Component, Input } from '@angular/core';
import { SchoolType } from '../../../../../core/_base/crud/models/school-models';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { WidgetListSchollCabangComponent, DataFilter } from '../widget-list-scholl-cabang/widget-list-scholl-cabang.component';
import { DataInstansi } from 'src/app/core/generator/hangtuah/data-hangtuah';
import { Instansi } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { ColorUtil, SchoolTypeColor } from 'src/app/core/utils/color-helpers';

@Component({
  selector: 'kt-widget-school',
  templateUrl: './widget-school.component.html'
})
export class WidgetSchoolComponent {
  @Input()
  total: number
  @Input()
  schoolType: SchoolType
  @Input()
  dataInstansi: DataInstansi<Instansi>

  constructor(public dialog: MatDialog) {

  }

  getColor(type: SchoolType): SchoolTypeColor {
    return ColorUtil.getColor(type)
  }

  viewListSekolah() {
    const dataFiter: DataFilter = {
      type: this.schoolType,
      dataInstansi: this.dataInstansi
    }

    const config: MatDialogConfig = {
      disableClose: false,
      autoFocus: true,
      data: dataFiter,
      maxHeight: '90vh'
    }

    this.dialog.open(WidgetListSchollCabangComponent, config)
  }

}
