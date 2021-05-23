class EmployeePayrollData{
    //property
    id;
    salary;
    gender;
    startDate;
    //constructor
    constructor(...params){
        this.id = params[0];
        this.salary = params[1];
        this.name = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and setter
    get name(){return this._name;}
    set name(name){this._name = name;}

    //method
    toString(){
        const options = {year: 'numeric', month: 'long', day: 'numeric'};   
        const empDate = this.startDate === undefined ? "undefined" :
                        this.startDate.toLocaleDateString("en-US",options);
        return "id=" +this.id+ ", name=" +this.name+ ", salary=" +this.salary+
        ", Gender=" +this.gender+ ", startDate= " +empDate ;
    }
}

let employeePayrollData = new EmployeePayrollData(1,"Mark",50000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "John";
console.log(employeePayrollData.toString());
let newEmployeepayrollData = new EmployeePayrollData(1,"Terisa",30000,"F",new Date());
console.log(newEmployeepayrollData.toString());