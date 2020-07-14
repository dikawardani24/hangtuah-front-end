import { Component, OnInit } from '@angular/core';
import { Cabang } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataPoolCabang } from 'src/app/core/generator/data-pool/cabang-data-pool';
import { DataInstansi } from 'src/app/core/generator/hangtuah/data-hangtuah';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { WidgetDetailCabangComponent } from '../../partials/content/cabang/widget-detail-cabang/widget-detail-cabang.component';
import { TotalType } from 'src/app/core/generator/hangtuah-org-generator';
import { SchoolType } from 'src/app/core/_base/crud/models/school-models';

@Component({
  selector: 'kt-cabang',
  templateUrl: './cabang.component.html',
  styleUrls: ['./cabang.component.scss']
})
export class CabangComponent implements OnInit {
  listDataPool: DataInstansi<Cabang>[] = []
  listTotalAll: TotalType[] = []
  totalAll = 0

  constructor(
    private cabangDataPool: DataPoolCabang
  ) { }

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
    this.listDataPool = this.cabangDataPool.getListData()
    this.collectDataSummary()
  }
}
