import { ManejadorAutenticacion } from "./class/ManejadorAutenticacion.js";
import { ManejadorInventario } from "./class/ManejadorInventario.js";
import { ManejadorValidacionDatos } from "./class/ManejadorValidacionDatos.js";

console.log("wellcome to chain of responsability pattern");

// 1. Instanciamos los eslabones
const autenticacion = new ManejadorAutenticacion();
const validacion = new ManejadorValidacionDatos();
const inventario = new ManejadorInventario();

// 2. Armamos la tubería (La cadena)
autenticacion.setSiguiente(validacion).setSiguiente(inventario);

// --- CASO A: Petición sin token ---
const ordenInvalida = {token: "secret_jwt", cantidad: 2, productoId: "PROD-99" };
console.log("--- Procesando Orden A ---");
const resultadoA = autenticacion.procesar(ordenInvalida);
console.log(`Resultado: ${resultadoA}\n`); 
// 🚫 Se detiene en el primer eslabón (Autenticación)

// --- CASO B: Petición con token pero sin stock suficiente ---
const ordenSinStock = { token: "secret_jwt", cantidad: 10, productoId: "PROD-99" };
console.log("--- Procesando Orden B ---");
const resultadoB = autenticacion.procesar(ordenSinStock);
console.log(`Resultado: ${resultadoB}\n`);
// ✅ Pasa Autenticación -> ✅ Pasa Validación -> 🚫 Se detiene en Inventario