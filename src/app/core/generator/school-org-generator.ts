import {
  Sekolah,
  KepalaSekolah,
  WaliKelas,
  Guru,
  Kelas,
  WakilKepalaSekolah,
  KepalaTataUsaha,
  StaffTataUsaha,
  Karyawan
} from '../_base/crud/models/school-organization'
import { PersonNode, Organization } from './generator'

export interface SchoolData {
  searchByNik(nik: string): Karyawan
  getListKaryawan(): Karyawan[]
  getSekolah(): Sekolah
  getListKelas(): Kelas[]
  getKepalaSekolah(): KepalaSekolah
  getWakilKepalaSekolah(): WakilKepalaSekolah
  getKepalaTataUsaha(): KepalaTataUsaha
  getListStaffTataUsaha(): StaffTataUsaha[]
  getListWalikelas(): WaliKelas[]
  getListGUru(): Guru[]
}

export abstract class BaseSchoolData implements SchoolData {
  searchByNik(nik: string): Karyawan {
    let found: Karyawan = null
    this.getListKaryawan().forEach(k => {
      if (k.nik === nik) {
        found = k
      }
    })

    return found;
  }

  getListKaryawan(): Karyawan[] {
    const list: Karyawan[] = []

    list.push(this.getKepalaSekolah())
    list.push(this.getWakilKepalaSekolah())
    list.push(...this.getListGUru())
    list.push(this.getKepalaTataUsaha())
    list.push(this.getWakilKepalaSekolah())
    list.push(...this.getListStaffTataUsaha())
    list.push(...this.getListWalikelas())
    return list
  }

  getSekolah(): Sekolah {
    throw new Error("Method not implemented.")
  }
  getListKelas(): Kelas[] {
    throw new Error("Method not implemented.")
  }
  getKepalaSekolah(): KepalaSekolah {
    throw new Error("Method not implemented.")
  }
  getWakilKepalaSekolah(): WakilKepalaSekolah {
    throw new Error("Method not implemented.")
  }
  getKepalaTataUsaha(): KepalaTataUsaha {
    throw new Error("Method not implemented.")
  }
  getListStaffTataUsaha(): StaffTataUsaha[] {
    throw new Error("Method not implemented.")
  }
  getListWalikelas(): WaliKelas[] {
    throw new Error("Method not implemented.")
  }
  getListGUru(): Guru[] {
    throw new Error("Method not implemented.")
  }
}

export class SchoolOrganization extends Organization<SchoolData> {

  getStructure(): PersonNode {
    const kepsekNode = this.generator.getKepalaSekolah()
    const wakilKepsekNode = this.generator.getWakilKepalaSekolah()
    const kepalaTuNode = this.generator.getKepalaTataUsaha()

    const staffTuNodes: PersonNode[] = []
    this.generator.getListStaffTataUsaha().forEach(staff => {
      staffTuNodes.push({
        nik: staff.nik,
        name: staff.name,
        designation: staff.jabatan,
        imageUrl: 'assets/media/svg/avatars/009-boy-4.svg',
        cssClass: ''
      })
    });

    const waliKelasNodes: PersonNode[] = []

    const guruNodes: PersonNode[] = []
    this.generator.getListGUru().forEach(guru => {
      guruNodes.push({
        nik: guru.nik,
        name: guru.name,
        designation: `${guru.jabatan} ${guru.listMataPelajaran.join(', ')}`,
        imageUrl: 'assets/media/svg/avatars/009-boy-4.svg',
        cssClass: ''
      })
    })
    this.generator.getListWalikelas().forEach(waliKelas => {
      waliKelasNodes.push({
        nik: waliKelas.nik,
        designation: `${waliKelas.jabatan} ${waliKelas.kelas.name}`,
        name: waliKelas.name,
        imageUrl: 'assets/media/svg/avatars/009-boy-4.svg',
        cssClass: '',
        subordinates: guruNodes
      })
    });



    return {
      nik: kepsekNode.nik,
      name: kepsekNode.name,
      designation: kepsekNode.jabatan,
      imageUrl: 'assets/media/svg/avatars/009-boy-4.svg',
      cssClass: '',
      subordinates: [
        {
          nik: wakilKepsekNode.nik,
          name: wakilKepsekNode.name,
          designation: wakilKepsekNode.jabatan,
          imageUrl: 'assets/media/svg/avatars/009-boy-4.svg',
          cssClass: ''
        },
        {
          nik: kepalaTuNode.nik,
          name: kepalaTuNode.name,
          designation: kepalaTuNode.jabatan,
          subordinates: staffTuNodes,
          imageUrl: 'assets/media/svg/avatars/009-boy-4.svg',
          cssClass: ''
        },
        ...waliKelasNodes,

      ]
    }
  }
}
