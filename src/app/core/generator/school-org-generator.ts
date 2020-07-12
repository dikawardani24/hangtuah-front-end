import {
  Sekolah,
  KepalaSekolah,
  WaliKelas,
  Guru,
  Kelas,
  WakilKepalaSekolah,
  KepalaTataUsaha,
  StaffTataUsaha
} from '../_base/crud/models/school-organization'
import { PersonNode, Organization } from './generator'

export interface SchoolData {
  getSekolah(): Sekolah
  getListKelas(): Kelas[]
  getKepalaSekolah(): KepalaSekolah
  getWakilKepalaSekolah(): WakilKepalaSekolah
  getKepalaTataUsaha(): KepalaTataUsaha
  getListStaffTataUsaha(): StaffTataUsaha[]
  getListWalikelas(): WaliKelas[]
  getListGUru(): Guru[]
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
    this.generator.getListWalikelas().forEach(waliKelas => {
      waliKelasNodes.push({
        nik: waliKelas.nik,
        designation: `${waliKelas.jabatan} ${waliKelas.kelas.name}`,
        name: waliKelas.name,
        imageUrl: 'assets/media/svg/avatars/009-boy-4.svg',
        cssClass: ''
      })
    });

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
        ...guruNodes
      ]
    }
  }
}
