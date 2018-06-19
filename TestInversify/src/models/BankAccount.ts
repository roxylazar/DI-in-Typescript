import { IAlert } from "./Alert";
import { Customer } from "./Customer";
import { Currency } from "./Currency";
import { Balance } from "./Balance";

export enum BankAccountState {
    Debit,
    Credit,
    Frozen
}

export class BankAccount {
    ibanNumber: string;
    owner: Customer;
    currency: Currency;
    balance: Balance;
    state: BankAccountState;

    constructor(private _alert: IAlert) { }

    deposit(amount: number, description: string): boolean {
        if (amount <= 0) {
            this._alert.alert("Cannot deposit negative amount.");
            return false;
        }

        this.balance.credit(amount);
        return true;
    }

    withdraw(amount: number, atmDescription: string): boolean {
        if (this.state === BankAccountState.Frozen) {
            this._alert.alert(`Withdraw attempt from ${atmDescription}.`);
            return false;
        }

        if (amount > this.balance.currentAmount) {
            this._alert.alert("Insufficient funds.");
            return false;
        }
        this.balance.debit(amount);
        return true;
    }

    pay(amount: number, traderName: string): boolean {
        if (this.state === BankAccountState.Frozen) {
            this._alert.alert(`Payment attempt to ${traderName}.`);
            return false;
        }

        if (amount > this.balance.currentAmount && this.state === BankAccountState.Debit) {
            this._alert.alert("Insufficient funds.");
            return false;
        }

        this.balance.debit(amount);
        return true;
    }
}