import { AlertaFactory } from "./class/AlertaFactory.js";
console.log("Hello World! -- pattern Flyweight  ");
const factory = new AlertaFactory();
// Simulamos millones de registros de logs en nuestra aplicación backend
const logsRecibidos = [
    { tipo: "AUTH_ERR", sev: "CRITICAL", msg: "Intento de login fallido", ip: "192.168.1.5", time: Date.now() },
    { tipo: "AUTH_ERR", sev: "CRITICAL", msg: "Intento de login fallido", ip: "10.0.0.42", time: Date.now() + 1000 },
    { tipo: "DB_TIMEOUT", sev: "WARNING", msg: "La DB tardó en responder", ip: "192.168.1.5", time: Date.now() + 2000 }
];
logsRecibidos.forEach(log => {
    // La fábrica decide si crea o reutiliza el objeto pesado
    const flyweight = factory.obtenerFlyweight(log.tipo, log.sev, log.msg);
    // Le inyectamos los datos variables (Extrínsecos) dinámicamente al método
    flyweight.formatearLog(log.ip, log.time);
});
