// ========================================================
// 3. EL CARETAKER: Es el guardián del historial
// ========================================================
export class HistorialEditor {
    editor;
    mementos = [];
    constructor(editor) {
        this.editor = editor;
    }
    hacerBackup() {
        this.mementos.push(this.editor.guardar());
    }
    deshacer() {
        if (!this.mementos.length)
            return;
        const memento = this.mementos.pop();
        if (memento) {
            this.editor.restaurar(memento);
        }
    }
}
