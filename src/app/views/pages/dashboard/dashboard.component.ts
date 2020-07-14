// Angular
import { Component, OnInit } from '@angular/core';
import { DataInstansi } from 'src/app/core/generator/hangtuah/data-hangtuah';
import { Perwakilan, Cabang, Pusat, Instansi, InstansiType } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { TotalType } from 'src/app/core/generator/hangtuah-org-generator';
import { DataPoolCabang } from 'src/app/core/generator/data-pool/cabang-data-pool';
import { DataPoolPerwakilan } from 'src/app/core/generator/data-pool/perwakilan-data-pool';
import { DataPoolPusat } from 'src/app/core/generator/data-pool/pusat-data-pool';
import { SchoolType } from 'src/app/core/_base/crud/models/school-models';

export class Total {
  totalTk = 0
  totalPaud = 0
  totalSD = 0
  totalSMP = 0
  totalSMA = 0
  totalSMK = 0
}

@Component({
  selector: 'kt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  listDataPerwakilanPool: DataInstansi<Perwakilan>[] = []
  listDataPusatPool: DataInstansi<Pusat>[] = []
  listDataCabangPool: DataInstansi<Cabang>[] = []

  listTotalAllPusat: TotalType[] = []
  totalAllPusat = 0

  listTotalAllCabang: TotalType[] = []
  totalAllCabang = 0

  listTotalAllPerwakilan: TotalType[] = []
  totalAllPerwakilan = 0

  listTotalAll: TotalType[] = []
  totalAll = 0

  constructor(
    private cabangDataPool: DataPoolCabang,
    private perwakilanDataPool: DataPoolPerwakilan,
    private pusatDataPool: DataPoolPusat
  ) { }

  private countSummaryFrom(instansi: DataInstansi<Instansi>[], instanceTotal: Total, lastKnownTotal: Total) {
    instansi.forEach(e => {
      e.getTotalTypes().forEach(t => {
        this.totalAll += t.total

        switch(e.getInstansi().type) {
          case InstansiType.PUSAT : this.totalAllPusat += t.total; break
          case InstansiType.CABANG : this.totalAllCabang += t.total; break
          case InstansiType.PERWAKILAN : this.totalAllPerwakilan += t.total; break
        }

        if (t.type === SchoolType.PAUD) {
          lastKnownTotal.totalPaud += t.total
          instanceTotal.totalPaud += t.total
        }

        if (t.type === SchoolType.TK) {
          lastKnownTotal.totalTk += t.total
          instanceTotal.totalTk += t.total
        }

        if (t.type === SchoolType.SD) {
          lastKnownTotal.totalSD += t.total
          instanceTotal.totalSD += t.total
        }

        if (t.type === SchoolType.SMP) {
          lastKnownTotal.totalSMP += t.total
          instanceTotal.totalSMP += t.total
        }

        if (t.type === SchoolType.SMA) {
          lastKnownTotal.totalSMA += t.total
          instanceTotal.totalSMA += t.total
        }

        if (t.type === SchoolType.SMK) {
          lastKnownTotal.totalSMK += t.total
          instanceTotal.totalSMK += t.total
        }
      })
    })
  }

  private collectListTotalFrom(listTotal: TotalType[], total: Total) {
    listTotal.push({
      total: total.totalPaud, type: SchoolType.PAUD
    })
    listTotal.push({
      total: total.totalTk, type: SchoolType.TK
    })
    listTotal.push({
      total: total.totalSD, type: SchoolType.SD
    })
    listTotal.push({
      total: total.totalSMP, type: SchoolType.SMP
    })
    listTotal.push({
      total: total.totalSMA, type: SchoolType.SMA
    })
    listTotal.push({
      total: total.totalSMK, type: SchoolType.SMK
    })
  }

  private collectSummary() {
    const total = new Total()
    const totalPusat = new Total()
    const totalCabang = new Total()
    const totalPerwakilan = new Total()

    this.countSummaryFrom(this.listDataCabangPool, totalCabang, total)
    this.countSummaryFrom(this.listDataPerwakilanPool, totalPerwakilan, total)
    this.countSummaryFrom(this.listDataPusatPool, totalPusat, total)

    console.log(totalPerwakilan);

    this.collectListTotalFrom(this.listTotalAll, total)
    this.collectListTotalFrom(this.listTotalAllPusat, totalPusat)
    this.collectListTotalFrom(this.listTotalAllCabang, totalCabang)
    this.collectListTotalFrom(this.listTotalAllPerwakilan, totalPerwakilan)
  }

  ngOnInit(): void {
    this.listDataCabangPool = this.cabangDataPool.getListData()
    this.listDataPerwakilanPool = this.perwakilanDataPool.getListData()
    this.listDataPusatPool = this.pusatDataPool.getListData()

    this.collectSummary()

  }
}
