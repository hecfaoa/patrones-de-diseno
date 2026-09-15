import { ComandoEscribir } from "./class/ComandoEscribir.js";
import { DocumentoEditor } from "./class/DocumentoEditor.js";
import { HistorialEditorInvoker } from "./class/HistorialEditorInvoker.js";
console.log("wellcome to command pattern\n\n");
// 1. Instanciamos el receptor y el invocador
const miEditor = new DocumentoEditor();
const gestorHistorial = new HistorialEditorInvoker();
// 2. El usuario realiza acciones (creamos comandos)
const accion1 = new ComandoEscribir(miEditor, "Hola ");
const accion2 = new ComandoEscribir(miEditor, "Héctor. ");
const accion3 = new ComandoEscribir(miEditor, "Patrón Command listo!");
// 3. Las ejecutamos a través del gestor
gestorHistorial.ejecutarComando(accion1);
gestorHistorial.ejecutarComando(accion2);
gestorHistorial.ejecutarComando(accion3);
// Salida en consola: Contenido actual -> "Hola Héctor. Patrón Command listo!"
// 4. ¡Magia! Deshacemos las últimas dos operaciones
gestorHistorial.deshacer(); // Vuelve a: "Hola Héctor. "
gestorHistorial.deshacer(); // Vuelve a: "Hola "
