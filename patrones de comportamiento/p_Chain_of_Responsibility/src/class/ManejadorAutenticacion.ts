import { BaseManejador } from "./BaseManejador.js";

export class ManejadorAutenticacion extends BaseManejador {
    
    public procesar(peticion: any): string | null {
        console.log("🔒 [Chain]: Verificando autenticación...");
        if (!peticion.token) {
            return "Error 401: Usuario no autenticado."; // Corta la cadena
        }
        return super.procesar(peticion); // Pasa al siguiente eslabón
    }
}

