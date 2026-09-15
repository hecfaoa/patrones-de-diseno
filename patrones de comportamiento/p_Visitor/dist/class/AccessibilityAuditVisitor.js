export class AccessibilityAuditVisitor {
    errores = [];
    visitarTexto(nodo) {
        if (!nodo.contenido.trim()) {
            this.errores.push("⚠️ El nodo de texto está vacío.");
        }
    }
    visitarImagen(nodo) {
        if (!nodo.altText) {
            this.errores.push(`❌ La imagen (${nodo.url}) no tiene texto alternativo (altText).`);
        }
    }
}
