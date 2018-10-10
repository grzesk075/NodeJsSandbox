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
var search = function (source, substring) {
    var s = source.search(substring);
    return s > -1;
};
