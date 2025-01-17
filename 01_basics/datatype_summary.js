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
console.log(id === anotherId);//here is false and it a proof.

//Bigint
const bigNumber = 3455363846254729665789n //add n to last to represent bigint.


// 2) Non-primitive or reference datatype:
//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] //Array - referense type 

//values inside the curly braces are object,datatypes may be string,number,boolean,function,another array also.
let myObj= {
    name:"hitesh",
    age:22,
}




