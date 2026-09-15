export class SalaDeChatMediador {
    usuarios = [];
    registrarUsuario(usuario) {
        this.usuarios.push(usuario);
        console.log(`${usuario.nombre} ha sido registrado`);
    }
    enviarMensaje(mensaje, emisor) {
        for (const u of this.usuarios) {
            if (u !== emisor) {
                u.recibir(mensaje, emisor.nombre);
            }
        }
    }
}
