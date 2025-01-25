//array:js arrays are resizable means once created you can add elements in it.
//can contain mix datatypes

//1st way to declare an array
const myArr = [0,1,2,3,4,5,"hitesh"] //array can be with different type of datatypes like number,string,boolean,object,array.
const myHeros = ["shaktiman","naagraj"]
//console.log(myArr[6]);//1.//cant write like["one"]

//when copy operation is performed on an array then shallow copy and deep copy are formed.
//IQ:Shallow copies and deep  copies.
//shallow copy:A shallow copy is an object is a copy whose properties share the same references as those of the source object from which the copy was made.
//Deep copy:dont share same reference.(not change in original array)

//2nd way to declare an array:
const myArr2 = new Array(1,2,3,4)
//console.log(myArr2[0]);

//Array Methods

//myArr.push(6) //push() simply add values in an array
//myArr.push(7) 
//console.log(myArr);//[ 0, 1, 2, 3, 4, 5, 'hitesh', 6 ,7]
//myArr.pop() //simply removes the last element from an array
//console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 'hitesh', 6 ]

myArr.unshift(9)//unshift add the element at first position in an array
//console.log(myArr);//[ 9, 0, 1, 2, 3, 4, 5, 'hitesh' ]

myArr.shift()//shift removes the first element from your array and here first element is 9
//console.log(myArr);
//console.log(myArr.includes(9));//Boolean value returned here false.
//console.log(myArr.indexOf(3));//returns the index of 3 from array
//console.log(myArr.indexOf(81));//if elements is not present then returns the -1.

const newArr = myArr.join()//join() adds all the elements of an array into a string.

//console.log(myArr);//[ 0, 1, 2, 3, 4, 5, 'hitesh' ]
//console.log(newArr);//0,1,2,3,4,5,hitesh
//console.log(typeof newArr);

//Slice splice

//console.log("A ", myArr);//A  [ 0, 1, 2, 3, 4, 5, 'hitesh' ]

const myn1 = myArr.slice(1,3);//include 1,2 but not three.it excludes range not changes original array
//console.log(myn1);//[ 1, 2 ]
//console.log("B ",myArr);// B  [ 0, 1, 2, 3, 4, 5, 'hitesh' ]

const myn2 = myArr.splice(1,3);//splice includes range and changes original array
//console.log(myn2);//[ 1, 2, 3 ]
//console.log("C ",myArr);//C  [ 0, 4, 5, 'hitesh' ]



















