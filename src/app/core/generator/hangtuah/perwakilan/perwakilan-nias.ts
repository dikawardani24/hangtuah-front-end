import { Perwakilan, InstansiType, KepalaInstansi, JabatanInstansi, WakilKepalaInstansi, Manager, Staff } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { CabangPadang } from '../cabang/cabang-padang';



export class PerwakilanNias extends DataInstansi<Perwakilan> {
  constructor(private cabangPadang: CabangPadang) {
    super()
  }

  getInstansi(): Perwakilan {
    return {
      id: 6,
      name: 'Perwakilan Nias',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangPadang.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. M. Yamin Rt 01/02 No. 11',
        city: 'Nias',
        province: 'Sumatera Utara',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK6',
      name: 'Amit Wibowo',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-6754-0891',
      location: {
        address: 'Jl. Merdeka Rt 01/02 No. 20',
        city: 'Nias',
        province: 'Sumatera Utara',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK6',
      name: 'Samuel Andi',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-8901-9911',
      location: {
        address: 'Jl. Pancasila Rt 01/02 No. 1',
        city: 'Nias',
        province: 'Sumatera Utara',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK61',
        name: 'Hartono Andreas',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-6251-0230',
        location: {
          address: 'Jl. Hili Rt 01/02 No. 13',
          city: 'Nias',
          province: 'Sumatera Utara',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS62',
        name: 'Hartawan',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0873-2021-3233',
        location: {
          address: 'Jl. Bakaru Rt 01/02 No. 3A',
          city: 'Nias',
          province: 'Sumatera Utara',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK61',
        name: 'Lukman Andry',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0876-5432-0110',
        location: {
          address: 'Jl. Sawo Rt 01/02 No. 12',
          city: 'Nias',
          province: 'Sumatera Utara',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK62',
        name: 'Bimatama',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-0990-3210',
        location: {
          address: 'Jl. Idnoi Rt 01/02 No. 5',
          city: 'Nias',
          province: 'Sumatera Utara',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK63',
        name: 'Indri Suhaili',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-5432-1901',
        location: {
          address: 'Jl. Raya Pelud Binaka Rt 03/02 No. 01',
          city: 'Nias',
          province: 'Sumatera Utara',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK64',
        name: 'Indra Santosa',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-9988-0002',
        location: {
          address: 'Jl. Simpang Duria Rt 05/02 No. 15',
          city: 'Nias',
          province: 'Sumatera Utara',
          country: 'Indonesia'
        }
      }
    ]
  }
}
