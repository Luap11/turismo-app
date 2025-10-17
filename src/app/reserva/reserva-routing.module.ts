import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';
import { OpinionesComponent } from './opiniones/opiniones.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},               //SF-01
  {path: 'lista', component: ListaComponent},             //SF-02
  {path: 'detalle/:id', component: DetalleComponent},     //SF-03
  {path: 'opiniones/:id', component: OpinionesComponent}, //SF-04
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
