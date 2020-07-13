import { Perwakilan, InstansiType, KepalaInstansi, JabatanInstansi, WakilKepalaInstansi, Manager, Staff } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { CabangBelawan } from '../cabang/cabang-belawan';


export class PerwakilanSabang extends DataInstansi<Perwakilan> {
  constructor(private cabangBelawan: CabangBelawan) {
    super()
  }

  getInstansi(): Perwakilan {
    return {
      id: 2,
      name: 'Perwakilan Sabang',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangBelawan.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Habibah Rt 01/02 No. 10',
        city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK2',
      name: 'Ronald Iskak',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-3242-3233',
      location: {
        address: 'Jl. Habibah Rt 01/02 No. 20',
        city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK2',
      name: 'Puri Wongsonegoro',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-2345-3241',
      location: {
        address: 'Jl. Habibah Rt 01/02 No. 1',
        city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK21',
        name: 'Aji Saputra',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-34567-0001',
        location: {
          address: 'Jl. Habibah Rt 01/02 No. 13',
          city: 'Jakarta Selatan',
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS22',
        name: 'Nurhalisa',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0873-4534-3233',
        location: {
          address: 'Jl. Purba Rt 01/02 No. 3A',
          city: 'Jakarta Utara',
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK21',
        name: 'Putra Nababan',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0876-5432-1000',
        location: {
          address: 'Jl. Manggis Rt 01/02 No. 12',
          city: 'Jakarta Timur',
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK22',
        name: 'Andrea Gunawan',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-7654-3210',
        location: {
          address: 'Jl. Purnawarman Rt 01/02 No. 5',
          city: 'Jakarta Timur',
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK23',
        name: 'Rizky Akbar',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-5432-0001',
        location: {
          address: 'Jl. Matahari Rt 03/02 No. 01',
          city: 'Jakarta Barat',
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK24',
        name: 'Indra Santosa',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-8890-0002',
        location: {
          address: 'Jl. Sabang Rt 05/02 No. 15',
          city: 'Jakarta Selatan',
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      }
    ]
  }
}
