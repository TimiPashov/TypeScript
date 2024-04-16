"use strict";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}
const johnny = new Person('Johnny', 35);
johnny.getInfo();
//# sourceMappingURL=opinionPoll.js.map