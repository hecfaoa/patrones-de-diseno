console.log("wellcome to composite pattern")
import { Carpeta } from "./class/Carpeta.js";
import { Archivo } from "./class/Archivo.js";
import { ComponenteSistema } from "./interfaces/ComponenteSistema.js";

// 1. Creamos archivos sueltos
const archivo1 = new Archivo("curriculum.pdf", 2);
const archivo2 = new Archivo("foto_perfil.png", 5);
const videoVacaciones = new Archivo("playa.mp4", 500);

// 2. Creamos carpetas y las armamos
const carpetaDocumentos = new Carpeta("Mis Documentos");
carpetaDocumentos.agregarComponente(archivo1);
carpetaDocumentos.agregarComponente(archivo2);

const carpetaRaiz = new Carpeta("Disco C");
carpetaRaiz.agregarComponente(carpetaDocumentos); // Metemos una carpeta dentro de otra
carpetaRaiz.agregarComponente(videoVacaciones);    // Metemos un archivo al mismo nivel

// 3. Ejecutamos de forma transparente
console.log("--- Estructura del Disco ---");
carpetaRaiz.mostrarEstructura("");

console.log("\n--- Cálculo de Tamaño ---");
console.log(`Tamaño total del Disco C: ${carpetaRaiz.obtenerTamaño()} MB`);