let computed = 7;

function computeMe(): number {
    return ++computed;
}

//all non-declared members are constant, if its preceding enum member is considered constant
enum RegularEnum {
    //constant members
    A,
    B = 1 << 2,
    C,
    //computed members
    D = computeMe()
}

//only constant members
const enum ConstEnum {
    A = 'a',
    B = 'b'
}

//all members, that does not have initializer, are always considered computed
declare enum AmbientEnum {
    A = 1,
    B,
    C = 2
}

let enumVar: ConstEnum = ConstEnum.A;
let regEnum: RegularEnum = RegularEnum.C;

console.log('Reverse mapping of ' + regEnum + '=' + RegularEnum[5]);