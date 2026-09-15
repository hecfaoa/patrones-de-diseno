import { Boton } from "../../interfaces/Boton.js";
import { FabricaUI } from "../../interfaces/FabricaUI.js";
import { ScrollBar } from "../../interfaces/ScrollBar.js";
import { BotonAndroid } from "./BotonAndroid.js";
import { ScrollBarAndroid } from "./ScrollBarAndroid.js";

export class FabricaAndroid implements FabricaUI {
  crearBoton(): Boton {
    return new BotonAndroid();
  }

  crearScrollBar(): ScrollBar {
    return new ScrollBarAndroid();
  }
}
