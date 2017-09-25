interface Employee {
  getName(): string;
  setSalary(salary: number): void;
  getSalary(): number;
}

class Developer implements Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getName(): string {
    return this.name;
  }

  setSalary(salary: number): void {
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }
}

class Designer implements Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getName(): string {
    return this.name;
  }

  setSalary(salary: number): void {
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }
}


class Organization {
  employees: Employee[];

  constructor() {
    this.employees = [];
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  getNetSalaries(): number {
    let netSalary = 0;

    this.employees.forEach(employee => {
      netSalary += employee.getSalary();
    });

    return netSalary;
  }
}


// Подготовка сотрудников
const john = new Developer('John Doe', 12000);
const jane = new Designer('Jane Doe', 10000);

// Включение их в штат
const organization = new Organization();

organization.addEmployee(john);
organization.addEmployee(jane);

console.log(`Net salaries: ${organization.getNetSalaries()}`);    // => Net Salaries: 22000