
export interface IAlert {
    alert(message: string);
}

class SystemAlert implements IAlert {
    alert(message: string) {
        console.log(`SystemAlert ${message}`);
    }
}

class EmailAlert implements IAlert {
    alert(message: string) {
        console.log(`EmailAlert ${message}`);
    }
}

class PagerAlert implements IAlert {
    alert(message: string) {
        console.log(`PagerAlert ${message}`);
    }
}

let emailFactory = (function () {
    return new EmailAlert();
})();

let systemFactory = (function () {
    return new SystemAlert();
})();

let pagerFactory = (function () {
    return new PagerAlert();
})();

export { emailFactory, systemFactory, pagerFactory }
