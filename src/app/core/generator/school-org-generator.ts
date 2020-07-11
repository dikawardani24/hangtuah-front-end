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
        jabatan: staff.jabatan
      })
    });

    const waliKelasNodes: PersonNode[] = []
    this.generator.getListWalikelas().forEach(waliKelas => {
      waliKelasNodes.push({
        nik: waliKelas.nik,
        jabatan: `${waliKelas.jabatan} ${waliKelas.kelas.name}`,
        name: waliKelas.name
      })
    });

    const guruNodes: PersonNode[] = []
    this.generator.getListGUru().forEach(guru => {
      guruNodes.push({
        nik: guru.nik,
        name: guru.name,
        jabatan: `${guru.jabatan} ${guru.listMataPelajaran.join(', ')}`,
      })
    })

    return {
      nik: kepsekNode.nik,
      name: kepsekNode.name,
      jabatan: kepsekNode.jabatan,
      children: [
        {
          title: 'Wakil Kepala Sekolah',
          children: [
            {
              nik: wakilKepsekNode.nik,
              name: wakilKepsekNode.name,
              jabatan: wakilKepsekNode.jabatan
            }
          ]
        },
        {
          title: 'Tata Usaha',
          children: [
            {
              nik: kepalaTuNode.nik,
              name: kepalaTuNode.name,
              jabatan: kepalaTuNode.jabatan,
              children: [
                {
                  title: 'Staff Tata Usaha',
                  children: staffTuNodes
                }
              ]
            }
          ]
        },
        {
          title: 'Wali Kelas',
          children: waliKelasNodes
        },
        {
          title: 'Guru',
          children: guruNodes
        }
      ]
    }
  }
}
