// Immediately Invoked Function Expression (IIFE)
// global scope ke pollution se problem hoti hai kai baar toh global scope ki joh bhi variables hai aur declarations hai uske pollution ko hatane ke liye hum kai baar IIFE ka use krte hai..
//1]dont want the pollution from global.we have to make seperate scope of our own.
//2]Function should execute immediately

// function chai(){
//     console.log("DB connected");
// }

// chai()

// first() is for function definition and second() is for function execution.
(function chai(){
    // named IIFE
    console.log(`DB connected`);
})(); // If ; is not given then error will arise.

//This arrow function also works
( () => {
    //simple IIFE
    console.log(`DB connected Two`);
    
}) ();

// OR : In this way also
// ( function aurcode ()  {
//     console.log("DB connected Two");
    
// }) ()

//IIFE takes parameter also
( (name) => {
    console.log(`DB connected Two ${name}`);
    
}) ("hitesh");
