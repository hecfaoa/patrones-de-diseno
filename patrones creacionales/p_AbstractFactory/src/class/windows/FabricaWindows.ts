import { Boton } from "../../interfaces/Boton.js";
import { FabricaUI } from "../../interfaces/FabricaUI.js";
import { ScrollBar } from "../../interfaces/ScrollBar.js";
import { BotonWindows } from "./BotonWindows.js";
import { ScrollBarWindows } from "./ScrollBarWindows.js";

export class FabricaWindows implements FabricaUI {
    crearBoton(): Boton {
        return new BotonWindows();
    }
    crearScrollBar(): ScrollBar {
        return new ScrollBarWindows();
    }
}   