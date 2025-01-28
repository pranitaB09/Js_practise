// FUNCTIONS : 

function sayMyName(){
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}

//sayMyName => reference(nothing displayed in o/p as it tells only that the function resides their.)
//sayMyName() => execution.

//sayMyName()

// function addTwoNumbers(number1,number2){
// console.log(number1 + number2 );
// }

//addTwoNumbers() //NaN
//addTwoNumbers(3, 4);//7
//addTwoNumbers(3,"4")//34
//addTwoNumbers(3,"a")//3a
//addTwoNumbers(3,null)//3

/*****PARAMETERS:sunction definition , ARGUMRNTS:function calling*******/

// const result = addTwoNumbers(3,5)
// console.log("Result: ",result);//Result:  undefined.because function will not return any value.

function addTwoNumbers(number1,number2){
    // let result = number1 + number2;
    // return result
    return  number1 + number2 
    console.log("hitesh");//never executed
    
    }
    
const result = addTwoNumbers(3,5)
// console.log("Result: ",result);//Result:  8

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))//hitesh just logged in
//console.log(loginUserMessage(""))//just logged in(empty string then just..)
//console.log(loginUserMessage())//undefined just logged in(when not passed anything undefined because it is not defined)

// console.log(loginUserMessage());
/// Please enter a username
///undefined just logged in

// case 2nd : to return the function control console.log(loginUserMessage());
/// Please enter a username
///undefined

//***1) In js empty string is considered as  a false string. 
//   2) Like that undefined is also considered as false value.****/



// function loginUserMessage(username){
//     if(!undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage())

//O/p:Please enter a username
//    undefined

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage())//op: sam just logged in(default parameter)
//console.log(loginUserMessage("hitesh"))//op:hitesh just logged in 

/*************Shopping Cart**************/

function calculateCartPrice(num1){
    return num1
}

//console.log(calculateCartPrice(2)) //2
//console.log(calculateCartPrice(200,400,500)) // only 200 added (rest and spread operator is used ...)

function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200,400,500,5000)) //[ 200, 400, 500, 5000 ] It collects all data and form a array.


function calculateCartPrice(val1,val2,...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,500,5000))//[ 500, 5000 ] firstvalue go into val1 second will go in val2 and remaining will in num1 array

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// 1st way: handleObject(user) // Username is hitesh and price is 199

//******(Typescript) Typesafty: You have to check that the it is prices present then object is present or not ****/
// 2nd way:
//handleObject({
//   username:"sam",
//    price: 399
//}) 

//Lets pass an array
const myArray = [200,700,100,600]

function returnSecondValue(getarray){
    return getarray[1]
}

console.log(returnSecondValue(myArray));//700

//Direct passed:
console.log(returnSecondValue([200,400,500,1000]));


