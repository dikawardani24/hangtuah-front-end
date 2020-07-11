import { HangtuahData } from '../hangtuah-org-generator';
import { KepalaInstansi, WakilKepalaInstansi, Instansi } from '../../_base/crud/models/hangtuah-organization';
import { Sekolah } from '../../_base/crud/models/school-organization';

export abstract class DataInstansi<T extends Instansi> implements HangtuahData<T> {

  protected getListSekolah(): Sekolah[] {
    const listSekolah: Sekolah[] = []
    this.getListSchoolData().forEach(data => listSekolah.push(data.getSekolah()))
    return listSekolah
  }

  getInstansi(): T {
    throw new Error("Method not implemented.");
  }
  getKepalaInstansi(): KepalaInstansi {
    throw new Error("Method not implemented.");
  }
  getWakilKepalaInstansi(): WakilKepalaInstansi {
    throw new Error("Method not implemented.");
  }
  getListManager(): import("../../_base/crud/models/hangtuah-organization").Manager[] {
    throw new Error("Method not implemented.");
  }
  getListStaff(): import("../../_base/crud/models/hangtuah-organization").Staff[] {
    throw new Error("Method not implemented.");
  }
  getListSchoolData(): import("../school-org-generator").SchoolData[] {
    throw new Error("Method not implemented.");
  }

}
