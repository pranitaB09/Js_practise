//Objects:can be defined in two ways i)like a literal ii)like a constructor.
//Singleton:constructor se banega to singleton banega lekin literal se banega toh singleton nahi banega.
//singleton means koi bhi constuctor se banega toh singleton banega aur yeh apni tarah ka 1 hi obj hai.lekin dusare tarak se banaoge toh multiple ban jate hai instances.

//using constructor
//object.create //forms singleton

//object literals
//object values can be accessed by using the key and using the value index.But in array only by index

const mySym = Symbol("key1") // Defining symbol.

const JsUser = {
    name:"Hitesh",
    "full name":"Hitesh Choudhary",
    //wrong way=> mySym:"mykey1",//here declared in object but it is not a symbol
    [mySym]:"mykey1",
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays:["Monday","Saturday"]
}

//console.log(JsUser.email);//normal method to access the object property 
//console.log(JsUser["email"]);//special/another mwthod to access

//console.log(JsUser."full name");//Not allowed to access using ".operator" here.
//console.log(JsUser["full name"]);//You have to use this method only

//For the Wrong declaration=>  console.log(JsUser.mySym);//mykey1 is printed.But datatype is not symbol it is string.
// console.log(typeof JsUser.mySym);//string

//console.log(JsUser[mySym]);
// ?????console.log(typeof JsUser["mySym"]);??????????????????

JsUser.email = "hitesh@chatgpt.com"//changing the value in an obj.
//Object.freeze(JsUser)//Freeze/lock
JsUser.email = "hitesh@microsoft.com"//not propogates the value as we freezed the object.
//console.log(JsUser);
 /**
{
  name: 'Hitesh',
  'full name': 'Hitesh Choudhary',
  age: 18,
  location: 'Jaipur',
  email: 'hitesh@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}
 */

// FUNCTION =>
JsUser.greeting = function(){
    console.log("Hello Js user");
}

//console.log(JsUser.greeting); // [Function (anonymous)].Function returned back.Function ka reference aaya hai.

console.log(JsUser.greeting());//Hello Js user
//undefined

JsUser.greetingTwo = function(){
  console.log(`Hello Js user,${this.name}`);//if you want to reference same object then you can use this 
}

console.log(JsUser.greetingTwo());



