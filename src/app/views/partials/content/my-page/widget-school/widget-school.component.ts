import { Component, Input } from '@angular/core';
import { SchoolType } from 'src/app/core/_base/crud/models/school-organization';

@Component({
  selector: 'kt-widget-school',
  templateUrl: './widget-school.component.html'
})
export class WidgetSchoolComponent {
  @Input()
  total: number
  @Input()
  schoolType: SchoolType

  constructor() {

  }
}
