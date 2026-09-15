import { Boton } from "../../interfaces/Boton.js";

export class BotonMac implements Boton {
    renderizar(): void {
        console.log("Renderizando un botón estilo Mac");
    }
}   