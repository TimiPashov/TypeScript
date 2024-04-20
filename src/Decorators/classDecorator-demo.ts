
@withEmploymentDate
@withName
@logger
class Manager {
    task: string = 'Some task';
    project: string = 'some project';

    constructor() {
        console.log('Manager class has been inited!');
    }


}


type Args = { new(...args: any[]): {} }

function withEmploymentDate<T extends Args>(
    baseClass: T,
    context: ClassDecoratorContext
) {
    return class extends baseClass {
        employmentDate = new Date().toISOString();

        constructor(...args: any[]) {
            super(...args);

            console.log(`Added new property to ${baseClass.name}`);

        }
    }
}
const manager = new Manager();

function withName<T extends Args>(baseClass: T, context: ClassDecoratorContext) {

    return class extends baseClass {
        name = 'Timi';
        constructor(...args: any[]) {
            super(...args);
            console.log(`Added "name" property to ${baseClass.name}`);

        }
    }
}

function logger(value: Function, context: ClassDecoratorContext) {
    context.addInitializer(() => {
        console.log(`Log from logger decorator on class: ${context.name}`);

    })

}
