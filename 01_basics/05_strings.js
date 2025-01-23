const name = "hitesh"
const repoCount = 50

//console.log(name + repoCount + "Value");//Not an appropriate method

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//Anothe wat to create string 
const gameName = new String('hitesh-hc')

//console.log(gameName[2]);
//console.log(gameName.__proto__);//{} contains methods
//console.log(gameName.length);//8
//console.log(gameName.toUpperCase());//HITESHHC.But original value is not changed.
//console.log(gameName.charAt(4)); // character at this position.and if index is greater means not available then empty space is shown  
//console.log(gameName.indexOf('s')); //returns position of first occurences in string.and if character not present in string then -1 will retuned.

const newString = gameName.substring(0, 4);// 0 is start position and 4 is end number.4th is excluded.
//console.log(newString);

const anotherString = gameName.slice(-8 , 4)//here we can give he negative values also.
//console.log(anotherString);

const newStringOne = "    hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());//to remove starting and ending spaces from string















