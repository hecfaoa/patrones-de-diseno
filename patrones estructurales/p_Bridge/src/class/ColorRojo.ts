import { Color } from "../interfaces/Color.js";

export class ColorRojo implements Color {
  applyColor(): string {
    return "Aplicando color rojo";
  }
}