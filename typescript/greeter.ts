interface Person {
    firstName: string,
    lastName: string
}

class Student {
    constructor(public firstName: string, public lastName: string) {};
    // Public stands that class properties will be created automatically.
    // It also implicitly fits to Person interface.
}

function greeter(person: Person): string {
    return 'Hello ' + person.firstName + ' ' + person.lastName + '.';
}

let greetedUser: Person = new Student('Grażyna', 'Kowalska');

document.body.innerHTML = greeter(greetedUser);



enum Color {Red, Green, Blue = 8}
let c: Color = Color.Red;
let notSure: any = 'could be string';
let len: number = (notSure as string).length; // Assertion is like cast in other languages.
len = (<string>notSure).length; // Another syntax for type assertion.
let typeUnion: string | number | null; // In --strictNullChecks mode, null also can be assigned.

// Function returning never must have unreachable end point.
function error(message: string): never {
    throw new Error(message);
}

function onError(err: Error): void {
    console.error(err);
}

let numbers: Array<number> = [1,2,3,4];
console.log(numbers);

let tuple: [string, boolean] = ['Ala', true];
console.log(tuple);