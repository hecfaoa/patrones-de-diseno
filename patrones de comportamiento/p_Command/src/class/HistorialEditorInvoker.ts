import { Command } from "../interface/Command.js";

// ========================================================
// 3. EL INVOCADOR (Invoker): Quien dispara los comandos y guarda el historial
// ========================================================
export class HistorialEditorInvoker {
    private historial: Command[] = [];

    public ejecutarComando(comando: Command): void {
        comando.execute();
        this.historial.push(comando); // Guardamos para poder deshacer
    }

    public deshacer(): void {
        const ultimoComando = this.historial.pop();
        if (ultimoComando) {
            console.log("↩️ [Historial]: Deshaciendo última acción...");
            ultimoComando.undo();
        } else {
            console.log("⚠️ [Historial]: No hay más acciones para deshacer.");
        }
    }
}