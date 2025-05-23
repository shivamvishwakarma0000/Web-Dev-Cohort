//
//Syntax
// (function(){
//     //code
// })()
//immediate invoke function expression


// (function(){
//     console.log("Hello World");
// })()


//arroe function IIFE

// (()=>{
//     console.log("Hello World");
// })()

const square =(function(x){
    return x*x
})(20)
console.log(square) //400