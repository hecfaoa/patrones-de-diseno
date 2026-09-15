import { ContextoEntorno } from "../class/ContextoEntorno.js";

// 2. Interfaz Abstracta de la Expresión
export interface Expresion {
    interpretar(contexto: ContextoEntorno): boolean;
}