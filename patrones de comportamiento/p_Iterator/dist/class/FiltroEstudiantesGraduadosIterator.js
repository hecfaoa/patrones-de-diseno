// ========================================================
// 2. EL ITERADOR CONCRETO: Sabe CÓMO recorrer la colección
// ========================================================
export class FiltroEstudiantesGraduadosIterator {
    estudiantes;
    posicion = 0;
    // El iterador mantiene una referencia a la colección de datos brutos
    constructor(estudiantes) {
        this.estudiantes = estudiantes;
    }
    obtenerSiguiente() {
        if (this.tieneMas()) {
            const estudiante = this.estudiantes[this.posicion];
            this.posicion++;
            return estudiante;
        }
        return null;
    }
    tieneMas() {
        return this.posicion < this.estudiantes.length;
    }
}
