// type  AddFn = (a:number, b:number) => number;
interface AddFn{
    (n1:number,n2:number):number
}
let add:AddFn

add = (n1:number,n2:number)=>{
    return n1 + n2;
}


interface  Named{
    readonly name?:string
    outputName?:string
}

interface Greetable extends Named{
    greet(phrase:string):void
}

let user1:Person;

class Person implements Greetable {
    // name: string;
    age: number = 30;

    constructor(public readonly name?:string){
        if(name)
        this.name = name;
    }
    greet(phrase: string): void {
        if(this.name)
        console.log(phrase+" " +  this.name);
        else console.log("Hi")
    }
}

user1 = new Person();
user1.greet("hi, I'm")
console.log(user1)

