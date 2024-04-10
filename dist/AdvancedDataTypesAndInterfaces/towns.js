"use strict";
function towns(input) {
    const output = [];
    for (let town of input) {
        const currTown = town.split(' | ');
        output.push({
            town: currTown[0],
            latitude: (Number(currTown[1]).toFixed(2)).toString(),
            longitude: (Number(currTown[2]).toFixed(2)).toString(),
        });
    }
    return output;
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']).forEach(town => console.log(town));
// INPUT:
// ['Sofia | 42.696552 | 23.32601',
// 'Beijing | 39.913818 | 116.363625']
//OUTPUT:
// { town: 'Sofia', latitude: '42.70', longitude: '23.33' }
//  { town: 'Beijing', latitude: '39.91', longitude: '116.36' }
//# sourceMappingURL=towns.js.map