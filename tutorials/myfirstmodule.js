
exports.myDateTime = function() {

    return new Date();
}

myInternalFunction = function() {

    return 'internal';
}

console.log(exports.myDateTime());
console.log(myInternalFunction());
