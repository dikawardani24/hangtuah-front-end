import { Component, OnInit } from '@angular/core';
import { DataInstansi } from 'src/app/core/generator/hangtuah/data-hangtuah';
import { DataPoolPusat } from 'src/app/core/generator/data-pool/pusat-data-pool';
import { Pusat } from 'src/app/core/_base/crud/models/hangtuah-organization';

@Component({
  selector: 'kt-pusat',
  templateUrl: './pusat.component.html',
  styleUrls: ['./pusat.component.scss']
})
export class PusatComponent implements OnInit {
  listDataPool: DataInstansi<Pusat>[] = []

  constructor(
    private cabangDataPool: DataPoolPusat
  ) { }

  ngOnInit() {
    this.listDataPool = this.cabangDataPool.getListData()
  }
}
