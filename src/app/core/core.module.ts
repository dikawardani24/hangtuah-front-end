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
import { DataSMPNugraha } from './generator/schools/smp/smp-nugraha';
import { DataSMKBerkarya } from './generator/schools/smk/smk-berkarya';
import { DataSMKCitraBangsa } from './generator/schools/smk/smk-citrabangsa';
import { DataSMPKurnia } from './generator/schools/smp/smp-kurnia';
import { DataSMACitraKasih } from './generator/schools/sma/sma-citrakasih';
import { DataSMAHercules } from './generator/schools/sma/sma-hercules';

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

    DataPerwakilanSabang,

    DataPoolPusat,
    DataPoolCabang,
    DataPoolPerwakilan,

    DataPaudBulan,
    DataPaudMentari,

    DataTkSentosa,
    DataTkSentosa,

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
