// ========================================================
// 4. EXPRESIONES NO TERMINALES (Operadores lógicos que combinan reglas)

import { Expresion } from "../../interface/Expresion.js";
import { ContextoEntorno } from "../ContextoEntorno.js";

// ========================================================
export class ExpresionAnd implements Expresion {
    constructor(
        private izq: Expresion, 
        private der: Expresion
    ) {}

    public interpretar(contexto: ContextoEntorno): boolean {
        // Evalúa ambas sub-expresiones recursivamente
        return this.izq.interpretar(contexto) && this.der.interpretar(contexto);
    }
}