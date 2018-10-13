// The type of argument is object with string property named label.
function printLabel(labelledObject) {
    console.log(labelledObject.label);
}
var obj = { id: 10, label: "info", something: '', somethingelse: 4 };
printLabel(obj);
var labelled = obj; // It matches the contract of this interface.
var arr = [1, 2, 3, 4];
var ro = arr;
arr = ro; //assertion
arr = ro; //also works
// Function interface - function objects can match it
var search = function (source, substring) {
    var s = source.search(substring);
    return s > -1;
};
var roArray = ['abc', 'def'];
var Basset = /** @class */ (function () {
    function Basset(name) {
        this.name = name;
    }
    ;
    Basset.prototype.sound = function (foneme) {
        console.log(this.name + ' is barking ' + foneme);
    };
    ;
    return Basset;
}());
;
var dog = new Basset('Tim');
dog.sound('bow wow');
var rex = {};
rex.name = 'Rex';
rex.sound = function (foneme) {
    console.log(this.name + ' is barking ' + foneme);
};
rex.sound('bow bow');
var spike = {}; // In compilation phase all OK.
//spike.sound(''); error in runtime
