import { Boton } from "../../interfaces/Boton.js";

export class BotonWindows implements Boton {
  renderizar(): void {
    console.log("Renderizando un botón estilo Windows");
  }
}
