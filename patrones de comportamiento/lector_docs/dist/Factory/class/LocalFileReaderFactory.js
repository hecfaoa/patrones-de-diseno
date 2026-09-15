import * as path from 'node:path';
import { LocalBinaryFileReader } from "../../Strategy/class/LocalBinaryFileReader.js";
import { LocalTextFileReader } from "../../Strategy/class/LocalTextFileReader.js";
export class LocalFileReaderFactory {
    static getStrategy(filePath) {
        const extension = path.extname(filePath).toLowerCase();
        if (extension === '.pdf') {
            return new LocalBinaryFileReader();
        }
        if (extension === '.csv' || extension === '.json' || extension === '.txt') {
            return new LocalTextFileReader();
        }
        throw new Error(`Formato no soportado localmente: ${extension}`);
    }
}
//# sourceMappingURL=LocalFileReaderFactory.js.map