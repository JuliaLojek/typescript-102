class Department {
  // private name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // shorthand for creating properties, public keyword here is necessary to create a field inside the class
    // this.name = name;
  }

  describe(this: Department) {
    // "this" has to be an instance of the Department class
    console.log("Department #" + this.id + ": " + this.name);
  }

  addEmployee(emplyee: string) {
    this.employees.push(emplyee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("101", "Accounting");

accounting.describe();
accounting.addEmployee("Max");
accounting.addEmployee("Julia");
accounting.printEmployeeInformation();
