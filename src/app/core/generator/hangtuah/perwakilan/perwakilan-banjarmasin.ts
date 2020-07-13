import { InstansiType, JabatanInstansi, KepalaInstansi, Manager, Perwakilan, Staff, WakilKepalaInstansi } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { CabangTarakan } from '../cabang/cabang-tarakan';




export class PerwakilanBanjarmasin extends DataInstansi<Perwakilan> {
  constructor(private cabangTarakan: CabangTarakan) {
    super()
  }

  getInstansi(): Perwakilan {
    return {
      id: 38,
      name: 'Perwakilan Banjarmasin',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangTarakan.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Veteran Sungai Bilu Rt 01/02 No. 55',
        city: 'Banjarmasin',
        province: 'Kalimantan Selatan',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK38',
      name: 'Hendy Yamin',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0879-0022-8181',
      location: {
        address: 'Jl. Keramat Raya Rt 01/02 No. 20',
        city: 'Banjarmasin',
        province: 'Kalimantan Selatan',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK38',
      name: 'Yuke Aryanto',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0878-1313-0202',
      location: {
        address: 'Jl. K.S. Tubun Rt 01/02 No. 1',
        city: 'Banjarmasin',
        province: 'Kalimantan Selatan',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK381',
        name: 'Paul Tambunan',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-9292-4646',
        location: {
          address: 'Jl. Belitung Barat Rt 01/02 No. 13',
          city: 'Banjarmasin',
          province: 'Kalimantan Selatan',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS382',
        name: 'Fajar Laras',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0878-1133-1313',
        location: {
          address: 'Jl. Mayjen Sutoyo Rt 01/02 No. 3A',
          city: 'Banjarmasin',
          province: 'Kalimantan Selatan',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK381',
        name: 'Chandra Bay',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0878-0789-0110',
        location: {
          address: 'Jl. Mochtar Noor Rt 01/02 No. 12',
          city: 'Banjarmasin',
          province: 'Kalimantan Selatan',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK382',
        name: 'Prita Himawan',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-2345-9988',
        location: {
          address: 'Jl. Gubernur Soebarjo Rt 01/02 No. 5',
          city: 'Banjarmasin',
          province: 'Kalimantan Selatan',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK383',
        name: 'Probowati',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-7878-4321',
        location: {
          address: 'Jl. Gandapura Rt 03/02 No. 01',
          city: 'Banjarmasin',
          province: 'Kalimantan Selatan',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK384',
        name: 'Putra Loak',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-2345-5151',
        location: {
          address: 'Jl. Rajawali Raya Rt 05/02 No. 15',
          city: 'Banjarmasin',
          province: 'Kalimantan Selatan',
          country: 'Indonesia'
        }
      }
    ]
  }
}
