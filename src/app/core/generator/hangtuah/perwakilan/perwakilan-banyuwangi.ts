import { InstansiType, JabatanInstansi, KepalaInstansi, Manager, Perwakilan, Staff, WakilKepalaInstansi } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { CabangSurabaya } from '../cabang/cabang-surabaya';



export class PerwakilanBanyuwangi extends DataInstansi<Perwakilan> {
  constructor(private cabangSurabaya: CabangSurabaya) {
    super()
  }

  getInstansi(): Perwakilan {
    return {
      id: 23,
      name: 'Perwakilan Banyuwangi',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangSurabaya.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Dr. Sutomo Rt 01/02 No. 22',
        city: 'Banyuwangi',
        province: 'Jawa Timur',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK23',
      name: 'Kenneth Low',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-2020-0891',
      location: {
        address: 'Jl. Serayu Rt 01/02 No. 20',
        city: 'Banyuwangi',
        province: 'Jawa Timur',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK23',
      name: 'Khansa Budiman',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-0101-5555',
      location: {
        address: 'Jl. Mendut Rt 01/02 No. 1',
        city: 'Banyuwangi',
        province: 'Jawa Timur',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK231',
        name: 'Khoka Umam',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-3301-0230',
        location: {
          address: 'Jl. Ciliwung Rt 01/02 No. 13',
          city: 'Banyuwangi',
          province: 'Jawa Timur',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS232',
        name: 'Kiki Handayani',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0873-9898-3233',
        location: {
          address: 'Jl. KH. Harun Rt 01/02 No. 3A',
          city: 'Banyuwangi',
          province: 'Jawa Timur',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK231',
        name: 'Kristiono',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0878-7272-0110',
        location: {
          address: 'Jl. Letjen Sutoyo Rt 01/02 No. 12',
          city: 'Banyuwangi',
          province: 'Jawa Timur',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK232',
        name: 'Leonardo Sultana',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-0444-1919',
        location: {
          address: 'Jl. Ikan Arwana Rt 01/02 No. 5',
          city: 'Banyuwangi',
          province: 'Jawa Timur',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK233',
        name: 'Gozali',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-8484-1901',
        location: {
          address: 'Jl. Kepiting Rt 03/02 No. 01',
          city: 'Banyuwangi',
          province: 'Jawa Timur',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK234',
        name: 'Lidyawati',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-6565-0002',
        location: {
          address: 'Jl. Ikan Layur Rt 05/02 No. 15',
          city: 'Banyuwangi',
          province: 'Jawa Timur',
          country: 'Indonesia'
        }
      }
    ]
  }
}
