// Angular
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
// NgBootstrap
import { NgbDropdownModule, NgbTabsetModule, NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Perfect Scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// Core module
import { CoreModule } from '../../core/core.module';
// CRUD Partials
import {
  ActionNotificationComponent,
  AlertComponent,
  DeleteEntityDialogComponent,
  FetchEntityDialogComponent,
  UpdateStatusDialogComponent,
} from './content/crud';
// Layout partials
import {
  ContextMenu2Component,
  ContextMenuComponent,
  LanguageSelectorComponent,
  NotificationComponent,
  QuickActionComponent,
  QuickPanelComponent,
  QuickUserPanelComponent,
  ScrollTopComponent,
  SearchDefaultComponent,
  SearchDropdownComponent,
  SearchResultComponent,
  SplashScreenComponent,
  StickyToolbarComponent,
  Subheader1Component,
  Subheader2Component,
  Subheader3Component,
  SubheaderSearchComponent,
  UserProfile2Component,
  UserProfile3Component,
  UserProfileComponent,
  UserProfile4Component
} from './layout';
// General
import { NoticeComponent } from './content/general/notice/notice.component';
import { PortletModule } from './content/general/portlet/portlet.module';
// Extra module
import { WidgetModule } from './content/widgets/widget.module';
// SVG inline
import { InlineSVGModule } from 'ng-inline-svg';
import { CartComponent } from './layout/topbar/cart/cart.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTreeModule } from '@angular/material/tree';
import { SchoolItemModule } from './content/schooll-list/school-item/school-item.module';
import { DialogDetailComponent } from './content/schooll-list/dialog-detail/dialog-detail.component';
import { InfoComponent } from './content/pusat/info/info.component';
import { WidgetDetailCabangComponent } from './content/cabang/widget-detail-cabang/widget-detail-cabang.component';
import { WidgetStructureCabangComponent } from './content/cabang/widget-structure-cabang/widget-structure-cabang.component';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { OrgChartModule } from '@mondal/org-chart';
import {
  WidgetDetailEmployeeCabangComponent
} from './content/cabang/widget-detail-employee-cabang/widget-detail-employee-cabang.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { WidgetPengurusComponent } from './content/cabang/widget-pengurus/widget-pengurus.component';
import { WidgetCabangComponent } from './content/cabang/widget-cabang/widget-cabang.component';
import { WidgetSchoolComponent } from './content/cabang/widget-school/widget-school.component';
import { WidgetListSchollCabangComponent } from './content/cabang/widget-list-scholl-cabang/widget-list-scholl-cabang.component';
import { WidgetItemSchollCabangComponent } from './content/cabang/widget-item-scholl-cabang/widget-item-scholl-cabang.component';
import { WidgetStructureSchollComponent } from './content/cabang/widget-structure-scholl/widget-structure-scholl.component';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { WidgetDetailSchollComponent } from './content/cabang/widget-detail-scholl/widget-detail-scholl.component';
import { WidgetSummarySchoolComponent } from './content/cabang/widget-summary-school/widget-summary-school.component';
import { WidgetItemTotalKaryawanComponent } from './content/dashboard-widgets/widget-item-total-karyawan/widget-item-total-karyawan.component';
import { WidgetSummarySchoolDashComponent } from './content/dashboard-widgets/widget-summary-school-dash/widget-summary-school-dash.component';
import { WidgetSummaryInstansiSchoolComponent } from './content/dashboard-widgets/widget-summary-instansi-school/widget-summary-instansi-school.component';
@NgModule({
  declarations: [
    ScrollTopComponent,
    NoticeComponent,
    ActionNotificationComponent,
    DeleteEntityDialogComponent,
    FetchEntityDialogComponent,
    UpdateStatusDialogComponent,
    AlertComponent,

    // topbar components
    ContextMenu2Component,
    ContextMenuComponent,
    QuickPanelComponent,
    QuickUserPanelComponent,
    ScrollTopComponent,
    SearchResultComponent,
    SplashScreenComponent,
    StickyToolbarComponent,
    Subheader1Component,
    Subheader2Component,
    Subheader3Component,
    SubheaderSearchComponent,
    LanguageSelectorComponent,
    NotificationComponent,
    QuickActionComponent,
    SearchDefaultComponent,
    SearchDropdownComponent,
    UserProfileComponent,
    UserProfile2Component,
    UserProfile3Component,
    UserProfile4Component,
    CartComponent,

    DialogDetailComponent,
    InfoComponent,
    WidgetDetailCabangComponent,
    WidgetStructureCabangComponent,
    WidgetDetailEmployeeCabangComponent,
    WidgetPengurusComponent,
    WidgetCabangComponent,
    WidgetSchoolComponent,
    WidgetListSchollCabangComponent,
    WidgetItemSchollCabangComponent,
    WidgetStructureSchollComponent,
    WidgetDetailSchollComponent,
    WidgetSummarySchoolComponent,
    WidgetItemTotalKaryawanComponent,
    WidgetSummarySchoolDashComponent,
    WidgetSummaryInstansiSchoolComponent
  ],
  exports: [
    WidgetModule,
    PortletModule,
    SchoolItemModule,

    ScrollTopComponent,
    NoticeComponent,
    ActionNotificationComponent,
    DeleteEntityDialogComponent,
    FetchEntityDialogComponent,
    UpdateStatusDialogComponent,
    AlertComponent,

    // topbar components
    ContextMenu2Component,
    ContextMenuComponent,
    QuickPanelComponent,
    QuickUserPanelComponent,
    ScrollTopComponent,
    SearchResultComponent,
    SplashScreenComponent,
    StickyToolbarComponent,
    Subheader1Component,
    Subheader2Component,
    Subheader3Component,
    SubheaderSearchComponent,
    LanguageSelectorComponent,
    NotificationComponent,
    QuickActionComponent,
    SearchDefaultComponent,
    SearchDropdownComponent,
    UserProfileComponent,
    UserProfile2Component,
    UserProfile3Component,
    UserProfile4Component,
    CartComponent,

    WidgetDetailCabangComponent,
    DialogDetailComponent,
    WidgetDetailCabangComponent,
    WidgetStructureCabangComponent,
    WidgetDetailEmployeeCabangComponent,
    WidgetPengurusComponent,
    WidgetCabangComponent,
    WidgetSchoolComponent,
    WidgetListSchollCabangComponent,
    WidgetItemSchollCabangComponent,
    WidgetSummarySchoolComponent,
    WidgetSummarySchoolDashComponent,
    WidgetSummaryInstansiSchoolComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    InlineSVGModule,
    CoreModule,
    PortletModule,
    WidgetModule,
    NgApexchartsModule,
    // angular material modules
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatIconModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,
    MatTreeModule,
    NgxOrgChartModule,
    OrgChartModule,
    NgbModule,
    CdkScrollableModule,

    // ng-bootstrap modules
    NgbDropdownModule,
    NgbTabsetModule,
    NgbTooltipModule,
  ],

  entryComponents: [
    WidgetDetailCabangComponent,
    DialogDetailComponent,
    WidgetDetailCabangComponent,
    WidgetStructureCabangComponent,
    WidgetDetailEmployeeCabangComponent,
    WidgetPengurusComponent,
    WidgetCabangComponent,
    WidgetSchoolComponent,
    WidgetListSchollCabangComponent,
    WidgetItemSchollCabangComponent,
    WidgetStructureSchollComponent,
    WidgetDetailSchollComponent,
    WidgetItemTotalKaryawanComponent,
    WidgetSummarySchoolComponent,
    WidgetSummarySchoolDashComponent
  ]
})
export class PartialsModule {
}
