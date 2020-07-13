import { Perwakilan, InstansiType, KepalaInstansi, JabatanInstansi, WakilKepalaInstansi, Manager, Staff } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { DataCabangJakarta } from '../cabang/cabang-jakarta';
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
export class PerwakilanPanjang extends DataInstansi<Perwakilan> {
  constructor(private cabangJakarta: DataCabangJakarta,
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
      id: 9,
      name: 'Perwakilan Panjang',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangJakarta.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Walakuba Rt 01/02 No. 11',
        city: 'Bandar Lampung',
        province: 'Lampung',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK9',
      name: 'Hanifah Noor',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-1001-0891',
      location: {
        address: 'Jl. Insinyur Sutami Rt 01/02 No. 20',
        city: 'Bandar Lampung',
        province: 'Lampung',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK9',
      name: 'Alberto',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-0990-9911',
      location: {
        address: 'Jl. Bahari Rt 01/02 No. 1',
        city: 'Bandar Lampung',
        province: 'Lampung',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK91',
        name: 'Amelia Surya',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-6226-9835',
        location: {
          address: 'Jl. Raya Suban Rt 01/02 No. 13',
          city: 'Bandar Lampung',
          province: 'Lampung',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS92',
        name: 'Andrean Sentani',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0873-5643-0019',
        location: {
          address: 'Jl. Selat Malaka Rt 01/02 No. 3A',
          city: 'Bandar Lampung',
          province: 'Lampung',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK91',
        name: 'Andi Budiman',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0876-0119-0110',
        location: {
          address: 'Jl. Selat Sunda Rt 01/02 No. 12',
          city: 'Bandar Lampung',
          province: 'Lampung',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK92',
        name: 'Juniarso Ambadar',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-1902-4560',
        location: {
          address: 'Jl. Kamboja Rt 01/02 No. 5',
          city: 'Bandar Lampung',
          province: 'Lampung',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK93',
        name: 'Sundari',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-4561-1901',
        location: {
          address: 'Jl. Ambon Rt 03/02 No. 01',
          city: 'Bandar Lampung',
          province: 'Lampung',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK94',
        name: 'Angelina Gunardi',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-2113-0002',
        location: {
          address: 'Jl. H. Sapri Rt 05/02 No. 15',
          city: 'Bandar Lampung',
          province: 'Lampung',
          country: 'Indonesia'
        }
      }
    ]
  }
}
