import { BaseDeDatos } from "./BaseDeDatos.js";
import { ServicioEmail } from "./ServicioEmail.js";
import { ServicioPagos } from "./ServicioPagos.js";
import { SistemaInscripcion } from "./SistemaInscripcion.js";

export class CompraFacade {
    private db = new BaseDeDatos();
    private pagos = new ServicioPagos();
    private email = new ServicioEmail();
    private inscripcion = new SistemaInscripcion();

    // El cliente solo tiene que llamar a este único método simplificado
    public ejecutarCompraDeCurso(usuarioId: string, cursoId: string, precio: number) {
        console.log("🚀 [Fachada]: Iniciando proceso optimizado de compra...\n");

        const tieneCupo = this.db.verificarCupo(cursoId);
        if (!tieneCupo) return console.log("❌ Error: No hay cupos.");

        this.pagos.procesarCobro(precio);
        this.inscripcion.matricularAlumno(usuarioId, cursoId);
        this.email.enviarFactura();

        console.log("\n✅ [Fachada]: ¡Proceso terminado con éxito!");
    }
}
