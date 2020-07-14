import { Sekolah } from './school-models'
import { Location } from './location';

export enum InstansiType {
  PUSAT = 'Pusat',
  CABANG = 'Cabang',
  PERWAKILAN = 'Perwakilan'
}

export class Instansi {
  id: number
  name: string
  location:Location
  listSekolah: Sekolah[]

  constructor(public type: InstansiType) {}
}

export class Pusat extends Instansi {
  constructor() {
    super(InstansiType.PUSAT)
  }
}

export class Cabang extends Instansi {
  pusat: Pusat

  constructor() {
    super(InstansiType.CABANG)
  }
}

export class Perwakilan extends Instansi {
  cabang: Cabang

  constructor() {
    super(InstansiType.PERWAKILAN)
  }
}

export enum JabatanInstansi {
  DIRUT = 'Kepala Instansi',
  WA_DIRUT = 'Wakil Kepala Instansi',
  MANAGER = 'Manager',
  STAFF = 'Staff'
}

export class Pengurus {
  nik: string
  name: string
  phoneNumber: string
  instansi: Instansi
  location: Location

  constructor(public jabatan: JabatanInstansi) {}
}

export class KepalaInstansi extends Pengurus {
  constructor() {
    super(JabatanInstansi.DIRUT)
  }
}

export class WakilKepalaInstansi extends Pengurus {
  kepala: KepalaInstansi

  constructor() {
    super(JabatanInstansi.WA_DIRUT)
  }
}

export class Manager extends Pengurus {
  wakilKepala: WakilKepalaInstansi

  constructor() {
    super(JabatanInstansi.MANAGER)
  }
}

export class Staff extends Pengurus {
  manager: Manager

  constructor() {
    super(JabatanInstansi.STAFF)
  }
}
