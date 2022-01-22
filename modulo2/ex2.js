class Car {
    constructor(marca, modelo) {
        this._marca = marca;
        this._modelo = modelo;
    }

    get marca() {
        return this._marca
    }

    set marca(marca) {
        this._marca = marca
    }

    get modelo() {
        return this._modelo
    }

    set modelo(modelo) {
        this._modelo = modelo
    }
}
