import { EditorTexto } from "./class/EditorTexto.js";
import { HistorialEditor } from "./class/HistorialEditor.js";

console.log("*************************************************");
console.log("********* wellcome to memento pattern ***********");
console.log("*************************************************\n\n");

const editor = new EditorTexto();
const historial = new HistorialEditor(editor);

editor.escribir("Hola hector ");
historial.hacerBackup(); // Snapshot 1

editor.escribir("Mundo! ");
historial.hacerBackup(); // Snapshot 2

editor.escribir("Este texto se borrará.");

console.log("📝 Texto actual:", editor.getTexto()); 
// Output: "Hola Mundo! Este texto se borrará."

historial.deshacer();
console.log("↩️ Después de 1º Undo:", editor.getTexto()); 
// Output: "Hola Mundo! "

historial.deshacer();
console.log("↩️ Después de 2º Undo:", editor.getTexto()); 
// Output: "Hola "