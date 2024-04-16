"use strict";
class CarDealership {
    dealershipName;
    soldCars = 0;
    modelsSold = {};
    constructor(dealershipName) {
        this.dealershipName = dealershipName;
    }
    sellCar(dealerId, model) {
        this.modelsSold[dealerId] = model;
        this.soldCars++;
    }
    ;
    showDetails() {
        let outPut = `${this.dealershipName}:\n`;
        Object.entries(this.modelsSold).forEach(entrie => {
            outPut += `${entrie[0]} sold ${entrie[1]}\n`;
        });
        return outPut;
    }
}
let dealership = new CarDealership('SilverStar');
dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());
//# sourceMappingURL=carDealership.js.map