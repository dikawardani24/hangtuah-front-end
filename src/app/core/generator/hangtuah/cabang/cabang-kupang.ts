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
} from 'src/app/core/_base/crud/models/hangtuah-organization';
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
import { Injectable } from '@angular/core';
import { DataPusat } from '../pusat';
import { DataSDMarsudi } from '../../schools/sd/sd-marsudi';
import { DataSMPKurnia } from '../../schools/smp/smp-kurnia';
<<<<<<< HEAD
import { SmaCitraKasihData } from '../../schools/sma/sma-citrakasih';
=======
import { DataSMACitraKasih } from '../../schools/sma/sma-citrakasih';
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
import { DataSMKBerkarya } from '../../schools/smk/smk-berkarya';
import { DataSMKCitraBangsa } from '../../schools/smk/smk-citrabangsa';
import { DataSDTarakinata } from '../../schools/sd/sd-tarakinata';
import { DataSMPNugraha } from '../../schools/smp/smp-nugraha';
import { DataInstansi } from '../data-hangtuah';
<<<<<<< HEAD
import { extend } from 'lodash';
import { SchoolData } from '../../school-org-generator';

@Injectable()
export class CabangKupang extends DataInstansi<Cabang> {
=======
import { SchoolData } from '../../school-org-generator';

@Injectable()
export class DataCabangKupang extends DataInstansi<Cabang> {
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9

  constructor(
    private dataPusat: DataPusat,
    private dataSdMarsudi: DataSDMarsudi,
    private dataSdTaraKinata: DataSDTarakinata,
    private dataSmpKurnia: DataSMPKurnia,
    private dataSmpNugraha: DataSMPNugraha,
<<<<<<< HEAD
    private dataSmaCitraKasih: SmaCitraKasihData,
=======
    private dataSmaCitraKasih: DataSMACitraKasih,
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
    private dataSmkBerkarya: DataSMKBerkarya,
    private dataSmkCitraBangsa: DataSMKCitraBangsa
  ) {
    super()
  }

  getInstansi(): Cabang {
    return {
<<<<<<< HEAD
      id: 26,
=======
      id: 1,
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
      name: 'Cabang Kupang',
      type: InstansiType.CABANG,
      pusat: this.dataPusat.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
<<<<<<< HEAD
        address: 'Jl. El Tari Rt 06/02 No. 10',
        city: 'Kupang',
        province: 'Nusa Tenggara Timur',
=======
        address: 'Jl. Kornea Rt 01/02 No. 10',
        city: 'Kupang',
        province: 'Nusa Tenggara Barat',
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
<<<<<<< HEAD
      nik: 'KPC26',
      name: 'Yola Ismail',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-3242-4000',
      location: {
        address: 'Jl. Dr. Sutomo Rt 01/02 No. 11',
        city: 'Kupang',
        province: 'Nusa Tenggara Timur',
=======
      nik: 'KPS1',
      name: 'Nani Wijaya',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-3242-3233',
      location: {
        address: 'Jl. Kornea Rt 01/02 No. 11',
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
      nik: 'WKPC26',
      name: 'Adelia Sumantrie',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-2345-0034',
      location: {
        address: 'Jl. Surabaya Rt 014/02 No. 10',
        city: 'Makassar',
        province: 'Sulawesi Selatan',
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
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
    ]
  }

  getListSchoolData(): SchoolData[] {
    return [
      this.dataSdMarsudi,
      this.dataSdTaraKinata,
      this.dataSmpKurnia,
      this.dataSmpNugraha,
      this.dataSmaCitraKasih,
      this.dataSmkBerkarya,
      this.dataSmkCitraBangsa
    ]
  }

}
