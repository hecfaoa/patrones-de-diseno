import { Transporte } from "../interfaces/Transporte.js";

export class Barco implements Transporte {

  entrega(): void {
    console.log("Entregando paquete por barco.");
  } 
}