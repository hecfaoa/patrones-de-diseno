// 1. RECEPTOR (Receiver): La clase que realmente sabe cómo hacer el trabajo pesado
export class DocumentoEditor {
    contenido = "";
    escribir(texto) {
        this.contenido += texto;
        console.log(`📝 [Editor]: Contenido actual -> "${this.contenido}"`);
    }
    borrarUltimo(cantidad) {
        this.contenido = this.contenido.slice(0, -cantidad);
        console.log(`📝 [Editor]: Contenido actual -> "${this.contenido}"`);
    }
    obtenerContenido() {
        return this.contenido;
    }
}
