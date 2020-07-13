import { Component, OnInit, Input } from '@angular/core';
import { SchoolType, JabatanSekolah } from 'src/app/core/_base/crud/models/school-organization';
import { SchoolTypeColor, ColorUtil } from 'src/app/core/utils/color-helpers';
import { TotalType } from 'src/app/core/generator/hangtuah-org-generator';

@Component({
  selector: 'kt-widget-item-total-karyawan',
  templateUrl: './widget-item-total-karyawan.component.html',
  styleUrls: ['./widget-item-total-karyawan.component.scss']
})
export class WidgetItemTotalKaryawanComponent implements OnInit {
  @Input()
  item: TotalType

  constructor() { }

  ngOnInit(): void {
  }

}
