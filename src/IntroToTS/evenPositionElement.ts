function findEvenPosition(input: string[]): string {
    const result: string[] = [];
    for (let num of input) {
        if (input.indexOf(num) % 2 === 0) {
            result.push(`${num}`);
        }
    }

    return result.join(' ');
}

console.log(findEvenPosition(['5', '10']));
