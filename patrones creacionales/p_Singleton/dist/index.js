import { ConexionBaseDatos } from "./ConexionBaseDatos.js";
const mensaje = "¡Hola desde TypeScript con pnpm!";
console.log(mensaje);
// Si intentas hacer esto, el editor te va a dar un error y no te va a dejar:
// const conexion1 = new ConexionBaseDatos();  (Está prohibido por el 'private')
// La forma correcta es pedirla a la ventanilla:
console.log("--- Usuario 1 pide la conexión ---");
const conexion1 = ConexionBaseDatos.obtenerInstancia();
// 👆 Aquí verás el mensaje: "¡Conectando a la Base de Datos por PRIMERA y ÚNICA vez! 🔌"
console.log("\n--- Usuario 2 pide la conexión ---");
const conexion2 = ConexionBaseDatos.obtenerInstancia();
// 👆 Aquí NO se imprime el mensaje de conectar, porque reutiliza la anterior.
// ¿Son la misma?
console.log("\n¿Conexion 1 y Conexion 2 son exactamente la misma cafetera?");
console.log(conexion1 === conexion2); // ¡Devuelve TRUE! 
conexion1.ejecutarConsulta("SELECT * FROM usuarios;");
conexion2.ejecutarConsulta("SELECT * FROM productos;");
