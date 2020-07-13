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
export class PerwakilanTegal extends DataInstansi<Perwakilan> {
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
      id: 20,
      name: 'Perwakilan Tegal',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangSurabaya.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Kapten Ismail Rt 01/02 No. 11',
        city: 'Tegal',
        province: 'Jawa Tengah',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK20',
      name: 'Irma Novita',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-6677-0891',
      location: {
        address: 'Jl. Bahari Rt 01/02 No. 20',
        city: 'Tegal',
        province: 'Jawa Tengah',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK20',
      name: 'Irsad Gunawan',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0878-8800-5555',
      location: {
        address: 'Jl. Sudibyo Rt 01/02 No. 1',
        city: 'Tegal',
        province: 'Jawa Tengah',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK201',
        name: 'Saputra Wijaya',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-4499-0230',
        location: {
          address: 'Jl. Sultan Hasannudin Rt 01/02 No. 13',
          city: 'Tegal',
        province: 'Jawa Tengah',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS202',
        name: 'Rochmad Nugroho',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0873-0077-3233',
        location: {
          address: 'Jl. Kota Baru Rt 01/02 No. 3A',
          city: 'Tegal',
        province: 'Jawa Tengah',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK201',
        name: 'Ito Fiatur',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0878-0101-0110',
        location: {
          address: 'Jl. Cimahi Rt 01/02 No. 12',
          city: 'Tegal',
          province: 'Jawa Tengah',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK202',
        name: 'Michael Joan',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-6600-1111',
        location: {
          address: 'Jl. Sakti Rt 01/02 No. 5',
          city: 'Tegal',
          province: 'Jawa Tengah',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK203',
        name: 'Jaenal Nababan',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-0011-1901',
        location: {
          address: 'Jl. Gondangdia Rt 03/02 No. 01',
          city: 'Tegal',
          province: 'Jawa Tengah',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK204',
        name: 'Jamie Lin',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-6666-1112',
        location: {
          address: 'Jl. Raya Kepandean Rt 05/02 No. 15',
          city: 'Tegal',
          province: 'Jawa Tengah',
          country: 'Indonesia'
        }
      }
    ]
  }
}
