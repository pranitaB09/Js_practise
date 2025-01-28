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
    let result = number1 + number2;
    return result
    console.log("hitesh");//never executed
    
    }
    
const result = addTwoNumbers(3,5)
console.log("Result: ",result);//Result:  8