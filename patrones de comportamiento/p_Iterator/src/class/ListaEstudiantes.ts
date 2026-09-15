import { ColeccionIterable } from "../interface/ColeccionIterable.js";
import { Iterador } from "../interface/Iterador.js";
import { Estudiante } from "./Estudiante.js";
import { FiltroEstudiantesGraduadosIterator } from "./FiltroEstudiantesGraduadosIterator.js";

export class ListaEstudiantes implements ColeccionIterable {
    private lista: Estudiante[] = [];

    public agregarEstudiante(estudiante: Estudiante): void {
        this.lista.push(estudiante);
    }

    // Aquí está la magia: La colección delega el recorrido al Iterador
    public crearIterador(): Iterador<Estudiante> {
        // Podríamos pasarle la lista filtrada u ordenada según queramos
        return new FiltroEstudiantesGraduadosIterator(this.lista);
    }
}