function calculator(a: number, operator: string, b: number): string {
  const operators: { [key: string]: Function } = {
    "+": (a: number, b: number): number => a + b,
    "-": (a: number, b: number): number => a - b,
    "/": (a: number, b: number): number => a / b,
    "*": (a: number, b: number): number => a * b,
  };

  const output: number = operators[operator](a, b);
  return output.toFixed(2);
}

console.log(calculator(5, "+", 10));
console.log(calculator(25.5, "-", 3));
console.log(calculator(9, "/", 2));
console.log(calculator(7, "*", 5));
