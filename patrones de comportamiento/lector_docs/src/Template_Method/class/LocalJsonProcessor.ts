import { LocalDataProcessorPipeline } from "./LocalDataProcessorPipeline.js";

export class LocalJsonProcessor extends LocalDataProcessorPipeline<
  string,
  { totalClaves: number }
> {
  protected parseData(rawData: string): Record<string, any> {
    console.log("🧩 [JSON Parser]: Parseando string a Objeto JavaScript...");
    console.log("📝 [CSV Contenido]: ", rawData);

    return JSON.parse(rawData);
  }

  protected analyze(parsedData: Record<string, any>): { totalClaves: number } {
    const claves = Object.keys(parsedData);
    console.log(
      `📊 [JSON Analyzer]: El objeto JSON contiene ${claves.length} propiedades raíz.`,
    );
    return { totalClaves: claves.length };
  }
}
