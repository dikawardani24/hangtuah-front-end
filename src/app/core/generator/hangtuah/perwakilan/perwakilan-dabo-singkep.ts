import { InstansiType, JabatanInstansi, KepalaInstansi, Manager, Perwakilan, Staff, WakilKepalaInstansi } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { CabangTanjungPinang } from '../cabang/cabang-tanjung-pinang';


export class PerwakilanDaboSingkep extends DataInstansi<Perwakilan> {
  constructor(private cabangTanjungPinang: CabangTanjungPinang) {
    super()
  }

  getInstansi(): Perwakilan {
    return {
      id: 14,
      name: 'Perwakilan Dabo Singkep',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangTanjungPinang.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Raya Segang Rt 01/02 No. 11',
        city: 'Lingga',
        province: 'Kepulauan Riau',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK14',
      name: 'Gilang Bagaskara',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-1100-0891',
      location: {
        address: 'Jl. Garuda Rt 01/02 No. 20',
        city: 'Lingga',
        province: 'Kepulauan Riau',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK14',
      name: 'Gima Ahmed',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-5221-9911',
      location: {
        address: 'Jl. Navigasi Rt 01/02 No. 1',
        city: 'Lingga',
        province: 'Kepulauan Riau',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK141',
        name: 'Giska Wibowo',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-8801-0230',
        location: {
          address: 'Jl. Hangkasturi Rt 01/02 No. 13',
          city: 'Lingga',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS142',
        name: 'Gita Amelia',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0873-4412-3233',
        location: {
          address: 'Jl. Pertanian Rt 01/02 No. 3A',
          city: 'Lingga',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK141',
        name: 'Cassandra Santoso',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0876-0002-0110',
        location: {
          address: 'Jl. Kartini Rt 01/02 No. 12',
          city: 'Lingga',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK142',
        name: 'Gunawan Adi',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-0555-3210',
        location: {
          address: 'Jl. Bukit Kapitan Rt 01/02 No. 5',
          city: 'Lingga',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK143',
        name: 'Guntur Hadinata',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-5599-1901',
        location: {
          address: 'Jl. Pagoda Rt 03/02 No. 01',
          city: 'Lingga',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK144',
        name: 'Hafid Utami',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-7778-0002',
        location: {
          address: 'Jl. Bukit Ubun Rt 05/02 No. 15',
          city: 'Lingga',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      }
    ]
  }
}
