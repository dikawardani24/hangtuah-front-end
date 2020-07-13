// Anglar
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Layout Directives
// Services
import {
  ContentAnimateDirective,
  FirstLetterPipe,
  GetObjectPipe,
  HeaderDirective,
  JoinPipe,
  MenuDirective,
  OffcanvasDirective,
  SafePipe,
  ScrollTopDirective,
  SparklineChartDirective,
  StickyDirective,
  TabClickEventDirective,
  TimeElapsedPipe,
  ToggleDirective
} from './_base/layout';
import { DataPusat } from './generator/hangtuah/pusat';
import { DataCabangBelawan } from './generator/hangtuah/cabang/cabang-belawan';
import { DataCabangPadang } from './generator/hangtuah/cabang/cabang-padang';
import { DataPerwakilanSabang } from './generator/hangtuah/perwakilan/perwakilan-sabang';
import { DataPoolCabang } from './generator/data-pool/cabang-data-pool';
import { DataPoolPerwakilan } from './generator/data-pool/perwakilan-data-pool';
import { DataPoolPusat } from './generator/data-pool/pusat-data-pool';
import { DataPaudBulan } from './generator/schools/paud/paud-bulan';
import { DataSDMarsudi } from './generator/schools/sd/sd-marsudi';
import { DataPaudMentari } from './generator/schools/paud/paud-mentari';
import { DataSDTarakinata } from './generator/schools/sd/sd-tarakinata';
import { DataTkSentosa } from './generator/schools/tk/tk-sentosa';
import { DataTkAngkasa } from './generator/schools/tk/tk-angkasa';
import { DataSMPNugraha } from './generator/schools/smp/smp-nugraha';
import { DataSMKBerkarya } from './generator/schools/smk/smk-berkarya';
import { DataSMKCitraBangsa } from './generator/schools/smk/smk-citrabangsa';
import { DataSMPKurnia } from './generator/schools/smp/smp-kurnia';
import { DataSMACitraKasih } from './generator/schools/sma/sma-citrakasih';
import { DataSMAHercules } from './generator/schools/sma/sma-hercules';
import { DataCabangJakarta } from './generator/hangtuah/cabang/cabang-jakarta';
import { DataCabangTjPinang } from './generator/hangtuah/cabang/cabang-tj-pinang';
import { DataCabangSurabaya } from './generator/hangtuah/cabang/cabang-surabaya';
import { DataCabangMakassar } from './generator/hangtuah/cabang/cabang-makassar';
import { DataCabangKupang } from './generator/hangtuah/cabang/cabang-kupang';
import { DataCabangManado } from './generator/hangtuah/cabang/cabang-manado';
import { DataCabangAmbon } from './generator/hangtuah/cabang/cabang-ambon';
import { PerwakilanBalikpapan } from './generator/hangtuah/perwakilan/perwakilan-balikpapan';
import { CabangTarakan } from './generator/hangtuah/cabang/cabang-tarakan';
import { PerwakilanBanjarmasin } from './generator/hangtuah/perwakilan/perwakilan-banjarmasin';
import { PerwakilanBanyuwangi } from './generator/hangtuah/perwakilan/perwakilan-banyuwangi';
import { PerwakilanBatam } from './generator/hangtuah/perwakilan/perwakilan-batam';
import { PerwakilanBatuporon } from './generator/hangtuah/perwakilan/perwakilan-batuporon';
import { PerwakilanBiak } from './generator/hangtuah/perwakilan/perwakilan-biak';
import { PerwakilanCirebon } from './generator/hangtuah/perwakilan/perwakilan-cirebon';
import { PerwakilanDaboSingkep } from './generator/hangtuah/perwakilan/perwakilan-dabo-singkep';
import { PerwakilanGorontalo } from './generator/hangtuah/perwakilan/perwakilan-gorontalo';
import { PerwakilanLampung } from './generator/hangtuah/perwakilan/perwakilan-lampung';
import { PerwakilanMalang } from './generator/hangtuah/perwakilan/perwakilan-malang';
import { PerwakilanMataram } from './generator/hangtuah/perwakilan/perwakilan-mataram';
import { PerwakilanPanjang } from './generator/hangtuah/perwakilan/perwakilan-panjang';
import { PerwakilanSemarang } from './generator/hangtuah/perwakilan/perwakilan-semarang';
import { PerwakilanTanjungBalaiKarimun } from './generator/hangtuah/perwakilan/perwakilan-tanjung-balai-karimun';
import { PerwakilanTanjungUban } from './generator/hangtuah/perwakilan/perwakilan-tanjung-uban';
import { PerwakilanTegal } from './generator/hangtuah/perwakilan/perwakilan-tegal';
import { PerwakilanTual } from './generator/hangtuah/perwakilan/perwakilan-tual';
import { PerwakilanBengkulu } from './generator/hangtuah/perwakilan/perwakilan-bengkulu';
import { PerwakilanCilacap } from './generator/hangtuah/perwakilan/perwakilan-cilacap';
import { PerwakilanGrati } from './generator/hangtuah/perwakilan/perwakilan-grati';
import { PerwakilanKendari } from './generator/hangtuah/perwakilan/perwakilan-kendari';
import { PerwakilanNias } from './generator/hangtuah/perwakilan/perwakilan-nias';
import { PerwakilanTimika } from './generator/hangtuah/perwakilan/perwakilan-timika';
import { PerwakilanDumai } from './generator/hangtuah/perwakilan/perwakilan-dumai';
import { CabangMerauke } from './generator/hangtuah/cabang/cabang-merauke';
import { CabangJayapura } from './generator/hangtuah/cabang/cabang-jayapura';
import { CabangPontianak } from './generator/hangtuah/cabang/cabang-pontianak';
import { CabangSorong } from './generator/hangtuah/cabang/cabang-sorong';
import { CabangTanjungPinang } from './generator/hangtuah/cabang/cabang-tanjung-pinang';


