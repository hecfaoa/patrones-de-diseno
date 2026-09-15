import type { VisitorNodo } from "../interface/VisitorNodo.js";
import type { ImagenNodo } from "./ImagenNodo.js";
import type { TextoNodo } from "./TextoNodo.js";

export class AccessibilityAuditVisitor implements VisitorNodo {
    public errores: string[] = [];

    public visitarTexto(nodo: TextoNodo): void {
        if (!nodo.contenido.trim()) {
            this.errores.push("⚠️ El nodo de texto está vacío.");
        }
    }

    public visitarImagen(nodo: ImagenNodo): void {
        if (!nodo.altText) {
            this.errores.push(`❌ La imagen (${nodo.url}) no tiene texto alternativo (altText).`);
        }
    }
}