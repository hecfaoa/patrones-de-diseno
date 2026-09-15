// ========================================================
// 2. ESTRATEGIAS CONCRETAS (Algoritmos encapsulados)
// ========================================================

import { EstrategiaEnvio } from "../interface/EstrategiaEnvio.js";
export class EnvioDHL implements EstrategiaEnvio {
    public calcularCosto(pesoKg: number): number {
        return pesoKg * 10 + 5;
    }
}
