import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatCard } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ReservaItem } from '../reserva.data';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, MatIcon, MatCard, MatButton],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.scss'
})
export class DetalleComponent {
  id!: number;
  tour?: ReservaItem;

  constructor(private route: ActivatedRoute, private router: Router, private reserva: ReservaService) { 
    this.route.paramMap.subscribe(p => {
      this.id = Number(p.get('id'));
      this.tour = this.reserva.getById(this.id);
      if (!this.tour) this.router.navigate(['/reserva/lista']);
    });
  }

  back(): void {
    this.router.navigate(['/reserva/lista']);
  }

  toOpiniones(): void {
    this.router.navigate(['/reserva/opiniones', this.id]);
  }

  stars(n: number): number[]{
    return Array.from({length: n}, (_, i) => i + 1);
  }
}
