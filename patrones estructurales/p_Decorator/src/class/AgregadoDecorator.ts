import { Bebida } from "../interfaces/Bebida.js";


export abstract class AgregadoDecorator implements Bebida {
    protected bebidaDecorada: Bebida; // Guardamos el café aquí adentro

    constructor(bebida: Bebida) {
        this.bebidaDecorada = bebida;
    }

    public obtenerDescripcion(): string {
        return this.bebidaDecorada.obtenerDescripcion();
    }

    public calcularCosto(): number {
        return this.bebidaDecorada.calcularCosto();
    }
}