"use strict";
var _a;
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add("Wichira", "Matrakompa");
result.split('');
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: {
        title: 'CEO', description: 'My own company'
    }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storedData);
//# sourceMappingURL=app.js.map