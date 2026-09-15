import type { FileReaderStrategy } from "../interface/FileReaderStrategy.js";
import * as fs from 'node:fs/promises';

// Estrategia 1: Lectura Binaria Local (PDFs, imágenes, etc.)
export class LocalBinaryFileReader implements FileReaderStrategy {
    async read(absolutePath: string): Promise<Buffer> {
        console.log(`📂 [LocalBinaryFileReader]: Leyendo buffer binario de: ${absolutePath}`);
        return await fs.readFile(absolutePath); // Lee el archivo local como Buffer
    }
}