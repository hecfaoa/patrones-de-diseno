// ========================================================
// 2. ELEMENTOS CONCRETOS (Estructura de Objetos)
// ========================================================
export class ImagenNodo {
    url;
    altText;
    constructor(url, altText) {
        this.url = url;
        this.altText = altText;
    }
    aceptar(visitante) {
        visitante.visitarImagen(this);
    }
}
