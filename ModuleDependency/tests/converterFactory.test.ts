import { ConverterFactory } from "../models/ConverterFactory";
import { Converter } from "../models/Converters";
import { CurrencyType } from "../models/CurrencyType";

describe("factory creates correct converter", () => {
    let factory = new ConverterFactory();
    describe("when requesting an existing converter", () => {
        let converter: Converter;
        beforeAll(() => {
            converter = factory.getConverter(CurrencyType.AmericanDollar);
        })

        test("it should correctly convert amount", () => {
            expect(Math.round(converter.convert(100))).toBe(386);
        })
    })

    describe("when requesting a converter that does not exist", () => {
        let converter: Converter;
        beforeAll(() => {
            converter = factory.getConverter(CurrencyType.RomanianLeu);
        })

        test("no converter should be provided", () => {
            expect(converter).toBeUndefined();
        })
    })

});