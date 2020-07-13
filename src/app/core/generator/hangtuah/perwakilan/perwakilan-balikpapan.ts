import { InstansiType, JabatanInstansi, KepalaInstansi, Manager, Perwakilan, Staff, WakilKepalaInstansi } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { CabangTarakan } from '../cabang/cabang-tarakan';




export class PerwakilanBalikpapan extends DataInstansi<Perwakilan> {
  constructor(private cabangTarakan: CabangTarakan) {
    super()
  }

  getInstansi(): Perwakilan {
    return {
      id: 39,
      name: 'Perwakilan Balikpapan',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangTarakan.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Sungai Ampal Rt 01/02 No. 55',
        city: 'Balikpapan',
        province: 'Kalimantan Timur',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK39',
      name: 'Putri Sarie',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0879-0044-8181',
      location: {
        address: 'Jl. Dr. Sutomo Rt 01/02 No. 20',
        city: 'Balikpapan',
        province: 'Kalimantan Timur',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK39',
      name: 'Basuki Aris',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0878-1212-0303',
      location: {
        address: 'Jl. Ahmad Yani Rt 01/02 No. 1',
        city: 'Balikpapan',
        province: 'Kalimantan Timur',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK391',
        name: 'Rahmi Saputri',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-9595-4646',
        location: {
          address: 'Jl. Yos Sudarso Rt 01/02 No. 13',
          city: 'Balikpapan',
        province: 'Kalimantan Timur',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS392',
        name: 'Raman Dika',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0878-1199-1313',
        location: {
          address: 'Jl. Den Haag Rt 01/02 No. 3A',
          city: 'Balikpapan',
          province: 'Kalimantan Timur',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK391',
        name: 'Rambu Mura',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0878-9876-0110',
        location: {
          address: 'Jl. Paris Rt 01/02 No. 12',
          city: 'Balikpapan',
          province: 'Kalimantan Timur',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK392',
        name: 'Ravi Febriyanto',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-6543-9988',
        location: {
          address: 'Jl. Flamboyan Rt 01/02 No. 5',
          city: 'Balikpapan',
          province: 'Kalimantan Timur',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK393',
        name: 'Reni Minarti',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-8989-4321',
        location: {
          address: 'Jl. Anyelir Rt 03/02 No. 01',
          city: 'Balikpapan',
          province: 'Kalimantan Timur',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK394',
        name: 'Riadi Fikri',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-3456-5151',
        location: {
          address: 'Jl. Agung Tunggal Rt 05/02 No. 15',
          city: 'Balikpapan',
          province: 'Kalimantan Timur',
          country: 'Indonesia'
        }
      }
    ]
  }
}
