// ========================================================
// 3. EL CARETAKER: Es el guardián del historial
// ========================================================

import { Memento } from "../interface/Memento.js";
import { EditorTexto } from "./EditorTexto.js";

export class HistorialEditor {
    private mementos: Memento[] = [];

    constructor(private editor: EditorTexto) {}

    public hacerBackup(): void {
        this.mementos.push(this.editor.guardar());
    }

    public deshacer(): void {
        if (!this.mementos.length) return;
        
        const memento = this.mementos.pop();
        if (memento) {
            this.editor.restaurar(memento);
        }
    }
}