export interface Manejador{
    setSiguiente(manejador:Manejador):Manejador;
    procesar(peticion:any):string|null;
}