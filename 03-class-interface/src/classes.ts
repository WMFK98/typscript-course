
class Department{

    protected employees:string[] = []
    addEmployee(employee:string){
        this.employees.push(employee)
    }

    constructor(private readonly id:string,public name:string){
        this.id = id
        this.name = name;
    }

    getEmployees():string[]{
        return this.employees;
    }

    // abstract overrideMe():void

    describe(this:Department){
        console.log("Department " +this.id+ this.name);
    }
}

const accounting = new Department("555","Accounting")
accounting.describe()

const accountingCopy = {name:"kuy",describe: accounting.describe}

class ITDepartment extends Department{
    admins:string[]
    constructor(id:string,public  name:string,admins:string[]) {
        super(id,"IT");
        this.admins = admins;
    }

    overrideMe(){

    }
}



const accountIT = new ITDepartment('5',"585",['hi'])

class  AccountingDepartment extends Department{
    overrideMe(): void {
        throw new Error("Method not implemented.");
    }
    private  lastReport: string;



    get mostRecentReport():string{
        if(this.reports){
            return this.lastReport;
        }
        throw new Error("Not implemented");
    }


    set mostRecentReport(value:string){
        if(!value){
            throw new Error("Please pass in a valid value!!!");
        }
        this.lastReport = value;
    }

    constructor(id:string,private reports:string[]) {
        super(id,'IT');
        this.lastReport= reports[0];
    }

    addReport(report:string){
        this.reports.push(report);
    }

    addEmployee(employee:string){
        if(employee === 'Max') return;
        this.employees.push(employee)
    }
}

const accountingDepartment =new AccountingDepartment('hi',["first"])
console.log(accountingDepartment.mostRecentReport)
accountingDepartment.mostRecentReport = "new"
console.log(accountingDepartment.mostRecentReport)
