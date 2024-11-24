// const names:Array<string> = ['Max','Manuel']
//
// const promise:Promise<string> = new Promise((resolve) => {
//     setTimeout(()=>{
//         resolve("this is done!")
//     },2000)
// })
//
// promise.then(data=>{
//     data.split(" ")
// });

// @ts-ignore
function  merge<T extends object,U extends object>(objA:T ,objB:U ){
        return Object.assign(objA,objB);

}

const mergeObj = merge({name:'MAX'},{age:30})
console.log(mergeObj)

interface  Lengthy {
        length:number;
}

function countAndDescribe<T extends Lengthy>(element:T):[T,string]{
        let descriptionText = 'Got no value'
        if(element.length === 1){
                descriptionText = 'Got 1 element.'
        }else if (element.length > 1){
                descriptionText = 'Got '+element.length+' element.'
        }
        return [element,descriptionText]
}

console.log(countAndDescribe("hi"))
console.log(countAndDescribe(['hi','hello']))

function extractAndConvert<T extends object,U extends keyof T>(obj:T,key:U){ //check key
        return 'Value: '+obj[key];
}

extractAndConvert({name:'Max'},'name');

class DataStorage<T extends string |number | boolean>{
        private  data:T[] = []

        addItem(item:T){
                this.data.push(item);
        }

        removeItem(item:T){
                if(this.data.indexOf(item) === -1) return;
                this.data.splice(this.data.indexOf(item),1); //work good only in primitive type
        }

        getItems(){
                return [...this.data];
        }
}

const numberStorage = new DataStorage<number>();

interface  CourseGoal{
        title:string;
        description:string;
        completeUntil:Date;
}

function createCourseGoal(title:string, description:string):CourseGoal{ //make optional type
        let courseGoal:Partial<CourseGoal> = {};
        courseGoal.title = title;
        courseGoal.description = description;
        return courseGoal as CourseGoal;

}
console.log(createCourseGoal('fluke',"hi"))

const names:Readonly<string[]> = ['Max','Anna'] // not have edit function like pop, push
