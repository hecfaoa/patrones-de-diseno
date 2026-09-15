import { LocalDataProcessorPipeline } from "./LocalDataProcessorPipeline.js";
export class LocalCsvProcessor extends LocalDataProcessorPipeline {
    parseData(rawData) {
        console.log("📝 [CSV Parser]: Parseando contenido del archivo local...");
        console.log("📝 [CSV Contenido]: ", rawData.split(',').join(' '));
        return rawData.split(',').filter(line => line.trim().length > 0);
    }
    analyze(parsedData) {
        console.log(`📊 [CSV Analyzer]: Filas procesadas: ${parsedData.length}`);
        return { totalFilas: parsedData.length };
    }
}
//# sourceMappingURL=LocalCsvProcesor.js.map