import {
  Cabang,
  KepalaInstansi,
  WakilKepalaInstansi,
  InstansiType,
  JabatanInstansi,
  Manager,
  Staff
} from 'src/app/core/_base/crud/models/hangtuah-organization';
import { Injectable } from '@angular/core';
import { DataPusat } from '../pusat';
import { DataSDMarsudi } from '../../schools/sd/sd-marsudi';
import { DataSMPKurnia } from '../../schools/smp/smp-kurnia';
import { DataSMACitraKasih } from '../../schools/sma/sma-citrakasih';
import { DataSMKBerkarya } from '../../schools/smk/smk-berkarya';
import { DataSMKCitraBangsa } from '../../schools/smk/smk-citrabangsa';
import { DataSDTarakinata } from '../../schools/sd/sd-tarakinata';
import { DataSMPNugraha } from '../../schools/smp/smp-nugraha';
import { DataInstansi } from '../data-hangtuah';
import { SchoolData } from '../../school-org-generator';

@Injectable()
export class DataCabangBelawan extends DataInstansi<Cabang> {

  constructor(
    private dataPusat: DataPusat,
    private dataSdMarsudi: DataSDMarsudi,
    private dataSdTaraKinata: DataSDTarakinata,
    private dataSmpKurnia: DataSMPKurnia,
    private dataSmpNugraha: DataSMPNugraha,
    private dataSmaCitraKasih: DataSMACitraKasih,
    private dataSmkBerkarya: DataSMKBerkarya,
    private dataSmkCitraBangsa: DataSMKCitraBangsa
  ) {
    super()
  }

  getInstansi(): Cabang {
    return {
      id: 1,
      name: 'Cabang Belawan',
      type: InstansiType.CABANG,
      pusat: this.dataPusat.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Indraputra Rt 01/02 No. 10',
        city: 'Medan',
        province: 'Sumatera Utara',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KPC1',
      name: 'Suhartono',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-3242-3425',
      location: {
        address: 'Jl. Yos Sudarso Rt 01/02 No. 11',
        city: 'Medan',
        province: 'Sumatera Utara',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKPC1',
      name: 'Theodora',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-2345-5555',
      location: {
        address: 'Jl. Belwan I Rt 01/02 No. 2A',
        city: 'Medan',
        province: 'Sumattera Utara',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
<<<<<<< HEAD
        nik: 'MKC11',
        name: 'Isna Malinda',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-0000-6666',
        location: {
          address: 'Jl. Deli I Rt 10/02 No. 11',
          city: 'Medan',
          province: 'Sumatera Utara',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MKC12',
        name: 'Tikawe',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0878-8899-0890',
        location: {
          address: 'Jl. Inderagiri Rt 11/03 No. 11',
          city: 'Medan',
          province: 'Sumatera Utara',
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
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
<<<<<<< HEAD
        nik: 'SKC11',
        name: 'Pupun Nasiha',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0878-5432-1000',
        location: {
          address: 'Jl. Serdang Rt 01/02 No. 12',
          city: 'Medan',
          province: 'Sumatera Utara',
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
        nik: 'SKC12',
        name: 'Zulfa Indraguna',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-0022-3210',
        location: {
          address: 'Jl. Kampar Rt 01/02 No. 5',
          city: 'Medan',
          province: 'Sumatera Utara',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SKC13',
        name: 'Rizal Bintoro',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-5552-0001',
        location: {
          address: 'Jl. Bliton Rt 03/02 No. 01',
          city: 'Medan',
          province: 'Sumatera Utara',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SKC14',
        name: 'Yan Charles',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-8810-2002',
        location: {
          address: 'Jl. Sabang Rt 05/02 No. 15',
          city: 'Medan',
          province: 'Sumatera Utara',
          country: 'Indonesia'
        }
      }
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
