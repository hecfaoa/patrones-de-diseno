import { Pedido } from "../class/Pedido.js";

export interface EstadoPedido {
  pagar(pedido: Pedido): void;
  cancelar(pedido: Pedido): void;
}
