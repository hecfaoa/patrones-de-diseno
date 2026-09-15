export class UsuarioYouTube {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    recibirNotificcion(videotitulo) {
        console.log(`Hola ${this.nombre}, se ha subido un nuevo video titulado: ${videotitulo}`);
    }
}
