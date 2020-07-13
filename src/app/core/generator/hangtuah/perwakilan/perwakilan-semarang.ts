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
export class PerwakilanSemarang extends DataInstansi<Perwakilan> {
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
      id: 19,
      name: 'Perwakilan Semarang',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangSurabaya.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. MT. Haryono Rt 01/02 No. 11',
        city: 'Semarang',
        province: 'Jawa Tengah',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK19',
      name: 'Imelda Hadi',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-6621-0891',
      location: {
        address: 'Jl. Gajahmada Rt 01/02 No. 20',
        city: 'Semarang',
        province: 'Jawa Tengah',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK19',
      name: 'Ingrid Kalista',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-4477-5555',
      location: {
        address: 'Jl. Dokter Cipto Rt 01/02 No. 1',
        city: 'Semarang',
        province: 'Jawa Tengah',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK191',
        name: 'Andrey Andoko',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-9911-0230',
        location: {
          address: 'Jl. Citarum Rt 01/02 No. 13',
          city: 'Semarang',
          province: 'Jawa Tengah',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS192',
        name: 'Bachtiar Lubis',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0878-0110-3233',
        location: {
          address: 'Jl. Raya Pantura Rt 01/02 No. 3A',
          city: 'Semarang',
          province: 'Jawa Tengah',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK191',
        name: 'Denni Santoso',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0878-7117-0110',
        location: {
          address: 'Jl. Coaster Rt 01/02 No. 12',
          city: 'Semarang',
          province: 'Jawa Tengah',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK192',
        name: 'Nita Yudianti',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-0400-1111',
        location: {
          address: 'Jl. Pengapon Rt 01/02 No. 5',
          city: 'Semarang',
          province: 'Jawa Tengah',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK193',
        name: 'Iriyanto',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-4452-1901',
        location: {
          address: 'Jl. Indrapasta Rt 03/02 No. 01',
          city: 'Semarang',
          province: 'Jawa Tengah',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK194',
        name: 'Rianawati',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-2233-0002',
        location: {
          address: 'Jl. Veteran Rt 05/02 No. 15',
          city: 'Semarang',
          province: 'Jawa Tengah',
          country: 'Indonesia'
        }
      }
    ]
  }
}
