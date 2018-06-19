
export class ChangeRate {
    private _usage:number = 0;
    public euroBnr: number;
    public dollarBnr: number;

    get sellEuroRate() {
        this._usage++;
        return this.euroBnr + (0.02 * this.euroBnr);
    }

    get buyEuroRate() {
        this._usage++;
        return this.euroBnr - (0.01 * this.euroBnr);
    }

    get sellDollarRate() {
        this._usage++;
        return this.dollarBnr + (0.015 * this.dollarBnr);
    }

    get buyDollarRate() {
        this._usage++;
        return this.dollarBnr - (0.007 * this.dollarBnr);
    }

    get rateUsage(){
        return this._usage;
    }
}