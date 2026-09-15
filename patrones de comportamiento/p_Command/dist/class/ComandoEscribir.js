export class ComandoEscribir {
    editor;
    texto;
    constructor(editor, texto) {
        this.editor = editor;
        this.texto = texto;
    }
    execute() {
        this.editor.escribir(this.texto);
    }
    undo() {
        // Para deshacer, borramos la misma cantidad de caracteres que escribimos
        this.editor.borrarUltimo(this.texto.length);
    }
}
