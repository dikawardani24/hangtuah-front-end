import { InstansiType, JabatanInstansi, KepalaInstansi, Manager, Perwakilan, Staff, WakilKepalaInstansi } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { CabangTanjungPinang } from '../cabang/cabang-tanjung-pinang';





export class PerwakilanTanjungBalaiKarimun extends DataInstansi<Perwakilan> {
  constructor(private cabangTanjungPinang: CabangTanjungPinang) {
    super()
  }

  getInstansi(): Perwakilan {
    return {
      id: 15,
      name: 'Perwakilan Tanjung Balai Karimun',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangTanjungPinang.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Angkasa Rt 01/02 No. 99',
        city: 'Karimun',
        province: 'Kepulauan Riau',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK15',
      name: 'Fajar Hutomo',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-1122-0891',
      location: {
        address: 'Jl. Pramuka Rt 01/02 No. 20',
        city: 'Karimun',
        province: 'Kepulauan Riau',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK15',
      name: 'Fadhil Uda',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-2201-9911',
      location: {
        address: 'Jl. Musantara Rt 01/02 No. 21',
        city: 'Karimun',
        province: 'Kepulauan Riau',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK151',
        name: 'Fadli Muhammad',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-3301-0230',
        location: {
          address: 'Jl. Pramuka Rt 01/02 No. 13',
          city: 'Karimun',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS152',
        name: 'Hartawan',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0873-2331-3233',
        location: {
          address: 'Jl. Pendidikan Rt 01/02 No. 33',
          city: 'Karimun',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK151',
        name: 'Faisal Hamid',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0876-1552-0110',
        location: {
          address: 'Jl. Bukit Sidomulyo Rt 01/02 No. 12',
          city: 'Karimun',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK152',
        name: 'Faqih Imron',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-0133-3210',
        location: {
          address: 'Jl. Ahmad Yani Rt 01/02 No. 15',
          city: 'Karimun',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK153',
        name: 'Mahira Fanti',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-5889-1901',
        location: {
          address: 'Jl. Al Hidayah Rt 03/02 No. 01',
          city: 'Karimun',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK154',
        name: 'Hasyim Farid',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-3388-0002',
        location: {
          address: 'Jl. Mega Sedayu Rt 05/02 No. 15',
          city: 'Karimun',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      }
    ]
  }
}
