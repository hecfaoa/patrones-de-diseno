import { EstadoPedido } from "../interface/EstadoPedido.js";
import { EstadoCancelado } from "./EstadoCancelado.js";
import { Pedido } from "./Pedido.js";

export class EstadoPagado implements EstadoPedido {
    public pagar(pedido: Pedido): void {
        console.log("⚠️ [Estado Pagado]: El pedido ya fue pagado previamente.");
    }

    public cancelar(pedido: Pedido): void {
        console.log("🔄 [Estado Pagado]: Reembolsando dinero y cancelando pedido...");
        pedido.cambiarEstado(new EstadoCancelado());
    }
}