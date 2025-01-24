const score = 400
//console.log(score);


const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(1));//precision value after decimal

const otherNumber = 1123.8966
//console.log(otherNumber.toPrecision(3));//returns 1.12e+3
//console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
//console.log(hundreds.toLocaleString());//by default US standard 1,000,000
//console.log(hundreds.toLocaleString('en-IN'));//generally in indian standard 10,00,000

//********************Maths**************************/

//console.log(Math);//itself a object having properties
//console.log(Math.abs(-4));//means -sign is ignoredor converted in + (4)
//console.log(Math.round(4.4));//round off 4.8=5 if greater than 5 then choose bigger no.
//console.log(Math.ceil(4.2));//take upper value
//console.log(Math.floor(4.9));//take lower value
//sqrt=no*no

//console.log(Math.min(4,3,6,8));//3
//console.log(Math.max(4,3,6,8));//8

//console.log(Math.random()); // always between 0 to 1 means 0.1, 0.4, 0.5 like this
//console.log((Math.random() * 10) + 1); // multiplied with 10 so that one place is moved.But if 0.01 then their is chance of 0 to display so to avoid it add 1 in it. 
//console.log(Math.floor(Math.random() * 10) + 1);// math.floor to wrap the value and show the floor value.

//sometimes you have to show the min and max values
const min = 10
const max = 20
/*************************************************/
console.log(Math.floor(Math.random()* (max - min + 1 )) + min )







