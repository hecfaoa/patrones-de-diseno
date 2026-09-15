import { Usuario } from "./Usuario.js";
export class UsuarioChat extends Usuario {
    enviar(mensaje) {
        console.log(`📤 [${this.nombre}] envía: "${mensaje}"`);
        // No habla directamente con los otros usuarios, le avisa al mediador
        this.mediador.enviarMensaje(mensaje, this);
    }
    recibir(mensaje, emisorNombre) {
        console.log(`📥[${this.nombre}] recibe de (${emisorNombre}) "${mensaje}"`);
    }
}
