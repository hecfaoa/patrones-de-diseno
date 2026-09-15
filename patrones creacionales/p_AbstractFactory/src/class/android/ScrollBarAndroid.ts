import { ScrollBar } from "../../interfaces/ScrollBar.js";

export class ScrollBarAndroid implements ScrollBar {
  public desplazar(): void {
    console.log("Renderizando una barra de desplazamiento en Android");
  } 
}