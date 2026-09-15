import { Suscriptor } from "../interfaces/Suscriptor.js";

export class UsuarioYouTube implements Suscriptor {

    private nombreSuscriptor: string;
    
    constructor(nombre: string) {
        this.nombreSuscriptor = nombre;
    }   

    // 💡 Este getter hace que la clase cumpla con la propiedad 'nombre' de la interfaz
    get nombre(): string {
        return this.nombreSuscriptor;
    }

    recibirNotificacion(videotitulo: string): void {
        console.log(`Hola ${this.nombreSuscriptor}, se ha subido un nuevo video titulado: ${videotitulo}`);
    }

    // Tu método viejo (ya no sería necesario si usas el getter de arriba)
/*    getNombre(): string {
        return this.nombreSuscriptor;
    }
*/
}