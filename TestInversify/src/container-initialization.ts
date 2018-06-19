import { Container } from 'inversify';
import { BankAccountValidator, IBankAccountValidator } from './models/BankAccountValidator';
import { SystemAlert, EmailAlert, IAlert, PagerAlert } from './models/Alert';
import { AccountManager } from './models/AccountManager';
import { ChangeRate } from './models/ChangeRate';
import { RonToEuroConverter, RonToDollarConverter, EuroToRonConverter, Converter, DollarToRonConverter } from './models/Converters';



let myContainer = new Container();

myContainer.bind<IBankAccountValidator>(BankAccountValidator).to(BankAccountValidator);

myContainer.bind<IAlert>(SystemAlert).to(SystemAlert);
myContainer.bind<IAlert>(EmailAlert).to(EmailAlert);
myContainer.bind<IAlert>(PagerAlert).to(PagerAlert);

myContainer.bind<AccountManager>(AccountManager).toSelf();
myContainer.bind<ChangeRate>(ChangeRate).toSelf().inSingletonScope();

myContainer.bind<Converter>('ER').to(EuroToRonConverter);
myContainer.bind<Converter>('RE').to(RonToEuroConverter);
myContainer.bind<Converter>('DR').to(DollarToRonConverter);
myContainer.bind<Converter>('RD').to(RonToDollarConverter);


export { myContainer };
