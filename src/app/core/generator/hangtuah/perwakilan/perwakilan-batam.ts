import { InstansiType, JabatanInstansi, KepalaInstansi, Manager, Perwakilan, Staff, WakilKepalaInstansi } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { CabangTanjungPinang } from '../cabang/cabang-tanjung-pinang';
import { Injectable } from '@angular/core';
import { DataSDMarsudi } from '../../schools/sd/sd-marsudi';
import { DataSDTarakinata } from '../../schools/sd/sd-tarakinata';
import { DataSMPKurnia } from '../../schools/smp/smp-kurnia';
import { DataSMPNugraha } from '../../schools/smp/smp-nugraha';
import { DataSMACitraKasih } from '../../schools/sma/sma-citrakasih';
import { DataSMKBerkarya } from '../../schools/smk/smk-berkarya';
import { DataSMKCitraBangsa } from '../../schools/smk/smk-citrabangsa';
import { SchoolData } from '../../school-org-generator';





@Injectable()
export class PerwakilanBatam extends DataInstansi<Perwakilan> {
  constructor(
    private cabangTanjungPinang: CabangTanjungPinang,
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


  getInstansi(): Perwakilan {
    return {
      id: 13,
      name: 'Perwakilan Batam',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangTanjungPinang.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Sudirman Rt 01/02 No. 11',
        city: 'Batam',
        province: 'Kepulauan Riau',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK13',
      name: 'Febby Ardino',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-1133-0891',
      location: {
        address: 'Jl. Raja Fisabilillah Rt 01/02 No. 20',
        city: 'Batam',
        province: 'Kepulauan Riau',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK13',
      name: 'Andara Suzanna',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-2201-9911',
      location: {
        address: 'Jl. Yos Sudarso Rt 01/02 No. 1',
        city: 'Batam',
        province: 'Kepulauan Riau',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK131',
        name: 'Ferina Fergie',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-3301-0230',
        location: {
          address: 'Jl. Teuku Umar Rt 01/02 No. 13',
          city: 'Batam',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS132',
        name: 'Fernando Candia',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0873-9912-3233',
        location: {
          address: 'Jl. Pembangunan Rt 01/02 No. 3A',
          city: 'Batam',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK131',
        name: 'Fika Utami',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0878-1132-0110',
        location: {
          address: 'Jl. Sudirman Rt 01/02 No. 12',
          city: 'Batam',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK132',
        name: 'Ananto Arifin',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-0444-3210',
        location: {
          address: 'Jl. Raja Isa Rt 01/02 No. 5',
          city: 'Batam',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK133',
        name: 'Erik Idris',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-4315-1901',
        location: {
          address: 'Jl. Orchad Rt 03/02 No. 01',
          city: 'Batam',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK134',
        name: 'Maulana Fikri',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-9999-0002',
        location: {
          address: 'Jl. Hang Tuah Rt 05/02 No. 15',
          city: 'Batam',
          province: 'Kepulauan Riau',
          country: 'Indonesia'
        }
      }
    ]
  }
}
