import { Bebida } from "../../interfaces/Bebida.js";
import { AgregadoDecorator } from "../AgregadoDecorator.js";


export class ConLeche extends AgregadoDecorator {

    public obtenerDescripcion(): string {
        return this.bebidaDecorada.obtenerDescripcion() + ", con leche";
    }

    public calcularCosto(): number {
        return this.bebidaDecorada.calcularCosto() + 5; // Agrega 5 pesos por la leche
    }       
}