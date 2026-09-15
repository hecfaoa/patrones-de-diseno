// 1. La interfaz estándar para todos los iteradores
export interface Iterador<T>{
    obtenerSiguiente(): T | null;
    tieneMas():boolean;
}