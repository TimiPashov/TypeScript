function sumOfNumbers(num1: number, num2: number): number {
    let sum: number = 0;
    for (let index = num1; index <= num2; index++) {
        sum += index;
    }
    return sum;

}

console.log(sumOfNumbers(1, 5));
