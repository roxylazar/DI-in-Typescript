import { IAlert } from "./Alert";
import { IBankAccountValidator } from "./IBankAccountValidator";
import { Customer } from "./Customer";
import { CurrencyType } from "./CurrencyType";
import { BankAccount, BankAccountState } from "./BankAccount";
import { CurrencyFactory } from "./Currency";
import { Balance } from "./Balance";
import * as guid from "./guid";
import {bankAccountValidator} from './BankAccountValidator';

export interface IAccountManager{
    openAcount(customer: Customer, currencyType: CurrencyType, initialAmount: number): BankAccount;
    changeAccountTypeToCredit(ibanNumber: string): boolean
}

class AccountManager {
    private _factory: CurrencyFactory = new CurrencyFactory();
    private _bankAccounts: Array<BankAccount> = new Array<BankAccount>();

    constructor(
        private _alert: IAlert,
        private _validator: IBankAccountValidator) {
    }

    openAcount(customer: Customer, currencyType: CurrencyType, initialAmount: number): BankAccount {
        if (initialAmount < 0) {
            this._alert.alert(`Cannot open account with ammount ${initialAmount}.`);
            return null;
        }

        if (!this._validator.initialAmountIsValid(currencyType, initialAmount)) {
            this._alert.alert("Cannot open account. Initial amount is not met");
            return null;
        }

        return this.createNewAccount(customer, currencyType, initialAmount);
    }

    changeAccountTypeToCredit(ibanNumber: string): boolean {
        if (!this._bankAccounts[ibanNumber]) {
            this._alert.alert(`No bank account found. IBAN ${ibanNumber}`);
            return false;
        }
        let account = this._bankAccounts[ibanNumber];
        if (account.State != BankAccountState.Debit) {
            return false;
        }
        account.State = BankAccountState.Credit;
        return true;
    }

    private createNewAccount(customer: Customer, currencyType: CurrencyType, initialAmount: number): BankAccount {
        let account = new BankAccount(this._alert);
        account.currency = this._factory.createNewCurrency(currencyType);
        account.owner = customer;
        account.balance = new Balance(initialAmount);
        account.ibanNumber = guid.newGuid();
        account.state = BankAccountState.Debit;

        this._bankAccounts[account.ibanNumber] = account;
        return account;
    }
}

let accountManager = function (alertFactory){
    return new AccountManager(alertFactory, bankAccountValidator);
};

export {accountManager};