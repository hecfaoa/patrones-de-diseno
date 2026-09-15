import { TipoAlertaFlyweight } from "./TipoAlertaFlyweight.js";

export class AlertaFactory {
    private flyweights: { [key: string]: TipoAlertaFlyweight } = {};

    public obtenerFlyweight(tipo: string, severidad: string, plantilla: string): TipoAlertaFlyweight {
        const hash = `${tipo}_${severidad}`;

        if (!this.flyweights[hash]) {
            console.log(`\n⚙️ [Factory]: Creando NUEVO objeto en RAM para el tipo: ${tipo}`);
            this.flyweights[hash] = new TipoAlertaFlyweight(tipo, severidad, plantilla);
        } else {
            console.log(`\n♻️ [Factory]: Reutilizando objeto existente en RAM para el tipo: ${tipo}`);
        }

        return this.flyweights[hash];
    }
}
