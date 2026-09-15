import { Memento } from "../interface/Memento.js";

export class EditorMemento implements Memento{

    private readonly estadoTexto: string;
    private readonly fecha: Date;

    constructor(texto: string) {
        this.estadoTexto = texto;
        this.fecha = new Date();
    }

    // Solo el Originator debe poder leer el contenido privado real
    public getEstado(): string {
        return this.estadoTexto;
    }

    public getFecha(): Date {
        return this.fecha;
    }
}
