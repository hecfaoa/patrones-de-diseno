import { MediadorChat } from "../interface/MediadorChat.js";

export abstract class Usuario{

    protected mediador:MediadorChat;
    public nombre:string;

    constructor(mediador:MediadorChat,nombre:string){
        this.mediador = mediador;
        this.nombre = nombre;
    }

    abstract recibir(mensaje:string, emisorNombre:string):void;

}
