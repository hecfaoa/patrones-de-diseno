import type { FileReaderStrategy } from "../interface/FileReaderStrategy.js";
import * as fs from "node:fs/promises";

// Estrategia 2: Lectura de Texto Local (CSV, JSON, TXT)
export class LocalTextFileReader implements FileReaderStrategy {
  async read(absolutePath: string): Promise<string> {
    console.log(
      `📂 [LocalTextFileReader]: Leyendo texto UTF-8 de: ${absolutePath}`,
    );
    // Lee el archivo local como String
    return await fs.readFile(absolutePath, "utf-8");
  }
}
