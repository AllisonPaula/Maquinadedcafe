class Vaso {
    constructor(cantidadVasos, contenido) {
        this.cantidadVasos = cantidadVasos;
        this.contenido = contenido;
    }

    setCantidadVasos(cantidadVasos) {
        this.cantidadVasos = cantidadVasos;
    }

    getCantidadVasos() {
        return this.cantidadVasos;
    }

    setContenido(contenido) {
        this.contenido = contenido;
    }

    getContenido() {
        return this.contenido;
    }

    hasVasos(cantidadVasos) {
        return this.cantidadVasos >= cantidadVasos;
    }

    giveVasos(cantidadVasos) {
        if (this.hasVasos(cantidadVasos)) {
            this.cantidadVasos -= cantidadVasos;
        }
    }
}

module.exports = Vaso;
