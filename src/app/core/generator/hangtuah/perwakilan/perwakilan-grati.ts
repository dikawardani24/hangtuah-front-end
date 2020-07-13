import { InstansiType, JabatanInstansi, KepalaInstansi, Manager, Perwakilan, Staff, WakilKepalaInstansi } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { CabangSurabaya } from '../cabang/cabang-surabaya';



export class PerwakilanGrati extends DataInstansi<Perwakilan> {
  constructor(private cabangSurabaya: CabangSurabaya) {
    super()
  }

  getInstansi(): Perwakilan {
    return {
      id: 21,
      name: 'Perwakilan Grati',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangSurabaya.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Raya Grati Rt 01/02 No. 11',
        city: 'Pasuruan',
        province: 'Jawa Timur',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK21',
      name: 'Jay Adinata',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-6666-2222',
      location: {
        address: 'Jl. Danau Ranu Rt 01/02 No. 20',
        city: 'Pasuruan',
        province: 'Jawa Timur',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK21',
      name: 'Jimmie Basarah',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-4411-5555',
      location: {
        address: 'Jl. Raya Menangas Rt 01/02 No. 1',
        city: 'Pasuruan',
        province: 'Jawa Timur',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK211',
        name: 'Johanes Cahjadi',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-2121-0230',
        location: {
          address: 'Jl. Kedawung Rt 01/02 No. 13',
          city: 'Pasuruan',
          province: 'Jawa Timur',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS212',
        name: 'Jonathan Sofian',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0873-6040-3233',
        location: {
          address: 'Jl. Mawar Rt 01/02 No. 3A',
          city: 'Pasuruan',
          province: 'Jawa Timur',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK211',
        name: 'Joy Gabriel',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0878-7722-0110',
        location: {
          address: 'Jl. Bandaran Rt 01/02 No. 12',
          city: 'Pasuruan',
          province: 'Jawa Timur',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK212',
        name: 'Julius Sarwanto',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-0444-2255',
        location: {
          address: 'Jl. Umbulan Rt 01/02 No. 5',
          city: 'Pasuruan',
          province: 'Jawa Timur',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK213',
        name: 'Kafi Herman',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-2030-1901',
        location: {
          address: 'Jl. Winongan Rt 03/02 No. 01',
          city: 'Pasuruan',
          province: 'Jawa Timur',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK214',
        name: 'Karina Intan',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-1414-0002',
        location: {
          address: 'Jl. Raya Prodo Rt 05/02 No. 15',
          city: 'Pasuruan',
          province: 'Jawa Timur',
          country: 'Indonesia'
        }
      }
    ]
  }
}
