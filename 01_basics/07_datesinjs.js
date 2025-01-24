//Dates

let myDate = new Date()
// console.log(myDate);//not in readable format.//2025-01-24T13:47:19.8727

// console.log(myDate.toString());//somewhat in readable form after converting it into string.// Fri Jan 24 2025 13:47:19 GMT+0000

// console.log(myDate.toLocaleString()); // 1/24/2025,1:47:19 PM

// console.log(myDate.toDateString());// fri Jan 24 2025

// console.log(myDate.toISOString());//2025-01-24T13:50:53.420Z

// console.log(myDate.toJSON());//2025-01-24T13:51:55.318Z

// console.log(myDate.toLocaleDateString());//1/24/2025

// console.log(myDate.toLocaleTimeString());//1:53:40 PM

// console.log(typeof myDate); // object

//you have to declare a specific date.
let myCreatedDate = new Date();
//console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2025,11,9);//year 2025, 11 for dec,9 is date .Month starts from 0.
//console.log(myCreatedDate1.toDateString());

let myCreatedDate2 = new Date(2025,11,9,6,7);//6hr,7min is time.6:07:00 AM
//console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2025-01-25");//YY-MM-DD format
//console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date("01-13-2025");//MM-DD-YY format.
//console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);// Time from 1st jan 1970 to till

//console.log(myTimeStamp);
//console.log(myCreatedDate1.getTime());

//for comparision use miliseconds. 
//console.log(Date.now());
//console.log(Date.now()/1000);//To see in seconds but decimals are their so use math.floor
//console.log(Math.floor(Date.now()/1000));//in seconds

let newDate = new Date()
console.log(newDate.getMonth()+ 1);// 0 means jan.now the month is jan so.+ 1 for user convinience
console.log(newDate.getDay());// 5.means the day is friday

//string interpolation
//`${newDate.getDay()} and the time`

//In this way you can customise the property accordingly.
newDate.toLocaleString('dafault',{
    weekday:"long",
    
})



