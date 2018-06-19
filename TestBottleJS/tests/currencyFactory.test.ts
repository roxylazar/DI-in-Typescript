import { CurrencyFactory, Currency } from "../models/Currency";
import { CurrencyType } from "../models/CurrencyType";

describe("factory creates currency", () => {
    let factory = new CurrencyFactory();

    describe("when correct currency provided", () => {
        let currency: Currency;
        beforeAll(() => {
            currency = factory.createNewCurrency(CurrencyType.Euro);
        });

        test("sets currency sign", () => {
            expect(currency.sign).toBe("€");
        });

        test("sets currency abbreviation", () => {
            expect(currency.abbreviation).toBe("EUR");
        });
    });

    describe("when incorrect currency provided", () => {
        let currency: Currency;
        beforeAll(() => {
            currency = factory.createNewCurrency(101);
        });

        test("sets currency type to unknown", () => {
            expect(currency.currencyType).toBe(CurrencyType.Unknown);
        });

        test("sets currency sign to unknown", () => {
            expect(currency.sign).toBe("#");
        });

        test("sets currency abbreviation to unknown", () => {
            expect(currency.abbreviation).toBe("#");
        });
    });
});

