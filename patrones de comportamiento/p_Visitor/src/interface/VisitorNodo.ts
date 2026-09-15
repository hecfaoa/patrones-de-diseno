import type { ImagenNodo } from "../class/ImagenNodo.js";
import type { TextoNodo } from "../class/TextoNodo.js";

// 1. Interfaces del Elemento y del Visitante
export interface VisitorNodo {
    visitarTexto(nodo: TextoNodo): void;
    visitarImagen(nodo: ImagenNodo): void;
}