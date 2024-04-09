"use strict";
function aggregateElements(input) {
    console.log(input.reduce((a, c) => a + c, 0));
    console.log(input.reduce((a, c) => a + 1 / c, 0));
    console.log(input.join(''));
}
aggregateElements([2, 4, 8, 16]);
//# sourceMappingURL=aggregateElements.js.map