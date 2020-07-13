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
export class CabangPadang extends DataInstansi<Cabang> {

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
      id: 4,
      name: 'Cabang Padang',
      type: InstansiType.CABANG,
      pusat: this.dataPusat.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Bandar Damar Rt 01/02 No. 10',
        city: 'Padang',
        province: 'Sumatera Barat',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KPC4',
      name: 'Yola Ismail',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-3242-4000',
      location: {
        address: 'Jl. Dr. Sutomo Rt 01/02 No. 11',
        city: 'Padang',
        province: 'Sumatera Barat',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
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
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
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
          country: 'Indonesia'
        }
      },
      {
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
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
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
          country: 'Indonesia'
        }
      },
      {
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
          address: 'Jl. Padang Basi Rt 03/02 No. 01',
          city: 'Padang',
         province: 'Sumatera Barat',
          country: 'Indonesia'
        }
      },
      {
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
