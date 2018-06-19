import { AccountManager } from "../models/AccountManager";
import { Customer } from "../models/Customer";
import { IBankAccountValidator, BankAccountValidator } from "../models/BankAccountValidator";
import { PagerAlert, SystemAlert } from "../models/Alert";
import { BankAccount } from "../models/BankAccount";
import { CurrencyType } from "../models/CurrencyType";


describe("when mocking dependencies", () => {
    describe('when opening an account', () => {
        let manager: AccountManager;
        let customer: Customer;
        let validatorMock;
        
        beforeAll(() => {
            const ValidatorMock = jest.fn<IBankAccountValidator>(()=>({
                initialAmountIsValid: jest.fn().mockReturnValue(true)
            }));
            let alert = new PagerAlert();
            validatorMock = new ValidatorMock();
            
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
            let alert = new SystemAlert();
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