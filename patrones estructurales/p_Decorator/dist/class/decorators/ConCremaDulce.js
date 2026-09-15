import { AgregadoDecorator } from "../AgregadoDecorator.js";
export class ConCremaDulce extends AgregadoDecorator {
    obtenerDescripcion() {
        return this.bebidaDecorada.obtenerDescripcion() + ", con crema";
    }
    calcularCosto() {
        return this.bebidaDecorada.calcularCosto() + 7; // Agrega 7 pesos por la crema
    }
}
