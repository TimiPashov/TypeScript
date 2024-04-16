"use strict";
class Box {
    prop;
    constructor(p) {
        this.prop = p;
    }
    toString() {
        return `${this.prop} is of type ${typeof this.prop}`;
    }
}
let box1 = new Box(['test']);
let box2 = new Box(20);
let box3 = new Box('Hello');
console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());
//# sourceMappingURL=genericBoxofString.js.map