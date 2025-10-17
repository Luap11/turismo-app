import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from "@angular/common";
import { MatCard } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import { ReservaService } from '../reserva.service';

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
   reservas = this.reserva.getAll();
   constructor(private router: Router, private reserva: ReservaService) {}

  back(): void {
    this.router.navigate(['/reserva/home']);
  }

  goDetalle(id: number): void {
    this.router.navigate(['/reserva/detalle', id]);
  }
}
