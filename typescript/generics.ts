//Generic concept similar to Java

function echo<T>(arg: T): T {
    return arg;
}

let fun: <T>(arg: T) => T;

fun = echo;

interface EchoIF<T extends Object> {
    (a: T): T;
}

let e: EchoIF<string> = fun;

console.log(e('Hello generics'));