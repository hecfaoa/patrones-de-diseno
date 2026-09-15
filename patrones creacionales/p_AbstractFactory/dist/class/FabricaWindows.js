import { BotonWindows } from "./windows/BotonWindows.js";
import { ScrollBarWindows } from "./windows/ScrollBarWindows.js";
export class FabricaWindows {
    crearBoton() {
        return new BotonWindows();
    }
    crearScrollBar() {
        return new ScrollBarWindows();
    }
}
