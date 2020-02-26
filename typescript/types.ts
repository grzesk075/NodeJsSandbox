class Person {
    constructor(public name: string) {}
}

interface Loggable<T> {
    log(o: T): void;
}

//& - intersection types, | union types
type LoggablePerson = Person & Loggable<string> | null;
type Name = string; // type alias

let loggablePerson: LoggablePerson = {
    name: 'Jerzy',
    log: function(o: string) {
        console.log(o);
    }
}

//type guard
if(loggablePerson.log) {
    loggablePerson.log(loggablePerson.name);
}

loggablePerson = null;

//x is number - type predicate type
function isNumber(x: any): x is number {
    return typeof x === "number";
}

//instanceof operator is also available in type guard clause
