import { Perwakilan, InstansiType, KepalaInstansi, JabatanInstansi, WakilKepalaInstansi, Manager, Staff } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { CabangBelawan } from '../cabang/cabang-belawan';


export class PerwakilanDumai extends DataInstansi<Perwakilan> {
  constructor(private cabangBelawan: CabangBelawan) {
    super()
  }

  getInstansi(): Perwakilan {
    return {
      id: 3,
      name: 'Perwakilan Dumai',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangBelawan.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Hang Tuah Rt 01/02 No. 27',
        city: 'Dumai',
        province: 'Riau',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK3',
      name: 'John Iskandar',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0896-5432-0001',
      location: {
        address: 'Jl. Sultan Syarif Rt 01/02 No. 1',
        city: 'Dumai',
        province: 'Riau',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK3',
      name: 'Steven Johanson',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0821-0000-9999',
      location: {
        address: 'Jl. Pelabuhan Rt 06/02 No. 10',
        city: 'Dumai',
        province: 'Riau',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK31',
        name: 'Jessica Linda',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-0000-8888',
        location: {
          address: 'Jl. Wan Amir Rt 10/02 No. 11',
          city: 'Dumai',
          province: 'Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS32',
        name: 'Johanes Putra',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0878-8899-0002',
        location: {
          address: 'Jl. Sultan Hasannudin Rt 11/03 No. 11',
          city: 'Dumai',
          province: 'Riau',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK31',
        name: 'Putri Lestari',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0877-0000-1234',
        location: {
          address: 'Jl. Ratu Sima Rt 05/02 No. 22',
          city: 'Dumai',
          province: 'Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK32',
        name: 'Jonathan Gunadi',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-9999-0021',
        location: {
          address: 'Jl. Pangeran Diponegoro Rt 10/02 No. 99',
          city: 'Dumai',
          province: 'Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK33',
        name: 'Fauzi Dorina',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0897-4444-5432',
        location: {
          address: 'Jl. Sultan Mohammad Amin Rt 03/02 No. 88',
          city: 'Dumai',
          province: 'Riau',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK34',
        name: 'Joel Himawan',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-8899-0022',
        location: {
          address: 'Jl. Kartini Rt 05/04 No. 23',
          city: 'Dumai',
          province: 'Riau',
          country: 'Indonesia'
        }
      }
    ]
  }
}
