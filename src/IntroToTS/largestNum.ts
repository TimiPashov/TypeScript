function largestNum(...params: number[]): void {
    let largest: number = params[0];
    for (let num of params) {
        if (num > largest) {
            largest = num;
        }
    }
    console.log(largest);

}

largestNum(-3, -5, -22.5)

//Some comment