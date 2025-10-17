import { Injectable } from '@angular/core';
import { RESERVAS_DATA, ReservaItem } from './reserva.data';

@Injectable({ providedIn: 'root' })
export class ReservaService {
  getAll(): ReservaItem[] { return RESERVAS_DATA; }
  getById(id: number): ReservaItem | undefined {
    return RESERVAS_DATA.find(x => x.id === id);
  }
}