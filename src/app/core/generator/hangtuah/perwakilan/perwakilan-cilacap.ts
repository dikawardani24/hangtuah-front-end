import { InstansiType, JabatanInstansi, KepalaInstansi, Manager, Perwakilan, Staff, WakilKepalaInstansi } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { CabangSurabaya } from '../cabang/cabang-surabaya';



export class PerwakilanCilacap extends DataInstansi<Perwakilan> {
  constructor(private cabangSurabaya: CabangSurabaya) {
    super()
  }

  getInstansi(): Perwakilan {
    return {
      id: 22,
      name: 'Perwakilan Cilacap',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangSurabaya.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Gatot Subroto Rt 01/02 No. 11',
        city: 'Cilacap',
        province: 'Jawa Tengah',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK22',
      name: 'Lina Manoharan',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0879-0202-0891',
      location: {
        address: 'Jl. Raya Nusantara Rt 01/02 No. 20',
        city: 'Cilacap',
        province: 'Jawa Tengah',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK22',
      name: 'Renando',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0878-8181-5555',
      location: {
        address: 'Jl. Damar Rt 01/02 No. 1',
        city: 'Cilacap',
        province: 'Jawa Tengah',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK221',
        name: 'Lily Wanti',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-1221-0230',
        location: {
          address: 'Jl. Ir. Juanda Rt 01/02 No. 13',
          city: 'Cilacap',
          province: 'Jawa Tengah',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS222',
        name: 'Lucy Santoso',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0873-0808-3233',
        location: {
          address: 'Jl. Setiabudi Rt 01/02 No. 3A',
          city: 'Cilacap',
          province: 'Jawa Tengah',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK221',
        name: 'Rachmat Destianto',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0878-7447-0110',
        location: {
          address: 'Jl. Kalimantan Rt 01/02 No. 12',
          city: 'Cilacap',
          province: 'Jawa Tengah',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK222',
        name: 'Luthfi Chandra',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-0505-1111',
        location: {
          address: 'Jl. Lingkar Selatan Rt 01/02 No. 5',
          city: 'Cilacap',
          province: 'Jawa Tengah',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK223',
        name: 'Dika Malesa',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-6767-1901',
        location: {
          address: 'Jl. Tentara Pelajar Rt 03/02 No. 01',
          city: 'Cilacap',
          province: 'Jawa Tengah',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK224',
        name: 'Mardika Utama',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-4141-0002',
        location: {
          address: 'Jl. Kalidonan Rt 05/02 No. 15',
          city: 'Cilacap',
          province: 'Jawa Tengah',
          country: 'Indonesia'
        }
      }
    ]
  }
}
