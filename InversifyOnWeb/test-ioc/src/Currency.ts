import { CurrencyType } from "./CurrencyType";

export class Currency {
    currencyType: CurrencyType;
    sign: string;
    abbreviation: string;
}

export class CurrencyFactory {
    private _currencySign = ["RON", "€", "$", "£", "#"];
    private _currencyAccountKey = ["RON", "EUR", "USD", "GBP", "#"];

    createNewCurrency(type: CurrencyType): Currency {
        if (!this._currencySign[type] || !this._currencyAccountKey[type]) {
            type = CurrencyType.Unknown;
        }

        let currency = new Currency();
        currency.currencyType = type;
        currency.sign = this._currencySign[type];
        currency.abbreviation = this._currencyAccountKey[type];
        return currency;
    }
}