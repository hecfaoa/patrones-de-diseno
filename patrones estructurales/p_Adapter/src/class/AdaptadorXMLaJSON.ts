import { TargetJSON } from "../interfaces/TargetJSON.js";
import { ServicioViejoXML } from "./ServicioViejoXML.js";
import { JSDOM } from "jsdom";

export class AdaptadorXMLaJSON implements TargetJSON {
  private servicioViejo: ServicioViejoXML;

  constructor(servicioViejo: ServicioViejoXML) {
    this.servicioViejo = servicioViejo;
  }

  // Tu sistema llamará a este método moderno...
  public obtenerDatosUsuario(): string {
    // 1. El adaptador obtiene el XML feo del servicio viejo
    const xmlString = this.servicioViejo.obtenerDatosEnXML();

    /************************************ */

    // 2. Inicializar JSDOM especificando el tipo de contenido text/xml
    const dom = new JSDOM(xmlString, { contentType: "text/xml" });
    const { document } = dom.window;

    // 3. Leer los datos usando los métodos estándar del DOM
    const nombre = document.querySelector("nombre")?.textContent;
    const pais = document.querySelector("pais")?.textContent;
    const profesion = document.querySelector("profesion")?.textContent;

    // 4. Mostrar los resultados en la consola
    console.log(`Nombre: ${nombre}`); // Imprime: Nombre: Héctor
    console.log(`País: ${pais}`); // Imprime: País: México
    console.log(`Profesión: ${profesion}`); // Imprime: Profesión: developer

    /**************************************/
    console.log(`[Adaptador]: Traduciendo de XML a JSON... 🔄`);

    // 2. Hace la conversión (simulada aquí para el ejemplo)
    // Convierte el XML en un bonito objeto JSON
    const jsonConvertido = JSON.stringify({ nombre: nombre, pais: pais, profesion: profesion });

    // 3. Devuelve lo que el sistema moderno sí entiende
    return jsonConvertido;
  }
}
