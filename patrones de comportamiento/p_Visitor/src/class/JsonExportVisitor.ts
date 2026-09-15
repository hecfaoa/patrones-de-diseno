// ========================================================
// 3. VISITANTES CONCRETOS (Nuevas operaciones aisladas)
// ========================================================

import type { VisitorNodo } from "../interface/VisitorNodo.js";
import type { ImagenNodo } from "./ImagenNodo.js";
import type { TextoNodo } from "./TextoNodo.js";

// Operación 1: Exportador a JSON
export class JsonExportVisitor implements VisitorNodo {
    public resultado: string[] = [];

    public visitarTexto(nodo: TextoNodo): void {
        this.resultado.push(JSON.stringify({ tipo: "texto", valor: nodo.contenido }));
    }

    public visitarImagen(nodo: ImagenNodo): void {
        this.resultado.push(JSON.stringify({ tipo: "imagen", src: nodo.url, alt: nodo.altText }));
    }
}