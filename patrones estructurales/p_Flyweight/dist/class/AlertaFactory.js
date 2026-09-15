import { TipoAlertaFlyweight } from "./TipoAlertaFlyweight.js";
export class AlertaFactory {
    flyweights = {};
    obtenerFlyweight(tipo, severidad, plantilla) {
        const hash = `${tipo}_${severidad}`;
        if (!this.flyweights[hash]) {
            console.log(`\n⚙️ [Factory]: Creando NUEVO objeto en RAM para el tipo: ${tipo}`);
            this.flyweights[hash] = new TipoAlertaFlyweight(tipo, severidad, plantilla);
        }
        else {
            console.log(`\n♻️ [Factory]: Reutilizando objeto existente en RAM para el tipo: ${tipo}`);
        }
        return this.flyweights[hash];
    }
}
