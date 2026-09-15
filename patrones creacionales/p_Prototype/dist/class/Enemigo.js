export class Enemigo {
    nombre;
    vida;
    arma;
    constructor(nombre, vida, arma) {
        this.nombre = nombre;
        this.vida = vida;
        this.arma = arma;
    }
    clone() {
        return new Enemigo(this.nombre, this.vida, this.arma);
    }
    presentarse() {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.vida} de vida y mi arma es ${this.arma}`);
    }
}
