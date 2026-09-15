import { EstadoPedido } from "../interface/EstadoPedido.js";
import { EstadoBorrador } from "./EstadoBorrador.js";

export class Pedido {
    private estadoActual: EstadoPedido;

    constructor() {
        // Estado inicial
        this.estadoActual = new EstadoBorrador();
    }

    public cambiarEstado(nuevoEstado: EstadoPedido): void {
        this.estadoActual = nuevoEstado;
    }

    public pagar(): void {
        this.estadoActual.pagar(this);
    }

    public cancelar(): void {
        this.estadoActual.cancelar(this);
    }
}