import { DataCabangBelawan } from '../hangtuah/cabang/cabang-belawan';
import { DataInstansi } from '../hangtuah/data-hangtuah';
import { Cabang, Pusat } from '../../_base/crud/models/hangtuah-organization';
import { Injectable } from '@angular/core';
import { DataPusat } from '../hangtuah/pusat';

@Injectable()
export class DataPoolPusat {
  constructor(private dataPusat: DataPusat) {
  }

  getListData(): DataInstansi<Pusat>[] {
    return [
      this.dataPusat
    ]
  }

  getListPusat(): Pusat[] {
    const listPusat: Pusat[] = []
    this.getListData().forEach(data =>  listPusat.push(data.getInstansi()))
    return listPusat
  }
}
