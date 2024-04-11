class Car {
    private _brand: string;
    private _model: string;
    private _horsePowers: number

    constructor(brand: string, model: string, horsePowers: number) {
        this._brand = brand;
        this._model = model;
        this._horsePowers = horsePowers
    }

    get brand() {
        return this._brand;
    }

    set brand(v) {
        if (v.length < 2) {
            return
        }
        this._brand = v
    }

    get model() {
        return this._model;
    }

    set model(v) {
        if (v.length < 2) {
            return
        }
        this._model = v;
    }

    get horsePowers() {
        return this._horsePowers;
    }

    set horsePowers(v) {
        if (v < 40) {
            return
        }
        this._horsePowers = v;
    }

    showInfo(): string {

        return `The car is: ${this.brand} ${this.model} - ${this.horsePowers} HP.`
    }
}

const myNewCar = new Car('Skoda', 'Karoq', 150);

console.log(myNewCar.showInfo());
