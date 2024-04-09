"use strict";
function largestNum(...params) {
    let largest = params[0];
    for (let num of params) {
        if (num > largest) {
            largest = num;
        }
    }
    console.log(largest);
}
largestNum(-3, -5, -22.5);
//# sourceMappingURL=largestNum.js.map