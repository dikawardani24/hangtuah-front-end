import { HangtuahOrganization } from '../../hangtuah-org-generator';
import { Cabang, KepalaInstansi, WakilKepalaInstansi, InstansiType, JabatanInstansi, Manager, Staff } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { Injectable } from '@angular/core';
import { DataPusat } from '../pusat';
import { DataSDMarsudi } from '../../schools/sd/sd-marsudi';
import { DataSMPKurnia } from '../../schools/smp/smp-kurnia';
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

  constructor(
    private dataPusat: DataPusat,
    private dataSdMarsudi: DataSDMarsudi,
    private dataSdTaraKinata: DataSDTarakinata,
    private dataSmpKurnia: DataSMPKurnia,
    private dataSmpNugraha: DataSMPNugraha,
    private dataSmaCitraKasih: SmaCitraKasihData,
    private dataSmkBerkarya: DataSMKBerkarya,
    private dataSmkCitraBangsa: DataSMKCitraBangsa
  ) {
    super()
  }

  getInstansi(): Cabang {
    return {
      id: 7,
      name: 'Cabang Jakarta',
      type: InstansiType.CABANG,
      pusat: this.dataPusat.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Hang Lekir Rt 06/02 No. 10',
        city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KPC7',
      name: 'Adhi Susani',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-1999-4000',
      location: {
        address: 'Jl. Kendal Rt 01/02 No. 32',
        city: 'Jakarta Timur',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKPC7',
      name: 'Adelia Sumantrie',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-2345-0034',
      location: {
        address: 'Jl. Surabaya Rt 014/02 No. 10',
        city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
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
          country: 'Indonesia'
        }
      },
      {
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
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
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
          country: 'Indonesia'
        }
      },
      {
        nik: 'SKC72',
        name: 'Sri Hendarsa',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-4466-3210',
        location: {
          address: 'Jl. Melati Rt 01/02 No. 5',
          city: 'Jakarta Timur',
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SKC43',
        name: 'Ryan Hidayat',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-5511-0001',
        location: {
          address: 'Jl. Permata Rt 03/02 No. 01',
          city: 'Jakarta Barat',
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      },
      {
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
