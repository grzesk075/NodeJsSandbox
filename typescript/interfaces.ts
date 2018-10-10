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

let search: SearchFunc = function(source: string, substring: string): boolean {
    let s = source.search(substring);
    return s > -1;
}