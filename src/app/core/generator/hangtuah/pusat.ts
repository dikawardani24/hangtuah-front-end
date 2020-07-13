import {
  Pusat,
  KepalaInstansi,
  WakilKepalaInstansi,
  InstansiType,
  JabatanInstansi,
  Manager,
  Staff
} from '../../_base/crud/models/hangtuah-organization';
import { SchoolData } from '../school-org-generator';
import { Injectable } from '@angular/core';
import { DataPaudBulan } from '../schools/paud/paud-bulan';
import { DataSDMarsudi } from '../schools/sd/sd-marsudi';
import { DataSMPKurnia } from '../schools/smp/smp-kurnia';
import { DataSMACitraKasih } from '../schools/sma/sma-citrakasih';
import { DataSMKBerkarya } from '../schools/smk/smk-berkarya';
import { DataSMKCitraBangsa } from '../schools/smk/smk-citrabangsa';
import { DataInstansi } from './data-hangtuah';

@Injectable()
export class DataPusat extends DataInstansi<Pusat> {
  constructor(
    private dataPaudBulan: DataPaudBulan,
    private dataSdMarsudi: DataSDMarsudi,
    private dataSmpKurnia: DataSMPKurnia,
    private dataSmaCitraKasih: DataSMACitraKasih,
    private dataSmkBerkarya: DataSMKBerkarya,
    private dataSmkCitraBangsa: DataSMKCitraBangsa
  ) {
    super()
  }

  getInstansi(): Pusat {
    return {
      id: 41,
      name: 'Binaan PP YTH',
      type: InstansiType.PUSAT,
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Kornea Rt 01/02 No. 115',
        city: 'Jakarta Utara',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KPS1',
      name: 'Adrian Belawan',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-2345-3233',
      location: {
        address: 'Jl. Kornea Rt 01/02 No. 1A',
        city: 'Jakarta Utara',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKPS1',
      name: 'Siti Khairudin',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-2345-3241',
      location: {
        address: 'Jl. Kornea Rt 01/02 No. 2A',
        city: 'Jakarta Utara',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MPS1',
        name: 'Heru Prasetiya',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0873-2345-3233',
        location: {
          address: 'Jl. Kornea Rt 01/02 No. 3A',
          city: 'Jakarta Utara',
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS2',
        name: 'Nurbaya',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0873-4534-3233',
        location: {
          address: 'Jl. Kornea Rt 01/02 No. 3A',
          city: 'Jakarta Utara',
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SPS1',
        name: 'Jumadi Akhir',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0873-4563-3233',
        location: {
          address: 'Jl. Kornea Rt 01/02 No. 4A',
          city: 'Jakarta Utara',
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SPS2',
        name: 'Johny Utama',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0873-2345-3322',
        location: {
          address: 'Jl. Kornea Rt 01/02 No. 5A',
          city: 'Jakarta Utara',
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SPS3',
        name: 'Kahar',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-2345-3233',
        location: {
          address: 'Jl. Kornea Rt 01/02 No. 6A',
          city: 'Jakarta Utara',
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SPS4',
        name: 'Charly Inka',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0873-2345-3233',
        location: {
          address: 'Jl. Kornea Rt 01/02 No. 7A',
          city: 'Jakarta Utara',
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListSchoolData(): SchoolData[] {
    return [
      this.dataPaudBulan,
      this.dataSdMarsudi,
      this.dataSmpKurnia,
      this.dataSmaCitraKasih,
      this.dataSmkBerkarya,
      this.dataSmkCitraBangsa
    ]
  }
}
