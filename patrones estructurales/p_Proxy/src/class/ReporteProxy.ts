import { InterfaceReporte } from "../interface/InterfaceReporte.js";
import { ServicioReportesReal } from "./ServicioReportesReal.js";

export class ReporteProxy implements InterfaceReporte {
    private servicioReal: ServicioReportesReal | null = null;
    private cache: Map<string, string> = new Map();

    // Control de Acceso (Seguridad)
    private tieneAcceso(usuario: string): boolean {
        return usuario === "Héctor_Admin"; // Solo los admin pasan
    }

    public generarReporte(usuario: string): void {
        console.log(`🛡️ [Proxy]: Interceptando petición de ${usuario}...`);

        // Paso 1: Validación de Seguridad
        if (!this.tieneAcceso(usuario)) {
            console.log(`❌ [Proxy]: Acceso DENEGADO para ${usuario}.`);
            return;
        }

        // Paso 2: Caché inteligente
        if (this.cache.has(usuario)) {
            console.log(`♻️ [Proxy]: Devolviendo resultado desde el Caché (0 ms de CPU).`);
            return;
        }

        // Paso 3: Carga Perezosa (Lazy Loading)
        // El objeto pesado SOLO se crea en memoria si el usuario pasó los filtros
        if (this.servicioReal === null) {
            this.servicioReal = new ServicioReportesReal();
        }

        // Paso 4: Delegación
        this.servicioReal.generarReporte(usuario);
        this.cache.set(usuario, "Reporte_Data_Ok");
    }
}
