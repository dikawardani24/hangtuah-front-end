import { InstansiType, JabatanInstansi, KepalaInstansi, Manager, Perwakilan, Staff, WakilKepalaInstansi } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { DataCabangKupang } from '../cabang/cabang-kupang';
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
export class PerwakilanMataram extends DataInstansi<Perwakilan> {
  constructor(private cabangKupang: DataCabangKupang,
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
      id: 27,
      name: 'Perwakilan Mataram',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangKupang.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Bung Karno Rt 01/02 No. 55',
        city: 'Mataram',
        province: 'Nusa Tenggara Barat',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK27',
      name: 'Maliki Hamzah',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0879-0303-8181',
      location: {
        address: 'Jl. Pejanggik Rt 01/02 No. 20',
        city: 'Mataram',
        province: 'Nusa Tenggara Barat',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK27',
      name: 'Marcel Carolin',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0878-1818-0202',
      location: {
        address: 'Jl. Guru Bangkol Rt 01/02 No. 1',
        city: 'Mataram',
        province: 'Nusa Tenggara Barat',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK271',
        name: 'Maquis Ariani',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-7171-4646',
        location: {
          address: 'Jl. Prabu Rangkasari Rt 01/02 No. 13',
          city: 'Mataram',
          province: 'Nusa Tenggara Barat',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS272',
        name: 'Maria Puspa',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0878-9393-1313',
        location: {
          address: 'Jl. Gora 1 Rt 01/02 No. 3A',
          city: 'Mataram',
          province: 'Nusa Tenggara Barat',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK271',
        name: 'Mariyam Wang',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0878-0440-0110',
        location: {
          address: 'Jl. Sultan Kaharudin Rt 01/02 No. 12',
          city: 'Mataram',
          province: 'Nusa Tenggara Barat',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK272',
        name: 'Marthen Silalahi',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-0505-9988',
        location: {
          address: 'Jl. Panca usaha Rt 01/02 No. 5',
          city: 'Mataram',
          province: 'Nusa Tenggara Barat',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK273',
        name: 'Heri Ipin',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-5566-0202',
        location: {
          address: 'Jl. Diponegoro Rt 03/02 No. 01',
          city: 'Mataram',
          province: 'Nusa Tenggara Barat',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK274',
        name: 'Trimo Wahyu',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-8484-5151',
        location: {
          address: 'Jl. Langko Rt 05/02 No. 15',
          city: 'Mataram',
          province: 'Nusa Tenggara Barat',
          country: 'Indonesia'
        }
      }
    ]
  }
}
