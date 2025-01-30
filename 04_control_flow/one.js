//if => if condition becomes true then the block of code is exexcuted and if it is false then the block will not executed.

// const isUserLoggedIn = true

// if (isUserLoggedIn){

// }

// < , > , <= , >= , == , != , ===(checks the datatype)

// 2 and "2" are not equal.2 is number "2" is datatype.so to check type(datatype) strict checking use === operator.
// if(2 == "2"){
//     console.log("executed")
// }

// if(2 !== "2"){
//     console.log("executed")//executed
// }
// else{
//     console.log("not equal");
    
// }

// const temperature = 41

// if(temperature < 50){
//     console.log("Less than 50")
// }
// console.log("Greater than 50")

// const temperature = 40
// if(temperature === 45){
//     console.log("temperature is 45");

// }else{
//     console.log("temp is other than 45");
// }
// console.log("Execute");

// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);  
// }
// console.log(`User power: ${power}`);//ReferenceError: power is not defined.Error occurs due to the scope.

//shorthand : scope is implicitly defined.
const balance = 1000

// You can write more than one print statement here but it is not a good pracitise.
//if (balance > 500) console.log("test"),console.log("test2");

// //Nesting => checking 2-3 conditions
// if(balance < 500){
//     console.log("less than");
// } else if (balance < 750){
//     console.log("less than 750")
// }else if (balance < 900){
//     console.log(balance < 900);
    
// } else {
//     console.log("less than 1200")
// }

// const userLoggedIn = true 
// const debitCard = true
// const loggedInFromGoogle =false
// const loggedInFromEmail = false
// const guestUser = true

// if (userLoggedIn && debitCard && 2==3){
//     console.log("Allow to buy courses");
    
// }

// if(loggedInFromGoogle || loggedInFromEmail || guestUser){
//     console.log("User logged in");
    
// }
