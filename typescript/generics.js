//Generic concept similar to Java
function echo(arg) {
    return arg;
}
var fun;
fun = echo;
var e = fun;
console.log(e('Hello generics'));
