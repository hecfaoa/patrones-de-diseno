import * as fs from 'node:fs/promises';
// Estrategia 1: Lectura Binaria Local (PDFs, imágenes, etc.)
export class LocalBinaryFileReader {
    async read(absolutePath) {
        console.log(`📂 [LocalBinaryFileReader]: Leyendo buffer binario de: ${absolutePath}`);
        return await fs.readFile(absolutePath); // Lee el archivo local como Buffer
    }
}
//# sourceMappingURL=LocalBinaryFileReader.js.map