import { Usuario } from "./Usuario.js";

export class UsuarioChat extends Usuario{

    public enviar(mensaje:string):void{

        console.log(`📤 [${this.nombre}] envía: "${mensaje}"`);

        // No habla directamente con los otros usuarios, le avisa al mediador
        this.mediador.enviarMensaje(mensaje,this);
    }

    public recibir(mensaje: string, emisorNombre: string): void {
        console.log(`📥[${this.nombre}] recibe de (${emisorNombre}) "${mensaje}"`);
    }

}