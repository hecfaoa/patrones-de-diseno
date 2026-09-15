import { EstadoPedido } from "../interface/EstadoPedido.js";
import { Pedido } from "./Pedido.js";

export class EstadoCancelado implements EstadoPedido {
    public pagar(pedido: Pedido): void {
        console.log("❌ [Estado Cancelado]: No se puede pagar un pedido cancelado.");
    }

    public cancelar(pedido: Pedido): void {
        console.log("⚠️ [Estado Cancelado]: El pedido ya está cancelado.");
    }
}