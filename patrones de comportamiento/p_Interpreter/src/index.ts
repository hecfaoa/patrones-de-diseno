import { ExpresionAnd } from "./class/Non-Terminal_Expression/ExpresionAnd.js";
import { ExpresionCampoEquals } from "./class/Terminal_Expression/ExpresionCampoEquals.js";
import { ExpresionCampoMenorQue } from "./class/Terminal_Expression/ExpresionCampoMenorQue.js";

console.log("wellcome to the interpreter pattern - the finish pattern\n\n");

// Regla: precio < 100
const reglaPrecio = new ExpresionCampoMenorQue("precio", 100);

// Regla: categoria = 'electronica'
const reglaCategoria = new ExpresionCampoEquals("categoria", "electronica");

// Combinamos las reglas con AND
const reglaDescuentoTotal = new ExpresionAnd(reglaPrecio, reglaCategoria);

// ========================================================
// Evaluamos con diferentes productos (Contextos)
// ========================================================

const producto1 = { precio: 50, categoria: "electronica" };
console.log("📱 Producto 1 Aplica Descuento?:", reglaDescuentoTotal.interpretar(producto1)); 
// Output: true

const producto2 = { precio: 150, categoria: "electronica" };
console.log("📺 Producto 2 Aplica Descuento?:", reglaDescuentoTotal.interpretar(producto2)); 
// Output: false (Supera el precio límite)

const producto3 = { precio: 30, categoria: "ropa" };
console.log("👕 Producto 3 Aplica Descuento?:", reglaDescuentoTotal.interpretar(producto3)); 
// Output: false (Categoría incorrecta)