//**global scope values are available in scope.But values in scope should not go out of scope****/

//var c = 300

let a = 300;
if(true){
    let a = 10
    const b = 20
    //var c = 30
    //console.log("INNER: ",a); 
}


//windows browser ke aander jate hai toh  inspect krte hai to yaha pe console pe jate hai toh yaha ka scope aur code environmentmain node ke through example
// ko run krte hai toh waha pe global scope alag hai.

//console.log(a);//a is not defined.Before a is not present in global scope
//console.log(b);//b is not defined
//console.log(c);

//console.log(a);//300

//****Nested function:child function can access the variable of parent function.****/
function one(){
    const username = "hitesh"
    
    function two(){
        const website = "youtube"
        //console.log(username);   
    }
    //console.log(website);//ReferenceError: website is not defined

    two()//hitesh

}
one()
// o/p: hitesh

if (true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);//ReferenceError: website is not defined 
}
//console.log(username);//ReferenceError: username is not defined


//op: hitesh youtube

//+++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Technique to make Functions

console.log(addone(5))//called before declaration but no error in this method

function addone(num){
    return num + 1
}


//2nd tachnique to declare a function.
//Also called expression(addTwo) or function.

console.log(addTwo(5)) //ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2
}

//addTwo(5)