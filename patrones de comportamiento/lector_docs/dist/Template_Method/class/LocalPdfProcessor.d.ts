import type { ResultadoPdf } from "../interface/ResultadoPdf.js";
import { LocalDataProcessorPipeline } from "./LocalDataProcessorPipeline.js";
export declare class LocalPdfProcessor extends LocalDataProcessorPipeline<Buffer, ResultadoPdf> {
    protected parseData(rawData: Buffer): {
        bufferSize: number;
        header: string;
    };
    protected analyze(parsedData: {
        bufferSize: number;
        header: string;
    }): ResultadoPdf;
    protected shouldNotify(): Promise<boolean>;
}
//# sourceMappingURL=LocalPdfProcessor.d.ts.map