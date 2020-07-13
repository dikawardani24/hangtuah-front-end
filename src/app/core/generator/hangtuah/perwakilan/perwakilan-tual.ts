import { InstansiType, JabatanInstansi, KepalaInstansi, Manager, Perwakilan, Staff, WakilKepalaInstansi } from 'src/app/core/_base/crud/models/hangtuah-organization';
import { DataInstansi } from '../data-hangtuah';
import { CabangAmbon } from '../cabang/cabang-ambon';





export class PerwakilanTual extends DataInstansi<Perwakilan> {
  constructor(private cabangAmbon: CabangAmbon) {
    super()
  }

  getInstansi(): Perwakilan {
    return {
      id: 31,
      name: 'Perwakilan Tual',
      type: InstansiType.PERWAKILAN,
      cabang: this.cabangAmbon.getInstansi(),
      listSekolah: this.getListSekolah(),
      location: {
        address: 'Jl. Ke Dullah Rt 01/02 No. 55',
        city: 'Tual',
        province: 'Maluku',
        country: 'Indonesia'
      }
    }
  }

  getKepalaInstansi(): KepalaInstansi {
    return {
      nik: 'KWK31',
      name: 'Dyah Rofik',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.DIRUT,
      phoneNumber: '0879-0101-8181',
      location: {
        address: 'Jl. Mutiara Rt 01/02 No. 20',
        city: 'Tual',
        province: 'Maluku',
        country: 'Indonesia'
      }
    }
  }

  getWakilKepalaInstansi(): WakilKepalaInstansi {
    return {
      nik: 'WKWK31',
      name: 'Bima Januri',
      instansi: this.getInstansi(),
      jabatan: JabatanInstansi.WA_DIRUT,
      kepala: this.getKepalaInstansi(),
      phoneNumber: '0878-0404-0202',
      location: {
        address: 'Jl. Dihir Rt 01/02 No. 1',
        city: 'Tual',
        province: 'Maluku',
        country: 'Indonesia'
      }
    }
  }

  getListManager(): Manager[] {
    return [
      {
        nik: 'MWK311',
        name: 'Fajar Wijaya',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0812-5757-4646',
        location: {
          address: 'Jl. Said Perintah Rt 01/02 No. 13',
          city: 'Tual',
          province: 'Maluku',
          country: 'Indonesia'
        }
      },
      {
        nik: 'MPS312',
        name: 'Akbar Ilman',
        jabatan: JabatanInstansi.MANAGER,
        wakilKepala: this.getWakilKepalaInstansi(),
        instansi: this.getInstansi(),
        phoneNumber: '0878-0099-1313',
        location: {
          address: 'Jl. Pattimura Rt 01/02 No. 3A',
          city: 'Tual',
          province: 'Maluku',
          country: 'Indonesia'
        }
      }
    ]
  }

  getListStaff(): Staff[] {
    return [
      {
        nik: 'SWK311',
        name: 'Karim Jumhari',
        jabatan: JabatanInstansi.STAFF,
        manager: this.getListManager()[0],
        instansi: this.getInstansi(),
        phoneNumber: '0878-0808-0110',
        location: {
          address: 'Jl. Baru Lipto Rt 01/02 No. 12',
          city: 'Tual',
          province: 'Maluku',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK312',
        name: 'Irfan Abdillah',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[0],
        phoneNumber: '0878-0111-9988',
        location: {
          address: 'Jl. Dr Leimena Rt 01/02 No. 5',
          city: 'Tual',
          province: 'Maluku',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK313',
        name: 'Dion Fahnaz',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0896-7676-1111',
        location: {
          address: 'Jl. Sasuit Tubun Rt 03/02 No. 01',
          city: 'Tual',
          province: 'Maluku',
          country: 'Indonesia'
        }
      },
      {
        nik: 'SWK314',
        name: 'Nassar Muchtar',
        jabatan: JabatanInstansi.STAFF,
        instansi: this.getInstansi(),
        manager: this.getListManager()[1],
        phoneNumber: '0878-9119-5151',
        location: {
          address: 'Jl. Dullar=h Raya Rt 05/02 No. 15',
          city: 'Tual',
          province: 'Maluku',
          country: 'Indonesia'
        }
      }
    ]
  }
}
