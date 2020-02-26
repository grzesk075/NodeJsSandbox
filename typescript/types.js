var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var loggablePerson = {
    name: 'Jerzy',
    log: function (o) {
        console.log(o);
    }
};
//type guard
if (loggablePerson.log) {
    loggablePerson.log(loggablePerson.name);
}
loggablePerson = null;
//x is number - type predicate type
function isNumber(x) {
    return typeof x === "number";
}
//instanceof operator is also available in type guard clause
