import { Manejador } from "../interface/Manejador.js";

export abstract class BaseManejador implements Manejador{

    private siguienteManejador:Manejador|null=null;

    public setSiguiente(manejador:Manejador):Manejador{
        this.siguienteManejador = manejador;
        return manejador;
    }

    public procesar(peticion:any):string|null{
        if (this.siguienteManejador){
            return this.siguienteManejador.procesar(peticion);
        }

        return "has pasado todas las validaciones";
    }
}