import { Sekolah } from '../_base/crud/models/school-models';
import { Injectable } from '@angular/core';
import { Repository } from './base-repos';
import { DataPoolPusat } from '../generator/data-pool/pusat-data-pool';

@Injectable()
export class SchoolRepo implements Repository<string, Sekolah> {
  constructor(
    private pusatDataPool: DataPoolPusat,

  ){

  }
  findById(id: string): Sekolah {
    throw new Error("Method not implemented.");
  }
  getAll(): Sekolah[] {
    throw new Error("Method not implemented.");
  }
  save(model: Sekolah): Sekolah {
    throw new Error("Method not implemented.");
  }
  edit(model: Sekolah) {
    throw new Error("Method not implemented.");
  }
  delete(model: Sekolah) {
    throw new Error("Method not implemented.");
  }
}
