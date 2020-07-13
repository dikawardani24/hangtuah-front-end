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
export class PerwakilanCirebon extends DataInstansi<Perwakilan> {
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
      id: 10,
      name: 'Perwakilan Cirebon',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangJakarta.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Merapi Mas Rt 01/02 No. 11',
        city: 'Cirebon',
        province: 'Jawa Barat',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK10',
      name: 'Anondo Wicaksono',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-1101-0891',
      location: {
        address: 'Jl. Buana Rt 01/02 No. 20',
        city: 'Cirebon',
        province: 'Jawa Barat',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK10',
      name: 'Wirawan',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-1999-9911',
      location: {
        address: 'Jl. Kecapi Rt 01/02 No. 1',
        city: 'Cirebon',
        province: 'Jawa Barat',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK101',
        name: 'Annisa Carity',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-1181-9835',
        location: {
          address: 'Jl. Dukuh Semar Rt 01/02 No. 13',
          city: 'Cirebon',
          province: 'Jawa Barat',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS102',
        name: 'Anugerah Abadi',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0873-1113-3233',
        location: {
          address: 'Jl. Ahmad Yani Rt 01/02 No. 3A',
          city: 'Cirebon',
          province: 'Jawa Barat',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK101',
        name: 'Ardho Setiadharma',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0876-4455-0110',
        location: {
          address: 'Jl. Jalak I Rt 01/02 No. 12',
          city: 'Cirebon',
          province: 'Jawa Barat',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK102',
        name: 'Aribrata',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-0002-3210',
        location: {
          address: 'Jl. Nahkoda Rt 01/02 No. 5',
          city: 'Cirebon',
          province: 'Jawa Barat',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK103',
        name: 'Ariestaningrum',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-1122-4455',
        location: {
          address: 'Jl. Mangun Sari Rt 03/02 No. 01',
          city: 'Cirebon',
          province: 'Jawa Barat',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK104',
        name: 'Asika Suryanto',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-1133-0002',
        location: {
          address: 'Jl. Sultan Ageng Rt 05/02 No. 15',
          city: 'Cirebon',
          province: 'Jawa Barat',
          country: 'Indonesia'
        }
      }
    ]
  }
}
