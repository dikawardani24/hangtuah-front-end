import { Grade, MataPelajaran } from '../../../_base/crud/models/school-models'
import { BaseSchoolData } from '../../school-org-generator'

export class DataSMK extends BaseSchoolData{
  protected _getListGrade(): Grade[] {
    const listGrade: Grade[] = []

    listGrade.push({
      grade: 1,
      name: 'Nol Kecil'
    })

    listGrade.push({
      grade: 2,
      name: '0 Besar'
    })

    return listGrade
  }

  protected _getListMatapelajaran(): MataPelajaran[] {
    const listMataPelajaran: MataPelajaran[] = []

    listMataPelajaran.push({
      name: 'Menggambar',
      grade: this._getListGrade()[0]
    })

    listMataPelajaran.push({
      name: 'Menyanyi',
      grade: this._getListGrade()[0]
    })

    listMataPelajaran.push({
      name: 'Berhitung',
      grade: this._getListGrade()[1]
    })

    listMataPelajaran.push({
      name: 'English',
      grade: this._getListGrade()[1]
    })

    return listMataPelajaran;
  }
}
