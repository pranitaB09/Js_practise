//THIS keyword: current context ko refer karne ke liye   this  keyword use krte hai.

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage:function(){
       // console.log(`${this.username}, welcome to our website`);
        // console.log(this);
        
        
    }

}

user.welcomeMessage()//hitesh, welcome to our website
user.username="sam"
user.welcomeMessage()//sam, welcome to our website

//console.log(this);//{}.Empty object in node
// NOTE => Global object in browser is window object.

// //this is working in object not working in function
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);//undefined
// }
// chai()

// 
// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }

//Arrow function
const chai = () => {
        let username = "hitesh"
        //console.log(this.username);//undefined
        //console.log(this);
}

//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 
// }

// console.log(addTwo(3,4))//7

/**** IMPLICIT RETURN****/
//const addTwo = (num1, num2) =>  num1 + num2 

/////     OR      ///////

//const addTwo = (num1, num2) =>  (num1 + num2) //no need to write return keyword,when parenthesis used.But for curly braces return should be used(explicitly)

//console.log(addTwo(10,4))//14

//const addTwo = (num1, num2) =>  {username: "hitesh"}
//console.log(addTwo(10,4)) //undefined.Because this is not the way through which object is called.to return the object you have to wrap it in parenthesis.
    
const addTwo = (num1, num2) =>  ({username: "hitesh"})
console.log(addTwo(10,4)) // { username: 'hitesh' }

