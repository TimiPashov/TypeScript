"use strict";
function lowestPrices(input) {
    const output = {};
    for (let item of input) {
        const currItem = item.split(' | ');
        const itemTown = currItem[0];
        const itemName = currItem[1];
        const itemPrice = Number(currItem[2]);
        const product = {
            itemTown,
            itemPrice
        };
        if (!output.hasOwnProperty(itemName)) {
            output[itemName] = product;
        }
        else if (output[itemName].itemPrice > product.itemPrice) {
            output[itemName] = product;
        }
        else {
            continue;
        }
    }
    Object.keys(output).forEach(key => console.log(`${key} -> ${output[key].itemPrice} (${output[key].itemTown})`));
}
lowestPrices(['Sample Town | Sample Product | 10002',
    'Sample Town | Orange | 3',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 2',
    'Sofia | Peach | 1',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
//INPUT:
// ['Sample Town | Sample Product | 1000',
// 'Sample Town | Orange | 2',
// 'Sample Town | Peach | 1',
// 'Sofia | Orange | 3',
// 'Sofia | Peach | 2',
// 'New York | Sample Product | 1000.1',
// 'New York | Burger | 10']
//OUTPUT:
// Sample Product -> 1000 (Sample Town)
//  Orange -> 2 (Sample Town)
//  Peach -> 1 (Sample Town)
//  Burger -> 10 (New York
//# sourceMappingURL=lowestPricesInCities.js.map