//How data is put in memory and accessed it,on that basis the datatype are classified into 2 types.
// 1)Primitive datatype:all primitive datatype are call by value(changes are in copy)
// 7 types: i)String ii)Number iii)Boolean iV)null v)undefined vi)Symbol vii)BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;//undefined 

//here symbol makes every one unique.
const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId);//here is false and it a proof.

//Bigint
const bigNumber = 345536384625472787878789665789n //add n to last to represent bigint.


// 2) Non-primitive or reference datatype:
//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] //Array - referense type 

//values inside the curly braces are object,datatypes may be string,number,boolean,function,another array also.
let myObj= {
    name:"hitesh",
    age:22,
}

//function 
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof anotherId);
console.log(typeof id);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);












//typeof datatypes:
// 1)Null => object
// 2)undefined => undefined
// 3)Boolean => boolean
// 4) Number => number
// 5) String => string
// 6) function => function 
// 7) class => class
//*** Actually the datatype of all nonpremetive datatype are function but for function it is object_function.
// function objects:
//





