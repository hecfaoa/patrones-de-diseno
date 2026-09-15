import { ComponenteSistema } from "../interfaces/ComponenteSistema.js";

export class Archivo implements ComponenteSistema {
  private nombre: string;
  private tamaño: number;
  constructor(nombre: string, tamaño: number) {
    this.nombre = nombre;
    this.tamaño = tamaño;
  }
  public obtenerTamaño(): number {
    return this.tamaño;
  }
  public mostrarEstructura(indentacion: string): void {
    console.log(`${indentacion}📄 Archivo: ${this.nombre} (${this.tamaño} MB)`);
  }
}
