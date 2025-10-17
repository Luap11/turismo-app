import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';
import { OpinionesComponent } from './opiniones/opiniones.component';
import { CreateTourComponent } from './create-tour/create-tour.component';
import { EditTourComponent } from './edit-tour/edit-tour.component';
import { TourListComponent } from './tour-list/tour-list.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { PromocionesListComponent } from './promociones-list/promociones-list.component';
import { CreatePromocionesComponent } from './create-promociones/create-promociones.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},               //SF-01
  {path: 'lista', component: ListaComponent},             //SF-02
  {path: 'detalle/:id', component: DetalleComponent},     //SF-03
  {path: 'opiniones/:id', component: OpinionesComponent}, //SF-04
  {path: 'create-tour', component: CreateTourComponent},
  {path: 'edit-tour', component: EditTourComponent},
  {path: 'tour-list', component: TourListComponent},
  {path: 'tour-detail', component: TourDetailComponent},
  {path: 'promociones', component: PromocionesListComponent},
  {path: 'create-promociones', component: CreatePromocionesComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
