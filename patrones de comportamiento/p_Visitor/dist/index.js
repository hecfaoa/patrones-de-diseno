import { AccessibilityAuditVisitor } from "./class/AccessibilityAuditVisitor.js";
import { ImagenNodo } from "./class/ImagenNodo.js";
import { JsonExportVisitor } from "./class/JsonExportVisitor.js";
import { TextoNodo } from "./class/TextoNodo.js";
console.log("##### Wellcome to the Visitor Pattern #####\n\n");
// Estructura de objetos (Árbol de elementos)
const elementos = [
    new TextoNodo("Hola Mundo"),
    new ImagenNodo("https://site.com/logo.png", ""), // Imagen sin altText
    new TextoNodo("  ") // Texto vacío
];
// 1. Ejecutamos la exportación JSON
const jsonVisitor = new JsonExportVisitor();
elementos.forEach(el => el.aceptar(jsonVisitor));
console.log("📦 Exportación JSON:\n", jsonVisitor.resultado);
// 2. Ejecutamos la auditoría de accesibilidad sin tocar las clases TextoNodo ni ImagenNodo
const auditVisitor = new AccessibilityAuditVisitor();
elementos.forEach(el => el.aceptar(auditVisitor));
console.log("\n🔍 Auditoría A11y:\n", auditVisitor.errores);
