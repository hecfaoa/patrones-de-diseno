// ========================================================
// 2. EL COMANDO (La interfaz y los comandos concretos)
// ========================================================
export interface Command {
    execute(): void;
    undo(): void; // El secreto para la reversión
}