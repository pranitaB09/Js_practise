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
 //3]
const obj3 ={...obj1, ...obj2} 
//console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"g@gmail.com"
    },
    {
        id:3,
        email:"m@gmail.com"
    },
]
console.log(users[0].email);//h@gmail.com

console.log(tinderUser);
console.log(Object.keys(tinderUser));//All keys of tinderUser.datatype is array.//o/p:[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));//[ '123abc', 'Sammy', 'false' ]
console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', 'false' ] ].every key-value pair is put inside a array

//sometimes you have to ask that this property in the object
console.log(tinderUser.hasOwnProperty("isLoggedIn"));//true 
console.log(tinderUser.hasOwnProperty("isLogged"));//false 

//Destructuring of object
const course   = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor.//way to access value

//const {courseInstructor} = course
//1st => console.log(courseInstructor);// hitesh

//2nd =>  const {courseInstructor:instructor} = course  //****object destructure******/
console.log(instructor); // hitesh

//code used in React => destructuring of an object.
/**-old method:
 *  const navbar = (props.company) => {

 }
navbar(company = "hitesh")*/

/**-using destructuring:
 * const navbar = ({company}) => {

 }
navbar(company = "hitesh")
 */
 
// API : Menu card is like api documentation.
//aapke pas kuch values aati hai backend se,un valuesko aap kaise likhte hai.pehle values aati thi xml ke structure mai aur woh bahot complex hota tha.
//right now values com in JSON format.

//***api in JSON-Js object notation ****/
// {
//     "name":"hitesh",
//     "coursename":"is in hindi",
//     "price":"free"
// }

//*** another way api is in array format ***/
[
    {},
    {},
    {}
]