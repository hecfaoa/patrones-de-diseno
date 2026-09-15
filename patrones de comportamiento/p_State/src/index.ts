import { Pedido } from "./class/Pedido.js";

console.log("##### WELLCOME TO STATE PATERN #####\n");


const miPedido = new Pedido();

miPedido.pagar();    // 💳 [Estado Borrador]: Pago procesado. Transiciona a EstadoPagado.
miPedido.pagar();    // ⚠️ [Estado Pagado]: El pedido ya fue pagado previamente.
miPedido.cancelar(); // 🔄 [Estado Pagado]: Reembolsando dinero... Transiciona a EstadoCancelado.

miPedido.pagar();    // ❌ [Estado Cancelado]: No se puede pagar un pedido cancelado.
miPedido.cancelar(); // ⚠️ [Estado Cancelado]: El pedido ya está cancelado.
