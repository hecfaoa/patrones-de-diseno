// ========================================================
// 3. ESTADOS CONCRETOS: Encapsulan el comportamiento
// ========================================================

import { EstadoPedido } from "../interface/EstadoPedido.js";
import { EstadoCancelado } from "./EstadoCancelado.js";
import { EstadoPagado } from "./EstadoPagado.js";
import { Pedido } from "./Pedido.js";

export class EstadoBorrador implements EstadoPedido {
    public pagar(pedido: Pedido): void {
        console.log("💳 [Estado Borrador]: Pago procesado con éxito.");
        pedido.cambiarEstado(new EstadoPagado());
    }

    public cancelar(pedido: Pedido): void {
        console.log("🚫 [Estado Borrador]: Pedido cancelado.");
        pedido.cambiarEstado(new EstadoCancelado());
    }
}

