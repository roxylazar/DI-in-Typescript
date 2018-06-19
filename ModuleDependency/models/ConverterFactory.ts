import { CurrencyType } from "./CurrencyType";
import { Converter, EuroToRonConverter, ronDollarConverter, ronEuroConverter } from "./Converters";
import { ChangeRate } from "./ChangeRate";

export class ConverterFactory {
    getConverter(type: CurrencyType): Converter {
        let changeRate = new ChangeRate();
        changeRate.euroBnr = 4.66;
        changeRate.dollarBnr = 3.89;

        switch (type) {
            case CurrencyType.Euro:
                return ronEuroConverter(changeRate);
            case CurrencyType.AmericanDollar:
                return ronDollarConverter(changeRate);
        }
    }
}