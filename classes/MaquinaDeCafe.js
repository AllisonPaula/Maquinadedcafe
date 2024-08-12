const Vaso = require('./Vaso');
const Cafetera = require('./Cafetera');
const Azucarero = require('./Azucarero');

class MaquinaDeCafe {
    constructor() {
        this.cafe = new Cafetera(100);
        this.vasosPequenos = new Vaso(10, 3);
        this.vasosMedianos = new Vaso(10, 5);
        this.vasosGrandes = new Vaso(10, 7);
        this.azucar = new Azucarero(100);
    }

    getTipoVaso(tipoDeVaso) {
        switch (tipoDeVaso) {
            case 'pequeno':
                return this.vasosPequenos;
            case 'mediano':
                return this.vasosMedianos;
            case 'grande':
                return this.vasosGrandes;
            default:
                throw new Error('Tipo de vaso no válido');
        }
    }

    getVasoDeCafe(tipoDeVaso, cantidadDeAzucar) {
        const vaso = this.getTipoVaso(tipoDeVaso);
        const contenido = vaso.getContenido();

        if (!vaso.hasVasos(1)) {
            return 'No hay suficientes vasos';
        }

        if (!this.cafe.hasCafe(contenido)) {
            return 'No hay suficiente café';
        }

        if (!this.azucar.hasAzucar(cantidadDeAzucar)) {
            return 'No hay suficiente azúcar';
        }

        vaso.giveVasos(1);
        this.cafe.giveCafe(contenido);
        this.azucar.giveAzucar(cantidadDeAzucar);

        return (`Vaso de café ${tipoDeVaso} con ${cantidadDeAzucar} cucharadas de azúcar servido.`);
    }
}

module.exports = MaquinaDeCafe;
