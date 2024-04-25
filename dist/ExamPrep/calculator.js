"use strict";
function calculator(a, operator, b) {
    const operators = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "/": (a, b) => a / b,
        "*": (a, b) => a * b,
    };
    const output = operators[operator](a, b);
    return output.toFixed(2);
}
console.log(calculator(5, "+", 10));
console.log(calculator(25.5, "-", 3));
console.log(calculator(9, "/", 2));
console.log(calculator(7, "*", 5));
//# sourceMappingURL=calculator.js.map