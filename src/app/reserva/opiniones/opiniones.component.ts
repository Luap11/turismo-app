import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';


type Review = {
  user: string;
  fecha: string;   // ej. "Setiembre, 2025"
  rating: 1|2|3|4|5;
  texto: string;
};

type OpinionesData = {
  promedio: number;
  total: number;
  dist: { [k in 1|2|3|4|5]: number };
  items: Review[];
};

// Mock por tour (id → opiniones)
const OPINIONES_POR_TOUR: Record<number, OpinionesData> = {
  201: {
    promedio: 4.5,
    total: 10,
    dist: { 5: 7, 4: 2, 3: 1, 2: 0, 1: 0 },
    items: [
      { user: 'Katty',     fecha: 'Setiembre, 2025', rating: 5, texto: 'La mejor experiencia que hemos tenido. Adentrarse en la selva y conocer a la comunidad fue increíble…' },
      { user: 'Stephanie', fecha: 'Setiembre, 2025', rating: 5, texto: 'No es solo un trekking, es un tour completo. La organización y el guía, de primera…' },
      { user: 'Sarah',     fecha: 'Agosto, 2025',    rating: 5, texto: 'Aventura diversa con sentimiento selvático. Volvería sin dudar…' },
      { user: 'Janet',     fecha: 'Agosto, 2025',    rating: 4, texto: 'Todo muy bien. Seguridad y logística correctas. Pequeños retrasos en el recojo…' },
      { user: 'Luis',      fecha: 'Julio, 2025',     rating: 3, texto: 'El lodge fue cómodo pero hubo cambios de último minuto. El guía, excelente…' },
    ]
  },
  202: {
    promedio: 4.2, total: 8, dist: { 5: 5, 4: 2, 3: 1, 2: 0, 1: 0 },
    items: [
      { user: 'Andrea', fecha: 'Setiembre, 2025', rating: 5, texto: 'Huancaya es mágico. El paseo fue bien coordinado y seguro…' },
      { user: 'Marco',  fecha: 'Agosto, 2025',    rating: 4, texto: 'Muy buen tour, transporte cómodo. Mejoraría la comunicación previa…' },
    ]
  },
  203: {
    promedio: 4.9, total: 12, dist: { 5: 11, 4: 1, 3: 0, 2: 0, 1: 0 },
    items: [
      { user: 'Rosa', fecha: 'Setiembre, 2025', rating: 5, texto: 'Machu Picchu siempre sorprende. Nuestro guía fue excepcional…' }
    ]
  },
  204: {
    promedio: 4.0, total: 6, dist: { 5: 3, 4: 1, 3: 2, 2: 0, 1: 0 },
    items: [
      { user: 'Diego', fecha: 'Julio, 2025', rating: 5, texto: 'El trekking al Colca es exigente pero vale cada paso…' }
    ]
  },
  205: {
    promedio: 3.8, total: 5, dist: { 5: 2, 4: 1, 3: 2, 2: 0, 1: 0 },
    items: [
      { user: 'Laura', fecha: 'Agosto, 2025', rating: 4, texto: 'Selva intensa. Mejoraría la logística del recojo, pero la experiencia es única…' }
    ]
  },
};

@Component({
  selector: 'app-opiniones',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './opiniones.component.html',
  styleUrl: './opiniones.component.scss'
})
export class OpinionesComponent {
  id!: number;
  data!: OpinionesData;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(p => {
      this.id = Number(p.get('id') ?? 201);
      this.data = OPINIONES_POR_TOUR[this.id] ?? OPINIONES_POR_TOUR[201];
    });
  }

  back() { this.router.navigate(['/reserva/detalle', this.id]); }

  // Exponemos Math para usar en el template
  Math = Math;

  pct(stars: 1|2|3|4|5): number {
    if (!this.data?.total) return 0;
    return Math.round((this.data.dist[stars] / this.data.total) * 100);
  }

  stars(n: number) { return Array.from({ length: n }, (_, i) => i + 1); }
}
