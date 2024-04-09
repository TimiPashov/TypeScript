class Cat {
    name: string = '';
    age: string = ''
    constructor(name: string, age: string) {
        this.name = name;
        this.age = age;
    }

    meow() {
        return `${this.name}, age ${this.age} says Meow`
    }
}

function cat(input: string[]) {
    input.forEach(cat => {
        const name = cat.split(' ')[0];
        const age = cat.split(' ')[1];
        const currCat = new Cat(name, age);
        console.log(currCat.meow())
    })
}

cat(['Candy 1', 'Poppy 3', 'Nyx 2']);