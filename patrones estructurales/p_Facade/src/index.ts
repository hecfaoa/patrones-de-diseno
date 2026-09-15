import { CompraFacade } from "./class/CompraFacade.js";

console.log("Facade Pattern Example es la ostia");

// El código cliente queda impecable
const pasarelaDeCompra = new CompraFacade();

// El usuario hace clic en "Comprar" y tú solo ejecutas una línea:
pasarelaDeCompra.ejecutarCompraDeCurso("Héctor-Dev-99", "Curso-Patrones-Design", 499);