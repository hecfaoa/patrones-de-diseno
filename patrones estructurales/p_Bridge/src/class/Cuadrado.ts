import { Forma } from "./Forma.js";

export class Cuadrado extends Forma  {
    dibujar(): void {
        console.log(`Dibujando un cuadrado. ${this.color.applyColor()}`);
    }
}
