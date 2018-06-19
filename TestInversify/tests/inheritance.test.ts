import { myContainer } from '../src/container-initialization';
import { ChangeRate } from '../src/models/ChangeRate';
import { Converter } from '../src/models/Converters';

describe('when we have a request scope dependency', () => {
    let rate: ChangeRate;
    let euroConverter: Converter;
    let dollarConverter: Converter;

    beforeAll(() => {
        rate = myContainer.get(ChangeRate);
        rate.euroBnr = 4.55;
        rate.dollarBnr = 3.78;

        euroConverter = myContainer.get("ER");
        euroConverter.convert(100);
    });

    test('when requesting another container it will serve the same instance', () => {
        dollarConverter = myContainer.get("DR");
        dollarConverter.convert(45);

        expect(rate.rateUsage).toEqual(2);
    })
})