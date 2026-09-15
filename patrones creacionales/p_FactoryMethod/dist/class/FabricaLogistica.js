import { Camion } from "./Camion.js";
import { Barco } from "./Barco.js";
export class FabricaLogistica {
    crearTransporte(tipo) {
        switch (tipo) {
            case "terrestre":
                return new Camion();
            case "maritimo":
                return new Barco();
            default:
                throw new Error("Tipo de transporte no válido.");
        }
    }
}
