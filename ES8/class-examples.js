"use strict";

let user = {
    name: 'John', //data property
    surname: 'Smith',
    get fullName() { //getter for accessor property
        return this.name + ' ' + this.surname;
    }
};
Object.seal(user);
Object.freeze(user); //makes user completely immutable

//user.name = "Paul"; error in strict mode

console.log('User descriptor flags' + JSON.stringify(Object.getOwnPropertyDescriptors(user)));
console.log('user.fullName' + user.fullName);

let animal = {color: 'red'};
//prototypal inheritance (old fashion prototype and constructor special properties are also available)
//as described in object-examples.js
//also Object.create(animal) creates new object with animal prototype
let rabbit = {
    __proto__ : animal
}
console.log('rabbit.color=' + rabbit.color);

//let k in obj  - uses Object.keys(obj)
//let k of obj  - uses Object.values(obj)

class User extends Object {
    constructor(name) {
      super();
      this.name = name; // invokes the setter
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }

    static staticMethod() {
        console.log('this === User is ' + (this === User));
    }

    static compare(a, b) { // usage in Array.sort method for array of Users
        return a.speed - b.speed;
    }
}
  
let user1 = new User("John");
console.log('user1.name=' + user1.name); // John

user1 = new User(""); // Name too short.
User.staticMethod();
console.log('user1 instanceof User is ' + (user1 instanceof User));

/*
Mixin – is a generic object-oriented programming term: a class that contains methods for other classes.
Some other languages like e.g. python allow to create mixins using multiple inheritance.
JavaScript does not support multiple inheritance,
but mixins can be implemented by copying them into the prototype.
*/

//try catch finally generally like in java. You can extend Error class and throw instance
//of them, catch them and rethrow, check instanceof. Errors have also stack property.