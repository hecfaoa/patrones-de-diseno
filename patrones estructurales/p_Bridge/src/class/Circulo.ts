import { Forma } from "./Forma.js";

export class Circulo extends Forma  {   
    dibujar(): void {
        console.log(`Dibujando un círculo. ${this.color.applyColor()}`);
    }
}