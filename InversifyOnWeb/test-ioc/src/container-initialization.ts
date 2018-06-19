import { Container } from 'inversify';
import { IBankAccountValidator, BankAccountValidator } from './BankAccountValidator';
import { SystemAlert, EmailAlert, PagerAlert, IAlert } from './Alert';
import { AccountManager } from './AccountManager';
import { ChangeRate } from './ChangeRate';
import { Converter, EuroToRonConverter, RonToEuroConverter, DollarToRonConverter, RonToDollarConverter } from './Converters';

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
