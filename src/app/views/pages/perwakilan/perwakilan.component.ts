import { Component, OnInit } from '@angular/core';
import { DataInstansi } from 'src/app/core/generator/hangtuah/data-hangtuah';
import { Perwakilan } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataPoolPerwakilan } from 'src/app/core/generator/data-pool/perwakilan-data-pool';

@Component({
  selector: 'kt-perwakilan',
  templateUrl: './perwakilan.component.html',
  styleUrls: ['./perwakilan.component.scss']
})
export class PerwakilanComponent implements OnInit {
  listDataPool: DataInstansi<Perwakilan>[] = []

  constructor(
    private perwakilanDataPool: DataPoolPerwakilan
  ) { }

  ngOnInit() {
    this.listDataPool = this.perwakilanDataPool.getListData()
  }
}
