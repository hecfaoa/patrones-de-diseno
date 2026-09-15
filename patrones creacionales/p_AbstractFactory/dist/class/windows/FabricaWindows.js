import { BotonWindows } from "./BotonWindows.js";
import { ScrollBarWindows } from "./ScrollBarWindows.js";
export class FabricaWindows {
    crearBoton() {
        return new BotonWindows();
    }
    crearScrollBar() {
        return new ScrollBarWindows();
    }
}
