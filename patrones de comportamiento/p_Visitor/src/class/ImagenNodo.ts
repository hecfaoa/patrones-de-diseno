import type { ElementoNodo } from "../interface/ElementoNodo.js";
import type { VisitorNodo } from "../interface/VisitorNodo.js";
// ========================================================
// 2. ELEMENTOS CONCRETOS (Estructura de Objetos)
// ========================================================
export class ImagenNodo implements ElementoNodo {
    constructor(public url: string, public altText: string) {}

    public aceptar(visitante: VisitorNodo): void {
        visitante.visitarImagen(this);
    }
}