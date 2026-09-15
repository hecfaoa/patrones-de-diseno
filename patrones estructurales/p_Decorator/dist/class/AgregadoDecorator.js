export class AgregadoDecorator {
    bebidaDecorada; // Guardamos el café aquí adentro
    constructor(bebida) {
        this.bebidaDecorada = bebida;
    }
    obtenerDescripcion() {
        return this.bebidaDecorada.obtenerDescripcion();
    }
    calcularCosto() {
        return this.bebidaDecorada.calcularCosto();
    }
}
