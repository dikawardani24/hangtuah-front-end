import { Component, OnInit } from '@angular/core';
import { DataInstansi } from 'src/app/core/generator/hangtuah/data-hangtuah';
import { Perwakilan } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataPoolPerwakilan } from 'src/app/core/generator/data-pool/perwakilan-data-pool';
import { TotalType } from 'src/app/core/generator/hangtuah-org-generator';
import { SchoolType } from 'src/app/core/_base/crud/models/school-organization';
import { ColorUtil, SchoolTypeColor } from '../../../core/utils/color-helpers';

@Component({
  selector: 'kt-perwakilan',
  templateUrl: './perwakilan.component.html',
  styleUrls: ['./perwakilan.component.scss']
})
export class PerwakilanComponent implements OnInit {
  listDataPool: DataInstansi<Perwakilan>[] = []
  listTotalAll: TotalType[] = []
  totalAll = 0

  constructor(
    private perwakilanDataPool: DataPoolPerwakilan
  ) { }

  getColor(type: SchoolType): SchoolTypeColor {
    return ColorUtil.getColor(type)
  }

  private collectDataSummary() {
    let totalTk = 0
    let totalPaud = 0
    let totalSD = 0
    let totalSMP = 0
    let totalSMA = 0
    let totalSMK = 0

    this.listDataPool.forEach(e => {
      e.getTotalTypes().forEach(t => {
        this.totalAll += t.total

        if (t.type === SchoolType.PAUD) {
          totalPaud += t.total
        }

        if (t.type === SchoolType.TK) {
          totalTk += t.total
        }

        if (t.type === SchoolType.SD) {
          totalSD += t.total
        }

        if (t.type === SchoolType.SMP) {
          totalSMP += t.total
        }

        if (t.type === SchoolType.SMA) {
          totalSMA += t.total
        }

        if (t.type === SchoolType.SMK) {
          totalSMK += t.total
        }
      })
    })

    this.listTotalAll.push({
      total: totalPaud, type: SchoolType.PAUD
    })
    this.listTotalAll.push({
      total: totalTk, type: SchoolType.TK
    })
    this.listTotalAll.push({
      total: totalSD, type: SchoolType.SD
    })
    this.listTotalAll.push({
      total: totalSMP, type: SchoolType.SMP
    })
    this.listTotalAll.push({
      total: totalSMA, type: SchoolType.SMA
    })
    this.listTotalAll.push({
      total: totalSMK, type: SchoolType.SMK
    })
  }

  ngOnInit() {
    this.listDataPool = this.perwakilanDataPool.getListData()
    this.collectDataSummary()
  }
}
