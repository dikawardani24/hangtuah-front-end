import {SchoolType, JabatanSekolah} from '../_base/crud/models/school-organization';
import { JabatanInstansi } from '../_base/crud/models/hangtuah-organization';

export interface SchoolTypeColor {
  textColor: string
  bgColor: string
}

export class ColorUtil {

  static getColor(type: SchoolType): SchoolTypeColor {
    switch(type) {
      case SchoolType.PAUD: return {
        textColor: 'primary',
        bgColor: 'primary'
      }
      case SchoolType.TK:  return {
        textColor: 'success',
        bgColor: 'success'
      }
      case SchoolType.SD: return {
        textColor: 'danger',
        bgColor: 'danger'
      }
      case SchoolType.SMP: return {
        textColor: 'warning',
        bgColor: 'warning'
      }
      case SchoolType.SMA: return {
        textColor: 'dark',
        bgColor: 'dark'
      }
      case SchoolType.SMK: return {
        textColor: 'info',
        bgColor: 'info'
      }
      default: return {
        textColor: 'light',
        bgColor: 'light'
      }
    }
  }
}
