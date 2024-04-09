"use strict";
class Cat {
    name = '';
    age = '';
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    meow() {
        return `${this.name}, age ${this.age} says Meow`;
    }
}
function cat(input) {
    input.forEach(cat => {
        const name = cat.split(' ')[0];
        const age = cat.split(' ')[1];
        const currCat = new Cat(name, age);
        console.log(currCat.meow());
    });
}
cat(['Candy 1', 'Poppy 3', 'Nyx 2']);
//# sourceMappingURL=cats.js.map