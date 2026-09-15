import { EditorMemento } from "./EditorMemento.js";
// ========================================================
// 2. EL ORIGINATOR: Maneja el estado y se toma las fotos a sí mismo
// ========================================================
export class EditorTexto {
    texto = "";
    escribir(nuevoTexto) {
        console.log(`escribiendo ...${nuevoTexto}`);
        this.texto += nuevoTexto;
    }
    getTexto() {
        return this.texto;
    }
    // Crea el Memento encapsulando su estado privado actual
    guardar() {
        return new EditorMemento(this.texto);
    }
    // Restaura su estado interno a partir de un Memento
    restaurar(memento) {
        const mementoConcreto = memento;
        this.texto = mementoConcreto.getEstado();
    }
}
