import type { VisitorNodo } from "./VisitorNodo.js";

// 1. Interfaces del Elemento y del Visitante
export interface ElementoNodo {
    aceptar(visitante: VisitorNodo): void;
}