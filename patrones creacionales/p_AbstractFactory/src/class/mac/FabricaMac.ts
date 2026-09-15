import { Boton } from "../../interfaces/Boton.js";
import { FabricaUI } from "../../interfaces/FabricaUI.js";
import { ScrollBar } from "../../interfaces/ScrollBar.js";
import { BotonMac } from "./BotonMac.js";
import { ScrollBarMac } from "./ScrollBarMac.js";

export class FabricaMac implements FabricaUI {
    crearBoton(): Boton {
        return new BotonMac();
    }
    crearScrollBar(): ScrollBar {
        return new ScrollBarMac();
    }
}