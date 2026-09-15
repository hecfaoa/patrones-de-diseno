// ========================================================
// 3. EL CONTEXTO: Utiliza la estrategia inyectada
// ========================================================
import { EstrategiaEnvio } from "../interface/EstrategiaEnvio.js";

export class PedidoServicio {
    private estrategiaEnvio: EstrategiaEnvio;

    // Inyección de la estrategia
    constructor(estrategiaInicial: EstrategiaEnvio) {
        this.estrategiaEnvio = estrategiaInicial;
    }

    // Permite cambiar la estrategia en tiempo de ejecución (Run-time)
    public cambiarEstrategia(nuevaEstrategia: EstrategiaEnvio): void {
        this.estrategiaEnvio = nuevaEstrategia;
    }

    public procesarOrden(pesoPaquete: number): void {
        const costo = this.estrategiaEnvio.calcularCosto(pesoPaquete);
        console.log(`🚚 Costo de envío calculado: $${costo} USD`);
    }
}