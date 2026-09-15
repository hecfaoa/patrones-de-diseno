import { Transporte } from "../interfaces/Transporte.js";

export class Avion implements Transporte {
    entrega(): void {
        console.log("Entregando paquete por avión.");
    }
}