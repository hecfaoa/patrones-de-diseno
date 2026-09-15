import { Transporte } from "../interfaces/Transporte.js";

export class Camion implements Transporte {

  entrega(): void {
    console.log("Entregando paquete por camión.");
  }

}