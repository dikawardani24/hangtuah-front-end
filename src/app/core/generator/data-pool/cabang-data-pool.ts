import { DataCabangBelawan } from '../hangtuah/cabang/cabang-belawan';
import { DataInstansi } from '../hangtuah/data-hangtuah';
import { Cabang } from '../../_base/crud/models/hangtuah-organization';
import { Injectable } from '@angular/core';
import { DataCabangPadang } from '../hangtuah/cabang/cabang-padang';
import { DataCabangJakarta } from '../hangtuah/cabang/cabang-jakarta';
import { DataCabangTjPinang } from '../hangtuah/cabang/cabang-tj-pinang';
import { DataCabangSurabaya } from '../hangtuah/cabang/cabang-surabaya';
import { DataCabangMakassar } from '../hangtuah/cabang/cabang-makassar';
import { DataCabangKupang } from '../hangtuah/cabang/cabang-kupang';
import { DataCabangManado } from '../hangtuah/cabang/cabang-manado';
import { DataCabangAmbon } from '../hangtuah/cabang/cabang-ambon';
import { CabangJayapura } from '../hangtuah/cabang/cabang-jayapura';
import { CabangPontianak } from '../hangtuah/cabang/cabang-pontianak';
import { CabangMerauke } from '../hangtuah/cabang/cabang-merauke';
import { CabangTarakan } from '../hangtuah/cabang/cabang-tarakan';
import { CabangSorong } from '../hangtuah/cabang/cabang-sorong';


@Injectable()
export class DataPoolCabang {
  constructor(
    private cabangBelawan: DataCabangBelawan,
    private cabangPadang: DataCabangPadang,
    private cabangJakarta: DataCabangJakarta,
    private cabangTjPinang: DataCabangTjPinang,
    private cabangSurabaya: DataCabangSurabaya,
    private cabangMakassar: DataCabangMakassar,
    private cabangKupang: DataCabangKupang,
    private cabangManado: DataCabangManado,
    private cabangAmbon: DataCabangAmbon,
    private jayaPura: CabangJayapura,
    private merauke: CabangMerauke,
    private ponti: CabangPontianak,
    private tarakan: CabangTarakan,
    private sorong: CabangSorong
  ) {
  }

  getListData(): DataInstansi<Cabang>[] {
    return [
      this.cabangBelawan,
      this.cabangPadang,
      this.cabangJakarta,
      this.cabangTjPinang,
      this.cabangSurabaya,
      this.cabangMakassar,
      this.cabangKupang,
      this.cabangManado,
      this.cabangAmbon,
      this.jayaPura,
      this.merauke,
      this.ponti,
      this.tarakan,
      this.sorong
    ]
  }

  getListCabang(): Cabang[] {
    const listCabang: Cabang[] = []
    this.getListData().forEach(data =>  listCabang.push(data.getInstansi()))
    return listCabang
  }
}
