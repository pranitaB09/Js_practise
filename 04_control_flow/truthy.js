// Truthy and Falsy values.

//falsy values:
//false, 0 , -0 , BigInt 0n, "", null,undefined, NaN.

//Truthy values:
// "0" , 'false', " ", [] , {} , function(){}



const userEmail = []

if (userEmail){
    console.log("Got user Email");
} else{
    console.log("Dont have user email");
    
}

// //To check the array is empty
// if(userEmail.length === 0){
//     console.log("Array is empty");  
// }

//To check the object is empty or not?
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    
}

//false == 0  => true
//false == '' => true
//0 == ''     => true

//Nullish Coalescing operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10 //10
//val1 = undefined ?? 15 //15
//val1 = null ?? 10 ?? 15 //first value came is assignrd i.e here 10

console.log(val1);

//Terniary Operator

//condition ? true : false

const iceTeaPrice = 100

iceT

