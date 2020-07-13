import { Perwakilan, InstansiType, KepalaInstansi, JabatanInstansi, WakilKepalaInstansi, Manager, Staff } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { CabangPadang } from '../cabang/cabang-padang';



export class PerwakilanBengkulu extends DataInstansi<Perwakilan> {
  constructor(private cabangPadang: CabangPadang) {
    super()
  }

  getInstansi(): Perwakilan {
    return {
      id: 5,
      name: 'Perwakilan Bengkulu',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangPadang.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Jenggalu Rt 01/02 No. 11',
        city: 'Bengkulu',
        province: 'Bengkulu',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK5',
      name: 'Helmi Charisma',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-3242-0891',
      location: {
        address: 'Jl. Fatmawati Rt 01/02 No. 20',
        city: 'Bengkulu',
        province: 'Bengkulu',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK5',
      name: 'Priyono Wicaksono',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-2345-9911',
      location: {
        address: 'Jl. Abidin Rt 01/02 No. 1',
        city: 'Bengkulu',
        province: 'Bengkulu',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK51',
        name: 'Aliuddin',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-34567-0230',
        location: {
          address: 'Jl. Wijaya Kusuma Rt 01/02 No. 13',
          city: 'Bengkulu',
        province: 'Bengkulu',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS52',
        name: 'Alkhansas',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0873-4001-3233',
        location: {
          address: 'Jl. Mahoni Rt 01/02 No. 3A',
          city: 'Bengkulu',
          province: 'Bengkulu',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK51',
        name: 'Afrizal Alvian',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0876-5432-1998',
        location: {
          address: 'Jl. Teratai Rt 01/02 No. 12',
          city: 'Bengkulu',
          province: 'Bengkulu',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK52',
        name: 'Bimatama',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-9014-3210',
        location: {
          address: 'Jl. Meranti Rt 01/02 No. 5',
          city: 'Bengkulu',
          province: 'Bengkulu',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK53',
        name: 'Soni Wibowo',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-5432-1901',
        location: {
          address: 'Jl. Cendana Rt 03/02 No. 01',
          city: 'Bengkulu',
          province: 'Bengkulu',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK54',
        name: 'Indra Santosa',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-1200-0002',
        location: {
          address: 'Jl. Sepakat Rt 05/02 No. 15',
          city: 'Bengkulu',
          province: 'Bengkulu',
          country: 'Indonesia'
        }
      }
    ]
  }
}
