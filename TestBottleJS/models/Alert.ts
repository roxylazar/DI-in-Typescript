export interface IAlert {
    alert(message: string);
}

export class SystemAlert implements IAlert {
    alert(message: string) {
        console.log(`SystemAlert ${message}`);
    }
}

export class EmailAlert implements IAlert {
    alert(message: string) {
        console.log(`EmailAlert ${message}`);
    }
}

export class PagerAlert implements IAlert {
    alert(message: string) {
        console.log(`PagerAlert ${message}`);
    }
}
