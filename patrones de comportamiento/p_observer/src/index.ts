import { CanalYouTube } from "./class/CanalYouTube.js";
import { UsuarioYouTube } from "./class/UsuarioYouTube.js";


const mensaje: string = "¡Hola desde TypeScript con pnpm!";
console.log(mensaje);

//creamos el canal de YouTube

const canal = new CanalYouTube("La granja de Zenón");

//creamos los usuarios de YouTube
const usuario1 = new UsuarioYouTube("Hector");
const usuario2 = new UsuarioYouTube("Jessica");
const usuario3 = new UsuarioYouTube("Gabriel");

//los usuarios se suscriben al canal
canal.suscribirse(usuario1);
canal.suscribirse(usuario2);
canal.suscribirse(usuario3);

//publicamos un nuevo video en el canal
canal.publicarVideo("La vaca Lola canta y baila");
