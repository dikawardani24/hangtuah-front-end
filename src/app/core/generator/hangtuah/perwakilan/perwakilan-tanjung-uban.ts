import { InstansiType, JabatanInstansi, KepalaInstansi, Manager, Perwakilan, Staff, WakilKepalaInstansi } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { CabangTanjungPinang } from '../cabang/cabang-tanjung-pinang';





export class PerwakilanTanjungUban extends DataInstansi<Perwakilan> {
  constructor(private cabangTanjungPinang: CabangTanjungPinang) {
    super()
  }

  getInstansi(): Perwakilan {
    return {
      id: 12,
      name: 'Perwakilan Tanjung Uban',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangTanjungPinang.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Permaisuri Rt 01/02 No. 11',
        city: 'Bintan',
        province: 'Kepulauan Riau',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK12',
      name: 'Ega Wachid',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-1199-0891',
      location: {
        address: 'Jl. Hulu Riau Rt 01/02 No. 20',
        city: 'Bintan',
        province: 'Kepulauan Riau',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK12',
      name: 'Eko Pratomo',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-5501-9911',
      location: {
        address: 'Jl. Langsat Rt 01/02 No. 1',
        city: 'Bintan',
        province: 'Kepulauan Riau',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK121',
        name: 'Surya Emmy',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-6001-0230',
        location: {
          address: 'Jl. Taman Sari Rt 01/02 No. 13',
          city: 'Bintan',
        province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS122',
        name: 'Hartawan',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0873-2012-3233',
        location: {
          address: 'Jl. Manggar Rt 01/02 No. 3A',
          city: 'Bintan',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK121',
        name: 'Susanti Endah',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0876-1132-0110',
        location: {
          address: 'Jl. Hulu Riau Rt 01/02 No. 12',
          city: 'Bintan',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK122',
        name: 'Ananto Arifin',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-0111-3210',
        location: {
          address: 'Jl. Karya Praja Rt 01/02 No. 5',
          city: 'Bintan',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK123',
        name: 'Erik Idris',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-5099-1901',
        location: {
          address: 'Jl. Tanjung Permai Rt 03/02 No. 01',
          city: 'Bintan',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK124',
        name: 'Edwin Tanudjaja',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-0088-0002',
        location: {
          address: 'Jl. Indunsuri Rt 05/02 No. 15',
          city: 'Bintan',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      }
    ]
  }
}
