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
export class CabangPadang extends DataInstansi<Cabang> {

  constructor(
    private dataPusat: DataPusat,
=======
import { DataSDTarakinata } from '../../schools/sd/sd-tarakinata';
import { DataSMPNugraha } from '../../schools/smp/smp-nugraha';
import { DataInstansi } from '../data-hangtuah';
import { SchoolData } from '../../school-org-generator';
import { DataPaudBulan } from '../../schools/paud/paud-bulan';
import { DataSMKBerkarya } from '../../schools/smk/smk-berkarya';
import { DataSMKCitraBangsa } from '../../schools/smk/smk-citrabangsa';

@Injectable()
export class DataCabangPadang extends DataInstansi<Cabang> {

  constructor(
    private dataPusat: DataPusat,
    private dataPaudBulan: DataPaudBulan,
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
    private dataSdMarsudi: DataSDMarsudi,
    private dataSdTaraKinata: DataSDTarakinata,
    private dataSmpKurnia: DataSMPKurnia,
    private dataSmpNugraha: DataSMPNugraha,
<<<<<<< HEAD
    private dataSmaCitraKasih: SmaCitraKasihData,
=======
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
    private dataSmkBerkarya: DataSMKBerkarya,
    private dataSmkCitraBangsa: DataSMKCitraBangsa
  ) {
    super()
  }

  getInstansi(): Cabang {
    return {
<<<<<<< HEAD
      id: 4,
=======
      id: 1,
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
      name: 'Cabang Padang',
      type: InstansiType.CABANG,
      pusat: this.dataPusat.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
<<<<<<< HEAD
        address: 'Jl. Bandar Damar Rt 01/02 No. 10',
        city: 'Padang',
        province: 'Sumatera Barat',
=======
        address: 'Jl. Kornea Rt 01/02 No. 10',
        city: 'Jakarta Utara',
        province: 'DKI Jakarta',
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
<<<<<<< HEAD
      nik: 'KPC4',
      name: 'Yola Ismail',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-3242-4000',
      location: {
        address: 'Jl. Dr. Sutomo Rt 01/02 No. 11',
        city: 'Padang',
        province: 'Sumatera Barat',
=======
      nik: 'KPS1',
      name: 'Susanto',
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
      nik: 'WKPC4',
      name: 'Listy Hartono',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-2345-5667',
      location: {
        address: 'Jl. Raya Ampang Rt 01=4/02 No. 10',
        city: 'Padang',
        province: 'Sumatera Barat',
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
      {
<<<<<<< HEAD
        nik: 'MKC41',
        name: 'Puput Putri',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-0000-6556',
        location: {
          address: 'Jl. Gajar Mada Rt 11/02 No. 11',
          city: 'Padang',
          province: 'Sumatera Barat',
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
        nik: 'MKC42',
        name: 'Ibnu Abbas',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0878-8899-0110',
        location: {
          address: 'Jl. Sultan Syahrir Rt 11/03 No. 11',
          city: 'Padang',
          province: 'Sumatera Barat',
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
        nik: 'SKC41',
        name: 'Abee Tripathi',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0878-5432-1441',
        location: {
          address: 'Jl. Durian Tarung Rt 01/02 No. 12',
          city: 'Padang',
         province: 'Sumatera Barat',
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
        nik: 'SKC42',
        name: 'Abraham Yudha',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-4466-3210',
        location: {
          address: 'Jl. K. Jua Rt 01/02 No. 5',
          city: 'Padang',
          province: 'Sumatera Barat',
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
          province: 'DKI Jakarta',
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
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
          address: 'Jl. Padang Basi Rt 03/02 No. 01',
          city: 'Padang',
         province: 'Sumatera Barat',
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
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
          country: 'Indonesia'
        }
      },
      {
<<<<<<< HEAD
        nik: 'SKC44',
        name: 'Abimanyu Sofyan',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-8810-1200',
        location: {
          address: 'Jl. Tanjung Rt 05/02 No. 15',
          city: 'Padang',
         province: 'Sumatera Barat',
          country: 'Indonesia'
        }
      }
=======
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
      this.dataSdMarsudi,
      this.dataSdTaraKinata,
      this.dataSmpKurnia,
      this.dataSmpNugraha,
      this.dataSmaCitraKasih,
      this.dataSmkBerkarya,
      this.dataSmkCitraBangsa
    ]
=======
    const listData: SchoolData[] = [
      this.dataSdMarsudi,
      this.dataPaudBulan,
      this.dataSdTaraKinata,
      this.dataSmpKurnia,
      this.dataSmpNugraha,
    ]

    for (let i = 0; i < 10; i++) {
      if (i % 2 === 0) {
        listData.push(this.dataSmpKurnia)
        listData.push(this.dataSmkBerkarya)
      } else {
        listData.push(this.dataSmpNugraha)
        listData.push(this.dataSmkCitraBangsa)
      }
    }

    return listData
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
  }

}
