export type ReservaItem = {
  id: number;
  nombre: string;
  ciudad: string;
  precio: number;
  rating: number;   // 1..5
  img: string;
  estado: string;  // 'Calificado' | 'Completado' | 'Confirmado' | 'Pendiente' | 'Cancelado'
  tags: string[];
};

export const RESERVAS_DATA: ReservaItem[] = [
  { id: 201, nombre: 'Satipo Tour', ciudad: 'Junín', precio: 220, rating: 5, img: 'assets/img/satipo.jpg',   estado: 'Calificado', tags: ['Aventura','Guía','Seguridad'] },
  { id: 202, nombre: 'Huancaya Paradise', ciudad: 'Lima',  precio: 180, rating: 4, img: 'assets/img/huancaya.jpg', estado: 'Completado', tags: ['Naturaleza','Transporte'] },
  { id: 203, nombre: 'Machu Picchu Aventura', ciudad: 'Cusco', precio: 350, rating: 5, img: 'assets/img/macchu.jpg', estado: 'Confirmado', tags: ['Historia','Guía'] },
  { id: 204, nombre: 'Cañón del Colca Trek', ciudad: 'Arequipa', precio: 270, rating: 4, img: 'assets/img/colca.jpg', estado: 'Pendiente', tags: ['Trekking','Logística'] },
  { id: 205, nombre: 'Selva Expedition', ciudad: 'Amazonas', precio: 300, rating: 3, img: 'assets/img/selva.jpg', estado: 'Cancelado', tags: ['Aventura','Comunicación'] },
];