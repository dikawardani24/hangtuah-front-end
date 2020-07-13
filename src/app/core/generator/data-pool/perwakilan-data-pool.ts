import { DataInstansi } from '../hangtuah/data-hangtuah';
import { Perwakilan } from '../../_base/crud/models/hangtuah-organization';
import { DataPerwakilanSabang } from '../hangtuah/perwakilan/perwakilan-sabang';
import { Injectable } from '@angular/core';

@Injectable()
export class DataPoolPerwakilan {
  constructor(private dataPerwakilanSabang: DataPerwakilanSabang) {
  }

  getListData(): DataInstansi<Perwakilan>[] {
    return [
      this.dataPerwakilanSabang
    ]
  }

  getListPerwakilan(): Perwakilan[] {
    const listPerwakilan: Perwakilan[] = []
    this.getListData().forEach(data =>  listPerwakilan.push(data.getInstansi()))
    return listPerwakilan
  }
}
