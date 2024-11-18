function add(n1: number,n2: number):number {
    return n1 + n2
}
function printResult(result:string) {
    console.log(result)
}

//function type
// let combineValue:Function= add;
let combineValue:(a:number,b:number) => number = add;

function callback(a:number,b:number,cb:(result) => void) {
    cb(a+b)
}

//callback
callback(5,7,(result)=>{
    console.log(result)
})