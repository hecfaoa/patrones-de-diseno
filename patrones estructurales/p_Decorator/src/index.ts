import { CafeSimple } from "./class/CafeSimple.js";
import { ConChocolate } from "./class/decorators/ConChocolate.js";
import { ConCremaDulce } from "./class/decorators/ConCremaDulce.js";
import { ConLeche } from "./class/decorators/ConLeche.js";
import { Bebida } from "./interfaces/Bebida.js";

console.log("Hello, decorator pattern!");
// 1. Pedimos un café simple
let miCafe: Bebida = new CafeSimple();
console.log(`Orden 1: ${miCafe.obtenerDescripcion()} -> $${miCafe.calcularCosto()}`);
// Imprime: Café Regular -> $30

// 2. ¡Lo decoramos con Leche! (Envolvemos el café simple)
miCafe = new ConLeche(miCafe);
console.log(`Orden 2: ${miCafe.obtenerDescripcion()} -> $${miCafe.calcularCosto()}`);
// Imprime: Café Regular + Leche Cremosa -> $40

// 3. ¡Le metemos Chocolate encima a lo que ya teníamos! (Envolvemos el café con leche)
miCafe = new ConChocolate(miCafe);
console.log(`Orden 3: ${miCafe.obtenerDescripcion()} -> $${miCafe.calcularCosto()}`);
// Imprime: Café Regular + Leche Cremosa + Chispas de Chocolate -> $55

let miCafe2: Bebida = new CafeSimple();
console.log(`Orden 4: ${miCafe2.obtenerDescripcion()} -> $${miCafe2.calcularCosto()}`);     

miCafe2 = new ConCremaDulce(miCafe2);
console.log(`Orden 5: ${miCafe2.obtenerDescripcion()} -> $${miCafe2.calcularCosto()}`);

miCafe2 = new ConChocolate(miCafe2);
console.log(`Orden 6: ${miCafe2.obtenerDescripcion()} -> $${miCafe2.calcularCosto()}`);