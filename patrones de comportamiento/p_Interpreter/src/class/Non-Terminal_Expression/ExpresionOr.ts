import { Expresion } from "../../interface/Expresion.js";
import { ContextoEntorno } from "../ContextoEntorno.js";

export class ExpresionOr implements Expresion {
    constructor(
        private izq: Expresion, 
        private der: Expresion
    ) {}

    public interpretar(contexto: ContextoEntorno): boolean {
        return this.izq.interpretar(contexto) || this.der.interpretar(contexto);
    }
}