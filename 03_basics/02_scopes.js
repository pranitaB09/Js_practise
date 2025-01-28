//**global scope values are available in scope.But values in scope should not go out of scope****/

//var c = 300

let a = 300;
if(true){
    let a = 10
    const b = 20
    //var c = 30
    console.log("INNER: ",a); 
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

//windows browser ke aander jate hai toh  inspect krte hai to yaha pe console pe jate hai toh yaha ka scope aur code environmentmain node ke through example
// ko run krte hai toh waha pe global scope alag hai.

//console.log(a);//a is not defined.Before a is not present in global scope
//console.log(b);//b is not defined
//console.log(c);

console.log(a);//300
