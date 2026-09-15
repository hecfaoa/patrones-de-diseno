import { FabricaWindows } from "./class/windows/FabricaWindows.js";
import { FabricaMac } from "./class/mac/FabricaMac.js";
import { FabricaAndroid } from "./class/android/FabricaAndroid.js";
console.log("---wellcome to abstract factory pattern---");
function levantarAplicacion(fabrica) {
    // La aplicación crea sus componentes sin importar la marca
    const boton = fabrica.crearBoton();
    const scroll = fabrica.crearScrollBar();
    // Los dibuja en pantalla
    boton.renderizar();
    scroll.desplazar();
}
// --- SIMULACIÓN ---
console.log("--- Iniciando aplicación en una computadora Mac ---");
// El sistema detecta que es Mac y le pasa la fábrica correcta:
levantarAplicacion(new FabricaMac());
// Imprime automáticamente el botón de Mac y el scroll de Mac. 🎉
console.log("\n--- Iniciando aplicación en una computadora Windows ---");
levantarAplicacion(new FabricaWindows());
console.log("\n--- Iniciando aplicación en un movil android ---");
levantarAplicacion(new FabricaAndroid());
