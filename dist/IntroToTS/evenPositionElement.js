"use strict";
function findEvenPosition(input) {
    const result = [];
    for (let num of input) {
        if (input.indexOf(num) % 2 === 0) {
            result.push(`${num}`);
        }
    }
    return result.join(' ');
}
console.log(findEvenPosition(['5', '10']));
//# sourceMappingURL=evenPositionElement.js.map