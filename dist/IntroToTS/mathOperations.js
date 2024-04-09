"use strict";
const operators = {
    '+': (num1, num2) => { return num1 + num2; },
    '-': (num1, num2) => { return num1 - num2; },
    '*': (num1, num2) => { return num1 * num2; },
    '/': (num1, num2) => { return num1 / num2; },
    '%': (num1, num2) => { return num1 % num2; },
    '**': (num1, num2) => { return num1 ** num2; },
};
function mathOperations(num1, num2, operator) {
    const operation = operators[operator];
    if (operation) {
        return operation(num1, num2);
    }
    else {
        return 'Invalid operator';
    }
}
console.log(mathOperations(6, 2, '**'));
//# sourceMappingURL=mathOperations.js.map