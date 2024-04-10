"use strict";
function calorieObject(input) {
    let output = {};
    for (let i = 0; i < input.length; i += 2) {
        const itemName = input[i];
        const calories = input[i + 1];
        output[itemName] = calories;
    }
    return output;
}
console.log(calorieObject(['Potato', '93', 'Skyr', '63',
    'Cucumber', '18', 'Milk', '42']));
//# sourceMappingURL=calorieObject.js.map