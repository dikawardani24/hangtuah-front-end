import { Perwakilan, InstansiType, KepalaInstansi, JabatanInstansi, WakilKepalaInstansi, Manager, Staff } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { CabangJakarta } from '../cabang/cabang-jakarta';



export class PerwakilanLampung extends DataInstansi<Perwakilan> {
  constructor(private cabangJakarta: CabangJakarta) {
    super()
  }

  getInstansi(): Perwakilan {
    return {
      id: 8,
      name: 'Perwakilan Lampung',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangJakarta.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Anak Ratu Aji Rt 01/02 No. 11',
        city: 'Lampung',
        province: 'Lampung',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK8',
      name: 'Novia Lestari',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-9670-0891',
      location: {
        address: 'Jl. Bakauheni Rt 01/02 No. 20',
        city: 'Lampung',
        province: 'Lampung',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK8',
      name: 'Wirawan',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-0110-9911',
      location: {
        address: 'Jl. Lintas Sumatera Rt 01/02 No. 1',
        city: 'Lampung',
        province: 'Lampung',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK81',
        name: 'Wiranto',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-6251-9835',
        location: {
          address: 'Jl. Brawijaya Rt 01/02 No. 13',
          city: 'Lampung',
        province: 'Lampung',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS82',
        name: 'Ita Rosita',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0873-5643-3233',
        location: {
          address: 'Jl. Raya Kota Gajah Rt 01/02 No. 3A',
          city: 'Lampung',
          province: 'Lampung',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK81',
        name: 'Sardi Lembayung',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0876-0190-0110',
        location: {
          address: 'Jl. Buyut Ilir Rt 01/02 No. 12',
          city: 'Lampung',
          province: 'Lampung',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK82',
        name: 'Indah Suharti',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-1902-3210',
        location: {
          address: 'Jl. Raya Merapi Rt 01/02 No. 5',
          city: 'Lampung',
          province: 'Lampung',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK83',
        name: 'Sundari',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-1122-1901',
        location: {
          address: 'Jl. Sumber Agung Rt 03/02 No. 01',
          city: 'Lampung',
          province: 'Lampung',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK84',
        name: 'Iwan Mursini',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-2233-0002',
        location: {
          address: 'Jl. Kayu Agung Rt 05/02 No. 15',
          city: 'Lampung',
          province: 'Lampung',
          country: 'Indonesia'
        }
      }
    ]
  }
}
