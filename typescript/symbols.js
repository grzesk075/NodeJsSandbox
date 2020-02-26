//symbols are part of EcmaScript2015, used as a key
let sym = Symbol();
let obj = {
    [sym]: "value"
};
console.log(obj.sym); //es2015 or later
