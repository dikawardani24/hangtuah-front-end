import { Injectable } from '@angular/core'
import { SchoolData } from '../../school-org-generator'
import {
  KepalaSekolah,
  WaliKelas,
  Guru,
  WakilKepalaSekolah,
  Sekolah,
  SchoolType,
  JabatanSekolah,
  Kelas,
  KepalaTataUsaha,
  StaffTataUsaha
} from '../../../_base/crud/models/school-organization'
import { DataTK } from './tk'

@Injectable()
export class DataTkAngkasa extends DataTK  {
  getKepalaTataUsaha(): KepalaTataUsaha {
    return {
      nik: 'KPTU1234',
      name: 'Budiawan',
      jabatan: JabatanSekolah.KEPALA_TU,
      phoneNumber: '0873-6277-5423',
      sekolah: this.getSekolah(),
      location: {
        address: 'Jl. Pangeran Diponegoro Rt 011/06 No. 110B',
        city: 'Jakarta Selatan',
        country: 'Indonesia',
        province: 'DKI Jakarta'
      }
    }
  }

  getListStaffTataUsaha(): StaffTataUsaha[] {
    return [
      {
        nik: 'STU878293',
        name: 'Sumartini',
        jabatan: JabatanSekolah.STAFF_TU,
        kepalaTataUsaha: this.getKepalaTataUsaha(),
        sekolah: this.getSekolah(),
        phoneNumber: '0876-2634-2322',
        location: {
          address: 'Jl. Pangeran Diponegoro Rt 011/06 No. 111B',
          city: 'Jakarta Selatan',
          country: 'Indonesia',
          province: 'DKI Jakarta'
        }
      },
      {
        nik: 'STU8781293',
        name: 'Budi Hartono',
        jabatan: JabatanSekolah.STAFF_TU,
        kepalaTataUsaha: this.getKepalaTataUsaha(),
        sekolah: this.getSekolah(),
        phoneNumber: '0876-2634-2322',
        location: {
          address: 'Jl. Pangeran Diponegoro Rt 011/06 No. 11B',
          city: 'Jakarta Selatan',
          country: 'Indonesia',
          province: 'DKI Jakarta'
        }
      },
      {
        nik: 'STU8978293',
        name: 'Sumartini',
        jabatan: JabatanSekolah.STAFF_TU,
        kepalaTataUsaha: this.getKepalaTataUsaha(),
        sekolah: this.getSekolah(),
        phoneNumber: '0876-2634-2322',
        location: {
          address: 'Jl. Pangeran Diponegoro Rt 011/06 No. 9A',
          city: 'Jakarta Selatan',
          country: 'Indonesia',
          province: 'DKI Jakarta'
        }
      }
    ]
  }

  getSekolah(): Sekolah {
    return {
      id: 'TK1',
      name: 'TK Angkasa',
      type: SchoolType.TK,
      phoneNumber: '021-9823236',
      location: {
        address: 'Jl. Kebagusan Rt. 011/08 No. 116',
        city: 'Jakarta Timur',
        country: 'Indonesia',
        province: 'DKI Jakarta'
      }
    }
  }

  getListKelas(): Kelas[] {
    const listKelas: Kelas[] = []

    listKelas.push({
      name: 'Kelas 0 Kecil A',
      grade: this._getListGrade()[0],
      sekolah: this.getSekolah()
    });

    listKelas.push({
      name: 'Kelas 0 Besar A',
      grade: this._getListGrade()[1],
      sekolah: this.getSekolah()
    })

    listKelas.push({
      name: 'Kelas 0 Kecil B',
      grade: this._getListGrade()[0],
      sekolah: this.getSekolah()
    });

    listKelas.push({
      name: 'Kelas 0 Besar B',
      grade: this._getListGrade()[1],
      sekolah: this.getSekolah()
    })

    return listKelas;
  }

  getKepalaSekolah(): KepalaSekolah {
    return {
      nik: 'K162736',
      name: 'Suteja Kaharudin',
      phoneNumber: '0896-5632-8373',
      sekolah: this.getSekolah(),
      jabatan: JabatanSekolah.KEPSEK,
      location: {
        address: 'Jl Ahmad Yani, Rt 08/07 No. 12',
        city: 'Jakarta Utara',
        province: 'DKI Jakarta',
        country: 'Indonesia',
      }
    }
  }

