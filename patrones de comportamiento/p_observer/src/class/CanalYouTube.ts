import { Suscriptor } from "../interfaces/Suscriptor.js";

export class CanalYouTube {
  private nombreCanal: string;
  private suscriptores: Suscriptor[] = [];

  constructor(nombreCanal: string) {
    this.nombreCanal = nombreCanal;
  }

  public suscribirse(nuevoSuscriptor: Suscriptor): void {
    this.suscriptores.push(nuevoSuscriptor);
    console.log(
      `¡${nuevoSuscriptor.nombre} se ha suscrito al canal ${this.nombreCanal}!`,
    );
  }

  public publicarVideo(titulo: string): void {
    console.log(
      `¡Nuevo video publicado en ${this.nombreCanal}! Título: ${titulo}`,
    );
    this.suscriptores.forEach((suscriptor) => {
      suscriptor.recibirNotificacion(titulo);
    });
  }
}
