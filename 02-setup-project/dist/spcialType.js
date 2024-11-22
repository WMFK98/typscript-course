"use strict";
// Unknown type
// let inputUser:unknown
let userName;
userName = '555';
// userName = inputUser //error
if (typeof userName === 'string') {
    // userName = inputUser //work
}
let inputUser;
inputUser = 5;
inputUser = "kl";
userName = inputUser; //work
// Never type use when throw cash break
function generateError(message, code) {
    throw { message, code };
}
console.log(generateError("error", 555));
