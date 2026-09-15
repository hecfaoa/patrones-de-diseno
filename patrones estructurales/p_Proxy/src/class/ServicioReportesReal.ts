import { InterfaceReporte } from "../interface/InterfaceReporte.js";

export class ServicioReportesReal implements InterfaceReporte    {

    constructor() {
        console.log("ServicioReportesReal: Inicializando servicio de reportes reales...");
    }
    
    public generarReporte(usuario: string): void {
        console.log(`Generando reporte para el usuario: ${usuario}`);
    }
}