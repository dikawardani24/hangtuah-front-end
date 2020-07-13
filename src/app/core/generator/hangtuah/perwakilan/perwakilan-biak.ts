import { InstansiType, JabatanInstansi, KepalaInstansi, Manager, Perwakilan, Staff, WakilKepalaInstansi } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { CabangJayapura } from '../cabang/cabang-jayapura';





export class PerwakilanBiak extends DataInstansi<Perwakilan> {
  constructor(private cabangJayapura: CabangJayapura) {
    super()
  }

  getInstansi(): Perwakilan {
    return {
      id: 33,
      name: 'Perwakilan Biak',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangJayapura.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Sisingamangaraja Rt 01/02 No. 55',
        city: 'Numfor',
        province: 'Papua',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK33',
      name: 'Nathan Bell',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0879-4646-8181',
      location: {
        address: 'Jl. Raya Bosnik Rt 01/02 No. 20',
        city: 'Numfor',
        province: 'Papua',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK33',
      name: 'Merina Liu',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0878-5676-0202',
      location: {
        address: 'Jl. Taruna Rt 01/02 No. 1',
        city: 'Numfor',
        province: 'Papua',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK331',
        name: 'Novianti Hung',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-7654-4646',
        location: {
          address: 'Jl. Bintaro Rt 01/02 No. 13',
          city: 'Numfor',
          province: 'Papua',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS332',
        name: 'Asti Widyahari',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0878-1144-1313',
        location: {
          address: 'Jl. Sriwijaya Rt 01/02 No. 3A',
          city: 'Numfor',
          province: 'Papua',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK331',
        name: 'Putu Heriawati',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0878-9345-0110',
        location: {
          address: 'Jl. S. Bratas Rt 01/02 No. 12',
          city: 'Numfor',
          province: 'Papua',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK332',
        name: 'Nicky Budianto',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-0678-9988',
        location: {
          address: 'Jl. S. Digul Rt 01/02 No. 5',
          city: 'Numfor',
          province: 'Papua',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK333',
        name: 'Dion Fahnaz',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-7676-1111',
        location: {
          address: 'Jl. Pd. Indah Rt 03/02 No. 01',
          city: 'Numfor',
          province: 'Papua',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK334',
        name: 'Nico Jayanto',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-0303-5151',
        location: {
          address: 'Jl. S. Ciliwung Rt 05/02 No. 15',
          city: 'Numfor',
          province: 'Papua',
          country: 'Indonesia'
        }
      }
    ]
  }
}
