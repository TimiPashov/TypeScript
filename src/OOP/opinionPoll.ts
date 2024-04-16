class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getInfo(): void {
        console.log(`${this.name} is ${this.age} years old.`);

    }
}

const johnny = new Person('Johnny', 35);

johnny.getInfo()