"use strict";
class Courier {
    placesToVisit;
    constructor(placesToVisit) {
        this.placesToVisit = placesToVisit;
    }
    newCustomer(customerName, visited = false) {
        if (this.placesToVisit.find(e => e.customerName === customerName)) {
            throw new Error(`${customerName} is already a customer of yours!`);
        }
        this.placesToVisit.push({ customerName, visited });
        return `${customerName} just became your client.`;
    }
    visitCustomer(customerName) {
        const customer = this.placesToVisit.find(e => e.customerName === customerName);
        if (!customer) {
            throw new Error(`${customerName} is not your customer!`);
        }
        else {
            customer.visited = true;
            return `Visited ${customerName}`;
        }
    }
    showCustomers() {
        let output = ``;
        this.placesToVisit.forEach(c => output += `${c.customerName} -> ${c.visited}\n`);
        return output;
    }
}
let courier = new Courier([{ customerName: 'DHL',
        visited: false }]);
courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');
courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');
console.log(courier.showCustomers());
//# sourceMappingURL=courier.js.map