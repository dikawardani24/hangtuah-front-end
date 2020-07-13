import { InstansiType, JabatanInstansi, KepalaInstansi, Manager, Perwakilan, Staff, WakilKepalaInstansi } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { DataCabangSurabaya } from '../cabang/cabang-surabaya';
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
export class PerwakilanMalang extends DataInstansi<Perwakilan> {
  constructor(private cabangSurabaya: DataCabangSurabaya,
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
      id: 18,
      name: 'Perwakilan Malang',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangSurabaya.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. I.R. Rais Rt 01/02 No. 11',
        city: 'Malang',
        province: 'Jawa Timur',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK18',
      name: 'Hendrawan',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-1111-0891',
      location: {
        address: 'Jl. Muharto Rt 01/02 No. 20',
        city: 'Malang',
        province: 'Jawa Timur',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK18',
      name: 'Kusuma Harianto',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-2222-5555',
      location: {
        address: 'Jl. Raya Gadang Rt 01/02 No. 1',
        city: 'Malang',
        province: 'Jawa Timur',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK181',
        name: 'Henky Rogers',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-4444-0230',
        location: {
          address: 'Jl. Kawi Rt 01/02 No. 13',
          city: 'Malang',
          province: 'Jawa Timur',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS182',
        name: 'Heni Utami',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0873-7777-3233',
        location: {
          address: 'Jl. Sulfat Rt 01/02 No. 3A',
          city: 'Malang',
          province: 'Jawa Timur',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK181',
        name: 'Riady Johan',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0878-0077-0110',
        location: {
          address: 'Jl. Sawojajar Rt 01/02 No. 12',
          city: 'Malang',
          province: 'Jawa Timur',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK182',
        name: 'Harwaman',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0821-0444-1111',
        location: {
          address: 'Jl. Sunandar Rt 01/02 No. 5',
          city: 'Malang',
          province: 'Jawa Timur',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK183',
        name: 'Ifa Yassa',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-5555-1901',
        location: {
          address: 'Jl. Raya Gadang Rt 03/02 No. 01',
          city: 'Malang',
          province: 'Jawa Timur',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK184',
        name: 'Bintang Rizqi',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-0099-0002',
        location: {
          address: 'Jl. Supriadi Rt 05/02 No. 15',
          city: 'Malang',
          province: 'Jawa Timur',
          country: 'Indonesia'
        }
      }
    ]
  }
}
