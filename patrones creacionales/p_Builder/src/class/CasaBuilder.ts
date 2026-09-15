import { Casa } from "./Casa.js";

export class CasaBuilder{

    private casa: Casa;

    constructor(){
        this.casa = new Casa();
    }

    public setHabitaciones(habitaciones:number): CasaBuilder{
        this.casa.habitaciones = habitaciones;
        return this;
    }

    public setBaños(baños:number): CasaBuilder{
        this.casa.baños = baños;
        return this;
    }   

    public setPiscina(tienePiscina:boolean): CasaBuilder{
        this.casa.tienePiscina = tienePiscina;
        return this;
    }   

    public setJardin(tieneJardin:boolean): CasaBuilder{
        this.casa.tieneJardin = tieneJardin;
        return this;
    }   

    public setGaraje(tieneGaraje:boolean): CasaBuilder{
        this.casa.tieneGaraje = tieneGaraje;
        return this;
    }   

    public setMaterialTecho(materialTecho:string): CasaBuilder{
        this.casa.materialTecho = materialTecho;
        return this;
    }   

    public build(): Casa{
        return this.casa;
    }   

}