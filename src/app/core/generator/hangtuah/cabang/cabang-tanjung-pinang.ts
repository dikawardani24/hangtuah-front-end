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
export class CabangTanjungPinang extends DataInstansi<Cabang> {

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
      id: 1,
      name: 'Cabang Tanjung Pinang',
      type: InstansiType.CABANG,
      pusat: this.dataPusat.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. D.I. Pandjaitan Rt 01/02 No. 10',
        city: 'Tanjung Pinang',
        province: 'Kep. Riau',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KPC11',
      name: 'Agus Tjandra',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-1452-3425',
      location: {
        address: 'Jl. Bukit Bestari Rt 01/02 No. 11',
        city: 'Tanjung Pinang',
        province: 'Kep. Riau',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKPC11',
      name: 'Theodora',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-2345-5895',
      location: {
        address: 'Jl. Harmoko I Rt 01/02 No. 2A',
        city: 'Tanjung Pinang',
        province: 'Kep. Riau',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MKC111',
        name: 'Xaverius Rahardjo',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-9900-6666',
        location: {
          address: 'Jl. Menur Rt 10/02 No. 11',
          city: 'Tanjung Pinang',
         province: 'Kep. Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MKC112',
        name: 'Nurry Agus',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0878-8811-0890',
        location: {
          address: 'Jl. Wonosari Rt 11/03 No. 11',
          city: 'Tanjung Pinang',
          province: 'Kep. Riau',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SKC111',
        name: 'Ramli Alphany',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0878-5432-1034',
        location: {
          address: 'Jl. Suka Jaya Rt 01/02 No. 12',
          city: 'Tanjung Pinang',
          province: 'Kep. Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SKC112',
        name: 'Rifaldi',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-0043-3210',
        location: {
          address: 'Jl. Ilham Rt 01/02 No. 5',
          city: 'Tanjung Pinang',
          province: 'Kep. Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SKC113',
        name: 'Zaky Luthfi',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-5552-4421',
        location: {
          address: 'Jl. Cenderawasih Rt 03/02 No. 23',
          city: 'Tanjung Pinang',
          province: 'Kep. Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SKC114',
        name: 'Syamil Hidayatullah',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-8810-2002',
        location: {
          address: 'Jl. Bukit Asri Rt 05/02 No. 2',
          city: 'Tanjung Pinang',
          province: 'Kep. Riau',
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
