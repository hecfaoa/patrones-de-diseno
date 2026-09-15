import * as path from 'node:path';
import * as fs from 'node:fs/promises';
import { LocalFileReaderFactory } from '../../Factory/class/LocalFileReaderFactory.js';
export class LocalDataProcessorPipeline {
    absolutePath;
    fileData = null;
    constructor(relativePath) {
        // Convierte la ruta relativa a una ruta absoluta en tu disco local
        this.absolutePath = path.resolve(relativePath);
    }
    // ⚠️ TEMPLATE METHOD (El pipeline ejecutor)
    async process() {
        await this.openFile();
        const rawData = this.parseData(this.fileData);
        const result = this.analyze(rawData);
        if (await this.shouldNotify()) {
            await this.sendNotification();
        }
        this.closeFile();
        return result;
    }
    async openFile() {
        // 1. Verificamos que el archivo realmente exista en tu computadora
        try {
            await fs.access(this.absolutePath);
        }
        catch {
            throw new Error(`❌ El archivo no existe en la ruta local: ${this.absolutePath}`);
        }
        // 2. Usamos la Factory para obtener la Estrategia de lectura local
        const readerStrategy = LocalFileReaderFactory.getStrategy(this.absolutePath);
        this.fileData = await readerStrategy.read(this.absolutePath);
    }
    closeFile() {
        console.log(`🔒 [Pipeline]: Operación finalizada para: ${path.basename(this.absolutePath)}\n`);
    }
    async shouldNotify() {
        return true;
    }
    async sendNotification() {
        console.log("📧 [Notification]: Proceso local finalizado con éxito.");
    }
}
//# sourceMappingURL=LocalDataProcessorPipeline.js.map