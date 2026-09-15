import { ScrollBar } from "../../interfaces/ScrollBar.js";

export class ScrollBarMac implements ScrollBar {
    desplazar(): void {
        console.log("Renderizando ScrollBar estilo Mac");
    }   
}