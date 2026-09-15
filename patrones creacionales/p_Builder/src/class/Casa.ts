export class Casa{
    public habitaciones:number=0;
    public baños:number=0;
    public tienePiscina:boolean=false;
    public tieneJardin:boolean=false;
    public tieneGaraje:boolean=false;
    public materialTecho:string="teja";

    public describir(){
        console.log(`🏠 Casa con ${this.habitaciones} habs, ${this.baños} baños.` + 
                    `¿Piscina?: ${this.tienePiscina ? 'Sí' : 'No'}. ` +
                    `¿Jardin?: ${this.tieneJardin ? 'Sí' : 'No'}. ` +
                    `¿Garaje?: ${this.tieneGaraje ? 'Sí' : 'No'}. Techo de: ${this.materialTecho}.`);
    }
}