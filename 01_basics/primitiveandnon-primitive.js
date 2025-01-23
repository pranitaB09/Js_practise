// /**
//  * N-Null
//  * N-Number
//  * S-Symbol
//  * S-String
//  * B-Boolean
//  * B-Bigint
//  * U-Undefined
//  */
// Datatype-means what type of data is strored in a variable like number,string
// Object:key-value pairs.key may be simple string,can be a number and value is any kind od datatype
// There are 7 primitive datatype and non primitive datatype is object 

let a = null;
let b = 345;
let c = true; //can also be false.
let d = BigInt("567") + BigInt("3")
let e = "Harry"
let f = Symbol("I am a nice symbol")
let g 
//console.log(a,b,c,d,e,f,g);
//console.log(typeof c);

//Non-Primitive datatype - Objects in js
const item = {
    "Harry":true,
    "Shubh": false,
    "Lovish": 67,
    "Rohan": undefined
}
console.log(item["Harry"]);//true
console.log(item["dsef"]);//undefined

//Q.1.create a variable of type string and try to add a number to it
let str1 = "hello"
let num = 33
console.log(str1 + num);
console.log(typeof num);

//Q.2.Find the typeof last string
console.log(typeof str1+num);










