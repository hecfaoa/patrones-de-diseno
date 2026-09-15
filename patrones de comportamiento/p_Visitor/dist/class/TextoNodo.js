// ========================================================
// 2. ELEMENTOS CONCRETOS (Estructura de Objetos)
// ========================================================
export class TextoNodo {
    contenido;
    constructor(contenido) {
        this.contenido = contenido;
    }
    aceptar(visitante) {
        // Double Dispatch: El elemento le dice al visitante quién es él realmente
        visitante.visitarTexto(this);
    }
}
