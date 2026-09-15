// 1. Interfaz común para todas las estrategias
export interface EstrategiaEnvio {
    calcularCosto(pesoKg: number): number;
}