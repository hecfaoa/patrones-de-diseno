import { EstrategiaEnvio } from "../interface/EstrategiaEnvio.js";

export class EnvioGratuitoPromocional implements EstrategiaEnvio {
    public calcularCosto(pesoKg: number): number {
        return 0; // Promoción
    }
}