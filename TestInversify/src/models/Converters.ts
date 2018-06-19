import { injectable, unmanaged, inject } from "inversify";
import 'reflect-metadata';
import { ChangeRate } from "./ChangeRate";

@injectable()
export abstract class Converter {
    constructor(protected rate: ChangeRate) { }
    abstract convert(amount: number): number;
}

@injectable()
export class EuroToRonConverter extends Converter {
    constructor(@inject(ChangeRate) protected rate: ChangeRate) {super(rate); }
    convert(amount: number): number {
        return amount * this.rate.sellEuroRate;
    }
}

@injectable()
export class RonToEuroConverter extends Converter {
    convert(amount: number): number {
        return amount * this.rate.buyEuroRate;
    }
}

@injectable()
export class DollarToRonConverter extends Converter {
    constructor(@inject(ChangeRate) protected rate: ChangeRate) {super(rate); }
    convert(amount: number): number {
        return amount * this.rate.sellDollarRate;
    }
}

@injectable()
export class RonToDollarConverter extends Converter {
    constructor(@inject(ChangeRate) protected rate: ChangeRate) {super(rate); }
    convert(amount: number): number {
        return amount * this.rate.buyDollarRate;
    }
}