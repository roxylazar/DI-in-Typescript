import { CurrencyType } from "./CurrencyType";
import { Converter } from "./Converters";
import { bottle } from "../container-initialization";

export class ConverterFactory {
    getConverter(type: CurrencyType): Converter {

        switch (type) {
            case CurrencyType.Euro:
                return bottle.container.EuroToRonConverter;
            case CurrencyType.AmericanDollar:
                return bottle.container.DollarToRonConverter;
        }
    }
}