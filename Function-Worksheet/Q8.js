//Write a function that takes a string as input and determines if it contains the word
//"hello".

function containsWord(){
    var str = "hello";
    if(str.includes("hello")){
        return true;
    }
    else{
        return false;
    }
}
let result=containsWord("hello shivam")
console.log(result) 

//output

//true