import { IAccountManager, accountManager } from '../models/AccountManager';
import { emailFactory, IAlert } from '../models/Alert';
import { BankAccount } from '../models/BankAccount';
import { Customer } from '../models/Customer';
import { CurrencyType } from '../models/CurrencyType';

describe('inject an email alert into account manager', () => {
    let manager: IAccountManager;
    beforeAll(() => {
        manager = accountManager(emailFactory);
    });

    describe("when amount is not valid ", ()=>{
        let result: BankAccount;
        beforeEach(()=>{
            result = manager.openAcount(new Customer(), CurrencyType.Euro, -10);
        });

        test("it shouldn't open an account", ()=>{
            expect(result).toBeNull();
        });
    })

    describe("when amount is valid ", ()=>{
        let result: BankAccount;
        beforeEach(()=>{
            result = manager.openAcount(new Customer(), CurrencyType.Euro, 120);
        });

        test("it should open an account", ()=>{
            expect(result).not.toBeNull();
        });
    })
});

describe('inject a mocked alert into account manager', () => {
    let manager: IAccountManager;
    let mockAlert;
    beforeAll(() => {
        const Mock = jest.fn<IAlert>(()=>({
            alert: jest.fn(()=>console.log("Mock called"))
        }));
        mockAlert = new Mock();
        manager = accountManager(mockAlert);
    });

    describe("when amount is not valid ", ()=>{
        let result: BankAccount;
        beforeEach(()=>{
            result = manager.openAcount(new Customer(), CurrencyType.Euro, -10);
        });

        test("it shouldn't open an account", ()=>{
            expect(result).toBeNull();
        });
        test("it should call the alert system", ()=>{
            expect(mockAlert.alert).toHaveBeenCalled();
        });
    })

    describe("when amount is valid ", ()=>{
        let result: BankAccount;
        beforeEach(()=>{
            result = manager.openAcount(new Customer(), CurrencyType.Euro, 120);
        });

        test("it should open an account", ()=>{
            expect(result).not.toBeNull();
        });
        test("it should not call the alert system", ()=>{
            expect(mockAlert.alert.mock.calls.length).not.toBeGreaterThan(2);
        });
    })
});