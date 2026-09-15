export class TipoAlertaFlyweight {
    tipo;
    severidad;
    plantillaMensaje; // Texto largo o metadato pesado
    constructor(tipo, severidad, plantillaMensaje) {
        this.tipo = tipo;
        this.severidad = severidad;
        this.plantillaMensaje = plantillaMensaje;
    }
    // El estado extrínseco (ip, timestamp) se recibe por parámetro, no se guarda aquí
    formatearLog(ipUsuario, timestamp) {
        console.log(`[${new Date(timestamp).toISOString()}] [${this.severidad}] [IP: ${ipUsuario}] -> ${this.plantillaMensaje}`);
    }
}
