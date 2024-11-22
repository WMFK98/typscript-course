// type Admin = {
//     name:string,
//     privileges:string[]
//     ,
// }
//
// type Employee = {
//     name:string;
//     startDate:Date
// }
//
// type ElevatedEmployee = Admin & Employee;
//
// const e1:ElevatedEmployee = {
//     name:"fluke",
//     privileges:['create-server'],
//     startDate:new Date(),
// }
//
// type Combinable = string | number
// type Numeric = number | boolean
//
// type  Universal = Combinable & Numeric
//
// function  add(a:Combinable,b:Combinable){
//     if (typeof  a === 'string' || typeof  b === 'string')
//     {
//         return a.toString() + b.toString();
//     }
//     return a+b;
//
//
//
//
//
//
// }
// type UnknownEmployee = Employee & Admin
//
// function printEmployeeInformation(emp:UnknownEmployee){
//     console.log('Name: ' + emp.name)
//     if('privileges' in emp)
//         console.log('Privileges: ' + emp.privileges)
//     if('startDate' in emp)
//         console.log('Privileges: ' + emp.startDate)
// }
//
// printEmployeeInformation(e1)
//
// class  Car {
//     drive(){
//         console.log('Drving...')
//     }
// }
//
// class  Truck {
//     drive(){
//         console.log('Drving...')
//     }
//     loadCargo(amount:number){
//         console.log('Load Cargo: ' + amount)
//     }
// }
//
// type Vehicle = Car | Truck;
//
// const v1 = new Car();
// const v2 = new Truck();
//
// function useVehicle(vehicle:Vehicle){
//     vehicle.drive()
//     // if('loadCargo' in vehicle)
//         if(vehicle instanceof Truck)
//         vehicle.loadCargo(1000)
// }
//
// useVehicle(v1)
// useVehicle(v2)
//
//
// interface Bird{
//     type:'bird'
//     flyingSpeed:number
// }
//
// interface Horse{
//     type:'horse'
//     runningSpeed:number
// }
//
// type  Animal = Bird | Horse
//
// function moveAnimal(animal:Animal) {
//     // if(animal instanceof Bird) // can't use with interface
//     // if("flyingSpeed" in animal)
//     let speed: number
//     switch (animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed
//             break
//         case 'horse':
//             speed = animal.runningSpeed
//     }
//     console.log("Moving at speed: " + speed)
// }
// moveAnimal({type:'horse',runningSpeed:10})
//
// // const paragraph = document.getElementById('message-output')
// // const userInput = <HTMLInputElement> document.getElementById('user-input')! // ! sure that have <> casting type
// // const userInput = document.getElementById('user-input')! as HTMLInputElement // ! sure that is not null <> casting type
//
// const userInput = document.getElementById('user-input') // ! sure that is not null <> casting type
//
// if(userInput){ // not sure
//     (userInput as HTMLInputElement).value = "Hi there!" //casting type at the point
// }
//
//
// // userInput.value = "hi"
// //index properties
// interface  ErrorContainer{
//     [prop: string]:string // don't know about properties name
// }
//
// const errorBag:ErrorContainer = {
//     email:"Not a valid email" ,// string => number is ok number => string is not work
//     username: 'Must start with a valid email'
//
// }

// function overload
type Combinable = string | number
type Numeric = number | boolean

type  Universal = Combinable & Numeric

function add(a:number,b:number):number
function add(a:string,b:string):string
function add(a:number,b:string):string
function add(a:string,b:number):string
function  add(a:Combinable,b:Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add("Wichira","Matrakompa");
result.split('')


// optional channing
const fetchedUserData = {
    id:'u1',
    name:'Max',
    job:{
        title:'CEO',description:'My own company'
    }
}
console.log(fetchedUserData?.job?.title); // may be can't controller type

const userInput = null;

const storedData =  userInput ?? "DEFAULT"

console.log(storedData)