let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];

let mergedArr = [...arr1, ...arr2]; //... is a spread operator
console.log('mergedArr=' + mergedArr);

function oldFashionArguments() {
    console.log('oldFashionArguments count ' + arguments.length); //arguments is a special property
    for(let arg of arguments) {
        console.log(arg);
    }
}

oldFashionArguments(5,6,7);

function newVarargsApproach(first, ...rest) { //... is rest parameters
    console.log('first is ' + first +' and rest is ');
    for(let arg of rest) {
        console.log(arg);
    }
}

newVarargsApproach(8,9,10);

//arrow functions dont have this and special arguments property
let f = () => {};

//var is deprecated, because var objects from a bloc are global, and
//in block are executed at first, even if are placed later in the block of code

//global objects like window or global still are in the spec of ES8

//all functions in js are clousures, because they remember their Outer Lexical Environment.

//dynamically created function e.g. from code received from server
//it's outer lexical environment is global lexical environment
let func = new Function('a', 'b', 'return a + b');
func.someNewProperty = f;
func.someNewProperty();
let s = func(1,2);
console.log('func(1,2)=' + s);

//you can also use call/apply to invole a function assigning context argument as this in function
//addictionally you can use bind function to obtain a wrapper for a function with frozen context

let obj = {
    name : 'Paul',
    printName : function() {
        console.log('Print name: ' + this.name);
    }
}

let user = {name: 'Peter'};

obj.printName();
obj.printName.apply(user);//in this call user becomes this as inner lexical context

let wrappedPrintName = obj.printName.bind(user);
wrappedPrintName();