export type EstadoPrueba = 'Pass' | 'Fail';

export interface CasoDePrueba {
  id: string;     
  titulo: string;
  estado: EstadoPrueba;
}