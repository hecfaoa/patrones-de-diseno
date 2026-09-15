export interface Suscriptor {
  nombre: string;
  recibirNotificacion(videotitulo: string): void;
  //getNombre(): string;
}