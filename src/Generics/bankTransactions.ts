abstract class CreateAccount<T, V> {
    bankName: T;
    bankID: V;

    constructor(bankName: T, bankID: V) {
        this.bankName = bankName;
        this.bankID = bankID;
    }
}

class PersonalAccount<T, V> extends CreateAccount<T, V> {
    readonly ownerName: string;
    public money: number = 0;
    public recentTransactions: { [key: string]: number } = {};

    constructor(bankName: T, bankID: V, ownerName: string) {
        super(bankName, bankID);
        this.ownerName = ownerName;
    }

    deposit(amount: number) {
        this.money += amount;
    }

    expense(amount: number, expenseType: string) {
        if ((this.money - amount) >= 0) {
            if (this.recentTransactions.hasOwnProperty(expenseType)) {
                this.recentTransactions[expenseType] += amount;
                this.money -= amount;
                return;
            }
            this.recentTransactions[expenseType] = amount;
            this.money -= amount;
        } else {
            throw new Error(`You cant make ${expenseType} transaction`);
        }
    }

    showDetails() {
        let totalMoneySpent = 0;
        Object.values(this.recentTransactions).forEach(v => totalMoneySpent += v);

        return `
        Bank name: ${this.bankName}

        Bank ID: ${this.bankID}
        
        Owner name: ${this.ownerName}
        
        Money: ${this.money}
        
        Money spent: ${totalMoneySpent}`
    }
}


let account2 = new PersonalAccount('Fibank', 100000,

'Petar Petrol');

account2.deposit(10000);
console.log(account2.money);


account2.deposit(7000);
console.log(account2.money);
account2.expense(12000, 'Buy a new car');
console.log(account2.money);
account2.expense(200, 'Go to a fancy restaurant');
console.log(account2.money);
account2.expense(100, 'Go to a bar');
console.log(account2.money);
account2.expense(30, 'Go to the movies');
console.log(account2.money);
console.log(account2.showDetails())