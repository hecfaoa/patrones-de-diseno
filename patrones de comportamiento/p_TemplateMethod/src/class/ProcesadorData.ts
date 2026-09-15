// 1. CLASE ABSTRACTA BASE: Define la plantilla del algoritmo


export abstract class ProcesadorData {
    // ⚠️ Este es el TEMPLATE METHOD. Es público y define el algoritmo 
    // inflexible
    public procesar(): void {
        this.abrirArchivo();
        this.extraerDatos();   // Paso variable
        this.analizarDatos();   // Paso variable
        if (this.debeEnviarReporte()) { // Hook (gancho opcional)
            this.enviarReporte();
        }
        this.cerrarArchivo();
    }

    // Pasos concretos comunes a todos
    private abrirArchivo(): void {
        console.log("📂 Archivo abierto correctamente.");
    }

    private enviarReporte(): void {
        console.log("📧 Enviando reporte analítico por correo al administrador...");
    }

    private cerrarArchivo(): void {
        console.log("🔒 Archivo cerrado de forma segura.\n");
    }

    // Pasos abstractos que OBLIGATORIAMENTE implementa cada subclase
    protected abstract extraerDatos(): void;
    protected abstract analizarDatos(): void;

    // "Hook" (Gancho): Método con implementación por defecto que la subclase
    //  PUEDE sobrescribir
    protected debeEnviarReporte(): boolean {
        return true;
    }
}