import { ConverterFactory } from "../src/models/ConverterFactory";
import { Converter } from "../src/models/Converters";
import { CurrencyType } from "../src/models/CurrencyType";
import { myContainer } from '../src/container-initialization';
import { ChangeRate } from "../src/models/ChangeRate";

describe("factory creates correct converter", () => {
    let factory = new ConverterFactory();
    let rate: ChangeRate;
    describe("when requesting an existing converter", () => {
        let converter: Converter;

        beforeAll(() => {
            rate = myContainer.get<ChangeRate>(ChangeRate);
            rate.dollarBnr = 3.67;
            converter = factory.getConverter(CurrencyType.AmericanDollar);
            console.log(converter);
        })

        test("it should correctly convert amount", () => {
            expect(Math.round(converter.convert(100))).toBe(364);
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