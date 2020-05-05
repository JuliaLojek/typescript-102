class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {  // "this" has to be an instance of the Department class
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");

accounting.describe();