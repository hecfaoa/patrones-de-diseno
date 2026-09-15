import { AgregadoDecorator } from "../AgregadoDecorator.js";

export class ConChocolate extends AgregadoDecorator {
  public obtenerDescripcion(): string {
    return this.bebidaDecorada.obtenerDescripcion() + ", con chocolate";
  }

  public calcularCosto(): number {
    return this.bebidaDecorada.calcularCosto() + 10; // Agrega 10 pesos por el chocolate
  }
}
