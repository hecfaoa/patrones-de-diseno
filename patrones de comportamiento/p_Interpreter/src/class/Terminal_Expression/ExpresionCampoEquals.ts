// ========================================================
// 3. EXPRESIONES TERMINALES (Evaluación directa de variables)
// ========================================================
import { Expresion } from "../../interface/Expresion.js";
import { ContextoEntorno } from "../ContextoEntorno.js";


export class ExpresionCampoEquals implements Expresion {
    constructor(private campo: string, private valorEsperado: any) {}

    public interpretar(contexto: ContextoEntorno): boolean {
        return contexto[this.campo] === this.valorEsperado;
    }
}