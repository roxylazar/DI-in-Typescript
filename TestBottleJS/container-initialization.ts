import * as Bottle from 'bottlejs';
import { BankAccountValidator, IBankAccountValidator } from './models/BankAccountValidator';
import { SystemAlert, EmailAlert, IAlert, PagerAlert } from './models/Alert';
import { AccountManager } from './models/AccountManager';
import { ChangeRate } from './models/ChangeRate';
import { RonToEuroConverter, RonToDollarConverter, EuroToRonConverter, Converter, DollarToRonConverter } from './models/Converters';


var bottle = new Bottle();
//converters
bottle.factory("ChangeRate", function(){
    let rate =  new ChangeRate();
    rate.dollarBnr = 4.11;
    rate.euroBnr = 4.66;
    return rate;
});

bottle.service("EuroToRonConverter", EuroToRonConverter, "ChangeRate");
bottle.service("RonToEuroConverter", RonToEuroConverter, "ChangeRate");
bottle.service("DollarToRonConverter", DollarToRonConverter, "ChangeRate");
bottle.service("RonToDollarConverter", RonToDollarConverter, "ChangeRate");

bottle.service("BankAccountValidator", BankAccountValidator);

//alerts
bottle.service("SystemAlert", SystemAlert);
bottle.service("EmailAlert", EmailAlert);
bottle.service("PagerAlert", PagerAlert);

//if you want to use it with another configuration from the container, it is not possible
bottle.factory("AccountManager", function(container){
    var validator =  container.BankAccountValidator;
    var alert = container.EmailAlert;
    var manager = new AccountManager(alert, validator);
    return manager;
});

//bottle.service("AccountManager", AccountManager,  "PagerAlert", "BankAccountValidator");
export {bottle};