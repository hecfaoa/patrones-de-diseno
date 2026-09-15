export class ConexionBaseDatos {
    // 1. El Gran Truco: Guardamos la ÚNICA copia aquí adentro de forma secreta (private)
    static instancia = null;
    // 2. Bloqueamos el "new": Al ponerle 'private' al constructor,
    // nadie fuera de esta clase puede hacer: new ConexionBaseDatos()
    constructor() {
        console.log("¡Conectando a la Base de Datos por PRIMERA y ÚNICA vez! 🔌");
    }
    // 3. La ventanilla de atención: Esta es la única forma de obtener la conexión
    static obtenerInstancia() {
        // Si no existe ninguna copia creada todavía... ¡la creamos!
        if (this.instancia === null) {
            this.instancia = new ConexionBaseDatos();
        }
        // Si ya existía, simplemente devolvemos la que ya teníamos guardada
        return this.instancia;
    }
    // Un método cualquiera para demostrar que funciona
    ejecutarConsulta(sql) {
        console.log(`Ejecutando: ${sql}`);
    }
}
