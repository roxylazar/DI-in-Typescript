import { CurrencyType } from "./CurrencyType";

export interface IBankAccountValidator {
    initialAmountIsValid(currencyType: CurrencyType, amount: number): boolean;
}
