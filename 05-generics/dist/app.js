"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'MAX' }, { age: 30 });
console.log(mergeObj);
function countAndDescribe(element) {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' element.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("hi"));
console.log(countAndDescribe(['hi', 'hello']));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1)
            return;
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const numberStorage = new DataStorage();
function createCourseGoal(title, description) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    return courseGoal;
}
console.log(createCourseGoal('fluke', "hi"));
const names = ['Max', 'Anna'];
//# sourceMappingURL=app.js.map