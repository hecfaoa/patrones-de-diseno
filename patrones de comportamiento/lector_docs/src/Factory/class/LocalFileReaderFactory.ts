import * as path from 'node:path';
import { LocalBinaryFileReader } from "../../Strategy/class/LocalBinaryFileReader.js";
import { LocalTextFileReader } from "../../Strategy/class/LocalTextFileReader.js";
import type { FileReaderStrategy } from "../../Strategy/interface/FileReaderStrategy.js";

export class LocalFileReaderFactory {
    static getStrategy(filePath: string): FileReaderStrategy {
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