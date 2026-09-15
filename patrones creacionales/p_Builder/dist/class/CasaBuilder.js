import { Casa } from "./Casa.js";
export class CasaBuilder {
    casa;
    constructor() {
        this.casa = new Casa();
    }
    setHabitaciones(habitaciones) {
        this.casa.habitaciones = habitaciones;
        return this;
    }
    setBaños(baños) {
        this.casa.baños = baños;
        return this;
    }
    setPiscina(tienePiscina) {
        this.casa.tienePiscina = tienePiscina;
        return this;
    }
    setJardin(tieneJardin) {
        this.casa.tieneJardin = tieneJardin;
        return this;
    }
    setGaraje(tieneGaraje) {
        this.casa.tieneGaraje = tieneGaraje;
        return this;
    }
    setMaterialTecho(materialTecho) {
        this.casa.materialTecho = materialTecho;
        return this;
    }
    build() {
        return this.casa;
    }
}
