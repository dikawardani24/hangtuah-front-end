import { Component, OnInit, Input } from '@angular/core';
import { TotalType } from 'src/app/core/generator/hangtuah-org-generator';

@Component({
  selector: 'kt-widget-summary-school-dash',
  templateUrl: './widget-summary-school-dash.component.html',
})
export class WidgetSummarySchoolDashComponent implements OnInit {
  @Input()
  listTotalAll: TotalType[] = []
  @Input()
  totalAll = 0
  @Input()
  totalPusat = 0
  @Input()
  totalCabang = 0
  @Input()
  totalPerwakilan = 0

  constructor() { }

  ngOnInit(): void {
  }

}
