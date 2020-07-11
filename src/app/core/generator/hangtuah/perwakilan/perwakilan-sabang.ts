import { Perwakilan, InstansiType, KepalaInstansi, JabatanInstansi, WakilKepalaInstansi, Manager, Staff } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { CabangBelawan } from '../cabang/cabang-belawan';


export class PerwakilanSabang extends DataInstansi<Perwakilan> {
  constructor(private cabangBelawan: CabangBelawan) {
    super()
  }

  getInstansi(): Perwakilan {
    return {
      id: 1,
      name: 'Perwakilan Sabang',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangBelawan.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Habibah Rt 01/02 No. 10',
        city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KPS1',
      name: 'Kiara Handoyo',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-3242-3233',
      location: {
        address: 'Jl. Habibah Rt 01/02 No. 20',
        city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKPS1',
      name: 'Syuaifi',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-2345-3241',
      location: {
        address: 'Jl. Habibah Rt 01/02 No. 1',
        city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [

    ]
  }

  getListStaff(): Staff[] {
    return [

    ]
  }
}
