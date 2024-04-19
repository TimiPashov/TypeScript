interface isVisited {
    customerName: string;
    visited: boolean;
}

class Courier implements FoodAndBeverages.Delivery {

    constructor(protected placesToVisit: isVisited[]) { }

    newCustomer(customerName: string, visited: boolean = false): string {
        if (this.placesToVisit.find(e => e.customerName === customerName)) {
            throw new Error(`${customerName} is already a customer of yours!`);
        }
        this.placesToVisit.push({ customerName, visited });
        return `${customerName} just became your client.`;
    }

    visitCustomer(customerName: string): string {
        const customer = this.placesToVisit.find(e => e.customerName === customerName);
        if (!customer) {
            throw new Error(`${customerName} is not your customer!`);
        } else {
            customer.visited = true;
            return `Visited ${customerName}`
        }

    }

    showCustomers(): string {
        let output = ``;
        this.placesToVisit.forEach(c => output += `${c.customerName} -> ${c.visited}\n`);
        return output;
    }
}

let courier = new

Courier([{ customerName: 'DHL',

visited: false }]);

courier.newCustomer('Speedy');

courier.newCustomer('MTM');

courier.newCustomer('TipTop');

courier.visitCustomer('DHL');

courier.visitCustomer('MTM');

courier.visitCustomer('MTM');

console.log(courier.showCustomers())