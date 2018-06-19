import { AccountManager } from "../src/models/AccountManager";
import { myContainer } from "../src/container-initialization";
import { SystemAlert, IAlert, PagerAlert } from "../src/models/Alert";
import { IBankAccountValidator, BankAccountValidator } from "../src/models/BankAccountValidator";
import { Customer } from "../src/models/Customer";
import { CurrencyType } from "../src/models/CurrencyType";
import { BankAccount } from "../src/models/BankAccount";

describe("when initializing manager", () => {
    /** get dependencies from container and instantiate a manager with them */
    describe('when opening an account', () => {
        let manager: AccountManager;
        let customer: Customer;

        beforeEach(() => {
            let alert = myContainer.get<IAlert>(SystemAlert);
            let validator = myContainer.get<IBankAccountValidator>(BankAccountValidator);
            customer = new Customer();
            customer.name = "Toto";
            manager = new AccountManager(alert, validator);
        });

        describe('when amount not enough', () => {
            let result: BankAccount;
            beforeEach(() => {
                result = manager.openAcount(customer, CurrencyType.Euro, 10);
            });
            test('should not open account', () => {
                expect(result).toBeNull();
            });
        });
    });
});


/**getting the manager from container. Dependencies will be injected */
describe('when getting the manager from container', () => {
    describe('when opening an account', () => {
        let manager: AccountManager;
        let customer: Customer;

        beforeEach(() => {
            manager = myContainer.get<AccountManager>(AccountManager);
        });

        describe('when negative amount', () => {
            let result: BankAccount;
            beforeEach(() => {
                result = manager.openAcount(customer, CurrencyType.Euro, -100);
            });
            test('should not open account', () => {
                expect(result).toBeNull();
            });
        });

        describe('when amount not enough', () => {
            let result: BankAccount;
            beforeEach(() => {
                result = manager.openAcount(customer, CurrencyType.Euro, 10);
            });
            test('should not open account', () => {
                expect(result).toBeNull();
            });
        });

        describe('when amount required', () => {
            let result: BankAccount;
            beforeEach(() => {
                result = manager.openAcount(customer, CurrencyType.Euro, 30);
            });
            test('should open account', () => {
                expect(result).not.toBeNull();
            });
        });
    });
});