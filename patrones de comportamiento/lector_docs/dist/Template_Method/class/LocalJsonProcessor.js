import { LocalDataProcessorPipeline } from "./LocalDataProcessorPipeline.js";
export class LocalJsonProcessor extends LocalDataProcessorPipeline {
    parseData(rawData) {
        console.log("🧩 [JSON Parser]: Parseando string a Objeto JavaScript...");
        console.log("📝 [CSV Contenido]: ", rawData);
        return JSON.parse(rawData);
    }
    analyze(parsedData) {
        const claves = Object.keys(parsedData);
        console.log(`📊 [JSON Analyzer]: El objeto JSON contiene ${claves.length} propiedades raíz.`);
        return { totalClaves: claves.length };
    }
}
//# sourceMappingURL=LocalJsonProcessor.js.map