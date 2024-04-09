const operators = {
    '+': (num1: number, num2: number): number => { return num1 + num2 },
    '-': (num1: number, num2: number): number => { return num1 - num2 },
    '*': (num1: number, num2: number): number => { return num1 * num2 },
    '/': (num1: number, num2: number): number => { return num1 / num2 },
    '%': (num1: number, num2: number): number => { return num1 % num2 },
    '**': (num1: number, num2: number): number => { return num1 ** num2 },
}
function mathOperations(num1: number, num2: number, operator: string) {
    const operation = operators[operator as keyof typeof operators];
    if (operation) {
        return operation(num1, num2)
    } else {
        return 'Invalid operator'
    }
}

console.log(mathOperations(6, 2, '**'));
