
import { Iterador } from "../interface/Iterador.js";
import { Estudiante } from "./Estudiante.js";
// ========================================================
// 2. EL ITERADOR CONCRETO: Sabe CÓMO recorrer la colección
// ========================================================
export class FiltroEstudiantesGraduadosIterator implements Iterador<Estudiante> {
    private posicion: number = 0;

    // El iterador mantiene una referencia a la colección de datos brutos
    constructor(private estudiantes: Estudiante[]) {}

    public obtenerSiguiente(): Estudiante | null {
        if (this.tieneMas()) {
            const estudiante = this.estudiantes[this.posicion];
            this.posicion++;
            return estudiante;
        }
        return null;
    }

    public tieneMas(): boolean {
        return this.posicion < this.estudiantes.length;
    }
}