import { EnvioDHL } from "./class/EnvioDHL.js";
import { EnvioFedEx } from "./class/EnvioFedEx.js";
import { EnvioGratuitoPromocional } from "./class/EnvioGratuitoPromocional.js";
import { PedidoServicio } from "./class/PedidoServicio.js";

console.log("Hello strategy pattern\n\n");

console.log("Arrancamos con DHL");
const pedido = new PedidoServicio(new EnvioDHL());
pedido.procesarOrden(5); // Output: $55 USD

// El usuario aplica un cupón de descuento y cambiamos la estrategia dinámicamente
console.log("Aplicando cupón de descuento...");
pedido.cambiarEstrategia(new EnvioGratuitoPromocional());
pedido.procesarOrden(5); // Output: $0 USD

pedido.cambiarEstrategia(new EnvioFedEx());
pedido.procesarOrden(5); // Output: $52 USD