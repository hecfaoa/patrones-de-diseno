import { FabricaLogistica } from "./class/FabricaLogistica.js";

console.log("Factory Method Pattern");

const factory = new FabricaLogistica();
const transporte1 = factory.crearTransporte("terrestre");
transporte1.entrega();

const transporte2 = factory.crearTransporte("maritimo");
transporte2.entrega();

const transporte3 = factory.crearTransporte("aereo");
transporte3.entrega();