@NgModule({
  imports: [CommonModule],
  declarations: [
    // directives
    ScrollTopDirective,
    HeaderDirective,
    OffcanvasDirective,
    ToggleDirective,
    MenuDirective,
    TabClickEventDirective,
    SparklineChartDirective,
    ContentAnimateDirective,
    StickyDirective,
    // pipes
    TimeElapsedPipe,
    JoinPipe,
    GetObjectPipe,
    SafePipe,
    FirstLetterPipe,
  ],
  exports: [
    // directives
    ScrollTopDirective,
    HeaderDirective,
    OffcanvasDirective,
    ToggleDirective,
    MenuDirective,
    TabClickEventDirective,
    SparklineChartDirective,
    ContentAnimateDirective,
    StickyDirective,
    // pipes
    TimeElapsedPipe,
    JoinPipe,
    GetObjectPipe,
    SafePipe,
    FirstLetterPipe,
  ],
  providers: [
    DataPusat,

    DataCabangBelawan,
    DataCabangPadang,
    DataCabangJakarta,
    DataCabangTjPinang,
    DataCabangSurabaya,
    DataCabangMakassar,
    DataCabangKupang,
    DataCabangManado,
    DataCabangAmbon,
    CabangTarakan,
    CabangJayapura,
    CabangMerauke,
    CabangPontianak,
    CabangSorong,
    CabangTanjungPinang,

    DataPerwakilanSabang,
    PerwakilanBalikpapan,
    PerwakilanBanjarmasin,
    PerwakilanBanyuwangi,
    PerwakilanBatam,
    PerwakilanBatuporon,
    PerwakilanBengkulu,
    PerwakilanBiak,
    PerwakilanCilacap,
    PerwakilanCirebon,
    PerwakilanDaboSingkep,
    PerwakilanDumai,
    PerwakilanGorontalo,
    PerwakilanGrati,
    PerwakilanKendari,
    PerwakilanLampung,
    PerwakilanMalang,
    PerwakilanMataram,
    PerwakilanNias,
    PerwakilanPanjang,
    PerwakilanSemarang,
    PerwakilanTanjungBalaiKarimun,
    PerwakilanTanjungUban,
    PerwakilanTegal,
    PerwakilanTimika,
    PerwakilanTual,

    DataPoolPusat,
    DataPoolCabang,
    DataPoolPerwakilan,

    DataPaudBulan,
    DataPaudMentari,

    DataTkSentosa,
    DataTkAngkasa,

    DataSDMarsudi,
    DataSDTarakinata,

    DataSMPKurnia,
    DataSMPNugraha,

    DataSMACitraKasih,
    DataSMAHercules,

    DataSMKBerkarya,
    DataSMKCitraBangsa
  ]
})
export class CoreModule {
}
