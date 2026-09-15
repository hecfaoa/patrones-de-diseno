import type { ResultadoPdf } from "../interface/ResultadoPdf.js";
import { LocalDataProcessorPipeline } from "./LocalDataProcessorPipeline.js";

export class LocalPdfProcessor extends LocalDataProcessorPipeline<
  Buffer,
  ResultadoPdf
> {
  // 1. Recibe el Buffer binario que leyó la LocalBinaryFileReader
  protected parseData(rawData: Buffer): { bufferSize: number; header: string } {
    console.log(
      `📄 [PDF Parser]: Procesando Buffer binario de ${rawData.length} bytes...`,
    );
    console.log("📝 [PDF Contenido]: ", rawData);

    // Un PDF siempre empieza con los bytes %PDF (en ASCII/Header)
    const header = rawData.toString("utf-8", 0, 5);

    return {
      bufferSize: rawData.length,
      header: header,
    };
  }

  // 2. Aplica la lógica analítica sobre los datos parseados
  protected analyze(parsedData: {
    bufferSize: number;
    header: string;
  }): ResultadoPdf {
    console.log(
      `📊 [PDF Analyzer]: Verificando cabecera de formato: "${parsedData.header}"`,
    );

    if (parsedData.header !== "%PDF-") {
      console.warn(
        "⚠️ Advertencia: El archivo no parece tener una cabecera PDF válida.",
      );
    }

    // Simulación de análisis de metadata/páginas
    return {
      paginasEstimadas: Math.ceil(parsedData.bufferSize / 50000) || 1,
      tieneTexto: true,
    };
  }

  // 3. Opcional: Sobrescribir el Hook de notificación si lo deseas
  protected async shouldNotify(): Promise<boolean> {
    console.log(
      "🔔 [PDF Hook]: Auditando lectura de documento confidencial PDF...",
    );
    return true;
  }
}
