import { Transporte } from "../interfaces/Transporte.js";
import { Camion } from "./Camion.js";
import { Barco } from "./Barco.js";
import { Avion } from "./Avion.js";

export class FabricaLogistica {
  crearTransporte(tipo: string): Transporte {
    switch (tipo) {
      case "terrestre":
        return new Camion();
      case "maritimo":
        return new Barco();
      case "aereo":
        return new Avion();
      default:
        throw new Error("Tipo de transporte no válido.");
    }
  }
}
