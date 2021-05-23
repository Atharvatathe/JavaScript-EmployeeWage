class EmployeePayrollData{
    //property
    id;
    salary;
    
    //constructor
    constructor(id,name,salary){
        this.id = id;
        this.salary = salary;
        this.name = name;
    }

    //getter and setter
    get name(){return this.name;}
    set name(name){this._name = name;}

    //method
    toString(){
        return "id=" +this.id+ ", name=" +this.name+ ", salary=" +this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1,"Mark",50000);
console.log(employeePayrollData.toString);
employeePayrollData.name = "John";
console.log(employeePayrollData.toString);