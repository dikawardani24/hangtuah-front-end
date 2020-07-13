import { Perwakilan, InstansiType, KepalaInstansi, JabatanInstansi, WakilKepalaInstansi, Manager, Staff } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { DataCabangBelawan } from '../cabang/cabang-belawan';
import { Injectable } from '@angular/core';
import { SchoolData } from '../../school-org-generator';
import { DataSDMarsudi } from '../../schools/sd/sd-marsudi';
import { DataSDTarakinata } from '../../schools/sd/sd-tarakinata';
import { DataSMPKurnia } from '../../schools/smp/smp-kurnia';
import { DataSMPNugraha } from '../../schools/smp/smp-nugraha';
import { DataSMACitraKasih } from '../../schools/sma/sma-citrakasih';
import { DataSMKBerkarya } from '../../schools/smk/smk-berkarya';
import { DataSMKCitraBangsa } from '../../schools/smk/smk-citrabangsa';

@Injectable()
export class DataPerwakilanSabang extends DataInstansi<Perwakilan> {
  constructor(
    private dataCabangBelawan: DataCabangBelawan,
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

  getInstansi(): Perwakilan {
    return {
      id: 2,
      name: 'Perwakilan Sabang',
      type: InstansiType.PERWAKILAN,
      cabang: this.dataCabangBelawan.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Habibah Rt 01/02 No. 10',
        city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK2',
      name: 'Ronald Iskak',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0873-3242-3233',
      location: {
        address: 'Jl. Habibah Rt 01/02 No. 20',
        city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK2',
      name: 'Puri Wongsonegoro',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0873-2345-3241',
      location: {
        address: 'Jl. Habibah Rt 01/02 No. 1',
        city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
<<<<<<< HEAD
        nik: 'MWK21',
        name: 'Aji Saputra',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-34567-0001',
        location: {
          address: 'Jl. Habibah Rt 01/02 No. 13',
          city: 'Jakarta Selatan',
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS22',
        name: 'Nurhalisa',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0873-4534-3233',
        location: {
          address: 'Jl. Purba Rt 01/02 No. 3A',
=======
        nik: 'MPS1',
        name: 'Heru Prasetiya',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0873-2345-3233',
        location: {
          address: 'Jl. Kornea Rt 01/02 No. 3A',
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
          city: 'Jakarta Utara',
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
<<<<<<< HEAD
      }
=======
      },
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
<<<<<<< HEAD
        nik: 'SWK21',
        name: 'Putra Nababan',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0876-5432-1000',
        location: {
          address: 'Jl. Manggis Rt 01/02 No. 12',
          city: 'Jakarta Timur',
=======
        nik: 'SPS1',
        name: 'Jumadi Akhir',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0873-4563-3233',
        location: {
          address: 'Jl. Kornea Rt 01/02 No. 4A',
          city: 'Jakarta Utara',
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      },
      {
<<<<<<< HEAD
        nik: 'SWK22',
        name: 'Andrea Gunawan',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-7654-3210',
        location: {
          address: 'Jl. Purnawarman Rt 01/02 No. 5',
          city: 'Jakarta Timur',
=======
        nik: 'SPS2',
        name: 'Johny Utama',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0873-2345-3322',
        location: {
          address: 'Jl. Kornea Rt 01/02 No. 5A',
          city: 'Jakarta Utara',
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      },
<<<<<<< HEAD
      {
        nik: 'SWK23',
        name: 'Rizky Akbar',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-5432-0001',
        location: {
          address: 'Jl. Matahari Rt 03/02 No. 01',
          city: 'Jakarta Barat',
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK24',
        name: 'Indra Santosa',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-8890-0002',
        location: {
          address: 'Jl. Sabang Rt 05/02 No. 15',
          city: 'Jakarta Selatan',
          province: 'DKI Jakarta',
          country: 'Indonesia'
        }
      }
=======
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
>>>>>>> 0545dd713cc8117d0463acbca4bca3c3c2b277a9
    ]
  }
}
