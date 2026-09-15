// ========================================================
// 2. SUBCLASES CONCRETAS (Implementan los pasos específicos)
// ========================================================

import { ProcesadorData } from "./ProcesadorData.js";

export class ProcesadorCSV extends ProcesadorData {
    protected extraerDatos(): void {
        console.log("📝 Separando filas y columnas por comas (CSV)...");
    }

    protected analizarDatos(): void {
        console.log("📊 Validando esquemas de tipos de cada columna del CSV.");
    }

    // Sobrescribimos el Hook opcional
    protected debeEnviarReporte(): boolean {
        return false; // Para archivos CSV no queremos enviar correos
    }
}