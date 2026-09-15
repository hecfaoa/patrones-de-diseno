// ========================================================
// 2. SUBCLASES CONCRETAS (Implementan los pasos específicos)
// ========================================================

import { ProcesadorData } from "./ProcesadorData.js";

export class ProcesadorPDF extends ProcesadorData {
    protected extraerDatos(): void {
        console.log("📄 Leyendo texto y gráficos codificados dentro del PDF...");
    }

    protected analizarDatos(): void {
        console.log("📊 Parseando tablas y aplicando OCR a las imágenes del PDF.");
    }
}

