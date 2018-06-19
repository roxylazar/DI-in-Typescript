import "reflect-metadata";
import { injectable } from 'inversify';

export interface IAlert {
    alert(message: string);
}

@injectable()
export class SystemAlert implements IAlert {
    alert(message: string) {
        console.log(`SystemAlert ${message}`);
    }
}

@injectable()
export class EmailAlert implements IAlert {
    alert(message: string) {
        console.log(`EmailAlert ${message}`);
    }
}

@injectable()
export class PagerAlert implements IAlert {
    alert(message: string) {
        console.log(`PagerAlert ${message}`);
    }
}
