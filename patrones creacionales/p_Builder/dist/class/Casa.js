export class Casa {
    habitaciones = 0;
    baños = 0;
    tienePiscina = false;
    tieneJardin = false;
    tieneGaraje = false;
    materialTecho = "teja";
    describir() {
        console.log(`🏠 Casa con ${this.habitaciones} habs, ${this.baños} baños.` +
            `¿Piscina?: ${this.tienePiscina ? 'Sí' : 'No'}. ` +
            `¿Jardin?: ${this.tieneJardin ? 'Sí' : 'No'}. ` +
            `¿Garaje?: ${this.tieneGaraje ? 'Sí' : 'No'}. Techo de: ${this.materialTecho}.`);
    }
}
