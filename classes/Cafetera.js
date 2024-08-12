class Cafetera {
    constructor(cantidadCafe) {
        this.cantidadCafe = cantidadCafe;
    }

    setCantidadDeCafe(cantidad) {
        this.cantidadCafe = cantidad;
    }

    getCantidadDeCafe() {
        return this.cantidadCafe;
    }

    hasCafe(cantidad) {
        return this.cantidadCafe >= cantidad;
    }

    giveCafe(cantidad) {
        if (this.hasCafe(cantidad)) {
            this.cantidadCafe -= cantidad;
        }
    }
}

module.exports = Cafetera;