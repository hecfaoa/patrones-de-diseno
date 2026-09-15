import { AgregadoDecorator } from "../AgregadoDecorator.js";
export class ConLeche extends AgregadoDecorator {
    obtenerDescripcion() {
        return this.bebidaDecorada.obtenerDescripcion() + ", con leche";
    }
    calcularCosto() {
        return this.bebidaDecorada.calcularCosto() + 5; // Agrega 5 pesos por la leche
    }
}
