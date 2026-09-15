import { ReporteProxy } from "./class/ReporteProxy.js";
import { InterfaceReporte } from "./interface/InterfaceReporte.js";

console.log("Proxy Pattern");

// El cliente piensa que está usando el servicio directamente
const ejecutorDeReportes: InterfaceReporte = new ReporteProxy();

// Intento 1: Usuario sin permisos
ejecutorDeReportes.generarReporte("Juan_Invitado");
// 🚫 Bloqueado de inmediato. El servicio real ni siquiera se cargó en RAM.

// Intento 2: Usuario Admin (Primera vez)
ejecutorDeReportes.generarReporte("Héctor_Admin");
// 🛠️ Pasa los filtros -> Se inicializa el servicio real -> Se ejecuta.

// Intento 3: Mismo Admin pide lo mismo inmediatamente
ejecutorDeReportes.generarReporte("Héctor_Admin");
// ⚡ Responde el Proxy directamente desde el caché. No se castiga a la BD.