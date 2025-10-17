import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },{
    path:'dashboard',
    component: DashboardComponent
  },{
    path:'home',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'reserva',
    loadChildren: () => import('./reserva/reserva.module').then(m => m.ReservaModule)
  }
]
