"use strict";
class CompareElements {
    genericArr;
    constructor(inputArr) {
        this.genericArr = inputArr;
    }
    compare(input) {
        let repetitions = 0;
        this.genericArr.forEach((element) => {
            if (element === input) {
                repetitions++;
            }
        });
        return repetitions;
    }
}
let c = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
console.log(c.compare(1));
//# sourceMappingURL=genericCompareElements.js.map