//Q6
//Write a function that takes a string as input and determines if it is longer than 5
//characters

function isLongerThanFive(s) {
    let size=s.length
    if(size>5){
        return "String is longer than 5 "
    }
    else{
        return "String is not longer than 5 "
    }

}
let result=isLongerThanFive("shivam")
console.log(result)  

//output

//String is longer than 5 
