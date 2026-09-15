export class TipoAlertaFlyweight {
    private tipo: string;
    private severidad: string;
    private plantillaMensaje: string; // Texto largo o metadato pesado

    constructor(tipo: string, severidad: string, plantillaMensaje: string) {
        this.tipo = tipo;
        this.severidad = severidad;
        this.plantillaMensaje = plantillaMensaje;
    }

    // El estado extrínseco (ip, timestamp) se recibe por parámetro, no se guarda aquí
    public formatearLog(ipUsuario: string, timestamp: number): void {
        console.log(`[${new Date(timestamp).toISOString()}] [${this.severidad}] [IP: ${ipUsuario}] -> ${this.plantillaMensaje}`);
    }
}
