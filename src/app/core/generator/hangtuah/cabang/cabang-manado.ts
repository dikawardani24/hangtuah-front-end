<<<<<<< HEAD
import { HangtuahOrganization } from '../../hangtuah-org-generator';
import { Cabang, KepalaInstansi, WakilKepalaInstansi, InstansiType, JabatanInstansi, Manager, Staff } from 'src/app/core/_base/crud/models/hangtuah-organization';
=======
import {
  Cabang,
  KepalaInstansi,
  WakilKepalaInstansi,
  InstansiType,
  JabatanInstansi,
  Manager,
  Staff
} from '../../../_base/crud/models/hangtuah-organization';
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
import { Injectable } from '@angular/core';
import { DataPusat } from '../pusat';
import { DataSDMarsudi } from '../../schools/sd/sd-marsudi';
import { DataSMPKurnia } from '../../schools/smp/smp-kurnia';
<<<<<<< HEAD
import { SmaCitraKasihData } from '../../schools/sma/sma-citrakasih';
import { DataSMKBerkarya } from '../../schools/smk/smk-berkarya';
import { DataSMKCitraBangsa } from '../../schools/smk/smk-citrabangsa';
import { DataSDTarakinata } from '../../schools/sd/sd-tarakinata';
import { DataSMPNugraha } from '../../schools/smp/smp-nugraha';
import { DataInstansi } from '../data-hangtuah';
import { extend } from 'lodash';
import { SchoolData } from '../../school-org-generator';

@Injectable()
export class CabangManado extends DataInstansi<Cabang> {
=======
import { DataSDTarakinata } from '../../schools/sd/sd-tarakinata';
import { DataSMPNugraha } from '../../schools/smp/smp-nugraha';
import { DataInstansi } from '../data-hangtuah';
import { SchoolData } from '../../school-org-generator';

@Injectable()
export class DataCabangManado extends DataInstansi<Cabang> {
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9

  constructor(
    private dataPusat: DataPusat,
    private dataSdMarsudi: DataSDMarsudi,
    private dataSdTaraKinata: DataSDTarakinata,
    private dataSmpKurnia: DataSMPKurnia,
<<<<<<< HEAD
    private dataSmpNugraha: DataSMPNugraha,
    private dataSmaCitraKasih: SmaCitraKasihData,
    private dataSmkBerkarya: DataSMKBerkarya,
    private dataSmkCitraBangsa: DataSMKCitraBangsa
=======
    private dataSmpNugraha: DataSMPNugraha
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
  ) {
    super()
  }

  getInstansi(): Cabang {
    return {
<<<<<<< HEAD
      id: 28,
=======
      id: 1,
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
      name: 'Cabang Manado',
      type: InstansiType.CABANG,
      pusat: this.dataPusat.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
<<<<<<< HEAD
        address: 'Jl. Martadinata Rt 06/02 No. 10',
        city: 'Manado',
        province: 'Sulawesi Utara',
=======
        address: 'Jl. Kornea Rt 01/02 No. 10',
        city: 'Manado',
        province: 'Sulawesi Tengah',
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
<<<<<<< HEAD
      nik: 'KPC28',
      name: 'Yola Ismail',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-3242-4000',
      location: {
        address: 'Jl. Dr. Sutomo Rt 01/02 No. 11',
        city: 'Manado',
        province: 'Sulawesi Utara',
=======
      nik: 'KPS1',
      name: 'Erika Christiani',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-3242-3233',
      location: {
        address: 'Jl. Ahmad Yani Rt 01/02 No. 11',
        city: 'Jakarta Utara',
        province: 'DKI Jakarta',
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
<<<<<<< HEAD
      nik: 'WKPC28',
      name: 'Adelia Sumantrie',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-2345-0034',
      location: {
        address: 'Jl. Surabaya Rt 014/02 No. 10',
        city: 'Manado',
        province: 'Sulawesi Utara',
=======
      nik: 'WKPS1',
      name: 'Marufat Khairudin',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-2345-3241',
      location: {
        address: 'Jl. Kornea Rt 01/02 No. 2A',
        city: 'Jakarta Utara',
        province: 'DKI Jakarta',
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
<<<<<<< HEAD

=======
      {
        nik: 'MPS1',
        name: 'Herman Jatmoko',
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
        name: 'Nani Jatmoko',
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
      }
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
    ]
  }

  getListStaff(): Staff[] {
    return [
<<<<<<< HEAD

=======
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
        name: 'Septian',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[1],
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
        nik: 'SPS4',
        name: 'Hartono',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0873-2345-3322',
        location: {
          address: 'Jl. Kornea Rt 01/02 No. 5A',
          city: 'Jakarta Utara',
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SPS5',
        name: 'Erlang',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[1],
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
        nik: 'SPS6',
        name: 'Sakti Satria',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0873-2345-3322',
        location: {
          address: 'Jl. Kornea Rt 01/02 No. 5A',
          city: 'Jakarta Utara',
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      },
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
    ]
  }

  getListSchoolData(): SchoolData[] {
    return [
      this.dataSdMarsudi,
      this.dataSdTaraKinata,
      this.dataSmpKurnia,
      this.dataSmpNugraha,
<<<<<<< HEAD
      this.dataSmaCitraKasih,
      this.dataSmkBerkarya,
      this.dataSmkCitraBangsa
=======
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
    ]
  }

}
