import { Component, OnInit } from '@angular/core';
import { Cabang } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataPoolCabang } from 'src/app/core/generator/data-pool/cabang-data-pool';
import { DataInstansi } from 'src/app/core/generator/hangtuah/data-hangtuah';

@Component({
  selector: 'kt-cabang',
  templateUrl: './cabang.component.html',
  styleUrls: ['./cabang.component.scss']
})
export class CabangComponent implements OnInit {
  listDataPool: DataInstansi<Cabang>[] = []

  constructor(
    private cabangDataPool: DataPoolCabang
  ) { }

  ngOnInit() {
    this.listDataPool = this.cabangDataPool.getListData()
  }
}
