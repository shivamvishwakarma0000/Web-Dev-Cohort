//Write a function that takes a number as input and determines if it is a multiple of 3

function is_multiple_of_three(num) {
    if(num%3===0){
        return true;
    }
    else{
        return false;
    }

}
let result=is_multiple_of_three(32)
console.log(result)

//output

//false