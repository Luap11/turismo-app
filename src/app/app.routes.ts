import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },{
    path:'login',
    component: LoginComponent
  },{
    path:'reserva',
    loadChildren: () => import('./reserva/reserva.module').then(m => m.ReservaModule)
  }
]
