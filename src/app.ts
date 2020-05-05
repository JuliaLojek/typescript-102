class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
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

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {   // getter method - access to private values
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {  // setter method
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.reports = reports;
    this.lastReport = reports[0];
  }
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("101", []);
accounting.addReport("Something went wrong");
console.log(accounting.mostRecentReport);     //  accessing a private field through getter method
accounting.mostRecentReport = "2020 report";  //  setting a private field through setter method
const it = new ITDepartment("201", ["Kevin", "Mark", "Daisy"]);

accounting.describe();
accounting.addEmployee("Max");
accounting.addEmployee("Julia");
accounting.printEmployeeInformation();
accounting.printReports();

it.describe();
