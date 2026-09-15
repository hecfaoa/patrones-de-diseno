import { BotonAndroid } from "./BotonAndroid.js";
import { ScrollBarAndroid } from "./ScrollBarAndroid.js";
export class FabricaAndroid {
    crearBoton() {
        return new BotonAndroid();
    }
    crearScrollBar() {
        return new ScrollBarAndroid();
    }
}
