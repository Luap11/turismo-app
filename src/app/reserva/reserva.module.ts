import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservaRoutingModule } from './reserva-routing.module';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';
import { OpinionesComponent } from './opiniones/opiniones.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EditTourComponent } from './edit-tour/edit-tour.component';
import { CreateTourComponent } from './create-tour/create-tour.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { TourListComponent } from './tour-list/tour-list.component';
import { PromocionesListComponent } from './promociones-list/promociones-list.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReservaRoutingModule,
    HomeComponent,
    ListaComponent,
    DetalleComponent,
    OpinionesComponent,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    EditTourComponent,
    CreateTourComponent,
    TourListComponent,
    TourDetailComponent,
    PromocionesListComponent
  ]
})
export class ReservaModule { }
