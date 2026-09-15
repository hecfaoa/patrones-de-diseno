import { LocalDataProcessorPipeline } from "./Template_Method/class/LocalDataProcessorPipeline.js";

console.log("wellcome to my lector files:::\n\n");

import { LocalCsvProcessor } from "./Template_Method/class/LocalCsvProcesor.js";
import { LocalPdfProcessor } from "./Template_Method/class/LocalPdfProcessor.js";
import { LocalJsonProcessor } from "./Template_Method/class/LocalJsonProcessor.js";

import promptSync from "prompt-sync";

async function main() {
  try {
/*     console.log("=== 1. PROCESANDO ARCHIVO CSV ===");
    const csvProc = new LocalCsvProcessor("./datos.csv");
    await csvProc.process();

    console.log("=== 2. PROCESANDO ARCHIVO PDF ===");
    // Asegúrate de tener un archivo 'documento.pdf' en la raíz de tu proyecto
    const pdfProc = new LocalPdfProcessor("./documento.pdf");
    const resPdf = await pdfProc.process();
    console.log("Resultado PDF:", resPdf);

    console.log("=== 3. PROCESANDO ARCHIVO JSON ===");
    // Asegúrate de tener un 'config.json' en la raíz
    const jsonProc = new LocalJsonProcessor("./config.json");
    await jsonProc.process(); */

    const prompt = promptSync();
    const documento: string = prompt(
      "¿que tipo de documento deseas procesar?: ",
    );

    switch (documento.toLowerCase()) {
      case "csv":
        console.log("=== 1. PROCESANDO ARCHIVO CSV ===");
        const csvProc = new LocalCsvProcessor("./docs/documento_csv.csv");
         console.log("salida :",csvProc.process());
        break;
      case "txt":
        console.log("=== 2. PROCESANDO ARCHIVO TXT ===");
        const txtProc = new LocalCsvProcessor("./docs/documento_txt.txt");
         console.log("salida :",txtProc.process());
        break;
      case "pdf":
        console.log("=== 3. PROCESANDO ARCHIVO PDF ===");
        const pdfProc = new LocalPdfProcessor("./docs/documento_pdf.pdf");
        const resPdf = await pdfProc.process();
        console.log("Resultado PDF:", resPdf);
        break;
      case "json":
        console.log("=== 4. PROCESANDO ARCHIVO JSON ===");
        const jsonProc = new LocalJsonProcessor("./docs/documento_json.json");
        await jsonProc.process();
        break;
      default:
        console.error("❌ Tipo de documento no válido");
    }
  } catch (error: any) {
    console.error("❌ Error en el Pipeline:", error.message);
  }
}

main();
