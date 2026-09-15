import { Enemigo } from "./class/Enemigo.js";


console.log("Prototype Pattern Example");

const orcobase = new Enemigo("Orco", 100, "Hacha");

orcobase.presentarse();


console.log("Clonando al orco base...");


const orco1 = orcobase.clone();
const orco2 = orcobase.clone();

orco1.vida = 45;
orco1.arma = "Espada";
orco1.nombre = "Orco 1";
orco2.nombre = "Orco 2";    
orco1.presentarse();
orco2.presentarse();
