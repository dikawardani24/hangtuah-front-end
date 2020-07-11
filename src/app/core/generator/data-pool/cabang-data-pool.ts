import { DataCabangBelawan } from '../hangtuah/cabang/cabang-belawan';
import { DataInstansi } from '../hangtuah/data-hangtuah';
import { Cabang } from '../../_base/crud/models/hangtuah-organization';
import { Injectable } from '@angular/core';
import { DataCabangPadang } from '../hangtuah/cabang/cabang-padang';

@Injectable()
export class DataPoolCabang {
  constructor(
    private cabangBelawan: DataCabangBelawan,
    private cabangPadang: DataCabangPadang
  ) {
  }

  getListData(): DataInstansi<Cabang>[] {
    return [
      this.cabangBelawan,
      this.cabangPadang
    ]
  }

  getListCabang(): Cabang[] {
    const listCabang: Cabang[] = []
    this.getListData().forEach(data =>  listCabang.push(data.getInstansi()))
    return listCabang
  }
}
