// Contrato de la Estrategia de Apertura

export interface FileReaderStrategy {
    read(absolutePath: string): Promise<Buffer | string>;
}