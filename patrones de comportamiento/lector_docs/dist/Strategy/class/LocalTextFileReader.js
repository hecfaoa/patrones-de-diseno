import * as fs from "node:fs/promises";
// Estrategia 2: Lectura de Texto Local (CSV, JSON, TXT)
export class LocalTextFileReader {
    async read(absolutePath) {
        console.log(`📂 [LocalTextFileReader]: Leyendo texto UTF-8 de: ${absolutePath}`);
        // Lee el archivo local como String
        return await fs.readFile(absolutePath, "utf-8");
    }
}
//# sourceMappingURL=LocalTextFileReader.js.map