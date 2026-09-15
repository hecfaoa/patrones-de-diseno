import { AgregadoDecorator } from "../AgregadoDecorator.js";

export class ConCremaDulce extends AgregadoDecorator {
    public obtenerDescripcion(): string {
        return this.bebidaDecorada.obtenerDescripcion() + ", con crema";
    }

    public calcularCosto(): number {
        return this.bebidaDecorada.calcularCosto() + 7; // Agrega 7 pesos por la crema
    }   
}