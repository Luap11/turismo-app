import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from "@angular/common";
import { MatCard } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";

type ReservaItem = {
  id: number;
  nombre: string;
  ciudad: string;
  estado: 'Calificado' | 'Completado' | 'Confirmado' | 'Pendiente' | 'Cancelado';
  img: string;
};

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule,MatCard, MatIcon],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {
  reservas: ReservaItem[] = [
    { id: 201, nombre: 'Satipo Tour', ciudad: 'Junín',     estado: 'Calificado', img: 'assets/img/satipo.jpg' },
    { id: 202, nombre: 'Huancaya Paradise', ciudad: 'Lima', estado: 'Completado', img: 'assets/img/huancaya.jpg' },
    { id: 203, nombre: 'Machu Picchu Aventura', ciudad: 'Cusco', estado: 'Confirmado', img: 'assets/img/macchu.jpg' },
    { id: 204, nombre: 'Cañón del Colca Trek', ciudad: 'Arequipa', estado: 'Pendiente', img: 'assets/img/colca.jpg' },
    { id: 205, nombre: 'Selva Expedition', ciudad: 'Amazonas', estado: 'Cancelado', img: 'assets/img/selva.jpg' },
  ];

  constructor(private router: Router) {}

  back(): void {
    this.router.navigate(['/reserva/home']);
  }

  goDetalle(id: number): void {
    this.router.navigate(['/reserva/detalle', id]);
  }
}
