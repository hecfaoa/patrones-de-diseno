import { Command } from "../interface/Command.js";
import { DocumentoEditor } from "./DocumentoEditor.js";

export class ComandoEscribir implements Command {
    private editor: DocumentoEditor;
    private texto: string;

    constructor(editor: DocumentoEditor, texto: string) {
        this.editor = editor;
        this.texto = texto;
    }

    public execute(): void {
        this.editor.escribir(this.texto);
    }

    public undo(): void {
        // Para deshacer, borramos la misma cantidad de caracteres que escribimos
        this.editor.borrarUltimo(this.texto.length);
    }
}