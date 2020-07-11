import { Component, OnInit } from '@angular/core';
import { Instansi } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from 'src/app/core/generator/hangtuah/data-hangtuah';

@Component({
  selector: 'kt-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  dataInstansi: DataInstansi<Instansi>

  constructor() { }

  ngOnInit(): void {
  }

}
