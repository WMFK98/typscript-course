"use strict";
console.log("Your code goes here?");
const n1 = 5;
const n2 = "5";
const sumNumber = (n1, n2) => {
    return n1 + n2;
};
// console.log(sumNumber(n1,n2)) //error
//---object
// const person: { name:string,age:number,role:[number,string] } = {
//     name: "John",
//     age: 5,
//     role:[2,"author"] //truple
// }
var Role;
(function (Role) {
    Role[Role["AUTHOR"] = 0] = "AUTHOR";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
const person = {
    name: "John",
    age: 5,
    // role:[2,"author"] //truple
    role: Role.AUTHOR,
};
console.log(person.age);
