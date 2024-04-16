class CompareElements<T> {
    public genericArr: T[];

    constructor(inputArr: T[]) {
        this.genericArr = inputArr;
    }

    compare(input: T) {
        let repetitions: number = 0;
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