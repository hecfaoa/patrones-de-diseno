export class CanalYouTube {
    nombreCanal;
    suscriptores = [];
    constructor(nombreCanal) {
        this.nombreCanal = nombreCanal;
    }
    suscribirse(nuevoSuscriptor) {
        this.suscriptores.push(nuevoSuscriptor);
        console.log(`¡${nuevoSuscriptor} se ha suscrito al canal ${this.nombreCanal}!`);
    }
    publicarVideo(titulo) {
        console.log(`¡Nuevo video publicado en ${this.nombreCanal}! Título: ${titulo}`);
        this.suscriptores.forEach(suscriptor => {
            suscriptor.recibirNotificcion(titulo);
        });
    }
}
