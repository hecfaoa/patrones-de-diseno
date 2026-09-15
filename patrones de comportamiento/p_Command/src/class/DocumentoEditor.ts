// 1. RECEPTOR (Receiver): La clase que realmente sabe cómo hacer el trabajo pesado

export class DocumentoEditor {
    private contenido: string = "";

    public escribir(texto: string): void {
        this.contenido += texto;
        console.log(`📝 [Editor]: Contenido actual -> "${this.contenido}"`);
    }

    public borrarUltimo(cantidad: number): void {
        this.contenido = this.contenido.slice(0, -cantidad);
        console.log(`📝 [Editor]: Contenido actual -> "${this.contenido}"`);
    }

    public obtenerContenido(): string {
        return this.contenido;
    }
}