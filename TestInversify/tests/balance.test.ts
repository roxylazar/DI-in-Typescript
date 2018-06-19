import { Balance } from "../src/models/Balance";

describe("balance works as expected", () => {
    let balance: Balance;
    beforeEach(() => {
        balance = new Balance(200);
    });

    describe("when credit 20", () => {
        beforeEach(() => {
            balance.credit(20);
        });

        test("should add 20 to initial amount", () => {
            expect(balance.currentAmount).toEqual(220);
        });
    });

    describe("when debit 20", () => {
        beforeEach(() => {
            balance.debit(20);
        });

        test("should remove 20 from initial amount", () => {
            expect(balance.currentAmount).toEqual(180);
        });
    });
})