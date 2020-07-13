import { Component, OnInit, Input } from '@angular/core';
import { TotalType } from 'src/app/core/generator/hangtuah-org-generator';

@Component({
  selector: 'kt-widget-summary-instansi-school',
  templateUrl: './widget-summary-instansi-school.component.html',
  styleUrls: ['./widget-summary-instansi-school.component.scss']
})
export class WidgetSummaryInstansiSchoolComponent implements OnInit {
  @Input()
  listTotalAll: TotalType[] = []
  @Input()
  totalAll = 0
  @Input()
  title = ''
  @Input()
  totalInstansi = 0

  constructor() { }

  ngOnInit(): void {
  }

}
