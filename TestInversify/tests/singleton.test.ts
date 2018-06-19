import {myContainer} from '../src/container-initialization';
import { ChangeRate } from '../src/models/ChangeRate';

/** It only matters how it is registered in the container */
describe('change rate for euro', ()=>{
    let changeRate: ChangeRate = null;
    beforeEach(()=>{
        changeRate = myContainer.get(ChangeRate);
        changeRate.euroBnr = 4.05;
    });

    test('buying rate is lower than bnr rate',()=>{
        expect(changeRate.buyEuroRate).toBeLessThan(changeRate.euroBnr);
    })

    test('selling rate is greater than bnr rate',()=>{
        expect(changeRate.sellEuroRate).toBeGreaterThan(changeRate.euroBnr);
    })

    test('selling rate is greater than buying rate',()=>{
        expect(changeRate.sellEuroRate).toBeGreaterThan(changeRate.buyEuroRate);
    })

    test('rate should have been used more than once', ()=>{
        changeRate = myContainer.get(ChangeRate);
        changeRate.buyEuroRate;
        expect(changeRate.rateUsage).toBeGreaterThan(1);
        console.log(changeRate.rateUsage);
    })
})