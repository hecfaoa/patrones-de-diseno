import { Color } from "../interfaces/Color.js";

export abstract class Forma {
  protected color: Color;

  constructor(color: Color) {   
    this.color = color;
  }

    abstract dibujar(): void;
}