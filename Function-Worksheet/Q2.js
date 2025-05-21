//Q2
//Write a function that takes two numbers as input and determines which one is
//greater.

function greaterNumber(num1 , num2){
    if(num1>num2){
        return num1
    }
    else{
        return num2
    }
}
let result=greaterNumber(5,6)
console.log(result)

// output
//6