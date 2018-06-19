import { CurrencyType } from "./CurrencyType";
import { IBankAccountValidator } from "./IBankAccountValidator";


class BankAccountValidator implements IBankAccountValidator {
    private _initialAmount = [100, 25, 27, 20, 100000];

    initialAmountIsValid(currencyType: CurrencyType, amount: number): boolean {
        if (!this._initialAmount[currencyType]) {
            currencyType = CurrencyType.Unknown;
        }

        return amount >= this._initialAmount[currencyType];
    }
}

let bankAccountValidator = (function (): IBankAccountValidator {
    return new BankAccountValidator();
})();

export { bankAccountValidator };