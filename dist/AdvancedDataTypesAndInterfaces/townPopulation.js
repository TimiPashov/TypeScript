"use strict";
function townPopulation(input) {
    const output = {};
    for (let town of input) {
        const currTown = town.split(' <-> ');
        const townName = currTown[0];
        const townPopulation = Number(currTown[1]);
        if (townName in output) {
            output[townName] += townPopulation;
        }
        else {
            output[townName] = townPopulation;
        }
    }
    Object.keys(output).forEach(key => console.log(`${key} : ${output[key]}`));
}
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);
//INPUT:
// ['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000']
//OUTPUT:
// Sofia : 1200000
//  Montana : 20000
//  New York : 10000000
//  Washington : 2345000
//  Las Vegas : 1000000
//# sourceMappingURL=townPopulation.js.map