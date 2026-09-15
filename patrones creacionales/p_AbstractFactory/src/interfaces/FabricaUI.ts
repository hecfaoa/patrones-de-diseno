import { Boton } from "./Boton.js";
import { ScrollBar } from "./ScrollBar.js";

export interface FabricaUI {
    crearBoton(): Boton;
    crearScrollBar(): ScrollBar;
}