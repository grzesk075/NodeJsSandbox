interface Person {
    firstName: string,
    lastName: string
}

class Student {
    constructor(public firstName: string, public lastName: string) {};
    // Public stands that class properties will be created automatically.
    // It also implicitly fits to Person interface.
}

function greeter(person: Person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName + '.';
}

let greetedUser = new Student('Grażyna', 'Kowalska');

document.body.innerHTML = greeter(greetedUser);
