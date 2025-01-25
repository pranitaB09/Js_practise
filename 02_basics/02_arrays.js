const marvel_heros = ["thor","Iron","spiderman"]
const dc_heros = ["superman","flash","batman"]

//***concat return new array but push add in existing array***/
//marvel_heros.push(dc_heros)
//console.log(marvel_heros);//[ 'thor', 'Iron', 'spiderman', [ 'superman', 'flash', 'batman' ] ] actually array came as a one element
//console.log(marvel_heros[3][1]);//flash

//you can use concat to join to arrays.It is a good way.
const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);//[ 'thor', 'Iron', 'spiderman', 'superman', 'flash', 'batman' ]

//SPREAD:also used 
const all_new_heros =[...marvel_heros,...dc_heros]//... seperates the elements of an array.also add more arrays than 2.
//console.log(all_new_heros);//[ 'thor', 'Iron', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

//spread out all the elements in array
const real_another_array = another_array.flat(Infinity)// you have to give depth.but if you dont know then give infinity.flat() combines all the subarray elements in a new single array.
console.log(real_another_array);/*[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]
*/

console.log(Array.isArray("Hitesh"));
