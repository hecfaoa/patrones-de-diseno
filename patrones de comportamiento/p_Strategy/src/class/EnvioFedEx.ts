import { EstrategiaEnvio } from "../interface/EstrategiaEnvio.js";

export class EnvioFedEx implements EstrategiaEnvio {
    public calcularCosto(pesoKg: number): number {
        return pesoKg * 8 + 12;
    }
}