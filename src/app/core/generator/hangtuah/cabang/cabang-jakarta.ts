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
export class CabangJakarta extends DataInstansi<Cabang> {
=======
import { DataSDTarakinata } from '../../schools/sd/sd-tarakinata';
import { DataSMPNugraha } from '../../schools/smp/smp-nugraha';
import { DataInstansi } from '../data-hangtuah';
import { SchoolData } from '../../school-org-generator';
import { DataSMACitraKasih } from '../../schools/sma/sma-citrakasih';
import { DataSMAHercules } from '../../schools/sma/sma-hercules';

@Injectable()
export class DataCabangJakarta extends DataInstansi<Cabang> {
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9

  constructor(
    private dataPusat: DataPusat,
    private dataSdMarsudi: DataSDMarsudi,
    private dataSdTaraKinata: DataSDTarakinata,
    private dataSmpKurnia: DataSMPKurnia,
    private dataSmpNugraha: DataSMPNugraha,
<<<<<<< HEAD
    private dataSmaCitraKasih: SmaCitraKasihData,
    private dataSmkBerkarya: DataSMKBerkarya,
    private dataSmkCitraBangsa: DataSMKCitraBangsa
=======
    private dataSmaCK: DataSMACitraKasih,
    private dataSmaHR: DataSMAHercules
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
  ) {
    super()
  }

  getInstansi(): Cabang {
    return {
<<<<<<< HEAD
      id: 7,
=======
      id: 1,
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
      name: 'Cabang Jakarta',
      type: InstansiType.CABANG,
      pusat: this.dataPusat.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
<<<<<<< HEAD
        address: 'Jl. Hang Lekir Rt 06/02 No. 10',
        city: 'Jakarta Selatan',
=======
        address: 'Jl. Kornea Rt 01/02 No. 10',
        city: 'Jakarta Timur',
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
        province: 'DKI Jakarta',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
<<<<<<< HEAD
      nik: 'KPC7',
      name: 'Adhi Susani',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-1999-4000',
      location: {
        address: 'Jl. Kendal Rt 01/02 No. 32',
        city: 'Jakarta Timur',
        province: 'DKI Jakarta',
=======
      nik: 'KPS1',
      name: 'Ahmad Dinejad',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-3242-3233',
      location: {
        address: 'Jl. Ahmad Yani Rt 01/02 No. 11',
        city: 'Bogor',
        province: 'Jawa Barat',
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
<<<<<<< HEAD
      nik: 'WKPC7',
      name: 'Adelia Sumantrie',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-2345-0034',
      location: {
        address: 'Jl. Surabaya Rt 014/02 No. 10',
        city: 'Jakarta Selatan',
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
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
        province: 'DKI Jakarta',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
<<<<<<< HEAD
        nik: 'MKC71',
        name: 'Adiet Santoso',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-1188-6556',
        location: {
          address: 'Jl. Cilandak KKO Rt 11/02 No. 11',
          city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
=======
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
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
          country: 'Indonesia'
        }
      },
      {
<<<<<<< HEAD
        nik: 'MKC72',
        name: 'Dharmaputra Wicaksono',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0878-8877-0110',
        location: {
          address: 'Jl. Gatot Subroto Rt 11/03 No. 11',
          city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
=======
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
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
<<<<<<< HEAD
        nik: 'SKC71',
        name: 'Adnan Agus',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0878-5432-7890',
        location: {
          address: 'Jl. Kemang I Rt 01/02 No. 12',
          city: 'Jakarta Selatan',
         province: 'DKI Jakarta',
=======
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
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
          country: 'Indonesia'
        }
      },
      {
<<<<<<< HEAD
        nik: 'SKC72',
        name: 'Sri Hendarsa',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-4466-3210',
        location: {
          address: 'Jl. Melati Rt 01/02 No. 5',
          city: 'Jakarta Timur',
=======
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
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      },
      {
<<<<<<< HEAD
        nik: 'SKC43',
        name: 'Ryan Hidayat',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-5511-0001',
        location: {
          address: 'Jl. Permata Rt 03/02 No. 01',
          city: 'Jakarta Barat',
=======
        nik: 'SPS4',
        name: 'Hartono',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0873-2345-3322',
        location: {
          address: 'Jl. Kornea Rt 01/02 No. 5A',
          city: 'Jakarta Utara',
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      },
      {
<<<<<<< HEAD
        nik: 'SKC74',
        name: 'Hamonangan Simanjuntak',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-9980-1200',
        location: {
          address: 'Jl. Moh. Hatta Rt 05/02 No. 15',
          city: 'Jakarta Barat',
         province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      }
=======
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

    for (let i = 0; i < 50; i++) {
      if (i%2 === 0) {
        listData.push(this.dataSmaCK)
      } else {
        listData.push(this.dataSmaHR)
      }
    }
    return listData
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
  }

}
