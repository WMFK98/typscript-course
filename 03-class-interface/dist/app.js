"use strict";
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var user1;
var Person = (function () {
    function Person(name) {
        this.name = name;
        this.age = 30;
        if (name)
            this.name = name;
    }
    Person.prototype.greet = function (phrase) {
        if (this.name)
            console.log(phrase + " " + this.name);
        else
            console.log("Hi");
    };
    return Person;
}());
user1 = new Person();
user1.greet("hi, I'm");
console.log(user1);
//# sourceMappingURL=app.js.map