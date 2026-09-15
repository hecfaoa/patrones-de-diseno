import { LocalDataProcessorPipeline } from "./LocalDataProcessorPipeline.js";

export class LocalCsvProcessor extends LocalDataProcessorPipeline<string, { totalFilas: number }> {
    protected parseData(rawData: string): string[] {
        console.log("📝 [CSV Parser]: Parseando contenido del archivo local...");
        console.log("📝 [CSV Contenido]: " , rawData.split(',').join(' '));
        return rawData.split(',').filter(line => line.trim().length > 0);
    }

    protected analyze(parsedData: string[]): { totalFilas: number } {
        console.log(`📊 [CSV Analyzer]: Filas procesadas: ${parsedData.length}`);
        return { totalFilas: parsedData.length };
    }
}