import { FiltroEstudiantesGraduadosIterator } from "./FiltroEstudiantesGraduadosIterator.js";
export class ListaEstudiantes {
    lista = [];
    agregarEstudiante(estudiante) {
        this.lista.push(estudiante);
    }
    // Aquí está la magia: La colección delega el recorrido al Iterador
    crearIterador() {
        // Podríamos pasarle la lista filtrada u ordenada según queramos
        return new FiltroEstudiantesGraduadosIterator(this.lista);
    }
}
