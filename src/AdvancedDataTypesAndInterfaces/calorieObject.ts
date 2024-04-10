function calorieObject(input: string[]): Record<string, string> {
    let output: Record<string, string> = {};
    for (let i = 0; i < input.length; i += 2) {
        const itemName: string = input[i];
        const calories: string = input[i + 1];
        output[itemName] = calories;
    }

    return output;
}

console.log(


    calorieObject(['Potato', '93', 'Skyr', '63',

    'Cucumber', '18', 'Milk', '42'])
);