//Check whether a given string is a palindrome or not.

let palin=("madam")
let ans=(palin.split('').reverse().join(''))
if(palin==ans){
    console.log("palindrome")
}
else{
    console.log("not palindrome")
}


//-----------output---------
//palindrome