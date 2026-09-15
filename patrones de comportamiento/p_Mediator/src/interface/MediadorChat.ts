import { Usuario } from "../class/Usuario.js";

export interface MediadorChat{
    enviarMensaje(mensaje:string, emisor:Usuario):void;

}