import { LocalDataProcessorPipeline } from "./LocalDataProcessorPipeline.js";
export declare class LocalJsonProcessor extends LocalDataProcessorPipeline<string, {
    totalClaves: number;
}> {
    protected parseData(rawData: string): Record<string, any>;
    protected analyze(parsedData: Record<string, any>): {
        totalClaves: number;
    };
}
//# sourceMappingURL=LocalJsonProcessor.d.ts.map