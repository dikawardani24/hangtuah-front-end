import { HangtuahData, TotalType } from '../hangtuah-org-generator';
import { KepalaInstansi, WakilKepalaInstansi, Instansi, Manager, Staff } from '../../_base/crud/models/hangtuah-organization';
import { Sekolah, SchoolType } from '../../_base/crud/models/school-organization';
import { SchoolData } from '../school-org-generator';

export interface AddListener {
  onAddData(totalType: TotalType)
}

export abstract class DataInstansi<T extends Instansi> implements HangtuahData<T> {


  private _countTotalOf(type: SchoolType) {
    let total = 0;
    this.getListSekolah().forEach(sekolah => {
      if (sekolah.type === type) {
        total += 1
      }
    })

    return total
  }

  private _whenTotalNotZero(type: SchoolType, listener: AddListener) {
    const total = this._countTotalOf(type)
    if (total > 0) {
      listener.onAddData({
        total,
        type
      })
    }
  }

  getTotalTypes(): TotalType[] {
    const totalTypes: TotalType[] = []

    this._whenTotalNotZero(SchoolType.PAUD, {
      onAddData: (totalType) => totalTypes.push(totalType)
    })

    this._whenTotalNotZero(SchoolType.TK, {
      onAddData: (t) => totalTypes.push(t)
    })

    this._whenTotalNotZero(SchoolType.SD, {
      onAddData: (t) => totalTypes.push(t)
    })

    this._whenTotalNotZero(SchoolType.SMP, {
      onAddData: (t) => totalTypes.push(t)
    })

    this._whenTotalNotZero(SchoolType.SMA, {
      onAddData: (t) => totalTypes.push(t)
    })

    this._whenTotalNotZero(SchoolType.SMK, {
      onAddData: (t) => totalTypes.push(t)
    })

    return totalTypes
  }

  getTotalPaud(): number {
    return this._countTotalOf(SchoolType.PAUD)
  }

  getTotalTK(): number {
    return this._countTotalOf(SchoolType.TK)
  }
  getTotalSD(): number {
    return this._countTotalOf(SchoolType.SD)
  }
  getTotalSmp(): number {
    return this._countTotalOf(SchoolType.SMP)
  }
  getTotalSma(): number {
    return this._countTotalOf(SchoolType.SMA)
  }
  getTotalSmk(): number {
    return this._countTotalOf(SchoolType.SMK)
  }

  protected getListSekolah(): Sekolah[] {
    const listSekolah: Sekolah[] = []
    this.getListSchoolData().forEach(data => listSekolah.push(data.getSekolah()))
    return listSekolah
  }

  getInstansi(): T {
    throw new Error('Method not implemented.');
  }
  getKepalaInstansi(): KepalaInstansi {
    throw new Error('Method not implemented.');
  }
  getWakilKepalaInstansi(): WakilKepalaInstansi {
    throw new Error('Method not implemented.');
  }
  getListManager(): Manager[] {
    throw new Error('Method not implemented.');
  }
  getListStaff(): Staff[] {
    throw new Error('Method not implemented.');
  }
  getListSchoolData(): SchoolData[] {
    throw new Error('Method not implemented.');
  }

}
