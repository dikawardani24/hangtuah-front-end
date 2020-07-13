import { InstansiType, JabatanInstansi, KepalaInstansi, Manager, Perwakilan, Staff, WakilKepalaInstansi } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { DataCabangManado } from '../cabang/cabang-manado';
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
export class PerwakilanGorontalo extends DataInstansi<Perwakilan> {
  constructor(private cabangManado: DataCabangManado,
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
      id: 29,
      name: 'Perwakilan Gorontalo',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangManado.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Prof. Dr. H. Jassin Rt 01/02 No. 55',
        city: 'Gorontalo',
        province: 'Gorontalo',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK29',
      name: 'Medina Fitri',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0879-9595-8181',
      location: {
        address: 'Jl. Jambura Rt 01/02 No. 20',
        city: 'Gorontalo',
        province: 'Gorontalo',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK29',
      name: 'Mega Meilisa',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0878-2424-0202',
      location: {
        address: 'Jl. Kenangan Rt 01/02 No. 1',
        city: 'Gorontalo',
        province: 'Gorontalo',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK291',
        name: 'Meika Merin',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-7444-4646',
        location: {
          address: 'Jl. Semangka Rt 01/02 No. 13',
          city: 'Gorontalo',
          province: 'Gorontalo',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS292',
        name: 'Alexandra Walter',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0878-0011-1313',
        location: {
          address: 'Jl. Nangka Rt 01/02 No. 3A',
          city: 'Gorontalo',
          province: 'Gorontalo',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK291',
        name: 'Michelle Arung',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0878-8787-0110',
        location: {
          address: 'Jl. Raja Eyato Rt 01/02 No. 12',
          city: 'Gorontalo',
          province: 'Gorontalo',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK292',
        name: 'Sarini Abdullah',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-0999-9988',
        location: {
          address: 'Jl. Dewi Sartika Rt 01/02 No. 5',
          city: 'Gorontalo',
          province: 'Gorontalo',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK293',
        name: 'Miriam Sahid',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-7676-0202',
        location: {
          address: 'Jl. Budi Utomo Rt 03/02 No. 01',
          city: 'Gorontalo',
          province: 'Gorontalo',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK294',
        name: 'Modena Syafiudin',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-9999-5151',
        location: {
          address: 'Jl. Moh. Yamin Rt 05/02 No. 15',
          city: 'Gorontalo',
          province: 'Gorontalo',
          country: 'Indonesia'
        }
      }
    ]
  }
}
