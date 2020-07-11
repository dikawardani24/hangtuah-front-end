import { Component, OnInit } from '@angular/core';
import { generateData, Cabang } from 'src/app/core/_base/crud/models/data';

@Component({
  selector: 'kt-cabang',
  templateUrl: './cabang.component.html',
  styleUrls: ['./cabang.component.scss']
})
export class CabangComponent implements OnInit {
  schoolGroups: Cabang[] = []

  constructor() { }

  ngOnInit() {
    const data = generateData()
    this.schoolGroups = data.listCabang
  }
}
