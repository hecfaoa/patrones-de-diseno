import { LocalDataProcessorPipeline } from "./LocalDataProcessorPipeline.js";
export declare class LocalCsvProcessor extends LocalDataProcessorPipeline<string, {
    totalFilas: number;
}> {
    protected parseData(rawData: string): string[];
    protected analyze(parsedData: string[]): {
        totalFilas: number;
    };
}
//# sourceMappingURL=LocalCsvProcesor.d.ts.map