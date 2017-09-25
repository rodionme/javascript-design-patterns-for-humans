var Developer = (function () {
    function Developer(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Developer.prototype.getName = function () {
        return this.name;
    };
    Developer.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Developer.prototype.getSalary = function () {
        return this.salary;
    };
    return Developer;
}());
var Designer = (function () {
    function Designer(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Designer.prototype.getName = function () {
        return this.name;
    };
    Designer.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Designer.prototype.getSalary = function () {
        return this.salary;
    };
    return Designer;
}());
var Organization = (function () {
    function Organization() {
        this.employees = [];
    }
    Organization.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Organization.prototype.getNetSalaries = function () {
        var netSalary = 0;
        this.employees.forEach(function (employee) {
            netSalary += employee.getSalary();
        });
        return netSalary;
    };
    return Organization;
}());
// Подготовка сотрудников
var john = new Developer('John Doe', 12000);
var jane = new Designer('Jane Doe', 10000);
// Включение их в штат
var organization = new Organization();
organization.addEmployee(john);
organization.addEmployee(jane);
console.log("Net salaries: " + organization.getNetSalaries()); // => Net Salaries: 22000
