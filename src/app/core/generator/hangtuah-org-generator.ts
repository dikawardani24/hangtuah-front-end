import { KepalaInstansi, WakilKepalaInstansi, Manager, Staff, Instansi } from '../_base/crud/models/hangtuah-organization';
import { Organization, PersonNode } from './generator';
import { Sekolah } from '../_base/crud/models/school-organization';
import { SchoolData } from './school-org-generator';

export interface HangtuahData<T extends Instansi> {
  getInstansi(): T
  getKepalaInstansi(): KepalaInstansi
  getWakilKepalaInstansi(): WakilKepalaInstansi
  getListManager(): Manager[]
  getListStaff(): Staff[]
  getListSchoolData(): SchoolData[]
}

export class HangtuahOrganization<T extends Instansi> extends Organization<HangtuahData<T>> {

  private _getStaffFor(manager: Manager): PersonNode[] {
    const staffNodes: PersonNode[] = []

    this.generator.getListStaff().forEach(staff => {
      if (staff.manager.nik === manager.nik) {
        staffNodes.push({
          nik: staff.nik,
          name: staff.name,
          jabatan: staff.jabatan
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
        jabatan: manager.jabatan,
        children: [
          {
            title: 'Staff',
            children: this._getStaffFor(manager)
          }
        ]
      })
    });

    return {
      nik: kepalaInstansi.nik,
      name: kepalaInstansi.name,
      jabatan: kepalaInstansi.jabatan,
      children: [
        {
          title: 'Wakil Kepala Instansi',
          children: [
            {
              nik: wakKepInstansi.nik,
              name: wakKepInstansi.name,
              jabatan: wakKepInstansi.jabatan,
              children: [
                {
                  title: 'Manager',
                  children: managerNodes
                }
              ]
            }
          ]
        }
      ]
    }
  }
}

