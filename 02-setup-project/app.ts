// Unknown type

// let inputUser:unknown
let userName:string

// userName = inputUser //error
if(typeof userName === 'string'){
    // userName = inputUser //work
}


let inputUser:any
inputUser = 5
inputUser = "kl"
 userName = inputUser //work

// Never type use when throw cash break
function generateError(message:string,code:number):never{
    throw {message,code};
}

console.log(generateError("error",555))
