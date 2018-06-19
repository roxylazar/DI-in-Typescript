export class Balance {
    private _amount: number;

    constructor(initialAmount: number) {
        this._amount = initialAmount;
    }

    credit(amount: number) {
        this._amount += amount;
    }

    debit(amount: number) {
        this._amount -= amount;
    }

    get currentAmount(): number {
        return this._amount;
    }
}