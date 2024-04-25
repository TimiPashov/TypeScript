"use strict";
// interface Product {
//     itemTown: string;
//     itemPrice: number;
// }
// type ProductOutput = {
//     [key: string]: Product
// }
// function lowestPrices(input: string[]) {
//     const output: ProductOutput = {};
//     for (let item of input) {
//         const currItem: string[] = item.split(' | ');
//         const itemTown: string = currItem[0];
//         const itemName: string = currItem[1];
//         const itemPrice: number = Number(currItem[2]);
//         const product: Product = {
//             itemTown,
//             itemPrice
//         }
//         if (!output.hasOwnProperty(itemName)) {
//             output[itemName] = product;
//         } else if (output[itemName].itemPrice > product.itemPrice) {
//             output[itemName] = product
//         } else {
//             continue;
//         }
//     }
//     Object.keys(output).forEach(key => console.log(`${key} -> ${output[key].itemPrice} (${output[key].itemTown})`))
// }
// lowestPrices(['Sample Town | Sample Product | 10002',
//     'Sample Town | Orange | 3',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 2',
//     'Sofia | Peach | 1',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10'])
// //INPUT:
// // ['Sample Town | Sample Product | 1000',
// // 'Sample Town | Orange | 2',
// // 'Sample Town | Peach | 1',
// // 'Sofia | Orange | 3',
// // 'Sofia | Peach | 2',
// // 'New York | Sample Product | 1000.1',
// // 'New York | Burger | 10']
// //OUTPUT:
// // Sample Product -> 1000 (Sample Town)
// //  Orange -> 2 (Sample Town)
// //  Peach -> 1 (Sample Town)
// //  Burger -> 10 (New York
//# sourceMappingURL=lowestPricesInCities.js.map