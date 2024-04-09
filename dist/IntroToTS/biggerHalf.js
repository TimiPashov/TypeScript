"use strict";
function biggerHalf(input) {
    const sorted = input.sort((a, b) => a - b);
    if (sorted.length % 2 === 0) {
        return sorted.slice((sorted.length / 2), sorted.length);
    }
    else {
        return sorted.slice(Math.floor(sorted.length / 2), sorted.length);
    }
}
console.log(biggerHalf([4, 7, 2, 5]));
//# sourceMappingURL=biggerHalf.js.map