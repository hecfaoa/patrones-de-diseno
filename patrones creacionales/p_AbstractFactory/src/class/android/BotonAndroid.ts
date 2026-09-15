import { Boton } from "../../interfaces/Boton.js";

export class BotonAndroid implements Boton {
  public renderizar(): void {
    console.log("Renderizando un botón en Android");
  }
}
