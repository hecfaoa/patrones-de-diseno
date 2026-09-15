import { AgregadoDecorator } from "../AgregadoDecorator.js";
export class ConChocolate extends AgregadoDecorator {
    obtenerDescripcion() {
        return this.bebidaDecorada.obtenerDescripcion() + ", con chocolate";
    }
    calcularCosto() {
        return this.bebidaDecorada.calcularCosto() + 10; // Agrega 10 pesos por el chocolate
    }
}
