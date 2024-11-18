console.log("Your code goes here?")


const n1 = 5
const n2 = "5"

const sumNumber = (n1:number,n2:number) => {
    return n1 + n2;
}

// console.log(sumNumber(n1,n2)) //error

//---object

// const person: { name:string,age:number,role:[number,string] } = {
//     name: "John",
//     age: 5,
//     role:[2,"author"] //truple
// }
enum Role{
    AUTHOR,
    ADMIN,
    READ_ONLY
}
type Person ={
    name: string,
    age: number | string
    role:Role
}
const person:Person = {
    name: "John",
    age: 5,
    // role:[2,"author"] //truple
    role: Role.AUTHOR,
}



console.log(person.age)