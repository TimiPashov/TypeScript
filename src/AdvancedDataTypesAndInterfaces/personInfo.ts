function personInfo(firstName: string, lastName: string, age: string): Record<string, string> {

    return {
        firstName,
        lastName,
        age
    }
}

console.log(personInfo("George",

"Smith",

"18"));
