// ========================================================
// 3. VISITANTES CONCRETOS (Nuevas operaciones aisladas)
// ========================================================
// Operación 1: Exportador a JSON
export class JsonExportVisitor {
    resultado = [];
    visitarTexto(nodo) {
        this.resultado.push(JSON.stringify({ tipo: "texto", valor: nodo.contenido }));
    }
    visitarImagen(nodo) {
        this.resultado.push(JSON.stringify({ tipo: "imagen", src: nodo.url, alt: nodo.altText }));
    }
}
