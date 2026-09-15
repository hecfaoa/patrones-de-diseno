import type { FileReaderStrategy } from "../interface/FileReaderStrategy.js";
export declare class LocalBinaryFileReader implements FileReaderStrategy {
    read(absolutePath: string): Promise<Buffer>;
}
//# sourceMappingURL=LocalBinaryFileReader.d.ts.map