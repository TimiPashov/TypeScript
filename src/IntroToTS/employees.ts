function employees(input: string[]): void {
    input.forEach(employee => console.log(`Name: ${employee} -- Personal Number: ${employee.length}`))
}

employees([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'

])