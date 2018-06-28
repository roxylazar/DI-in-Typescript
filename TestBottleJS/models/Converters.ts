import { ChangeRate } from "./ChangeRate";

export abstract class Converter {
    constructor(protected rate: ChangeRate) { }
    abstract convert(amount: number): number;
}

export class EuroToRonConverter extends Converter {
    convert(amount: number): number {
        return amount * this.rate.sellEuroRate;
    }
}

export class RonToEuroConverter extends Converter {
    convert(amount: number): number {
        return amount * this.rate.buyEuroRate;
    }
}

export class DollarToRonConverter extends Converter {
    
    convert(amount: number): number {
        return amount * this.rate.sellDollarRate;
    }
}

export class RonToDollarConverter extends Converter {
    convert(amount: number): number {
        return amount * this.rate.buyDollarRate;
    }
}