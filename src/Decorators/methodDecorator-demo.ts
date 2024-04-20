
class Project {
    budget: number = 1000;
    constructor() { }

    @withBudget(600)
    writeDesign() {
        console.log('Designing the project');
    }
    @withBudget(400)
    implementDesign() {
        console.log('Implementing the design of the project');

    }
}

type WithBudget = {
    budget: number;
}


function withBudget<T extends WithBudget>(requiredMoney: number) {

    return function (target: Function, context: ClassMethodDecoratorContext) {

        return function (this: T, ...args: any) {
            const instance = this as T;

            if (instance.budget >= requiredMoney) {
                instance.budget -= requiredMoney;
                target.apply(instance, args)
            } else {
                console.log(`Not enough money for ${context.name.toString()}! Money required: ${requiredMoney}`);
            }
        }
    }
}

const website = new Project();
website.writeDesign();
website.implementDesign()
website.implementDesign()