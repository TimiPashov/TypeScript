

class Person<T> implements Greeter.Greeting<T> {

    constructor(private name: string, private age: number) { }

    introduction(): string {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }

    sayGoodbye(name: T): string {
        return `Dear ${name}, it was a pleasure meeting you!`;
    }
}

let p = new Person('Ivan Ivanov', 25);

console.log(p.introduction());

console.log(p.sayGoodbye('Petar Petrov'))