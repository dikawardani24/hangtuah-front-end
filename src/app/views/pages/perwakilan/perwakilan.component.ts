import { Component, OnInit } from '@angular/core';
import { Perwakilan, generateData } from 'src/app/core/_base/crud/models/data';

@Component({
  selector: 'kt-perwakilan',
  templateUrl: './perwakilan.component.html',
  styleUrls: ['./perwakilan.component.scss']
})
export class PerwakilanComponent implements OnInit {

  schoolGroups: Perwakilan[] = []

  constructor() { }

  ngOnInit() {
    const data = generateData()
    this.schoolGroups = data.listPerwakilan
  }
}
