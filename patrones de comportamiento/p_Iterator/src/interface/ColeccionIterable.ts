import { Estudiante } from "../class/Estudiante.js";
import { Iterador } from "./Iterador.js";
// ========================================================
// 3. LA COLECCIÓN: Almacena los datos pero NO los recorre
// ========================================================
export interface ColeccionIterable {
    crearIterador(): Iterador<Estudiante>;
}