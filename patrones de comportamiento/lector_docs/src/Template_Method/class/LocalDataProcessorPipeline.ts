import * as path from 'node:path';
import * as fs from 'node:fs/promises';  
import { LocalFileReaderFactory } from '../../Factory/class/LocalFileReaderFactory.js';

export abstract class LocalDataProcessorPipeline<TInput, TOutput> {
    protected absolutePath: string;
    protected fileData: TInput | null = null;

    constructor(relativePath: string) {
        // Convierte la ruta relativa a una ruta absoluta en tu disco local
        this.absolutePath = path.resolve(relativePath);
    }

    // ⚠️ TEMPLATE METHOD (El pipeline ejecutor)
    public async process(): Promise<TOutput> {
        await this.openFile();
        const rawData = this.parseData(this.fileData!);
        const result = this.analyze(rawData);
        
        if (await this.shouldNotify()) {
            await this.sendNotification();
        }

        this.closeFile();
        return result;
    }

    private async openFile(): Promise<void> {
        // 1. Verificamos que el archivo realmente exista en tu computadora
        try {
            await fs.access(this.absolutePath);
        } catch {
            throw new Error(`❌ El archivo no existe en la ruta local: ${this.absolutePath}`);
        }

        // 2. Usamos la Factory para obtener la Estrategia de lectura local
        const readerStrategy = LocalFileReaderFactory.getStrategy(this.absolutePath);
        this.fileData = await readerStrategy.read(this.absolutePath) as TInput;
    }

    private closeFile(): void {
        console.log(`🔒 [Pipeline]: Operación finalizada para: ${path.basename(this.absolutePath)}\n`);
    }

    // Pasos específicos para subclases
    protected abstract parseData(rawData: TInput): any;
    protected abstract analyze(parsedData: any): TOutput;

    protected async shouldNotify(): Promise<boolean> {
        return true;
    }

    private async sendNotification(): Promise<void> {
        console.log("📧 [Notification]: Proceso local finalizado con éxito.");
    }
}