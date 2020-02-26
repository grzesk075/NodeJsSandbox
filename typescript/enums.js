var computed = 7;
function computeMe() {
    return ++computed;
}
//all non-declared members are constant, if its preceding enum member is considered constant
var RegularEnum;
(function (RegularEnum) {
    //constant members
    RegularEnum[RegularEnum["A"] = 0] = "A";
    RegularEnum[RegularEnum["B"] = 4] = "B";
    RegularEnum[RegularEnum["C"] = 5] = "C";
    //computed members
    RegularEnum[RegularEnum["D"] = computeMe()] = "D";
})(RegularEnum || (RegularEnum = {}));
var enumVar = "a" /* A */;
var regEnum = RegularEnum.C;
console.log('Reverse mapping of ' + regEnum + '=' + RegularEnum[5]);
