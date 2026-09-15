import { MediadorChat } from '../interface/MediadorChat.js';
import { Usuario } from './Usuario.js';
export class SalaDeChatMediador implements MediadorChat{

    private usuarios:Usuario[]=[];

    public registrarUsuario(usuario:Usuario):void{
        this.usuarios.push(usuario);
        console.log(`${usuario.nombre} ha sido registrado`);
    }

    public enviarMensaje(mensaje:string, emisor:Usuario):void{
        for(const u of this.usuarios){
            if(u !== emisor){
                u.recibir(mensaje,emisor.nombre);
            }
        }
    }
}