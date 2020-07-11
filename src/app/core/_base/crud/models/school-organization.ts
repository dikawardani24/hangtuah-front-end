import { Location } from './location';

export enum SchoolType {
  PAUD = 'PAUD',
  TK = 'TK',
  SD = 'SD',
  SMP = 'SMP',
  SMA = 'SMA',
  SMK = 'SMK'
}

export class Sekolah {
  id: string
  name: string
  type: SchoolType
  phoneNumber: string
  location: Location
}

export class Grade {
  grade: number
  name: string
}

export class Kelas {
  grade: Grade
  name: string
  sekolah: Sekolah
}

export enum JabatanSekolah {
  KEPSEK = 'Kepala Sekolah',
  WAKIL_KEPALA_SEKOLAH = 'Wakil Kepala Sekolah',
  WALI_KELAS = 'Wali Kelas',
  GURU = 'Guru',
  KEPALA_TU = 'Kepala Tata Usaha',
  WAKIL_KEPALA_TU = 'Wakil Kepala Tata Usaha',
  STAFF_TU = 'Staff Tata Usaha'
}

export class MataPelajaran {
  name: string
  grade: Grade
}

export class Karyawan {
  nik: string
  name: string
  location: Location
  sekolah: Sekolah
  phoneNumber: string

  constructor(public jabatan: JabatanSekolah) {}
}

export class KepalaSekolah extends Karyawan {
  constructor() {
    super(JabatanSekolah.KEPSEK)
  }
}

export class WakilKepalaSekolah extends Karyawan {
  kepalaSekolah: KepalaSekolah

  constructor() {
    super(JabatanSekolah.WAKIL_KEPALA_SEKOLAH)
  }
}

export class KepalaTataUsaha extends Karyawan {
  constructor() {
    super(JabatanSekolah.KEPALA_TU)
  }
}

export class StaffTataUsaha extends Karyawan {
  kepalaTataUsaha: KepalaTataUsaha

  constructor() {
    super(JabatanSekolah.STAFF_TU)
  }
}

export class WakilKepalaTataUsaha extends Karyawan {
  constructor() {
    super(JabatanSekolah.WAKIL_KEPALA_TU)
  }
}

export class Guru extends Karyawan {
  listMataPelajaran: MataPelajaran[]

  constructor() {
    super(JabatanSekolah.GURU)
  }
}

export class WaliKelas extends Karyawan {
  listMataPelajaran: MataPelajaran[]
  kelas: Kelas

  constructor() {
    super(JabatanSekolah.WALI_KELAS)
  }
}

export class Parent {
  name: string
  phoneNumber: string
  location: Location
}

export class Siswa {
  nik: string
  name: string
  phoneNumber: string
  parent: Parent
  location: Location
  kelas: Kelas
}
