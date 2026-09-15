import { BaseManejador } from "./BaseManejador.js";
export class ManejadorValidacionDatos extends BaseManejador {

    public procesar(peticion: any): string | null {
        console.log("📝 [Chain]: Validando esquema de datos de la orden...");
        if (!peticion.productoId || peticion.cantidad <= 0) {
            return "Error 400: Datos de la orden inválidos."; // Corta la cadena
        }
        return super.procesar(peticion);
    }
}