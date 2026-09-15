// ========================================================
// 2. EL ORIGINATOR: Maneja el estado y se toma las fotos a sí mismo
// ========================================================

import { Memento } from "../interface/Memento.js";
import { EditorMemento } from "./EditorMemento.js";

export class EditorTexto {
    private texto: string = "";

    public escribir(nuevoTexto: string): void {
        console.log(`escribiendo ...${nuevoTexto}`);
        this.texto += nuevoTexto;
    }

    public getTexto(): string {
        return this.texto;
    }

    // Crea el Memento encapsulando su estado privado actual
    public guardar(): Memento {
        return new EditorMemento(this.texto);
    }

    // Restaura su estado interno a partir de un Memento
    public restaurar(memento: Memento): void {
        const mementoConcreto = memento as EditorMemento;
        this.texto = mementoConcreto.getEstado();
    }
}