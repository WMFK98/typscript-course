"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(result) {
    console.log(result);
}
//function type
// let combineValue:Function= add;
let combineValue = add;
function callback(a, b, cb) {
    cb(a + b);
}
//callback
callback(5, 7, (result) => {
    console.log(result);
});
