import { BaseManejador } from "./BaseManejador.js";

export class ManejadorInventario extends BaseManejador {
    
    public procesar(peticion: any): string | null {
        console.log("📦 [Chain]: Comprobando stock en almacén...");
        const stockDisponible = 5; // Simulación
        if (peticion.cantidad > stockDisponible) {
            return "Error 422: Stock insuficiente."; // Corta la cadena
        }
        return super.procesar(peticion);
    }
}