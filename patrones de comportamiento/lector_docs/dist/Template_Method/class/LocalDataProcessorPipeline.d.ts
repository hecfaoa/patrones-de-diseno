export declare abstract class LocalDataProcessorPipeline<TInput, TOutput> {
    protected absolutePath: string;
    protected fileData: TInput | null;
    constructor(relativePath: string);
    process(): Promise<TOutput>;
    private openFile;
    private closeFile;
    protected abstract parseData(rawData: TInput): any;
    protected abstract analyze(parsedData: any): TOutput;
    protected shouldNotify(): Promise<boolean>;
    private sendNotification;
}
//# sourceMappingURL=LocalDataProcessorPipeline.d.ts.map