//object constructor

//1st way => const tinderUser = new Object() ///****Singleton object */

//2nd way => const tinderUser = {} ///***Non-singleton object */

//Note:Both way are used to declare object,same value obtained after running them.No intertnal difference.Only difference is that using first
//1st way singleton object is created and from 2nd way non- singleton is created.

const tinderUser = {} 
//console.log(tinderUser);//{}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = "false"

//console.log(tinderUser);//{ id: '123abc', name: 'Sammy', isLoggedIn: 'false' }

const regularUser = {
    email: "some@gamil.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

//console.log(regularUser.fullname);//{ userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }
//console.log(regularUser.fullname.userfullname);//{ firstname: 'hitesh', lastname: 'choudhary' }
//console.log(regularUser.fullname.userfullname.firstname);//hitesh
//Optional chaining if the value is not found.

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//1] const obj3 = {obj1, obj2}//creates object into object.//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//console.log(obj3);

//2] const obj3 = Object.assign(obj1,obj2)
//console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//const obj3 = Object.assign({},obj1,obj2)//{} is a optional parameter.but giving it is a good practise.all the values are combined and only one result is returned is said.

//...spread operator
// 3] const obj3 ={...obj1, ...obj2} 
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

