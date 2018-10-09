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
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 8] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
var notSure = 'could be string';
var len = notSure.length; // Assertion is like cast in other languages.
len = notSure.length; // Another syntax for type assertion.
var typeUnion; // In --strictNullChecks mode, null also can be assigned.
// Function returning never must have unreachable end point.
function error(message) {
    throw new Error(message);
}
function onError(err) {
    console.error(err);
}
var numbers = [1, 2, 3, 4];
console.log(numbers);
var tuple = ['Ala', true];
console.log(tuple);
