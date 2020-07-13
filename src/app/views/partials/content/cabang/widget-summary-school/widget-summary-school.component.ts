import { Component, OnInit, Input } from '@angular/core';
import { SchoolType } from 'src/app/core/_base/crud/models/school-organization';
import { SchoolTypeColor, ColorUtil } from 'src/app/core/utils/color-helpers';
import { TotalType } from 'src/app/core/generator/hangtuah-org-generator';

@Component({
  selector: 'kt-widget-summary-school',
  templateUrl: './widget-summary-school.component.html',
  styleUrls: ['./widget-summary-school.component.scss']
})
export class WidgetSummarySchoolComponent implements OnInit {
  @Input()
  item: TotalType

  constructor() { }

  getColor(type: SchoolType): SchoolTypeColor {
    return ColorUtil.getColor(type)
  }

  ngOnInit(): void {
  }

}
