export class EditorMemento {
    estadoTexto;
    fecha;
    constructor(texto) {
        this.estadoTexto = texto;
        this.fecha = new Date();
    }
    // Solo el Originator debe poder leer el contenido privado real
    getEstado() {
        return this.estadoTexto;
    }
    getFecha() {
        return this.fecha;
    }
}
