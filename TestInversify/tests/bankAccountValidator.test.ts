import { BankAccountValidator } from "../src/models/BankAccountValidator";
import { CurrencyType } from "../src/models/CurrencyType";
import "reflect-metadata";

describe("validates initial amount based on currency", () => {
    let validator = new BankAccountValidator();

    describe("when amount less than required", ()=>{
        test("should not validate",()=>{
            expect(validator.initialAmountIsValid(CurrencyType.Euro, 10)).toBeFalsy();
        });
    });

    describe("when amount equal to required amount", ()=>{
        test("should validate",()=>{
            expect(validator.initialAmountIsValid(CurrencyType.Euro, 25)).toBeTruthy();
        });
    });

    describe("when amount more than required", ()=>{
        test("should validate",()=>{
            expect(validator.initialAmountIsValid(CurrencyType.Euro, 30)).toBeTruthy();
        });
    });
});