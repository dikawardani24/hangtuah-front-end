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
export class CabangAmbon extends DataInstansi<Cabang> {

  constructor(
    private dataPusat: DataPusat,
=======
import { DataSDTarakinata } from '../../schools/sd/sd-tarakinata';
import { DataSMPNugraha } from '../../schools/smp/smp-nugraha';
import { DataInstansi } from '../data-hangtuah';
import { SchoolData } from '../../school-org-generator';
import { DataSMKBerkarya } from '../../schools/smk/smk-berkarya';
import { DataSMKCitraBangsa } from '../../schools/smk/smk-citrabangsa';
import { DataSMAHercules } from '../../schools/sma/sma-hercules';
import { DataSMACitraKasih } from '../../schools/sma/sma-citrakasih';
import { DataTkAngkasa } from '../../schools/tk/tk-angkasa';
import { DataPaudBulan } from '../../schools/paud/paud-bulan';

@Injectable()
export class DataCabangAmbon extends DataInstansi<Cabang> {

  constructor(
    private dataPusat: DataPusat,
    private dataPaud1: DataPaudBulan,
    private dataTk1: DataTkAngkasa,
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
    private dataSdMarsudi: DataSDMarsudi,
    private dataSdTaraKinata: DataSDTarakinata,
    private dataSmpKurnia: DataSMPKurnia,
    private dataSmpNugraha: DataSMPNugraha,
<<<<<<< HEAD
    private dataSmaCitraKasih: SmaCitraKasihData,
    private dataSmkBerkarya: DataSMKBerkarya,
    private dataSmkCitraBangsa: DataSMKCitraBangsa
=======
    private dataSmk1: DataSMKBerkarya,
    private dataSmk2: DataSMKCitraBangsa,
    private dataSma1: DataSMACitraKasih,
    private dataSma2: DataSMAHercules
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
      name: 'Cabang Ambon',
      type: InstansiType.CABANG,
      pusat: this.dataPusat.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
<<<<<<< HEAD
        address: 'Jl. Rijali Rt 06/02 No. 10',
        city: 'Ambon',
        province: 'Maluku',
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
        city: 'Ambon',
        province: 'Maluku',
=======
      nik: 'KPS1',
      name: 'Betaria Sonata',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-3242-3233',
      location: {
        address: 'Jl. Ahmad Yani Rt 01/02 No. 11',
        city: 'Ambon',
        province: 'Sumatra Selatan',
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
        city: 'Ambon',
        province: 'Maluku',
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
<<<<<<< HEAD
    return [
=======
    const listData: SchoolData[] = [
      this.dataPaud1,
      this.dataTk1,
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
      this.dataSdMarsudi,
      this.dataSdTaraKinata,
      this.dataSmpKurnia,
      this.dataSmpNugraha,
<<<<<<< HEAD
      this.dataSmaCitraKasih,
      this.dataSmkBerkarya,
      this.dataSmkCitraBangsa
    ]
=======
    ]

    for (let i = 0; i < 20; i++) {
      if (i%2 === 0) {
        listData.push(this.dataSma1)
        listData.push(this.dataSmk1)
      } else {
        listData.push(this.dataSma2)
        listData.push(this.dataSmk2)
      }
    }
    return listData
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
  }

}
