class Azucarero {
    constructor(cantidadDeAzucar) {
        this.cantidadDeAzucar = cantidadDeAzucar;
    }

    setCantidadDeAzucar(cantidad) {
        this.cantidadDeAzucar = cantidad;
    }

    getCantidadDeAzucar() {
        return this.cantidadDeAzucar;
    }

    hasAzucar(cantidad) {
        return this.cantidadDeAzucar >= cantidad;
    }

    giveAzucar(cantidad) {
        if (this.hasAzucar(cantidad)) {
            this.cantidadDeAzucar -= cantidad;
        }
    }
}

module.exports = Azucarero;