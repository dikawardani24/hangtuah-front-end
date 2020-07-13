import { Component, OnInit } from '@angular/core';
import { DataInstansi } from 'src/app/core/generator/hangtuah/data-hangtuah';
import { DataPoolPusat } from 'src/app/core/generator/data-pool/pusat-data-pool';
import { Pusat } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { TotalType } from 'src/app/core/generator/hangtuah-org-generator';
import { SchoolType } from 'src/app/core/_base/crud/models/school-organization';
import { SchoolData } from 'src/app/core/generator/school-org-generator';

@Component({
  selector: 'kt-pusat',
  templateUrl: './pusat.component.html',
  styleUrls: ['./pusat.component.scss']
})
export class PusatComponent implements OnInit {
  listDataPool: DataInstansi<Pusat>[] = []
  listSchools: SchoolData[] = []
  listTotalAll: TotalType[] = []
  totalAll = 0

  constructor(
    private pusatDataPool: DataPoolPusat
  ) { }

  private collectDataSummary() {
    let totalTk = 0
    let totalPaud = 0
    let totalSD = 0
    let totalSMP = 0
    let totalSMA = 0
    let totalSMK = 0

    this.listDataPool.forEach(e => {
      this.listSchools.push(...e.getListSchoolData())

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
    this.listDataPool = this.pusatDataPool.getListData()
    this.collectDataSummary()
  }
}
