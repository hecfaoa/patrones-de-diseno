import { AdaptadorXMLaJSON } from "./class/AdaptadorXMLaJSON.js";
import { ServicioViejoXML } from "./class/ServicioViejoXML.js";

console.log("WELLCOME TO THE ADAPTER PATTERN!");

// Tenemos el servicio viejo e incompatible
const servicioViejo = new ServicioViejoXML();

// Creamos el adaptador y le "enchufamos" el servicio viejo
const adaptador = new AdaptadorXMLaJSON(servicioViejo);

// Nuestro código cliente moderno consume el adaptador de forma transparente
console.log("--- Sistema Moderno pidiendo datos ---");
const datosEnJSON = adaptador.obtenerDatosUsuario();

console.log("Resultado final recibido por el sistema:");
console.log(datosEnJSON); // Imprime: {"nombre":"Héctor","pais":"México"} 🎉