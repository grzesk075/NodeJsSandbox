// The type of argument is object with string property named label.
function printLabel(labelledObject: {label: string}) {
    console.log(labelledObject.label);
}

const obj = {id: 10, label: "info", something: '', somethingelse: 4};

printLabel(obj);

interface LabelledObject {
    label: string;
    tip?: string; // Optional.
    readonly id: number;
}

let labelled: LabelledObject = obj; // It matches the contract of this interface.

let arr: number[] = [1,2,3,4];
let ro: ReadonlyArray<number> = arr;
arr = ro as number[]; //assertion
arr = ro as Array<number>; //also works

interface SearchFunc {
    (source: string, substring: string): boolean;
}
// Function interface - function objects can match it
let search: SearchFunc = function(source: string, substring: string): boolean {
    let s = source.search(substring);
    return s > -1;
}

// Indexable types.
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let roArray = ['abc','def'];
// roArray[0] - index is a number


// Extending interfaces and implementing classes.
interface Animal {
    name: string;
}

interface Noise {
    sound(foneme: string): void;
}

interface Dog extends Animal, Noise {
}

class Basset implements Dog {
    constructor(public name: string) {};

    sound(foneme: string): void {
        console.log( this.name + ' is barking ' + foneme);
    };
};

let dog: Dog = new Basset('Tim');
dog.sound('bow wow');

let rex: Dog = <Dog>{};
rex.name = 'Rex';
rex.sound = function (foneme: string) {
    console.log( this.name + ' is barking ' + foneme);
}
rex.sound('bow bow');

let spike = {} as Dog; // In compilation phase all OK.
//spike.sound(''); error in runtime

// Class concept, generally similar to Java.
// Members are public by default. Private and protected modifiers work like in Java.
// Keywords this and super also. Constructor of superclass must be invoked by super.
// Static fields, overriding, overloading and virtual functions are similar to Java.