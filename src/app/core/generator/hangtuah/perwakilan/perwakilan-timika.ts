import { InstansiType, JabatanInstansi, KepalaInstansi, Manager, Perwakilan, Staff, WakilKepalaInstansi } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { CabangMerauke } from '../cabang/cabang-merauke';




export class PerwakilanTimika extends DataInstansi<Perwakilan> {
  constructor(private cabangMerauke: CabangMerauke) {
    super()
  }

  getInstansi(): Perwakilan {
    return {
      id: 35,
      name: 'Perwakilan Timika',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangMerauke.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Yos Sudarso Rt 01/02 No. 55',
        city: 'Mimika',
        province: 'Papua',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK35',
      name: 'Nina Moran',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0879-0011-8181',
      location: {
        address: 'Jl. Hasanuddin Rt 01/02 No. 20',
        city: 'Mimika',
        province: 'Papua',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK35',
      name: 'Nisa Maihan',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0878-1212-0202',
      location: {
        address: 'Jl. Cendrawasih Rt 01/02 No. 1',
        city: 'Mimika',
        province: 'Papua',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK351',
        name: 'Ariyanto Jono',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-9191-4646',
        location: {
          address: 'Jl. Budi Utomo Rt 01/02 No. 13',
          city: 'Mimika',
          province: 'Papua',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS352',
        name: 'Rusdy Yahya',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0878-1122-1313',
        location: {
          address: 'Jl. Poros Makpur Jaya Rt 01/02 No. 3A',
          city: 'Mimika',
          province: 'Papua',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK351',
        name: 'Noval  Pratama',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0878-0987-0110',
        location: {
          address: 'Jl. Merak Rt 01/02 No. 12',
          city: 'Mimika',
          province: 'Papua',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK352',
        name: 'Sigit Khalik',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-5432-9988',
        location: {
          address: 'Jl. Rajawali Rt 01/02 No. 5',
          city: 'Mimika',
          province: 'Papua',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK353',
        name: 'Oky Sinaga',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-7676-4321',
        location: {
          address: 'Jl. Timikka-Pomako Rt 03/02 No. 01',
          city: 'Mimika',
          province: 'Papua',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK354',
        name: 'Ilham Jamil',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-1234-5151',
        location: {
          address: 'Jl. Jalur 3 Rt 05/02 No. 15',
          city: 'Mimika',
          province: 'Papua',
          country: 'Indonesia'
        }
      }
    ]
  }
}
