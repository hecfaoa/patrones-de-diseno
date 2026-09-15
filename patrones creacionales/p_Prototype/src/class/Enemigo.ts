import { Clonable } from "../interfaces/Clonable.js";

export class Enemigo implements Clonable {
  public nombre: string;
  public vida: number;
  public arma: string;

  constructor(nombre: string, vida: number, arma: string) {
    this.nombre = nombre;
    this.vida = vida;
    this.arma = arma;
  }

  public clone(): Enemigo {
    return new Enemigo(this.nombre, this.vida, this.arma);
  }

  public presentarse() {
    console.log(
      `Hola, soy ${this.nombre}, tengo ${this.vida} de vida y mi arma es ${this.arma}`,
    );
  }
}
