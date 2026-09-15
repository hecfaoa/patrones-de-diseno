import type { ElementoNodo } from "../interface/ElementoNodo.js";
import type { VisitorNodo } from "../interface/VisitorNodo.js";
// ========================================================
// 2. ELEMENTOS CONCRETOS (Estructura de Objetos)
// ========================================================
export class TextoNodo implements ElementoNodo {
    constructor(public contenido: string) {}

    public aceptar(visitante: VisitorNodo): void {
        // Double Dispatch: El elemento le dice al visitante quién es él realmente
        visitante.visitarTexto(this);
    }
}