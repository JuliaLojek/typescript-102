"use strict";
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private name: string;
        this.employees = [];
        // shorthand for creating properties, public keyword here is necessary to create a field inside the class
        // this.name = name;
    }
    Department.prototype.describe = function () {
        // "this" has to be an instance of the Department class
        console.log("Department #" + this.id + ": " + this.name);
    };
    Department.prototype.addEmployee = function (emplyee) {
        this.employees.push(emplyee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department("101", "Accounting");
accounting.describe();
accounting.addEmployee("Max");
accounting.addEmployee("Julia");
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map