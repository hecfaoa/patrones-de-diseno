import { CasaBuilder } from "./class/CasaBuilder.js";
console.log("*** WELLCOME TO BULDER PATTERN ***\n\n");
const builder = new CasaBuilder();
const mansion = builder.setHabitaciones(3)
    .setBaños(2)
    .setPiscina(true)
    .setJardin(true)
    .setGaraje(true)
    .setMaterialTecho("ladrillo")
    .build();
mansion.describir();
const simpleHouse = builder.setHabitaciones(1)
    .setBaños(1)
    .setPiscina(false)
    .setJardin(false)
    .setGaraje(false)
    .setMaterialTecho("teja")
    .build();
simpleHouse.describir();
