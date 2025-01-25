//Objects:can be defined in two ways i)like a literal ii)like a constructor.
//Singleton:constructor se banega to singleton banega lekin literal se banega toh singleton nahi banega.
//singleton means koi bhi constuctor se banega toh singleton banega aur yeh apni tarah ka 1 hi obj hai.lekin dusare tarak se banaoge toh multiple ban jate hai instances.

//using constructor
//object.create //forms singleton

//object literals
//object values can be accessed by using the key and using the value index.But in array only by index

const JsUser = {
    name:"Hitesh",
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email);
