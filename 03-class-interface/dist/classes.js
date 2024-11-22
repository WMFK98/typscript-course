"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        this.id = id;
        this.name = name;
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.getEmployees = function () {
        return this.employees;
    };
    Department.prototype.describe = function () {
        console.log("Department " + this.id + this.name);
    };
    return Department;
}());
var accounting = new Department("555", "Accounting");
accounting.describe();
var accountingCopy = { name: "kuy", describe: accounting.describe };
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, name, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.name = name;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.overrideMe = function () {
    };
    return ITDepartment;
}(Department));
var accountIT = new ITDepartment('5', "585", ['hi']);
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    AccountingDepartment.prototype.overrideMe = function () {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.reports) {
                return this.lastReport;
            }
            throw new Error("Not implemented");
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please pass in a valid value!!!");
            }
            this.lastReport = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addReport = function (report) {
        this.reports.push(report);
    };
    AccountingDepartment.prototype.addEmployee = function (employee) {
        if (employee === 'Max')
            return;
        this.employees.push(employee);
    };
    return AccountingDepartment;
}(Department));
var accountingDepartment = new AccountingDepartment('hi', ["first"]);
console.log(accountingDepartment.mostRecentReport);
accountingDepartment.mostRecentReport = "new";
console.log(accountingDepartment.mostRecentReport);
//# sourceMappingURL=classes.js.map