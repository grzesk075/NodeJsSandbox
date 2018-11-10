export default class MyLogger {

    log(msg: string): void {

        console.log(msg);
    }
}


export interface Loggable {

    log(msg: string): void;
}

export {Loggable as MyLoggable}

// This will be executed once during importing this module.
let l: Loggable = new MyLogger();
l.log("Test ąśżźć");