  getWakilKepalaSekolah(): WakilKepalaSekolah {
    return {
      nik: 'WK12334',
      name: 'Joko Susilo',
      phoneNumber: '0896-5632-8373',
      sekolah: this.getSekolah(),
      jabatan: JabatanSekolah.WAKIL_KEPALA_SEKOLAH,
      kepalaSekolah: this.getKepalaSekolah(),
      location: {
        address: 'Jl Ahmad Yani, Rt 08/07 No. 12',
        city: 'Jakarta Utara',
        province: 'DKI Jakarta',
        country: 'Indonesia',
      }
    }
  }

  getListWalikelas(): WaliKelas[] {
    const listWaliKelas: WaliKelas[] = [];

    listWaliKelas.push({
      nik: 'WLS1234354',
      name: 'Budiawan',
      phoneNumber: '0812-8392-2333',
      sekolah: this.getSekolah(),
      jabatan: JabatanSekolah.WALI_KELAS,
      kelas: this.getListKelas()[0],
      listMataPelajaran: [
        this._getListMatapelajaran()[0]
      ],
      location: {
        address: 'Jl. Moh. Kahfi 1, Rt 2/1 No. 2',
        city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      }
    })

    listWaliKelas.push({
      nik: 'WLS9212434',
      name: 'Kurnia Puspa Sari',
      phoneNumber: '0856-8392-2391',
      sekolah: this.getSekolah(),
      jabatan: JabatanSekolah.WALI_KELAS,
      kelas: this.getListKelas()[1],
      listMataPelajaran: [
        this._getListMatapelajaran()[1]
      ],
      location: {
        address: 'Jl. Sultan Hasanudin, Rt 07/05 No. 2',
        city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      }
    })

    listWaliKelas.push({
      nik: 'WLS723772',
      name: 'Yudi Nugraha',
      phoneNumber: '0856-8392-2391',
      sekolah: this.getSekolah(),
      jabatan: JabatanSekolah.WALI_KELAS,
      kelas: this.getListKelas()[2],
      listMataPelajaran: [
        this._getListMatapelajaran()[2]
      ],
      location: {
        address: 'Jl. Sultan Hasanudin, Rt 07/05 No. 2',
        city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      }
    })

    listWaliKelas.push({
      nik: 'WLSAds2',
      name: 'Zamhari',
      phoneNumber: '0856-8392-1212',
      sekolah: this.getSekolah(),
      jabatan: JabatanSekolah.WALI_KELAS,
      kelas: this.getListKelas()[3],
      listMataPelajaran: [
        this._getListMatapelajaran()[3]
      ],
      location: {
        address: 'Jl. Angkringan, Rt 07/05 No. 2',
        city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      }
    })

    return listWaliKelas;
  }

  getListGUru(): Guru[] {
    const listGuru: Guru[] = []

    listGuru.push({
      nik: 'G989121',
      name: 'Subandi',
      jabatan: JabatanSekolah.GURU,
      phoneNumber: '0856-1234-3234',
      sekolah: this.getSekolah(),
      location: {
        address: 'Gg. Bulind Rt 9/9 No. 112',
        city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      },
      listMataPelajaran: [
        this._getListMatapelajaran()[0]
      ]
    })

    listGuru.push({
      nik: 'G1121',
      name: 'Siti Khadijah',
      jabatan: JabatanSekolah.GURU,
      phoneNumber: '0856-8128-1222',
      sekolah: this.getSekolah(),
      location: {
        address: 'Gg. Bulind Rt 9/9 No. 88',
        city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      },
      listMataPelajaran: [
        this._getListMatapelajaran()[1]
      ]
    })

    listGuru.push({
      nik: 'G987261',
      name: 'Kartini',
      jabatan: JabatanSekolah.GURU,
      phoneNumber: '0856-1233-3234',
      sekolah: this.getSekolah(),
      location: {
        address: 'Gg. Bulind Rt 9/9 No. 112',
        city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      },
      listMataPelajaran: [
        this._getListMatapelajaran()[2]
      ]
    })

    listGuru.push({
      nik: 'G98131',
      name: 'Moh. Hadir',
      jabatan: JabatanSekolah.GURU,
      phoneNumber: '0856-1233-897',
      sekolah: this.getSekolah(),
      location: {
        address: 'Gg. Bulind Rt 9/9 No. 78',
        city: 'Jakarta Selatan',
        province: 'DKI Jakarta',
        country: 'Indonesia'
      },
      listMataPelajaran: [
        this._getListMatapelajaran()[3]
      ]
    })

    return listGuru
  }

}
