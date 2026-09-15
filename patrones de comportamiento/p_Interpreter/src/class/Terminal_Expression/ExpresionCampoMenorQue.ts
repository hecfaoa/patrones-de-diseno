import { Expresion } from "../../interface/Expresion.js";
import { ContextoEntorno } from "../ContextoEntorno.js";

export class ExpresionCampoMenorQue implements Expresion {
    constructor(private campo: string, private valorLimite: number) {}

    public interpretar(contexto: ContextoEntorno): boolean {
        return contexto[this.campo] < this.valorLimite;
    }
}