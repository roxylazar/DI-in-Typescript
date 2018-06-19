import { AccountManager } from "../src/models/AccountManager";
import { Customer } from "../src/models/Customer";
import { BankAccountValidator, IBankAccountValidator } from "../src/models/BankAccountValidator";
import { PagerAlert } from "../src/models/Alert";
import { BankAccount } from "../src/models/BankAccount";
import { CurrencyType } from "../src/models/CurrencyType";

describe("when mocking dependencies 2", () => {
    describe('when opening an account', () => {
        let manager: AccountManager;
        let customer: Customer;
        let validatorMock;
        
        beforeAll(() => {
            const Mock = jest.fn<IBankAccountValidator>(()=>({
                initialAmountIsValid: jest.fn().mockReturnValue(true)
            }));
            let alert = new PagerAlert();
            validatorMock = new Mock();
            
            customer = new Customer();
            customer.name = "Toto";
            manager = new AccountManager(alert, validatorMock);
        });

        describe('when amount is valid', () => {
            let result: BankAccount;
            beforeAll(() => {
                result = manager.openAcount(customer, CurrencyType.Euro, 10);
            });

            test('should call validator', () => {
                expect(validatorMock.initialAmountIsValid).toHaveBeenCalled();
            });
            test('should open account', () => {
                expect(result).not.toBeNull();
            });
        });

        describe('when amount is not valid', () => {
            let result: BankAccount;
            beforeAll(() => {
                validatorMock.initialAmountIsValid = jest.fn().mockReturnValue(false);
                result = manager.openAcount(customer, CurrencyType.Euro, 10);
            });

            test('should call validator', () => {
                expect(validatorMock.initialAmountIsValid).toHaveBeenCalled();
            });
            test('should not open account', () => {
                expect(result).toBeNull();
            });
        });
    });
});

describe("when not mocking dependencies", () => {
    describe('when opening an account', () => {
        let manager: AccountManager;
        let customer: Customer;
        
        beforeAll(() => {
            let alert = new PagerAlert();
            let validator = new BankAccountValidator();
            console.log(validator);
            customer = new Customer();
            customer.name = "Toto";
            manager = new AccountManager(alert, validator);
        });

        describe('when amount not enough', () => {
            let result: BankAccount;
            beforeAll(() => {
                result = manager.openAcount(customer, CurrencyType.Euro, 10);
            });

            test('should not open account', () => {
                expect(result).toBeNull();
            });
        });
    });
});