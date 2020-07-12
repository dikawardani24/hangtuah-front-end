import { KepalaInstansi, WakilKepalaInstansi, Manager, Staff, Instansi } from '../_base/crud/models/hangtuah-organization';
import { Organization, PersonNode } from './generator';
import { Sekolah, SchoolType } from '../_base/crud/models/school-organization';
import { SchoolData } from './school-org-generator';

export interface TotalType {
  total: number,
  type: SchoolType
}

export interface HangtuahData<T extends Instansi> {
  getInstansi(): T
  getKepalaInstansi(): KepalaInstansi
  getWakilKepalaInstansi(): WakilKepalaInstansi
  getListManager(): Manager[]
  getListStaff(): Staff[]
  getListSchoolData(): SchoolData[]
  getTotalPaud(): number
  getTotalTK(): number
  getTotalSD(): number
  getTotalSmp(): number
  getTotalSma(): number
  getTotalSmk(): number
  getTotalTypes(): TotalType[]
}

export class HangtuahOrganization<T extends Instansi> extends Organization<HangtuahData<T>> {

  private _getStaffFor(manager: Manager): PersonNode[] {
    const staffNodes: PersonNode[] = []

    this.generator.getListStaff().forEach(staff => {
      if (staff.manager.nik === manager.nik) {
        staffNodes.push({
          nik: staff.nik,
          name: staff.name,
          designation: staff.jabatan,
          imageUrl: 'assets/media/svg/avatars/009-boy-4.svg',
          cssClass: 'mui-oc-man'
        })
      }
    })

    return staffNodes
  }

  getStructure(): PersonNode {
    const kepalaInstansi = this.generator.getKepalaInstansi()
    const wakKepInstansi = this.generator.getWakilKepalaInstansi()

    const managerNodes: PersonNode[] = []
    this.generator.getListManager().forEach(manager => {
      managerNodes.push({
        nik: manager.nik,
        name: manager.name,
        designation: manager.jabatan,
        subordinates: this._getStaffFor(manager),
        imageUrl: 'assets/media/svg/avatars/009-boy-4.svg',
        cssClass: 'mui-oc-dir '

      })
    });

    return {
      nik: kepalaInstansi.nik,
      name: kepalaInstansi.name,
      designation: kepalaInstansi.jabatan,
      imageUrl: 'assets/media/svg/avatars/009-boy-4.svg',
      cssClass: 'mui-oc-ceo',
      subordinates: [
        {
          nik: wakKepInstansi.nik,
          name: wakKepInstansi.name,
          designation: wakKepInstansi.jabatan,
          subordinates: managerNodes,
          imageUrl: 'assets/media/svg/avatars/009-boy-4.svg',
          cssClass: 'mui-oc-vp'
        }
      ]
    }
  }
}

