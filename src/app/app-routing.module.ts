// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './views/theme/base/base.component';
// Auth
import { AuthGuard } from './core/auth';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule)},
  {path: 'error', loadChildren: () => import('./views/pages/error/error.module').then(m => m.ErrorModule)},
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'cabang',
        loadChildren: () => import('./views/pages/cabang/cabang.module').then(m => m.CabangModule),
      },
      {
        path: 'pusat',
        loadChildren: () => import('./views/pages/pusat/pusat.module').then(m => m.PusatPageModule),
      },
      {
        path: 'perwakilan',
        loadChildren: () => import('./views/pages/perwakilan/perwakilan.module').then(m => m.PerwakilanPageModule),
      },
      {
        path: 'schools',
        loadChildren: () => import('./views/pages/school-list/school-list.module').then(m => m.SchoolListPageModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
    ],
  },
  {path: '**', redirectTo: 'error/403', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
