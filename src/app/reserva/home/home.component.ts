import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { MatCard } from "@angular/material/card";
import { MatButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatToolbar } from "@angular/material/toolbar";

type TourItem = { nombre: string, sub: string };

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCard, MatIcon, MatToolbar, MatButton, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  kpi = {
    reservas: 35,
    ingresos: 'S/ 15,000',
  };

  tours: TourItem[] = [
    { nombre: 'Machu Picchu Aventura', sub: 'Cusco' },
    { nombre: 'Cañón del Colca Trek', sub: 'Arequipa' },
    { nombre: 'Selva Expedition', sub: 'Amazonas' },
  ];

  constructor(private router: Router) {}

  goLista(): void {
    this.router.navigate(['/reserva/lista']);
  }
}
