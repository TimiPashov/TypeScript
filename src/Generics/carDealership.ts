interface Dealership<T> {
    dealershipName: T;
    soldCars: number;
}

interface Actions<T> {
    sellCar: (dealerId: string, model: T) => void;

}

class CarDealership<T> implements Dealership<T>, Actions<T> {

    public dealershipName: T;
    public soldCars: number = 0;
    public modelsSold: { [key: string]: T } = {};

    constructor(dealershipName: T) {
        this.dealershipName = dealershipName;
    }

    sellCar(dealerId: string, model: T) {
        this.modelsSold[dealerId] = model;
        this.soldCars++;
    };

    showDetails() {
        let outPut = `${this.dealershipName}:\n`;
        Object.entries(this.modelsSold).forEach(entrie => {

            outPut += `${entrie[0]} sold ${entrie[1]}\n`;
        })
        return outPut;
    }
}

let dealership = new CarDealership('SilverStar');

dealership.sellCar('BG01', 'C Class');

dealership.sellCar('BG02', 'S Class');

dealership.sellCar('BG03', 'ML Class');

dealership.sellCar('BG04', 'CLK Class');

console.log(dealership.showDetails());



