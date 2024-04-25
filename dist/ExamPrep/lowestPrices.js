"use strict";
function lowestPrices(input) {
    const output = {};
    for (let item of input) {
        const productDetails = item.split(" | ");
        const productTown = productDetails.shift();
        const productName = productDetails.shift();
        const productPrice = Number(productDetails.shift());
        const product = { productTown, productPrice };
        if (!output[productName]) {
            output[productName] = product;
            continue;
        }
        else if (output[productName].productPrice > product.productPrice) {
            output[productName] = product;
        }
        else {
            continue;
        }
    }
    Object.keys(output).forEach((key) => console.log(`${key} -> ${output[key].productPrice} (${output[key].productTown})`));
}
lowestPrices([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 3",
    "Sofia | Orange | 2",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
]);
//# sourceMappingURL=lowestPrices.js.map