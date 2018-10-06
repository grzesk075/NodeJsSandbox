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