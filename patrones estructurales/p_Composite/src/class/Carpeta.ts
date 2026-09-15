import { ComponenteSistema } from "../interfaces/ComponenteSistema.js";

export class Carpeta implements ComponenteSistema {
    private nombre: string;
    private componentes: ComponenteSistema[]=[];
    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public agregarComponente(componente: ComponenteSistema): void {
        this.componentes.push(componente);
    }   

    public obtenerTamaño(): number {
        let tamañoTotal = 0;
        for (const componente of this.componentes) {    
            tamañoTotal += componente.obtenerTamaño();
        }
        return tamañoTotal;
    }

    public mostrarEstructura(indentacion: string): void {
        console.log(`${indentacion}📁 Carpeta: ${this.nombre}`);
        for (const componente of this.componentes) {
            componente.mostrarEstructura(`${indentacion}  `);
        }
    }
}
