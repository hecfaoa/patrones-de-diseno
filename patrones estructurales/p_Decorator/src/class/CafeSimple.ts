import { Bebida } from "../interfaces/Bebida.js";

export class CafeSimple implements Bebida {
    public obtenerDescripcion(): string {
        return "Café Regular";
    }
    public calcularCosto(): number {
        return 30; // Cuesta 30 pesos
    }
}