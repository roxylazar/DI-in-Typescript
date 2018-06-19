import { CurrencyType } from "./CurrencyType";
import { myContainer } from '../container-initialization';
import { RonToEuroConverter, Converter } from "./Converters";

export class ConverterFactory {
    getConverter(type: CurrencyType): Converter {

        switch (type) {
            case CurrencyType.Euro:
                return myContainer.get('RE');
            case CurrencyType.AmericanDollar:
                return myContainer.get('RD');
        }
    }
}