import { DataInstansi } from '../hangtuah/data-hangtuah';
import { Perwakilan } from '../../_base/crud/models/hangtuah-organization';
import { DataPerwakilanSabang } from '../hangtuah/perwakilan/perwakilan-sabang';
import { Injectable } from '@angular/core';
import { PerwakilanBalikpapan } from '../hangtuah/perwakilan/perwakilan-balikpapan';
import { PerwakilanBengkulu } from '../hangtuah/perwakilan/perwakilan-bengkulu';
import { PerwakilanLampung } from '../hangtuah/perwakilan/perwakilan-lampung';
import { PerwakilanTanjungUban } from '../hangtuah/perwakilan/perwakilan-tanjung-uban';
import { PerwakilanBatam } from '../hangtuah/perwakilan/perwakilan-batam';
import { PerwakilanDaboSingkep } from '../hangtuah/perwakilan/perwakilan-dabo-singkep';
import { PerwakilanTanjungBalaiKarimun } from '../hangtuah/perwakilan/perwakilan-tanjung-balai-karimun';
import { PerwakilanSemarang } from '../hangtuah/perwakilan/perwakilan-semarang';
import { PerwakilanTegal } from '../hangtuah/perwakilan/perwakilan-tegal';
import { PerwakilanBanyuwangi } from '../hangtuah/perwakilan/perwakilan-banyuwangi';
import { PerwakilanKendari } from '../hangtuah/perwakilan/perwakilan-kendari';
import { PerwakilanMataram } from '../hangtuah/perwakilan/perwakilan-mataram';
import { PerwakilanTual } from '../hangtuah/perwakilan/perwakilan-tual';
import { PerwakilanBiak } from '../hangtuah/perwakilan/perwakilan-biak';
import { PerwakilanBanjarmasin } from '../hangtuah/perwakilan/perwakilan-banjarmasin';
import { PerwakilanDumai } from '../hangtuah/perwakilan/perwakilan-dumai';
import { PerwakilanNias } from '../hangtuah/perwakilan/perwakilan-nias';
import { PerwakilanPanjang } from '../hangtuah/perwakilan/perwakilan-panjang';
import { PerwakilanCirebon } from '../hangtuah/perwakilan/perwakilan-cirebon';
import { PerwakilanBatuporon } from '../hangtuah/perwakilan/perwakilan-batuporon';
import { PerwakilanMalang } from '../hangtuah/perwakilan/perwakilan-malang';
import { PerwakilanGrati } from '../hangtuah/perwakilan/perwakilan-grati';
import { PerwakilanCilacap } from '../hangtuah/perwakilan/perwakilan-cilacap';
import { PerwakilanGorontalo } from '../hangtuah/perwakilan/perwakilan-gorontalo';
import { PerwakilanTimika } from '../hangtuah/perwakilan/perwakilan-timika';

@Injectable()
export class DataPoolPerwakilan {
  constructor(
    private dataPerwakilanSabang: DataPerwakilanSabang,
    private balikPapan: PerwakilanBalikpapan,
    private dumai: PerwakilanDumai,
    private bengkulu: PerwakilanBengkulu,
    private nias: PerwakilanNias,
    private lampung: PerwakilanLampung,
    private panjang: PerwakilanPanjang,
    private cirebon: PerwakilanCirebon,
    private tjUban: PerwakilanTanjungUban,
    private batam: PerwakilanBatam,
    private dbSingkep: PerwakilanDaboSingkep,
    private karimun: PerwakilanTanjungBalaiKarimun,
    private btPoron: PerwakilanBatuporon,
    private malang: PerwakilanMalang,
    private semarang: PerwakilanSemarang,
    private tegal: PerwakilanTegal,
    private grati: PerwakilanGrati,
    private cilacap: PerwakilanCilacap,
    private banywangi: PerwakilanBanyuwangi,
    private kendari: PerwakilanKendari,
    private mataram: PerwakilanMataram,
    private gorontalo: PerwakilanGorontalo,
    private tual: PerwakilanTual,
    private biak: PerwakilanBiak,
    private timika: PerwakilanTimika,
    private banjarmasin: PerwakilanBanjarmasin
  ) {
  }

  getListData(): DataInstansi<Perwakilan>[] {
    return [
      this.dataPerwakilanSabang,
      this.balikPapan,
      this.dumai,
      this.bengkulu,
      this.nias,
      this.lampung,
      this.panjang,
      this.cirebon,
      this.tjUban,
      this.batam,
      this.dbSingkep,
      this.karimun,
      this.btPoron,
      this.malang,
      this.semarang,
      this.tegal,
      this.grati,
      this.cilacap,
      this.banywangi,
      this.kendari,
      this.mataram,
      this.gorontalo,
      this.tual,
      this.biak,
      this.timika,
      this.banjarmasin,
    ]
  }

  getListPerwakilan(): Perwakilan[] {
    const listPerwakilan: Perwakilan[] = []
    this.getListData().forEach(data =>  listPerwakilan.push(data.getInstansi()))
    return listPerwakilan
  }
}
