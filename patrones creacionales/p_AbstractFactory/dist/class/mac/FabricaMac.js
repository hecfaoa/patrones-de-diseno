import { BotonMac } from "./BotonMac.js";
import { ScrollBarMac } from "./ScrollBarMac.js";
export class FabricaMac {
    crearBoton() {
        return new BotonMac();
    }
    crearScrollBar() {
        return new ScrollBarMac();
    }
}
