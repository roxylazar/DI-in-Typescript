import { CurrencyType } from "./CurrencyType";

export interface IBankAccountValidator {
    initialAmountIsValid(currencyType: CurrencyType, amount: number): boolean;
}

export class BankAccountValidator implements IBankAccountValidator {
    private _initialAmount = [100, 25, 27, 20, 100000];

    initialAmountIsValid(currencyType: CurrencyType, amount: number): boolean {
        if (!this._initialAmount[currencyType]){
            currencyType = CurrencyType.Unknown;
        }

        return amount >= this._initialAmount[currencyType];
    }
}