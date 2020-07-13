import { InstansiType, JabatanInstansi, KepalaInstansi, Manager, Perwakilan, Staff, WakilKepalaInstansi } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { DataCabangMakassar } from '../cabang/cabang-makassar';
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
export class PerwakilanKendari extends DataInstansi<Perwakilan> {
  constructor(private cabangMakassar: DataCabangMakassar,
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
      id: 25,
      name: 'Perwakilan Kendari',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangMakassar.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Budi Utomo Rt 01/02 No. 11',
        city: 'Kendari',
        province: 'Sulawesi Tenggara',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK25',
      name: 'Lupi Hapsah',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0879-0303-0891',
      location: {
        address: 'Jl. AH. Nasution Rt 01/02 No. 20',
        city: 'Kendari',
        province: 'Sulawesi Tenggara',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK25',
      name: 'Lury Enzo',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0878-1818-5555',
      location: {
        address: 'Jl. Malaka Rt 01/02 No. 1',
        city: 'Kendari',
        province: 'Sulawesi Tenggara',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK251',
        name: 'Lupita Prasetyo',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-7171-0230',
        location: {
          address: 'Jl. Sugianto Rt 01/02 No. 13',
          city: 'Kendari',
        province: 'Sulawesi Tenggara',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS252',
        name: 'Prasojo',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0878-9393-3233',
        location: {
          address: 'Jl. Lawata Rt 01/02 No. 3A',
          city: 'Kendari',
        province: 'Sulawesi Tenggara',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK251',
        name: 'Hadi Pradana',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0878-0606-0110',
        location: {
          address: 'Jl. Chairil Anwar Rt 01/02 No. 12',
          city: 'Kendari',
        province: 'Sulawesi Tenggara',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK252',
        name: 'Mada Lesmana',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-0505-4242',
        location: {
          address: 'Jl. Raden Suprapto Rt 01/02 No. 5',
          city: 'Kendari',
          province: 'Sulawesi Tenggara',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK253',
        name: 'Malika Amalia',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-6767-0202',
        location: {
          address: 'Jl. Dr. Sam Ratulangi Rt 03/02 No. 01',
          city: 'Kendari',
          province: 'Sulawesi Tenggara',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK254',
        name: 'Malla Latif',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-4141-5151',
        location: {
          address: 'Jl. Edi Sabara Rt 05/02 No. 15',
          city: 'Kendari',
          province: 'Sulawesi Tenggara',
          country: 'Indonesia'
        }
      }
    ]
  }
}
