import { Estudiante } from "./class/Estudiante.js";
import { ListaEstudiantes } from "./class/ListaEstudiantes.js";
const aula = new ListaEstudiantes();
aula.agregarEstudiante(new Estudiante("Héctor", 9.5));
aula.agregarEstudiante(new Estudiante("Carlos", 8.0));
aula.agregarEstudiante(new Estudiante("Ana", 9.8));
// Obtenemos el "bibliotecario"
const iterador = aula.crearIterador();
console.log("🚀 [Client]: Recorriendo la lista a través del Iterador...");
// Recorrido estándar e independiente de la estructura interna
while (iterador.tieneMas()) {
    const alumno = iterador.obtenerSiguiente();
    if (alumno) {
        console.log(`👨‍🎓 Estudiante: ${alumno.nombre} | Nota: ${alumno.promedio}`);
    }
}
