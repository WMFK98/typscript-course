// function  Logger(constructor:Function){
//         console.log('loggin...')
//         console.log(constructor)
// }
//
// @Logger
// class  Person {
//         name = 'Max';
//
//         constructor() {
//                 console.log('create person object...');
//         }
// }


// const pers = new Person();
// const pers2 = new Person();
// console.log(pers)
//
// function  Logger(logString:string){
//         console.log("Logger Factory")
//         return function (constructor:Function){
//                 console.log(logString)
//                 console.log(constructor)
//         }
//
// }
//
// function  WithTemplate(template:string,hookId:string){ // auto add inner html
//         console.log('rendering hookId:',hookId)
//         return function<T extends {new(...args:any[]): {name:string}}>(originalConstructor:T){
//                 return class extends originalConstructor {
//                         constructor(..._:any[]) {
//                                 super();
//                                 const hookEl = document.getElementById(hookId)
//                                 // const p = new originalConstructor() // already in class
//                                 if(hookEl){
//                                         hookEl.innerHTML = template
//                                         hookEl.querySelector('h1')!.textContent = this.name
//
//                                 }
//                         }
//                 }
//         }
// }
//
// @WithTemplate('<h1>hi</h1>','app') // auto add inner html when
// @Logger("LOGGING - PERSON")  //when execute function is run bottom - up
// class  Person {
//         name = 'Max';
//
//         constructor() {
//                 console.log('create person object...');
//         }
// }
//
// function Log(target:any,propertyName:string | Symbol){
//         console.log('Property Decorator')
//         console.log(target,propertyName)
// }
//
// function Log2(target:any,name:string,descriptor:PropertyDescriptor){
//         console.log('Accessor decorator')
//         console.log(target)
//         console.log(name) // name of function
//         console.log(descriptor)
//
// }
//
// function Log3(target:any,name:string| Symbol,descriptor:PropertyDescriptor){
//         console.log('Method decorator')
//         console.log(target)
//         console.log(name) // name of function
//         console.log(descriptor)
//
// }
//
// function Log4(target:any,name:string| Symbol,position:number){
//         console.log('Parameter decorator')
//         console.log(target)
//         console.log(name) // name of function
//         console.log(position)
//
// }
//
// class Product{
//         @Log
//         title:string;
//         _price:number;
//
//         set price(value:number){
//         if(value > 0){
//         this.price = value;
//         }
//         throw  new Error('Invalid price = should be positive');
//         }
//
//         constructor(t:string,p:number) {
//                 this.title = t;
//                 this._price = p;
//         }
//
//         @Log3
//         getPriceWithTax(@Log4 tax:number){
//                 return this.price * (1+tax)
//         }
// }

function Autobind(_:any,_2:string,descriptor:PropertyDescriptor){
        const originalMethod = descriptor.value
        const adjDescriptor: PropertyDescriptor={
                configurable:true,
                enumerable:false,
                get() {
                        const boundFn = originalMethod.bind(this)

                        return boundFn
                }
        }

        return adjDescriptor
}

class Printer{
        message = 'This works!'
@Autobind
        showMessage():void {
                console.log(this.message)
        }

}

const p = new Printer();
const button = document.querySelector('button')!;
button.addEventListener('click',p.showMessage);

interface  ValidatorConfig{
      [property:string]:{
              [validatableProp:string]:string[]
      }
}

const registeredValidators:ValidatorConfig = {}

function Required(target: any, propName: string) {
        registeredValidators[target.constructor.name] = {
                ...registeredValidators[target.constructor.name],
                [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
        };
}

function PositiveNumber(target: any, propName: string) {
        registeredValidators[target.constructor.name] = {
                ...registeredValidators[target.constructor.name],
                [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
        };
}

function validate(obj:any){
        console.log(registeredValidators)
        const objValidatorConfig = registeredValidators[obj.constructor.name];
        if(!objValidatorConfig){
                return true;
        }
        let isValid = true;
        for(const prop in objValidatorConfig){
                for(const validator of objValidatorConfig[prop]){
                        switch (validator) {
                                case 'required':
                                        isValid = isValid && !!obj[prop];
                                        break;
                                case 'positive':
                                        isValid = isValid &&  obj[prop] > 0;
                                        break
                        }
                }
        }
        return isValid;
}


class Course{
        @Required
        title:string;
        @PositiveNumber
        @Required
        price:number;
        constructor(t:string, p:number) {
                this.title = t;
                this.price = p;
        }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const inputCourse = document.getElementById('nameInput')! as HTMLInputElement;
        const inputPrice= document.getElementById('priceInput')! as HTMLInputElement;
        const newCourse = new Course(inputCourse.value,+inputPrice.value);
        if(!validate(newCourse)){
                alert("Invalid input, please try again")
                return;
        }
        console.log(newCourse);
})



//only execute when class is apply not when use not is event listener