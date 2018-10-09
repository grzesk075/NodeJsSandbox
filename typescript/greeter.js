var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    ;
    return Student;
}());
function greeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName + '.';
}
var greetedUser = new Student('Grażyna', 'Kowalska');
document.body.innerHTML = greeter(greetedUser);
