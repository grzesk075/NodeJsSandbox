// The same namespace can be shared in many files.
// Namespaces can be internal or exported for other modules.
// Names outside namespaces and modules have global scope.
export namespace N {

    export const PI: number = 3.1415;
}

let pi = N.PI;
console.log(pi);